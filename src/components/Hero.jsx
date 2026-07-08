import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#000000',
      }}
    >
      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 标签 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              background: 'rgba(0, 255, 136, 0.1)',
              border: '1px solid rgba(0, 255, 136, 0.2)',
              borderRadius: '100px',
              marginBottom: '32px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#00ff88',
              }}
            />
            <span style={{ fontSize: '13px', color: '#00ff88', fontWeight: 500, letterSpacing: '0.05em' }}>
              4年+实战经验 · 线上运营总监
            </span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: 'clamp(48px, 8vw, 80px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '24px',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            刘柏君
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#00ff88',
              marginBottom: '20px',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            帮品牌做从0到1的线上运营落地
          </motion.p>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '560px',
              margin: '0 auto 48px',
              textShadow: '0 1px 10px rgba(0,0,0,0.5)',
            }}
          >
            操盘过国企O2O品牌从0到1的全链路运营，擅长活动策划落地、私域流量转化、视频内容获客
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
            style={{ flexWrap: 'wrap' }}
          >
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#000000',
                background: '#00ff88',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 255, 136, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              查看作品集
              <ArrowRight size={16} />
            </a>
            <a
              href="#about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#ffffff',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'rgba(0, 255, 136, 0.5)';
                e.target.style.color = '#00ff88';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                e.target.style.color = '#ffffff';
              }}
            >
              了解更多
            </a>
          </motion.div>
        </motion.div>

        {/* 滚动指示器 */}
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255,255,255,0.3)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span style={{ fontSize: '11px', letterSpacing: '0.15em' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
