import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Calendar, Users, Briefcase, GraduationCap, Award } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '4年+', label: '实战工作经验' },
  { icon: Users, value: '5人', label: '团队管理经验' },
  { icon: Award, value: '3个', label: '完整项目操盘' },
  { icon: GraduationCap, value: 'B/G/C', label: '三类客户覆盖' },
];

const contacts = [
  { icon: MessageCircle, label: '微信 / 电话', value: '13641177111' },
  { icon: Mail, label: '邮箱', value: '2368339175@qq.com' },
  { icon: MapPin, label: '坐标', value: '北京' },
  { icon: Calendar, label: '状态', value: '可接项目 / 求职' },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-label">关于我</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 420px) 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <img
                  src="/assets/portfolio/profile.png"
                  alt="刘柏君"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  padding: '1px',
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.2), transparent 60%, rgba(167,139,250,0.2))',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ marginBottom: '24px', lineHeight: 1.2 }}
            >
              不只是执行，
              <br />
              <span className="text-gradient">是闭环思维</span>
            </h2>

            <div
              style={{
                color: 'var(--text-secondary)',
                fontSize: '16px',
                lineHeight: 1.8,
                marginBottom: '40px',
              }}
            >
              <p style={{ marginBottom: '16px' }}>
                4年+运营实战经验，从0到1操盘过国企O2O品牌项目。在上海沁禾时代期间，
                带领5人团队负责内蒙古乌兰察布"未来世界"儿童乐园全链路运营，
                3个月实现线上曝光量翻倍，覆盖本地50%-70%人口，引流到店超千人次。
              </p>
              <p style={{ marginBottom: '16px' }}>
                擅长活动策划全案执行、抖音获客体系搭建、达人资源整合、私域流量转化。
                服务过G端（国企/政府）、B端（企业品牌）、C端（消费者运营）三类客户，
                具备从策略制定到落地执行的完整闭环能力。
              </p>
              <p>
                核心信条：好的运营不是炫技，是每一分预算都花在刀刃上，每个动作都有数据回响。
              </p>
            </div>

            {/* 经历时间线 */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px' }}>工作经历</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { time: '2025/07 — 至今', title: '装修创业', desc: '与团队共同创业，负责整体运营规划、客户对接与项目推进。' },
                  { time: '2025/01 — 2025/07', title: '优选口袋 — 线上运营总监', desc: '负责线上运营管理工作，搭建获客体系。' },
                  { time: '2023/03 — 2025/07', title: '杭州燎原科技 — 活动策划执行', desc: '负责活动策划筹备、线上账号搭建与推广、活动执行。' },
                  { time: '2021/11 — 2023/03', title: '上海沁禾时代 — 线上运营总监', desc: '管理5人线上运营团队，O2O模式运营儿童乐园项目。3个月内线上曝光提升100%，覆盖乌兰察布本地50%-70%人口，引流到店超千人次。' },
                ].map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                  >
                    <div style={{ minWidth: '110px', fontSize: '13px', color: 'var(--accent-cyan)', fontWeight: 500, marginTop: '2px' }}>{item.time}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '15px', marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '24px',
                marginBottom: '40px',
              }}
              className="stats-grid"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                >
                  <stat.icon
                    size={20}
                    style={{ color: 'var(--accent-cyan)', marginBottom: '8px' }}
                  />
                  <div className="stat-number">{stat.value}</div>
                  <div className="text-sm text-muted" style={{ marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Chips */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
              }}
              className="contact-grid"
            >
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                    e.currentTarget.style.background = 'var(--bg-elevated)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'var(--bg-surface)';
                  }}
                >
                  <contact.icon size={18} style={{ color: 'var(--accent-indigo)' }} />
                  <div>
                    <div className="text-xs text-muted">{contact.label}</div>
                    <div className="text-sm" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                      {contact.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
