import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Video,
  Palette,
  Presentation,
  Target,
  Zap,
  FileText,
  Lightbulb,
  X,
  ImageOff,
  Film,
} from 'lucide-react';

const BASE = import.meta.env.BASE_URL || '/';

// 作品集数据 — 按业务场景分类
// 文件路径说明：
//   - 存在=true 的文件已在仓库中（之前上传的）
//   - 存在=false 的文件需从 E 盘复制到 public/assets/portfolio/ 后推送
const portfolioCategories = [
  {
    id: 'visual',
    category: '平面视觉',
    categoryIcon: Palette,
    accent: '#00ff88',
    featured: true,
    client: '内蒙古城投 / 高压试验设备 / 多家企业',
    clientType: 'G端国企 / B端制造业',
    title: '平面视觉全案设计',
    role: '视觉设计师',
    results: [
      { label: '交付物料', value: '20+', unit: '完整方案' },
      { label: '覆盖场景', value: '品牌/展会/线上', unit: '多渠道' },
    ],
    desc: '独立完成品牌Logo、宣传三折页、产品手册（中英文版）、活动海报、参会证/嘉宾证等全套视觉物料。从信息架构到视觉落地，确保专业感与可读性兼顾。',
    tags: ['Logo设计', '三折页', '产品手册', '宣传海报', '活动物料'],
    gallery: [
      // Logo - 已存在于 portfolio/平面视觉/01_logo设计/
      { src: `${BASE}assets/portfolio/平面视觉/01_logo设计/未来世界标志.jpg`, type: 'image', caption: '未来世界儿童乐园 Logo', exists: true },
      // 三折页 - 已存在于 assets/02_三折页/
      { src: `${BASE}assets/02_三折页/三折页正面.png`, type: 'image', caption: '企业三折页（正面）', exists: true },
      { src: `${BASE}assets/02_三折页/三折页反面.png`, type: 'image', caption: '企业三折页（反面）', exists: true },
      // 海报 - 已存在于 assets/03_海报/
      { src: `${BASE}assets/03_海报/宣传海报_01.jpg`, type: 'image', caption: '宣传海报 1', exists: true },
      { src: `${BASE}assets/03_海报/宣传海报_02.jpg`, type: 'image', caption: '宣传海报 2', exists: true },
      // 活动物料 - 已存在于 assets/04_活动物料/
      { src: `${BASE}assets/04_活动物料/参会证.jpg`, type: 'image', caption: '参会证', exists: true },
      { src: `${BASE}assets/04_活动物料/嘉宾证.jpg`, type: 'image', caption: '嘉宾证', exists: true },
    ],
  },
  {
    id: 'video',
    category: '视频制作',
    categoryIcon: Video,
    accent: '#00ff88',
    featured: false,
    client: '中栋新能源 / 嗨缔客',
    clientType: 'B端企业',
    title: '企业宣传片与品牌视频制作',
    role: '视频剪辑师',
    results: [
      { label: '拍摄剪辑', value: '独立完成', unit: '企业级' },
      { label: '适用平台', value: '抖音/视频号/展会', unit: '多场景' },
    ],
    desc: '可独立完成企业宣传片全流程制作，从素材整理、剪辑节奏、画面调色到字幕包装。输出无字幕版本供多场景二次传播，满足品牌展示、展会播放、线上投放等需求。',
    tags: ['企业宣传片', '品牌视频', 'AE特效', '后期包装'],
    gallery: [
      // 视频 - 需从 E 盘复制（压缩后 < 100MB）
      { src: `${BASE}assets/portfolio/视频制作/01_企业宣传片/中栋新能源.mp4`, type: 'video', caption: '中栋新能源企业宣传片', exists: false },
      { src: `${BASE}assets/portfolio/视频制作/01_企业宣传片/嗨缔客宣传片.mp4`, type: 'video', caption: '嗨缔客品牌宣传片', exists: false },
      { src: `${BASE}assets/portfolio/视频制作/01_企业宣传片/税务局-青税之光.mp4`, type: 'video', caption: '税务局-青税之光宣传片', exists: false },
      { src: `${BASE}assets/portfolio/视频制作/02_特效片头/片头(2).mp4`, type: 'video', caption: 'AE特效片头', exists: false },
    ],
  },
  {
    id: 'strategy',
    category: '运营方案',
    categoryIcon: Lightbulb,
    accent: '#00ff88',
    featured: false,
    client: '装修工坊 / 巨鼎佳业',
    clientType: 'B端服务',
    title: '视频号引流私域运营方案',
    role: '运营策划',
    results: [
      { label: '带队完成', value: '可执行', unit: '运营方案' },
      { label: '覆盖环节', value: '获客→转化→复购', unit: '全链路' },
    ],
    desc: '输出《视频号引流私域》运营方案，拆解从内容选题、账号矩阵搭建、流量获取到私域沉淀的完整链路。针对装修行业场景，提供可落地的引流策略与执行节奏。',
    tags: ['私域运营', '视频号', '引流策略', 'XMind'],
    gallery: [
      // 运营方案 - 需从 E 盘复制
      { src: `${BASE}assets/portfolio/运营方案/png格式/视频号引流私域.png`, type: 'image', caption: '视频号引流私域方案', exists: false },
      { src: `${BASE}assets/portfolio/运营方案/png格式/装修工坊宣传运营.png`, type: 'image', caption: '装修工坊宣传运营方案', exists: false },
    ],
  },
  {
    id: 'ppt',
    category: '演示文档',
    categoryIcon: Presentation,
    accent: '#00ff88',
    featured: false,
    client: '多家企业客户',
    clientType: 'B端/B2B',
    title: '企业级商业PPT与方案文档',
    role: 'PPT设计师',
    results: [
      { label: '独立完成', value: '商业级', unit: '企业PPT' },
      { label: '类型覆盖', value: '招商/汇报/演讲', unit: '多场景' },
    ],
    desc: '独立完成多份企业级PPT：会员合作方案、加盟招商手册、行业分析报告、工长大会演讲稿等。擅长复杂信息的逻辑梳理与视觉呈现，让汇报有结构、有数据、有说服力。',
    tags: ['PPT设计', '商业汇报', '招商方案', '演讲稿'],
    gallery: [
      // PPT - 需从 E 盘复制（每个文件夹选前4张）
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/优选口袋/幻灯片1.PNG`, type: 'image', caption: '优选口袋', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/优选口袋/幻灯片11.PNG`, type: 'image', caption: '优选口袋', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/优选口袋/幻灯片13.PNG`, type: 'image', caption: '优选口袋', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/会员合作PPT/幻灯片10.PNG`, type: 'image', caption: '会员合作', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/会员合作PPT/幻灯片12.PNG`, type: 'image', caption: '会员合作', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/会员合作PPT/幻灯片14.PNG`, type: 'image', caption: '会员合作', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/嗨缔客加盟/幻灯片10.PNG`, type: 'image', caption: '嗨缔客加盟', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/嗨缔客加盟/幻灯片12.PNG`, type: 'image', caption: '嗨缔客加盟', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/嗨缔客加盟/幻灯片14.PNG`, type: 'image', caption: '嗨缔客加盟', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/北京巨鼎佳业（备份）/幻灯片1.PNG`, type: 'image', caption: '巨鼎佳业', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/北京巨鼎佳业（备份）/幻灯片10.PNG`, type: 'image', caption: '巨鼎佳业', exists: false },
      { src: `${BASE}assets/portfolio/演示文档/企业PPT/北京巨鼎佳业（备份）/幻灯片11.PNG`, type: 'image', caption: '巨鼎佳业', exists: false },
    ],
  },
  {
    id: 'operation',
    category: '核心案例',
    categoryIcon: Target,
    accent: '#00ff88',
    featured: false,
    client: '内蒙古城投 · 未来世界儿童乐园',
    clientType: 'G端国企',
    title: 'O2O品牌从0到1全链路运营',
    role: '线上运营总监',
    results: [
      { label: '曝光量提升', value: '100%', unit: '3个月内翻倍' },
      { label: '本地覆盖', value: '50%-70%', unit: '乌兰察布人口' },
      { label: '引流到店', value: '10000+', unit: '人次' },
      { label: '团队规模', value: '5人', unit: '线上运营团队' },
    ],
    desc: '为内蒙古城投旗下儿童乐园项目操盘全链路运营。从品牌Logo设计、线上账号搭建、抖音内容矩阵、达人资源整合，到线下活动线上引流，实现品牌冷启动到区域认知的完整闭环。',
    tags: ['O2O运营', '抖音获客', '达人资源整合', '活动策划', '团队管理'],
    gallery: [
      // 内蒙古城投 - 已存在于 portfolio/内蒙古城投/
      { src: `${BASE}assets/portfolio/内蒙古城投/DJI_0182.jpg`, type: 'image', caption: '项目航拍', exists: true },
      { src: `${BASE}assets/portfolio/内蒙古城投/DJI_0189.jpg`, type: 'image', caption: '场地全景', exists: true },
      { src: `${BASE}assets/portfolio/内蒙古城投/DSC00366.jpg`, type: 'image', caption: '活动现场', exists: true },
      { src: `${BASE}assets/portfolio/内蒙古城投/DSC00369.jpg`, type: 'image', caption: '品牌展示', exists: true },
      { src: `${BASE}assets/portfolio/内蒙古城投/DSC00371.jpg`, type: 'image', caption: '活动执行', exists: true },
      { src: `${BASE}assets/portfolio/内蒙古城投/DSC00374.jpg`, type: 'image', caption: '运营成果', exists: true },
    ],
  },
];

// 占位符组件（文件未上传时显示）
function Placeholder({ type, caption, accent }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '8px',
        background: 'var(--bg-elevated)',
        padding: '12px',
      }}
    >
      {type === 'video' ? (
        <Film size={28} style={{ color: accent, opacity: 0.4 }} />
      ) : (
        <ImageOff size={28} style={{ color: accent, opacity: 0.4 }} />
      )}
      <span className="text-xs text-muted" style={{ textAlign: 'center' }}>
        {caption}
      </span>
      <span className="text-xs text-muted" style={{ fontSize: '10px', opacity: 0.6 }}>
        素材待上传
      </span>
    </div>
  );
}

export default function Projects() {
  const featuredProject = portfolioCategories.find((p) => p.featured);
  const otherProjects = portfolioCategories.filter((p) => !p.featured);
  
  const [lightbox, setLightbox] = useState({ open: false, src: '', caption: '' });

  const openLightbox = (src, caption) => {
    setLightbox({ open: true, src, caption });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, src: '', caption: '' });
  };

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-deep)' }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">作品集</div>
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ marginBottom: '16px' }}
          >
            用作品说话，<span className="text-gradient">用结果证明</span>
          </h2>
          <p className="text-lg text-secondary" style={{ maxWidth: '600px', marginBottom: '64px' }}>
            每一件作品都经过真实项目打磨，点击可查看大图或预览
          </p>
        </motion.div>

        {/* 平面视觉 — 带画廊展示 */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '80px' }}
          >
            <div
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                border: `1px solid ${featuredProject.accent}30`,
                background: `linear-gradient(135deg, rgba(34,211,238,0.03), rgba(129,140,248,0.03))`,
              }}
            >
              {/* Featured Badge */}
              <div
                style={{
                  padding: '8px 16px',
                  background: featuredProject.accent,
                  color: '#000',
                  fontSize: '12px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  margin: '24px 24px 0',
                  borderRadius: '6px',
                }}
              >
                <Zap size={14} />
                {featuredProject.category}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  padding: '24px',
                }}
                className="featured-grid"
              >
                {/* Left: Gallery Grid */}
                <div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '12px',
                    }}
                  >
                    {featuredProject.gallery.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          aspectRatio: '4/3',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          border: '1px solid var(--border-subtle)',
                          background: 'var(--bg-elevated)',
                          position: 'relative',
                          cursor: item.exists && item.type === 'image' ? 'pointer' : 'default',
                        }}
                      >
                        {item.type === 'image' ? (
                          <img
                            src={item.src}
                            alt={item.caption}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: item.exists ? 'zoom-in' : 'default' }}
                            onClick={() => item.exists && openLightbox(item.src, item.caption)}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : null}
                        {!item.exists && <Placeholder type={item.type} caption={item.caption} accent={featuredProject.accent} />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Info */}
                <div>
                  <div style={{ marginBottom: '16px' }}>
                    <div
                      className="text-xs"
                      style={{
                        color: featuredProject.accent,
                        fontWeight: 600,
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {featuredProject.clientType}
                    </div>
                    <h3
                      className="text-2xl font-bold tracking-tight"
                      style={{ marginBottom: '6px' }}
                    >
                      {featuredProject.title}
                    </h3>
                    <div className="text-sm text-muted">{featuredProject.client}</div>
                  </div>

                  <p className="text-sm text-secondary" style={{ lineHeight: 1.7, marginBottom: '24px' }}>
                    {featuredProject.desc}
                  </p>

                  {/* Results */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '12px',
                      marginBottom: '24px',
                    }}
                  >
                    {featuredProject.results.map((result) => (
                      <div
                        key={result.label}
                        style={{
                          padding: '14px',
                          background: 'var(--bg-surface)',
                          borderRadius: '10px',
                          border: '1px solid var(--border-subtle)',
                          textAlign: 'center',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '22px',
                            fontWeight: 700,
                            color: featuredProject.accent,
                            marginBottom: '2px',
                          }}
                        >
                          {result.value}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                          {result.label}
                        </div>
                        <div className="text-xs text-muted">{result.unit}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '6px 12px',
                          background: `${featuredProject.accent}15`,
                          border: `1px solid ${featuredProject.accent}30`,
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 500,
                          color: featuredProject.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Categories — 画廊网格 */}
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ marginBottom: '64px' }}
          >
            <div
              className="card"
              style={{
                padding: '28px',
                border: `1px solid ${project.accent}15`,
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: '20px' }}>
                <div
                  className="text-xs"
                  style={{
                    color: project.accent,
                    fontWeight: 600,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {project.clientType}
                </div>
                <h3
                  className="text-xl font-bold tracking-tight"
                  style={{ marginBottom: '4px' }}
                >
                  {project.title}
                </h3>
                <div className="text-sm text-muted">{project.client}</div>
              </div>

              {/* Gallery Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${Math.min(project.gallery.length, 4)}, 1fr)`,
                  gap: '12px',
                  marginBottom: '20px',
                }}
                className="gallery-row"
              >
                {project.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      aspectRatio: '16/10',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--bg-elevated)',
                      position: 'relative',
                    }}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.caption}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: item.exists ? 'zoom-in' : 'default' }}
                        onClick={() => item.exists && openLightbox(item.src, item.caption)}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : item.type === 'video' ? (
                      <video
                        src={item.src}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        controls
                        preload="metadata"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : null}
                    {!item.exists && <Placeholder type={item.type} caption={item.caption} accent={project.accent} />}
                  </div>
                ))}
              </div>

              {/* Results */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${project.results.length}, 1fr)`,
                  gap: '12px',
                  marginBottom: '16px',
                }}
                className="results-grid"
              >
                {project.results.map((result) => (
                  <div
                    key={result.label}
                    style={{
                      padding: '12px',
                      background: 'var(--bg-surface)',
                      borderRadius: '8px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: project.accent,
                        marginBottom: '2px',
                      }}
                    >
                      {result.value}
                    </div>
                    <div className="text-xs text-muted">{result.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p
                className="text-sm text-secondary"
                style={{ lineHeight: 1.7, marginBottom: '16px' }}
              >
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '4px 10px',
                      background: `${project.accent}10`,
                      border: `1px solid ${project.accent}20`,
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: project.accent,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .gallery-row { grid-template-columns: repeat(2, 1fr) !important; }
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .gallery-row { grid-template-columns: 1fr !important; }
          .results-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '40px',
            cursor: 'zoom-out',
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              zIndex: 10,
            }}
          >
            <X size={20} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.caption}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 0 60px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          />
          {lightbox.caption && (
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                marginTop: '16px',
                textAlign: 'center',
              }}
            >
              {lightbox.caption}
            </p>
          )}
        </motion.div>
      )}
    </section>
  );
}
