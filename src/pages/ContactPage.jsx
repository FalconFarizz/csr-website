import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../data/data';

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: companyInfo.email, color: '#1A5BF6', href: 'mailto:' + companyInfo.email },
  { icon: Phone, label: 'Call Us', value: companyInfo.phone, color: '#7C3AED', href: 'tel:' + companyInfo.phone },
  { icon: MapPin, label: 'Visit Us', value: companyInfo.address, color: '#0EA5E9' },
  { icon: Clock, label: 'Working Hours', value: 'Mon-Sat, 9AM - 7PM', color: '#F59E0B' },
];

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div style={{ minHeight: '100vh', background: '#071320' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: '140px 32px 80px',
        background: `url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`,
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(11, 31, 69, 0.9) 0%, rgba(7, 19, 32, 0.9) 100%)', zIndex: 1
        }} />
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,194,255,0.15), transparent 70%)',
          pointerEvents: 'none', zIndex: 2
        }} />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', maxWidth: 700, margin: '0 auto', zIndex: 3 }}
        >
          <span style={{
            display: 'inline-block', padding: '7px 22px',
            background: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)',
            borderRadius: 50, color: '#00C2FF', fontSize: '0.78rem',
            fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24,
          }}>Contact Us</span>
          <h1 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: 'white',
            letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 22,
          }}>
            Let's Start a{' '}
            <span style={{ background: 'linear-gradient(90deg,#00C2FF,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Conversation
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Have a project in mind? We'd love to hear about it. Reach out and our team will respond within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Quick Contact Info */}
      <section style={{ padding: '60px 32px 0', background: '#071320' }}>
        <div className="quick-contact-grid" style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20,
        }}>
          {contactInfo.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{
                  padding: '24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20, display: 'flex', alignItems: 'flex-start', gap: 16,
                  minWidth: 0,
                }}
              >
                <div style={{
                  width: 46, height: 46, borderRadius: 14, flexShrink: 0,
                  background: `${c.color}15`, border: `1px solid ${c.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={20} color={c.color} strokeWidth={2} />
                </div>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</div>
                  <div style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500, wordBreak: 'break-word', overflowWrap: 'break-word' }}>{c.value}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <style>{`
        @media (max-width: 500px) {
          .quick-contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
