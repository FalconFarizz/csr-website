import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Tv, Music, Camera, Award, Pen, MapPin, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const C = { purple: '#7C3AED', dark: '#5B21B6', light: '#F5F3FF', text: '#0F172A', mid: '#475569' };

const subServices = [
  { icon: Users, slug: 'corporate', title: 'Corporate Events', short: 'Professional corporate events, meetings, retreats and internal celebrations.', color: '#7C3AED', bg: '#F5F3FF', features: ['Meetings & Retreats', 'Internal Celebrations', 'Team Building', 'Custom Agenda'], img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80' },
  { icon: Calendar, slug: 'conferences', title: 'Business Conferences and Seminars', short: 'Large-scale conferences and knowledge seminars with full production.', color: '#1A5BF6', bg: '#EEF3FF', features: ['Speaker Management', 'AV Production', 'Registration', 'Networking Sessions'], img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80' },
  { icon: Tv, slug: 'launches', title: 'Product Launches', short: 'Memorable launch events that introduce your products with maximum impact.', color: '#0EA5E9', bg: '#F0F9FF', features: ['Launch Concepts', 'Stage Design', 'Media Coverage', 'Brand Reveal'], img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&q=80' },
  { icon: Camera, slug: 'exhibitions', title: 'Exhibitions and Trade Shows', short: 'Booth design, vendor coordination and full exhibition management.', color: '#EC4899', bg: '#FDF2F8', features: ['Booth Design', 'Vendor Coordination', 'Visitor Management', 'Exhibition Setup'], img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80' },
  { icon: Music, slug: 'cultural', title: 'Cultural Programs', short: 'Beautifully curated cultural shows, college fests and community events.', color: '#D97706', bg: '#FFFBEB', features: ['College Fests', 'Talent Shows', 'Community Programs', 'Stage Shows'], img: 'https://images.unsplash.com/photo-1470229722913-7c092fb27218?auto=format&fit=crop&w=600&q=80' },
  { icon: Award, slug: 'awards', title: 'Award Functions', short: 'Glamorous award nights and recognition ceremonies.', color: '#059669', bg: '#ECFDF5', features: ['Gala Nights', 'Award Ceremonies', 'Show Management', 'Trophy Coordination'], img: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80' },
  { icon: Pen, slug: 'branding', title: 'Event Branding and Promotion', short: 'Creative branding, stage design and on-ground / digital promotion.', color: '#0EA5E9', bg: '#F0F9FF', features: ['Creative Branding', 'Stage Design', 'On-ground Promo', 'Digital Promo'], img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80' },
  { icon: MapPin, slug: 'logistics', title: 'Venue and Logistics Management', short: 'Venue scouting, vendor management, transport, hospitality and coordination.', color: '#7C3AED', bg: '#F5F3FF', features: ['Venue Scouting', 'Vendor Management', 'Transport & Stay', 'On-day Coordination'], img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80' },
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
        <Link to={`/services/event-management/${s.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: s.color, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
          Learn More <ChevronRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function EventManagementPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: '140px 32px 80px', background: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, rgba(59, 7, 100, 0.85) 0%, rgba(91, 33, 182, 0.85) 50%, rgba(124, 58, 237, 0.8) 100%)`, zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'white', clipPath: 'ellipse(55% 100% at 50% 100%)', zIndex: 2 }} />
        <motion.div ref={heroRef} initial={{ opacity: 0, y: 40 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }} style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
            <Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={13} color="rgba(255,255,255,0.5)" />
            <span style={{ color: 'white', fontSize: '0.82rem', fontWeight: 600 }}>Event Management</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 20px', background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 50, marginBottom: 24 }}>
            <Calendar size={14} color="white" />
            <span style={{ color: 'white', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Event Management</span>
          </div>
          <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'white', letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 22 }}>
            Events That Leave a{' '}
            <span style={{ background: 'linear-gradient(90deg, #E9D5FF, #FFFFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lasting Impression</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560, margin: '0 auto 40px' }}>
            From intimate corporate meetings to grand international conferences — we handle every detail so every event is flawless and unforgettable.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 34px', background: 'white', color: C.purple, fontFamily: 'Inter', fontWeight: 800, borderRadius: 50, textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
              Plan Your Event <ArrowRight size={16} />
            </Link>
            <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontFamily: 'Inter', fontWeight: 600, borderRadius: 50, textDecoration: 'none' }}>
              Past Events <ChevronRight size={16} />
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[{ v: '500+', l: 'Events Done' }, { v: '50K+', l: 'Guests Served' }, { v: '100%', l: 'On-Time' }, { v: '15+', l: 'Countries' }].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: '2rem', color: 'white' }}>{s.v}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sub-Services Grid */}
      <section style={{ padding: '90px 32px', background: '#FAF9FF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: C.text, letterSpacing: '-0.03em', marginBottom: 14 }}>Event Services We Offer</h2>
            <p style={{ color: C.mid, fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>From planning to production — every detail handled with precision and creativity.</p>
          </motion.div>
          <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: 24 }}>
            {subServices.map((s, i) => <SubCard key={s.slug} s={s} i={i} inView={gridInView} />)}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '80px 32px', background: `linear-gradient(135deg, #3B0764, ${C.dark})`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'white', letterSpacing: '-0.03em', marginBottom: 48 }}>Why Choose CSR for Events?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
            {[{ e: '🎯', t: '100% On-Time', d: 'Every event delivered on schedule, no exceptions.' }, { e: '✨', t: 'Bespoke Design', d: 'Every event uniquely crafted to your vision.' }, { e: '🛡️', t: 'Risk Management', d: 'Contingency plans for every scenario.' }, { e: '📞', t: 'Dedicated Coordinator', d: 'One point of contact from start to finish.' }].map(w => (
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
        <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: C.text, letterSpacing: '-0.03em', marginBottom: 16 }}>Let's Create Something Magical</h2>
        <p style={{ color: C.mid, fontSize: '1rem', maxWidth: 480, margin: '0 auto 36px' }}>Tell us about your event and we'll craft a bespoke experience within 48 hours.</p>
        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', background: `linear-gradient(135deg, ${C.purple}, ${C.dark})`, color: 'white', fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem', borderRadius: 50, textDecoration: 'none', boxShadow: `0 8px 40px ${C.purple}35` }}>
          Plan Your Event <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
