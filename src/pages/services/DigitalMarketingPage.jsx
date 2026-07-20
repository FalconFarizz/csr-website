import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Search, Share2, Target, Mail, Palette, BarChart2, ChevronRight, Megaphone, Edit, Shield, Monitor } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const C = { sky: '#0EA5E9', dark: '#0369A1', light: '#F0F9FF', text: '#0F172A', mid: '#475569' };

const subServices = [
  { icon: Megaphone, slug: 'digital-marketing', title: 'Digital Marketing', short: 'Performance-driven digital marketing campaigns that reach the right audience.', color: '#0EA5E9', bg: '#F0F9FF', features: ['Campaign Strategy', 'Audience Targeting', 'Lead Generation', 'Conversion Optimisation'], img: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=600&q=80' },
  { icon: Share2, slug: 'social-media', title: 'Social Media Management', short: 'Daily social media handling, content calendars and community engagement.', color: '#7C3AED', bg: '#F5F3FF', features: ['Content Calendar', 'Reels & Stories', 'Community Management', 'Growth Strategy'], img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80' },
  { icon: Search, slug: 'seo', title: 'Search Engine Optimization (SEO)', short: 'On-page, off-page and technical SEO to rank higher and drive organic traffic.', color: '#1A5BF6', bg: '#EEF3FF', features: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
  { icon: Edit, slug: 'content', title: 'Content Creation and Marketing', short: 'Engaging blogs, videos, reels and copy that tell your brand story.', color: '#EC4899', bg: '#FDF2F8', features: ['Blog Writing', 'Video Production', 'Reels & Shorts', 'Brand Copy'], img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80' },
  { icon: Shield, slug: 'brand', title: 'Online Brand Management', short: 'Reputation management, brand voice consistency and online presence.', color: '#D97706', bg: '#FFFBEB', features: ['Reputation Mgmt', 'Brand Voice', 'Crisis Response', 'Online Presence'], img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80' },
  { icon: Monitor, slug: 'website-mgmt', title: 'Website Management', short: 'Continuous website updates, performance optimization, backups and security.', color: '#059669', bg: '#ECFDF5', features: ['Content Updates', 'Performance', 'Backups', 'Security Monitoring'], img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { icon: Target, slug: 'advertising', title: 'Digital Advertising Campaigns', short: 'ROI-focused Google Ads, Meta Ads and paid campaigns with detailed targeting.', color: '#DC2626', bg: '#FEF2F2', features: ['Google Ads', 'Meta Ads', 'Retargeting', 'A/B Testing'], img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=600&q=80' },
  { icon: BarChart2, slug: 'analytics', title: 'Performance Monitoring and Analytics', short: 'In-depth analytics dashboards, monthly reports and insights.', color: '#0EA5E9', bg: '#F0F9FF', features: ['GA4 Setup', 'Monthly Reports', 'KPI Dashboards', 'ROI Tracking'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
];

function SubCard({ s, i, inView }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.09, duration: 0.65 }}
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
          {s.features.map(f => <span key={f} style={{ padding: '3px 10px', background: `${s.color}10`, border: `1px solid ${s.color}25`, borderRadius: 6, fontSize: '0.72rem', color: s.color, fontWeight: 600 }}>{f}</span>)}
        </div>
        <Link to={`/services/digital-marketing/${s.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
          Learn More <ChevronRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function DigitalMarketingPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: '140px 32px 80px', background: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, rgba(12, 74, 110, 0.85) 0%, rgba(3, 105, 161, 0.85) 50%, rgba(14, 165, 233, 0.8) 100%)`, zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'white', clipPath: 'ellipse(55% 100% at 50% 100%)', zIndex: 2 }} />
        <motion.div ref={heroRef} initial={{ opacity: 0, y: 40 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }} style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
            <Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={13} color="rgba(255,255,255,0.5)" />
            <span style={{ color: 'white', fontSize: '0.82rem', fontWeight: 600 }}>Digital Marketing</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 20px', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 50, marginBottom: 24 }}>
            <TrendingUp size={14} color="white" />
            <span style={{ color: 'white', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Digital Marketing</span>
          </div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'white', letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 22 }}>
            Grow Your Brand,{' '}
            <span style={{ background: 'linear-gradient(90deg, #BAE6FD, #FFFFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Drive Real Results</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 40px' }}>
            Data-driven strategies across SEO, social media, paid ads, email and brand design — all designed to attract the right audience and convert them into loyal customers.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 34px', background: 'white', color: C.sky, fontFamily: 'Inter', fontWeight: 800, borderRadius: 50, textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
              Get a Free Audit <ArrowRight size={16} />
            </Link>
            <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontFamily: 'Inter', fontWeight: 600, borderRadius: 50, textDecoration: 'none' }}>
              Case Studies <ChevronRight size={16} />
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[{ v: '3x', l: 'Avg ROI' }, { v: '180+', l: 'Brands Grown' }, { v: '40%', l: 'Cost Reduced' }, { v: '98%', l: 'Client Retention' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: '2rem', color: 'white' }}>{s.v}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sub-Services Grid */}
      <section style={{ padding: '90px 32px', background: '#F0F9FF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: C.text, letterSpacing: '-0.03em', marginBottom: 14 }}>Our Digital Marketing Services</h2>
            <p style={{ color: C.mid, fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>End-to-end digital marketing from strategy to execution — click any service to explore in detail.</p>
          </motion.div>
          <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: 24 }}>
            {subServices.map((s, i) => <SubCard key={s.slug} s={s} i={i} inView={gridInView} />)}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '80px 32px', background: `linear-gradient(135deg, #0C4A6E, ${C.dark})`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'white', letterSpacing: '-0.03em', marginBottom: 48 }}>Why CSR for Digital Marketing?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
            {[{ e: '📊', t: 'Data-First Approach', d: 'Every decision backed by real analytics and insights.' }, { e: '🚀', t: 'Fast Results', d: 'See measurable growth within the first 30 days.' }, { e: '🔄', t: 'Full-Funnel Coverage', d: 'From awareness to conversion to retention.' }, { e: '📈', t: 'Transparent Reporting', d: 'Clear monthly reports with every KPI tracked.' }].map(w => (
              <div key={w.t} style={{ padding: '26px 22px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, backdropFilter: 'blur(12px)' }}>
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
        <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: C.text, letterSpacing: '-0.03em', marginBottom: 16 }}>Ready to Grow Your Brand?</h2>
        <p style={{ color: C.mid, fontSize: '1rem', maxWidth: 480, margin: '0 auto 36px' }}>Get a free digital marketing audit and custom growth strategy for your business.</p>
        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', background: `linear-gradient(135deg, ${C.sky}, ${C.dark})`, color: 'white', fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', borderRadius: 50, textDecoration: 'none', boxShadow: `0 8px 40px ${C.sky}35` }}>
          Get Free Audit <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
