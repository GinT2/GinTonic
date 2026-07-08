import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Send, ArrowUpRight } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: '电话',
    value: '13641177111',
    href: 'tel:13641177111',
    desc: '随时可接听，优先微信联系',
  },
  {
    icon: Mail,
    label: '邮箱',
    value: '2368339175@qq.com',
    href: 'mailto:2368339175@qq.com',
    desc: '24小时内回复',
  },
  {
    icon: MessageCircle,
    label: '微信',
    value: '13641177111',
    href: '#',
    desc: '添加请备注来意',
  },
  {
    icon: MapPin,
    label: '所在地',
    value: '北京',
    href: '#',
    desc: '常驻北京，可接受短期出差',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-deep)',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34, 211, 238, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(129, 140, 248, 0.04) 0%, transparent 50%)
          `,
        }}
      />
      <div className="grid-pattern" />
      <div className="noise-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label" style={{ justifyContent: 'center' }}>
              联系方式
            </div>
            <h2
              className="text-5xl font-bold tracking-tight"
              style={{ marginBottom: '20px', color: '#ffffff' }}
            >
              合作咨询 / 简历投递
            </h2>
            <p
              className="text-lg"
              style={{ maxWidth: '520px', margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}
            >
              活动策划、线上运营、视频内容项目均可承接。带上需求，我给方案、给排期、给预期结果。
            </p>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '80px',
          }}
          className="contact-cards-grid"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
              style={{
                padding: '32px 24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <method.icon size={24} style={{ color: '#ffffff' }} />
              </div>
              <div className="text-xs" style={{ marginBottom: '4px', color: 'rgba(255,255,255,0.4)' }}>
                {method.label}
              </div>
              <div
                className="text-base font-semibold"
                style={{ marginBottom: '6px', wordBreak: 'break-all', color: '#ffffff' }}
              >
                {method.value}
              </div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{method.desc}</div>
            </motion.a>
          ))}
        </div>

        {/* Dual CTA Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '40px',
          }}
          className="dual-cta-grid"
        >
          {/* Left: For Interviewers */}
          <div
            style={{
              textAlign: 'center',
              padding: '48px 32px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
                padding: '1px',
                background: 'linear-gradient(135deg, rgba(34,211,238,0.2), transparent 60%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(34,211,238,0.05))',
                border: '1px solid rgba(34,211,238,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <Send size={22} style={{ color: 'var(--accent-cyan)' }} />
            </div>
            <h3
              className="text-xl font-bold tracking-tight"
              style={{ marginBottom: '10px', position: 'relative' }}
            >
              岗位邀约
            </h3>
            <p
              className="text-sm text-secondary"
              style={{ maxWidth: '280px', margin: '0 auto 20px', position: 'relative', lineHeight: 1.6 }}
            >
              活动策划、线上运营、私域运营等岗位均可投递。附项目完整数据与团队管理经历。
            </p>
            <a href="mailto:2368339175@qq.com?subject=岗位邀约-刘柏君" className="btn-outline" style={{ position: 'relative' }}>
              <Send size={14} />
              投递简历
            </a>
          </div>

          {/* Right: For Clients */}
          <div
            style={{
              textAlign: 'center',
              padding: '48px 32px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
                padding: '1px',
                background: 'linear-gradient(135deg, rgba(167,139,250,0.2), transparent 60%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(167,139,250,0.05))',
                border: '1px solid rgba(167,139,250,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <Phone size={22} style={{ color: 'var(--accent-violet)' }} />
            </div>
            <h3
              className="text-xl font-bold tracking-tight"
              style={{ marginBottom: '10px', position: 'relative' }}
            >
              项目合作
            </h3>
            <p
              className="text-sm text-secondary"
              style={{ maxWidth: '280px', margin: '0 auto 20px', position: 'relative', lineHeight: 1.6 }}
            >
              活动策划、线上获客、视频内容、品牌运营。带上需求，我给方案、给排期、给预期结果。
            </p>
            <a href="tel:13641177111" className="btn-primary" style={{ position: 'relative' }}>
              <Phone size={14} />
              立即咨询
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div
          style={{
            marginTop: '80px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div className="text-sm text-muted">
            © 2026 刘柏君 · 线上运营 · 活动策划
          </div>
          <div className="text-sm text-muted">
            信息真实有效，欢迎核实
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dual-cta-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .contact-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
