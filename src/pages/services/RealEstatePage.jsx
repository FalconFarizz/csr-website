import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home, Building2, MapPin, Phone, ArrowRight, ChevronRight,
  Star, CheckCircle, TrendingUp, Key, Shield, Users
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const C = {
  primary: '#1A6B3C',
  dark: '#0E4027',
  accent: '#F59E0B',
  text: '#0F172A',
  mid: '#475569',
  muted: '#94A3B8',
  light: '#F0FDF4',
};

const listings = [
  {
    type: 'Residential',
    icon: Home,
    color: '#1A6B3C',
    bg: '#F0FDF4',
    title: 'Buy Your Dream Home',
    desc: 'Find affordable flats, villas, and independent houses across Thoothukudi — from Millerpuram to Palayamkottai Road.',
    features: ['2 BHK / 3 BHK Flats', 'Independent Villas', 'Gated Communities', 'Ready to Move'],
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    badge: 'Buy',
    badgeColor: '#1A6B3C',
  },
  {
    type: 'Commercial',
    icon: Building2,
    color: '#1D4ED8',
    bg: '#EFF6FF',
    title: 'Commercial Properties',
    desc: 'Premium office spaces, showrooms, and warehouses near Thoothukudi Port and SIPCOT Industrial Area.',
    features: ['Office Spaces', 'Showrooms', 'Warehouses', 'Port-Side Properties'],
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80',
    badge: 'Buy / Sell',
    badgeColor: '#1D4ED8',
  },
  {
    type: 'Land & Plots',
    icon: MapPin,
    color: '#D97706',
    bg: '#FFFBEB',
    title: 'Plots & Land for Sale',
    desc: 'DTCP approved plots in prime Thoothukudi locations — Ettayapuram Road, Srivaikundam, and coastal areas.',
    features: ['DTCP Approved', 'NA Plots', 'Agricultural Land', 'Beach-Side Plots'],
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    badge: 'Plots',
    badgeColor: '#D97706',
  },
  {
    type: 'Rental',
    icon: Key,
    color: '#7C3AED',
    bg: '#F5F3FF',
    title: 'Rent / Lease Properties',
    desc: 'Fully furnished rentals and long-term leases for families and businesses settling in Thoothukudi.',
    features: ['Furnished Flats', 'Shop Rentals', 'Godown Lease', 'PG Accommodations'],
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
    badge: 'Rent',
    badgeColor: '#7C3AED',
  },
];

const sellingSteps = [
  { num: '01', title: 'List Your Property', desc: 'Share property details, photos, and your expected price with our team.', icon: Home },
  { num: '02', title: 'Free Valuation', desc: 'Our experts assess market value based on location, size, and current demand in Thoothukudi.', icon: TrendingUp },
  { num: '03', title: 'Find Buyers Fast', desc: 'We connect you with verified, serious buyers from our active network.', icon: Users },
  { num: '04', title: 'Legal & Registration', desc: 'Full assistance with documentation, legal verification, and registration at the Sub-Registrar office.', icon: Shield },
];

const areas = [
  { name: 'Millerpuram', type: 'Residential Hub' },
  { name: 'Thoothukudi Port Area', type: 'Commercial Zone' },
  { name: 'Ettayapuram Road', type: 'Plots & Villas' },
  { name: 'Srivaikundam', type: 'Land & Agriculture' },
  { name: 'Palayamkottai Road', type: 'Mixed Development' },
  { name: 'SIPCOT Area', type: 'Industrial / Warehouse' },
  { name: 'Beach Road', type: 'Coastal Properties' },
  { name: 'Kamaraj Nagar', type: 'Residential Flats' },
];

