import { useEffect, useRef } from 'react';

export default function DitherCursor() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000 });
  const trailRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    let animationId;
    const DITHER_SIZE = 6;
    const DECAY = 0.02;
    const MAX_TRAIL = 30;

    function resize() {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    }

    function drawDitherPattern(x, y, intensity) {
      const size = DITHER_SIZE;
      const patterns = [
        [0], // 0%
        [0,0,0,0,1], // 20%
        [1,0,0,1], // 50%
        [1,0,1,1], // 75%
        [1] // 100%
      ];
      
      const patternIndex = Math.min(Math.floor(intensity * patterns.length), patterns.length - 1);
      const pattern = patterns[patternIndex];
      
      ctx.fillStyle = `rgba(0, 255, 136, ${intensity * 0.8})`;
      
      for (let dy = 0; dy < size; dy += 2) {
        for (let dx = 0; dx < size; dx += 2) {
          const idx = ((dy / 2) * Math.ceil(size / 2) + (dx / 2)) % pattern.length;
          if (pattern[idx]) {
            ctx.fillRect(x + dx, y + dy, 2, 2);
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Fade trail
      trailRef.current = trailRef.current
        .map(p => ({ ...p, intensity: p.intensity - DECAY }))
        .filter(p => p.intensity > 0);

      // Draw trail
      trailRef.current.forEach(p => {
        const gridX = Math.floor(p.x / DITHER_SIZE) * DITHER_SIZE;
        const gridY = Math.floor(p.y / DITHER_SIZE) * DITHER_SIZE;
        drawDitherPattern(gridX, gridY, p.intensity);
      });

      // Add current mouse position
      if (mouseRef.current.x > 0) {
        trailRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          intensity: 1.0
        });
        
        // Limit trail length
        if (trailRef.current.length > MAX_TRAIL) {
          trailRef.current = trailRef.current.slice(-MAX_TRAIL);
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener('resize', resize);

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', (e) => {
      const rect = parent.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    });

    parent.addEventListener('mouseleave', () => {
      mouseRef.current = { x: -1000, y: -1000 };
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
}
