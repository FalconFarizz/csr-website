import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div style={{ minHeight: '100vh', background: '#071320' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: '140px 32px 80px',
        background: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat`,
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(11, 31, 69, 0.9) 0%, rgba(7, 19, 32, 0.9) 100%)', zIndex: 1
        }} />
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,208,132,0.15), transparent 70%)',
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
            background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.3)',
            borderRadius: 50, color: '#00D084', fontSize: '0.78rem',
            fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24,
          }}>Pricing Plans</span>
          <h1 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 900,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: 'white',
            letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 22,
          }}>
            Transparent Pricing,{' '}
            <span style={{ background: 'linear-gradient(90deg,#00D084,#00C2FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Real Value
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Flexible engagement models designed to fit startups, growing businesses, and enterprises. No hidden fees, ever.
          </p>
        </motion.div>
      </section>

      <Pricing />
      <FAQ />

      {/* CTA */}
      <section style={{ padding: '80px 32px', background: '#040e1a', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: 16 }}>
          Need a Custom Quote?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>Our team will create a tailored plan that fits your exact requirements.</p>
        <Link to="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '14px 36px', background: 'linear-gradient(135deg,#00D084,#00C2FF)',
          color: 'white', borderRadius: 50, textDecoration: 'none',
          fontFamily: 'Inter', fontWeight: 700,
        }}>Get Custom Quote <ArrowRight size={16} /></Link>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
