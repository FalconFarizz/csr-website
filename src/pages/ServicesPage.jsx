import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X, Monitor, Calendar, TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const S = {
  blue: '#1A5BF6',
  blueDark: '#0D3DBF',
  blueLight: '#EEF3FF',
  blueMid: '#DBEAFE',
  accent: '#2563EB',
  text: '#0F172A',
  textMid: '#475569',
  textLight: '#94A3B8',
  white: '#FFFFFF',
  offWhite: '#F8FAFF',
};

const services = [
  {
    id: 'it',
    icon: Monitor,
    color: '#1A5BF6',
    tag: 'IT Software',
    title: 'IT Software Development',
    subtitle: 'Custom software, websites, mobile apps & cloud',
    description: 'We design and build reliable, scalable software solutions tailored to your business - from custom apps and websites to e-commerce platforms and cloud systems.',
    features: [
      { icon: '🛠️', title: 'Custom Software Development', desc: 'Tailor-made software built around your unique workflows.' },
      { icon: '🌐', title: 'Website Design & Development', desc: 'Responsive, fast, SEO-friendly websites that represent your brand.' },
      { icon: '📱', title: 'Mobile Application Development', desc: 'Native and cross-platform Android & iOS apps.' },
      { icon: '🛒', title: 'E-Commerce Solutions', desc: 'Online stores with secure payments, inventory and order tracking.' },
      { icon: '📊', title: 'Business Management Systems', desc: 'ERP, CRM and management systems that streamline operations.' },
      { icon: '🔧', title: 'Software Maintenance & Support', desc: 'Ongoing updates, performance tuning and reliable support.' },
      { icon: '☁️', title: 'Cloud-Based Solutions', desc: 'Scalable and secure cloud architectures and SaaS products.' },
    ],
    stats: [{ v: '7+', l: 'IT Services' }, { v: '100%', l: 'Custom Built' }, { v: '24/7', l: 'Support' }],
  },
  {
    id: 'event',
    icon: Calendar,
    color: '#7C3AED',
    tag: 'Event Management',
    title: 'Event Management',
    subtitle: 'Corporate events to grand award functions',
    description: 'From corporate meetings to cultural fests and award nights - we plan, coordinate and execute events of every scale with creativity and precision.',
    features: [
      { icon: '🏢', title: 'Corporate Events', desc: 'Professional corporate events, meetings, retreats and celebrations.' },
      { icon: '🎤', title: 'Business Conferences & Seminars', desc: 'Large-scale conferences with seamless stage and AV production.' },
      { icon: '🚀', title: 'Product Launches', desc: 'Memorable launch events that introduce your products with impact.' },
      { icon: '🏛️', title: 'Exhibitions & Trade Shows', desc: 'Booth design, vendor coordination and full exhibition management.' },
      { icon: '🎭', title: 'Cultural Programs', desc: 'Beautifully curated cultural shows, college fests and community events.' },
      { icon: '🏆', title: 'Award Functions', desc: 'Glamorous award nights and recognition ceremonies.' },
      { icon: '🎨', title: 'Event Branding & Promotion', desc: 'Creative branding, stage design and digital promotion.' },
      { icon: '📋', title: 'Venue & Logistics Management', desc: 'Venue scouting, vendors, transport, hospitality and coordination.' },
    ],
    stats: [{ v: '8+', l: 'Event Types' }, { v: 'End-to-End', l: 'Management' }, { v: '100%', l: 'On-Time' }],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    color: '#0EA5E9',
    tag: 'Digital Management',
    title: 'Digital Management',
    subtitle: 'SEO, social media, content and digital ads',
    description: 'We help your business get found, get noticed and get chosen online - with data-driven SEO, social media, content and advertising strategies that deliver results.',
    features: [
      { icon: '📣', title: 'Digital Marketing', desc: 'Performance-driven campaigns that reach the right audience.' },
      { icon: '💬', title: 'Social Media Management', desc: 'Daily social media handling, content calendars and growth.' },
      { icon: '🔍', title: 'Search Engine Optimization (SEO)', desc: 'On-page, off-page and technical SEO for higher rankings.' },
      { icon: '✍️', title: 'Content Creation & Marketing', desc: 'Engaging blogs, videos, reels and copy that tell your story.' },
      { icon: '🛡️', title: 'Online Brand Management', desc: 'Reputation management and consistent brand voice.' },
      { icon: '🖥️', title: 'Website Management', desc: 'Continuous updates, performance, backups and security.' },
      { icon: '🎯', title: 'Digital Advertising Campaigns', desc: 'ROI-focused Google Ads, Meta Ads and paid campaigns.' },
      { icon: '📈', title: 'Performance Monitoring & Analytics', desc: 'In-depth dashboards, monthly reports and insights.' },
    ],
    stats: [{ v: '8+', l: 'Digital Services' }, { v: 'Data', l: 'Driven' }, { v: 'ROI', l: 'Focused' }],
  },
];

