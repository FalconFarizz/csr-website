import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Code, Smartphone, Cloud, Brain, Database, Shield, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

import { itServices } from '../../data/data';

const C = { blue: '#1A5BF6', dark: '#0D3DBF', light: '#EEF3FF', text: '#0F172A', mid: '#475569', muted: '#94A3B8' };

const subServices = [
  { icon: Code, slug: 'custom-software', title: 'Custom Software Development', short: 'Tailor-made software built around your unique business workflows.', color: '#1A5BF6', bg: '#EEF3FF', features: ['Custom Architecture', 'Business Logic', 'API Integrations', 'Scalable Codebase'], img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80' },
  { icon: Monitor, slug: 'web-development', title: 'Website Design and Development', short: 'Responsive, fast and SEO-friendly websites that represent your brand.', color: '#7C3AED', bg: '#F5F3FF', features: ['React / Next.js', 'SEO Optimized', 'Mobile Responsive', 'CMS Integration'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { icon: Smartphone, slug: 'mobile-apps', title: 'Mobile Application Development', short: 'Native and cross-platform Android and iOS apps.', color: '#0EA5E9', bg: '#F0F9FF', features: ['React Native', 'iOS & Android', 'Offline Support', 'Push Notifications'], img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80' },
  { icon: Database, slug: 'ecommerce', title: 'E-Commerce Solutions', short: 'Online stores with secure payments and inventory management.', color: '#D97706', bg: '#FFFBEB', features: ['Secure Payments', 'Inventory Tools', 'Order Tracking', 'Customer Accounts'], img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80' },
  { icon: Brain, slug: 'business-systems', title: 'Business Management Systems', short: 'ERP, CRM and management systems that streamline operations.', color: '#059669', bg: '#ECFDF5', features: ['ERP Modules', 'CRM Setup', 'Reports & Dashboards', 'Workflow Automation'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
  { icon: Shield, slug: 'maintenance', title: 'Software Maintenance and Support', short: 'Ongoing updates, bug fixes, performance tuning and support.', color: '#7C3AED', bg: '#F5F3FF', features: ['24/7 Monitoring', 'Security Patches', 'Performance Tuning', 'SLA Support'], img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80' },
  { icon: Cloud, slug: 'cloud', title: 'Cloud-Based Solutions', short: 'Scalable, secure cloud architectures and SaaS products.', color: '#0EA5E9', bg: '#F0F9FF', features: ['AWS / GCP / Azure', 'Auto-Scaling', 'CI/CD Pipelines', '99.99% Uptime'], img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' },
];

function SubCard({ s, i, inView }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.65 }}
      style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 22, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'all 0.3s', display: 'flex', flexDirection: 'column' }}
      whileHover={{ y: -6, boxShadow: `0 20px 50px ${s.color}18, 0 0 0 1px ${s.color}20` }}
    >
      {/* Card Image Banner */}
      <div style={{ height: 160, position: 'relative', overflow: 'hidden' }}>
        <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, white, transparent)` }} />
      </div>

      <div style={{ padding: '0 28px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, marginTop: '-26px', position: 'relative', zIndex: 10, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <Icon size={24} color={s.color} strokeWidth={2} />
        </div>
        <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.1rem', color: C.text, marginBottom: 8 }}>{s.title}</h3>
        <p style={{ color: C.mid, fontSize: '0.88rem', lineHeight: 1.65, marginBottom: 18, flex: 1 }}>{s.short}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {s.features.map(f => (
            <span key={f} style={{ padding: '3px 10px', background: `${s.color}10`, border: `1px solid ${s.color}25`, borderRadius: 6, fontSize: '0.72rem', color: s.color, fontWeight: 600 }}>{f}</span>
          ))}
        </div>
        <Link to={`/services/it-software/${s.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
          Learn More <ChevronRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ITSoftwarePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: '140px 32px 80px', background: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, rgba(13, 61, 191, 0.85) 0%, rgba(26, 91, 246, 0.85) 60%, rgba(56, 189, 248, 0.8) 100%)`, zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'white', clipPath: 'ellipse(55% 100% at 50% 100%)', zIndex: 2 }} />
        <motion.div ref={heroRef} initial={{ opacity: 0, y: 40 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }} style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 3, textAlign: 'center' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
            <Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={13} color="rgba(255,255,255,0.5)" />
            <span style={{ color: 'white', fontSize: '0.82rem', fontWeight: 600 }}>IT Software</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 20px', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 50, marginBottom: 24 }}>
            <Monitor size={14} color="white" />
            <span style={{ color: 'white', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>IT Software Development</span>
          </div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'white', letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 22 }}>
            Enterprise Software Built{' '}
            <span style={{ background: 'linear-gradient(90deg, #BAE6FD, #FFFFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>to Scale</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 40px' }}>
            From web & mobile apps to AI systems, cloud infrastructure and enterprise platforms — we engineer software that performs at scale.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 34px', background: 'white', color: C.blue, fontFamily: 'Inter', fontWeight: 800, borderRadius: 50, textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontFamily: 'Inter', fontWeight: 600, borderRadius: 50, textDecoration: 'none' }}>
              View Projects <ChevronRight size={16} />
            </Link>
          </div>
          {/* Stats */}
          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[{ v: '250+', l: 'Apps Built' }, { v: '40+', l: 'Technologies' }, { v: '98%', l: 'Uptime SLA' }, { v: '12+', l: 'Yrs Experience' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: '2rem', color: 'white' }}>{s.v}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sub-Services Grid */}
      <section style={{ padding: '90px 32px', background: '#F8FAFF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: C.text, letterSpacing: '-0.03em', marginBottom: 14 }}>Our IT Software Services</h2>
            <p style={{ color: C.mid, fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>Click any service to explore in detail — from discovery to delivery, we cover every layer.</p>
          </motion.div>
          <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: 24 }}>
            {subServices.map((s, i) => <SubCard key={s.slug} s={s} i={i} inView={gridInView} />)}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '80px 32px', background: `linear-gradient(135deg, ${C.dark}, ${C.blue})`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'white', letterSpacing: '-0.03em', marginBottom: 12 }}>Why Choose CSR for IT Software?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
            {[{ e: '⚡', t: 'Agile & Fast', d: '2-week sprints with continuous delivery.' }, { e: '🔒', t: 'Secure by Design', d: 'OWASP, GDPR, SOC2 compliance built-in.' }, { e: '📈', t: 'Infinitely Scalable', d: 'Architected to grow from 1 to 10M users.' }, { e: '🤝', t: '24/7 Support', d: 'Dedicated engineers on-call round the clock.' }].map(w => (
              <div key={w.t} style={{ padding: '26px 22px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, textAlign: 'center', backdropFilter: 'blur(12px)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{w.e}</div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, color: 'white', marginBottom: 8 }}>{w.t}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.84rem', lineHeight: 1.6 }}>{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '90px 32px', background: 'white', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: C.text, letterSpacing: '-0.03em', marginBottom: 16 }}>Ready to Build Your Next Product?</h2>
        <p style={{ color: C.mid, fontSize: '1rem', maxWidth: 480, margin: '0 auto 36px' }}>Talk to our engineers and get a free technical consultation within 24 hours.</p>
        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', background: `linear-gradient(135deg, ${C.blue}, ${C.dark})`, color: 'white', fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', borderRadius: 50, textDecoration: 'none', boxShadow: `0 8px 40px ${C.blue}35` }}>
          Start Your Project <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