function ListingCard({ item, i }) {
  const Icon = item.icon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.65 }}
      whileHover={{ y: -6, boxShadow: `0 20px 50px ${item.color}18` }}
      style={{
        background: 'white', border: '1px solid #E2E8F0', borderRadius: 22,
        overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        transition: 'all 0.3s', display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ height: 180, position: 'relative', overflow: 'hidden' }}>
        <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, white, transparent)' }} />
        <span style={{
          position: 'absolute', top: 14, right: 14,
          padding: '4px 14px', borderRadius: 50,
          background: item.badgeColor, color: 'white',
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em',
        }}>{item.badge}</span>
      </div>
      <div style={{ padding: '0 26px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          width: 50, height: 50, borderRadius: 14, background: item.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 16, marginTop: '-25px', position: 'relative', zIndex: 10,
          boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
        }}>
          <Icon size={22} color={item.color} strokeWidth={2} />
        </div>
        <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.08rem', color: C.text, marginBottom: 8 }}>{item.title}</h3>
        <p style={{ color: C.mid, fontSize: '0.86rem', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{item.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {item.features.map(f => (
            <span key={f} style={{
              padding: '3px 10px', background: `${item.color}10`,
              border: `1px solid ${item.color}25`, borderRadius: 6,
              fontSize: '0.71rem', color: item.color, fontWeight: 600,
            }}>{f}</span>
          ))}
        </div>
        <Link to="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          color: item.color, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
        }}>
          Enquire Now <ChevronRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function RealEstatePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div style={{ minHeight: '100vh', background: 'white', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        padding: '140px 32px 80px',
        background: `url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(14,64,39,0.9) 0%, rgba(26,107,60,0.88) 55%, rgba(21,128,61,0.82) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'white', clipPath: 'ellipse(55% 100% at 50% 100%)', zIndex: 2 }} />

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 40 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 3, textAlign: 'center' }}
        >
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
            <Link to="/services" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={13} color="rgba(255,255,255,0.5)" />
            <span style={{ color: 'white', fontSize: '0.82rem', fontWeight: 600 }}>Real Estate</span>
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 20px', background: 'rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.4)', borderRadius: 50, marginBottom: 24,
          }}>
            <MapPin size={14} color="white" />
            <span style={{ color: 'white', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Thoothukudi Real Estate
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            color: 'white', letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 22,
          }}>
            Buy & Sell Properties in{' '}
            <span style={{ background: 'linear-gradient(90deg, #FCD34D, #FFFFFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Thoothukudi
            </span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 580, margin: '0 auto 40px' }}>
            Trusted real estate services across Thoothukudi district — residential, commercial, plots, and rentals. Your dream property is just a call away.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 34px', background: 'white', color: C.primary,
              fontFamily: 'Inter', fontWeight: 800, borderRadius: 50,
              textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
            }}>
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            <a href="tel:+919876543210" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 30px', background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.4)', color: 'white',
              fontFamily: 'Inter', fontWeight: 600, borderRadius: 50, textDecoration: 'none',
            }}>
              <Phone size={16} /> Call Now
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { v: '500+', l: 'Properties Sold' },
              { v: '8+', l: 'Areas Covered' },
              { v: '98%', l: 'Client Satisfaction' },
              { v: '10+', l: 'Years in Thoothukudi' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: '2rem', color: 'white' }}>{s.v}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── LISTINGS GRID ── */}
      <section style={{ padding: '90px 32px', background: '#F8FFF8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: 'center', marginBottom: 60 }}
          >
            <h2 style={{
              fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3rem)', color: C.text,
              letterSpacing: '-0.03em', marginBottom: 14,
            }}>Our Real Estate Services</h2>
            <p style={{ color: C.mid, fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>
              Whether you're buying, selling, or renting — we handle everything in Thoothukudi and surrounding areas.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {listings.map((item, i) => <ListingCard key={item.type} item={item} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── HOW TO SELL ── */}
      <section style={{ padding: '90px 32px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 60 }}
          >
            <h2 style={{
              fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: C.text,
              letterSpacing: '-0.03em', marginBottom: 14,
            }}>How to Sell Your Property?</h2>
            <p style={{ color: C.mid, fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
              Simple 4-step process — we do all the work so you get the best price, hassle-free.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 28 }}>
            {sellingSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  style={{
                    padding: '32px 26px', background: C.light,
                    border: `1px solid ${C.primary}20`, borderRadius: 20,
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 16, right: 20,
                    fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
                    fontSize: '3rem', color: `${C.primary}10`, lineHeight: 1,
                  }}>{step.num}</div>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: `linear-gradient(135deg, ${C.primary}, ${C.dark})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
                  }}>
                    <Icon size={22} color="white" />
                  </div>
                  <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, color: C.text, fontSize: '1rem', marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ color: C.mid, fontSize: '0.86rem', lineHeight: 1.65 }}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AREAS COVERED ── */}
      <section style={{ padding: '80px 32px', background: `linear-gradient(135deg, ${C.dark}, ${C.primary})`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2 style={{
              fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'white',
              letterSpacing: '-0.03em', marginBottom: 12,
            }}>Areas We Cover in Thoothukudi</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>
              Active listings across all major localities in Thoothukudi district.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {areas.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                style={{
                  padding: '20px 18px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: 16, backdropFilter: 'blur(12px)',
                  cursor: 'default',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <MapPin size={14} color="#FCD34D" />
                  <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, color: 'white', fontSize: '0.9rem' }}>{area.name}</span>
                </div>
                <span style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>{area.type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: '80px 32px', background: 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 50 }}
          >
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: C.text, letterSpacing: '-0.03em', marginBottom: 12 }}>
              Why Trust CSR for Real Estate?
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { e: '🏠', t: 'Local Expertise', d: 'Deep knowledge of Thoothukudi market trends and pricing.' },
              { e: '📜', t: 'Legal Support', d: 'End-to-end help with documents, EC, patta, and registration.' },
              { e: '🤝', t: 'Verified Buyers', d: 'We connect you only with serious, pre-verified buyers.' },
              { e: '💰', t: 'Best Price', d: 'Our valuation ensures you never under-sell or overpay.' },
            ].map(w => (
              <motion.div
                key={w.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  padding: '26px 22px', background: C.light,
                  border: `1px solid ${C.primary}20`, borderRadius: 20, textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>{w.e}</div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, color: C.text, marginBottom: 8 }}>{w.t}</div>
                <div style={{ color: C.mid, fontSize: '0.84rem', lineHeight: 1.6 }}>{w.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '90px 32px', background: C.light, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 16 }}>
            {[1,2,3,4,5].map(n => <Star key={n} size={18} color={C.accent} fill={C.accent} />)}
            <span style={{ color: C.mid, fontSize: '0.85rem', marginLeft: 8 }}>Trusted by 500+ families in Thoothukudi</span>
          </div>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: C.text, letterSpacing: '-0.03em', marginBottom: 16 }}>
            Ready to Buy or Sell in Thoothukudi?
          </h2>
          <p style={{ color: C.mid, fontSize: '1rem', maxWidth: 480, margin: '0 auto 36px' }}>
            Talk to our local property experts today. Free consultation, honest advice, zero pressure.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 40px',
              background: `linear-gradient(135deg, ${C.primary}, ${C.dark})`,
              color: 'white', fontFamily: 'Inter', fontWeight: 700,
              fontSize: '1rem', borderRadius: 50, textDecoration: 'none',
              boxShadow: `0 8px 40px ${C.primary}35`,
            }}>
              Contact Our Team <ArrowRight size={16} />
            </Link>
            <a href="tel:+919876543210" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '16px 34px', background: 'white',
              border: `2px solid ${C.primary}`, color: C.primary,
              fontFamily: 'Inter', fontWeight: 700, fontSize: '1rem',
              borderRadius: 50, textDecoration: 'none',
            }}>
              <Phone size={16} /> Call: +91 98765 43210
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