function ServiceSection({ svc, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;
  const Icon = svc.icon;

  return (
    <section
      ref={ref}
      id={svc.id}
      style={{
        padding: '100px 32px',
        background: isEven ? S.white : S.offWhite,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div style={{
        position: 'absolute',
        top: isEven ? '-80px' : 'auto',
        bottom: isEven ? 'auto' : '-80px',
        right: isEven ? '-80px' : 'auto',
        left: isEven ? 'auto' : '-80px',
        width: 400, height: 400, borderRadius: '50%',
        background: `radial-gradient(circle, ${svc.color}12, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 20px',
            background: `${svc.color}12`,
            border: `1px solid ${svc.color}30`,
            borderRadius: 50, marginBottom: 24,
          }}>
            <Icon size={15} color={svc.color} strokeWidth={2.5} />
            <span style={{ color: svc.color, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {svc.tag}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: S.text,
            letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.1,
          }}>
            {svc.title}
          </h2>
          <p style={{
            color: S.textMid, fontSize: '1.05rem', lineHeight: 1.75,
            maxWidth: 600, margin: '0 auto 32px',
          }}>
            {svc.description}
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            {svc.stats.map((st) => (
              <div key={st.l} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
                  fontSize: '2rem', color: svc.color, letterSpacing: '-0.02em',
                }}>{st.v}</div>
                <div style={{ color: S.textLight, fontSize: '0.8rem', fontWeight: 600 }}>{st.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
          marginBottom: 56,
        }}>
          {svc.features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} color={svc.color} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <Link
            to="/#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 40px',
              background: `linear-gradient(135deg, ${svc.color}, ${svc.color}CC)`,
              color: 'white', fontFamily: 'Inter', fontWeight: 700,
              fontSize: '0.95rem', borderRadius: 50, textDecoration: 'none',
              boxShadow: `0 8px 40px ${svc.color}35`,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 12px 50px ${svc.color}50`; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 8px 40px ${svc.color}35`; }}
          >
            Get Started with {svc.tag} <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, color, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '28px',
        background: hovered ? S.white : S.white,
        border: `1px solid ${hovered ? color + '40' : '#E2E8F0'}`,
        borderRadius: 20,
        boxShadow: hovered
          ? `0 20px 60px ${color}18, 0 0 0 1px ${color}20`
          : '0 2px 12px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${color}, ${color}80)`,
          borderRadius: '20px 20px 0 0',
        }} />
      )}
      <div style={{ fontSize: '2rem', marginBottom: 14 }}>{feature.icon}</div>
      <h3 style={{
        fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
        fontSize: '1rem', color: S.text, marginBottom: 8,
      }}>{feature.title}</h3>
      <p style={{ color: S.textMid, fontSize: '0.88rem', lineHeight: 1.65 }}>{feature.desc}</p>
    </motion.div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div style={{ minHeight: '100vh', background: S.white, fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: '140px 32px 100px',
        background: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(160deg, rgba(13, 61, 191, 0.85) 0%, rgba(26, 91, 246, 0.85) 50%, rgba(56, 189, 248, 0.8) 100%)`, zIndex: 1
        }} />
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '36px 36px', pointerEvents: 'none', zIndex: 2
        }} />
        {/* Bottom wave */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 80,
          background: S.white,
          clipPath: 'ellipse(55% 100% at 50% 100%)', zIndex: 2
        }} />

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 40 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 3 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              display: 'inline-block', padding: '7px 22px',
              background: 'rgba(255,255,255,0.18)',
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: 50, color: 'white',
              fontSize: '0.78rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 28,
            }}
          >
            ✦ Our Services
          </motion.span>

          <h1 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'white',
            letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 24,
          }}>
            Solutions That Move{' '}
            <span style={{
              background: 'linear-gradient(90deg, #BAE6FD, #FFFFFF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Your Business Forward
            </span>
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem',
            lineHeight: 1.75, maxWidth: 580, margin: '0 auto 48px',
          }}>
            Three powerful service pillars — IT Software, Event Management, and Digital Marketing —
            built to accelerate growth, delight audiences, and drive real ROI.
          </p>

          {/* Jump links */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: Monitor, label: 'IT Software', href: '/services/it-software' },
              { icon: Calendar, label: 'Event Management', href: '/services/event-management' },
              { icon: TrendingUp, label: 'Digital Marketing', href: '/services/digital-marketing' },
            ].map((s) => (
              <Link
                key={s.label}
                to={s.href}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 26px',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  borderRadius: 50, color: 'white',
                  fontFamily: 'Inter', fontWeight: 600, fontSize: '0.88rem',
                  textDecoration: 'none', backdropFilter: 'blur(8px)',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.28)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <s.icon size={15} /> {s.label} <ChevronRight size={13} />
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Sections */}
      {services.map((svc, i) => (
        <ServiceSection key={svc.id} svc={svc} index={i} />
      ))}

      {/* Why Choose Us strip */}
      <section style={{
        padding: '80px 32px',
        background: `linear-gradient(135deg, #0D3DBF, #1A5BF6)`,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{
              fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'white',
              letterSpacing: '-0.03em', marginBottom: 14,
            }}>
              Why Clients Choose CSR Tech
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
              A trusted partner across software, events, and marketing — all under one roof.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: '🎯', title: 'Results-Driven', desc: 'Every strategy tied to measurable business outcomes.' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'Agile execution with 2-week sprint cycles.' },
              { icon: '🔒', title: 'Trusted & Secure', desc: 'Enterprise security and full NDA compliance.' },
              { icon: '🤝', title: 'Dedicated Support', desc: '24/7 support with a committed account manager.' },
            ].map((w) => (
              <div key={w.title} style={{
                padding: '28px 24px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 20, textAlign: 'center',
                backdropFilter: 'blur(12px)',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: 14 }}>{w.icon}</div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: 8 }}>{w.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '100px 32px', background: S.offWhite, textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: S.text,
            letterSpacing: '-0.03em', marginBottom: 16,
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: S.textMid, fontSize: '1rem', lineHeight: 1.75, marginBottom: 40 }}>
            Book a free consultation and let our experts craft the right strategy for your business.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 40px',
              background: `linear-gradient(135deg, ${S.blue}, ${S.blueDark})`,
              color: 'white', fontFamily: 'Inter', fontWeight: 700, fontSize: '0.95rem',
              borderRadius: 50, textDecoration: 'none',
              boxShadow: `0 8px 40px ${S.blue}35`,
            }}>
              Free Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 36px',
              background: 'white', color: S.blue,
              border: `2px solid ${S.blue}30`,
              fontFamily: 'Inter', fontWeight: 700, fontSize: '0.95rem',
              borderRadius: 50, textDecoration: 'none',
            }}>
              See Our Work <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />

      <style>{`
        @media (max-width: 768px) {
          section div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
