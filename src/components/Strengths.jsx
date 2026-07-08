import { motion } from 'framer-motion';
import {
  Target,
  Users,
  GitPullRequest,
  Handshake,
  TrendingUp,
  Video,
  Lightbulb,
  BarChart3,
} from 'lucide-react';

const coreSkills = [
  {
    icon: Target,
    title: '活动策划与执行',
    desc: '从目标拆解到落地执行，完整策划链路。儿童乐园项目3个月引流到店超千人次。',
  },
  {
    icon: TrendingUp,
    title: '线上获客体系搭建',
    desc: '抖音账号矩阵、达人资源整合、内容获客。O2O项目曝光量3个月翻倍，覆盖本地50%-70%人口。',
  },
  {
    icon: Handshake,
    title: '客户对接与商务',
    desc: 'G/B/C三类客户均有实战经验，从需求沟通、方案交付到回款跟进，全流程闭环。',
  },
  {
    icon: Video,
    title: '视频内容制作',
    desc: '独立完成从拍摄到成片全流程，企业宣传片、品牌视频、AE特效片头均可交付。',
  },
];

const familiarSkills = [
  {
    icon: Users,
    title: '团队管理与推进',
    desc: '5人团队管理经验，任务拆解、进度把控、跨部门协调，确保项目按时交付。',
  },
  {
    icon: GitPullRequest,
    title: '项目全周期管理',
    desc: '多线程推进，把控关键节点与风险，从立项到结项全链路跟进。',
  },
  {
    icon: BarChart3,
    title: '数据驱动运营',
    desc: '用数据指导决策，曝光、转化、ROI全流程追踪，定期复盘沉淀方法论。',
  },
  {
    icon: Lightbulb,
    title: '问题解决与复盘',
    desc: '遇挫能静下心找解法，项目复盘输出可复用的SOP与执行清单。',
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">核心能力</div>
          <h2
            className="text-4xl font-bold tracking-tight"
            style={{ marginBottom: '16px' }}
          >
            聚焦运营核心，<span className="text-gradient">每项都有项目验证</span>
          </h2>
          <p className="text-lg text-secondary" style={{ maxWidth: '560px', marginBottom: '48px' }}>
            不做「什么都会」的杂家，做「把关键能力做深」的专家
          </p>
        </motion.div>

        {/* 核心技能 */}
        <div style={{ marginBottom: '48px' }}>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              letterSpacing: '0.02em',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--accent-cyan)',
                display: 'inline-block',
              }}
            />
            核心技能 — 可独立带队交付，有完整项目成果
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
            className="strengths-grid"
          >
            {coreSkills.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <div
                  className="card"
                  style={{
                    padding: '28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(129,140,248,0.1))',
                      border: '1px solid rgba(34,211,238,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginBottom: '16px',
                    }}
                  >
                    <item.icon size={20} style={{ color: 'var(--accent-cyan)' }} />
                  </div>

                  <h3
                    className="text-lg font-semibold tracking-tight"
                    style={{ marginBottom: '8px' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm text-secondary"
                    style={{ lineHeight: 1.6, flex: 1 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 熟悉技能 */}
        <div>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              letterSpacing: '0.02em',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--accent-indigo)',
                display: 'inline-block',
              }}
            />
            熟悉技能 — 可配合推进，持续精进中
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
            className="strengths-grid"
          >
            {familiarSkills.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <div
                  className="card"
                  style={{
                    padding: '28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: 0.75,
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(129,140,248,0.08), rgba(167,139,250,0.08))',
                      border: '1px solid rgba(129,140,248,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginBottom: '16px',
                    }}
                  >
                    <item.icon size={20} style={{ color: 'var(--accent-indigo)' }} />
                  </div>

                  <h3
                    className="text-lg font-semibold tracking-tight"
                    style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm text-secondary"
                    style={{ lineHeight: 1.6, flex: 1 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .strengths-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .strengths-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
