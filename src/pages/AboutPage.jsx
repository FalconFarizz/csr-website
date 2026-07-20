import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, MapPin, Phone, Mail, CheckCircle2, Award, Users, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { companyInfo, whyCSR } from '../data/data';

const C = { blue: '#1A5BF6', purple: '#7C3AED', sky: '#0EA5E9', dark: '#0F172A', mid: '#475569' };

function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section style={{ padding: '160px 32px 90px', background: 'linear-gradient(160deg, #050d1f 0%, #0b1f45 50%, #071320 100%)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,91,246,0.15), transparent 70%)', pointerEvents: 'none' }} />
      <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
        <span style={{ display: 'inline-block', padding: '8px 22px', background: 'rgba(26,91,246,0.1)', border: '1px solid rgba(26,91,246,0.3)', borderRadius: 50, color: '#5B9BFF', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>About CSR Tech Solutions</span>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4.4rem)', color: 'white', letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 22 }}>
          Technology, Events &{' '}
          <span style={{ background: 'linear-gradient(90deg,#1A5BF6,#7C3AED,#0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital Growth</span>
          <br />under one roof.
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.08rem', lineHeight: 1.75, maxWidth: 680, margin: '0 auto' }}>{companyInfo.description}</p>
      </motion.div>
    </section>
  );
}

function CompanyIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section style={{ padding: '100px 32px', background: 'linear-gradient(180deg, #0d1f3c 0%, #071320 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <span style={{ display: 'inline-block', padding: '7px 22px', background: 'rgba(26,91,246,0.08)', border: '1px solid rgba(26,91,246,0.2)', borderRadius: 50, color: '#1A5BF6', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Who We Are</span>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
              Your one-stop partner for <span style={{ color: '#5B9BFF' }}>IT</span>, <span style={{ color: '#a78bfa' }}>Events</span> & <span style={{ color: '#38bdf8' }}>Digital</span>.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: 16 }}>{companyInfo.description}</p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: 24 }}>We are a young, professional team based in Sawyerpuram, Thoothukudi, working with clients across India. Our strength is our ability to deliver three very different, but equally important, services with the same level of quality, commitment and creativity.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
              {['Custom Solutions', 'End-to-End Delivery', 'Quality First', 'Honest Pricing'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="#00C2FF" />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} style={{ display: 'grid', gap: 20 }}>
            <div style={{ padding: 28, background: 'rgba(26,91,246,0.08)', border: '1px solid rgba(26,91,246,0.25)', borderRadius: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#1A5BF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Target size={20} color="white" /></div>
                <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: 'white' }}>Our Mission</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{companyInfo.mission}</p>
            </div>
            <div style={{ padding: 28, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Eye size={20} color="white" /></div>
                <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: 'white' }}>Our Vision</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{companyInfo.vision}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const items = [
    { icon: Award, value: 'Quality', label: 'Driven Work' },
    { icon: Users, value: 'Friendly', label: 'Professional Team' },
    { icon: Briefcase, value: '3 Core', label: 'Service Pillars' },
    { icon: Heart, value: '100%', label: 'Client Focus' },
  ];
  return (
    <section style={{ padding: '80px 32px', background: 'linear-gradient(180deg, #071320 0%, #0a1628 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={it.label} style={{ padding: 28, background: 'rgba(255,255,255,0.04)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #1A5BF6, #7C3AED)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={26} color="white" />
                </div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: '1.6rem', color: 'white', letterSpacing: '-0.02em' }}>{it.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500 }}>{it.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section style={{ padding: '100px 32px', background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ display: 'inline-block', padding: '7px 22px', background: 'rgba(26,91,246,0.08)', border: '1px solid rgba(26,91,246,0.2)', borderRadius: 50, color: '#1A5BF6', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Why Choose Us</span>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', letterSpacing: '-0.03em', marginBottom: 16 }}>Why businesses choose CSR</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.02rem', maxWidth: 620, margin: '0 auto' }}>Honest, professional and committed to your success.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {whyCSR.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.6 }} style={{ padding: 24, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18 }} whileHover={{ background: 'rgba(0,194,255,0.06)', borderColor: 'rgba(0,194,255,0.25)', y: -6 }}>
              <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>{w.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: 'white', marginBottom: 8 }}>{w.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.6 }}>{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section style={{ padding: '80px 32px', background: 'linear-gradient(180deg, #0d1f3c 0%, #071320 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ padding: '40px 32px', background: 'rgba(255,255,255,0.04)', borderRadius: 28, border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'white', marginBottom: 8, textAlign: 'center' }}>Get in touch</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.98rem', textAlign: 'center', marginBottom: 28 }}>We are happy to answer any questions you may have.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
            <a href={'tel:' + companyInfo.phone} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 18, background: '#EEF3FF', borderRadius: 16, textDecoration: 'none', color: C.dark }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#1A5BF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={20} color="white" /></div>
              <div>
                <div style={{ fontSize: '0.75rem', color: C.mid, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Us</div>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>{companyInfo.phone}</div>
              </div>
            </a>
            <a href={'mailto:' + companyInfo.email} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 18, background: '#F5F3FF', borderRadius: 16, textDecoration: 'none', color: C.dark }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={20} color="white" /></div>
              <div>
                <div style={{ fontSize: '0.75rem', color: C.mid, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Us</div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{companyInfo.email}</div>
              </div>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 18, background: '#F0F9FF', borderRadius: 16, color: C.dark }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#0EA5E9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin size={20} color="white" /></div>
              <div>
                <div style={{ fontSize: '0.75rem', color: C.mid, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Visit Us</div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.4 }}>{companyInfo.address}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ padding: '80px 32px', background: 'linear-gradient(135deg, #1A5BF6, #7C3AED)', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'white', marginBottom: 12 }}>Ready to work with us?</h2>
      <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 28, fontSize: '1rem' }}>Let's talk about your next project - software, an event or digital growth.</p>
      <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 36px', background: 'white', color: '#1A5BF6', borderRadius: 50, textDecoration: 'none', fontWeight: 800, boxShadow: '0 8px 30px rgba(0,0,0,0.18)' }}>Contact Us <ArrowRight size={16} /></Link>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <CompanyIntro />
      <Stats />
      <WhyUs />
      <ContactBlock />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
