import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Calendar, TrendingUp, ChevronRight, Star, Sparkles, MapPin, Target, Eye, CheckCircle2, Phone, Mail, Zap, Users } from 'lucide-react';
import heroTeamImg from '../assets/hero-team.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AnimatedCounter from '../components/AnimatedCounter';
import WaveDivider from '../components/WaveDivider';
import { companyInfo, servicePillars, stats, testimonials, whyCSR } from '../data/data';

const C = { blue: '#1A5BF6', purple: '#7C3AED', sky: '#0EA5E9', dark: '#0F172A', mid: '#475569' };

function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '140px 40px 80px', background: 'linear-gradient(160deg, #050d1f 0%, #0b1f45 50%, #071320 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Background effects */}
      <div style={{ position: 'absolute', top: '5%', right: '5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,91,246,0.12), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div ref={ref} style={{ maxWidth: 1280, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

        {/* LEFT: Text */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.1, duration: 0.6 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28, padding: '8px 20px', background: 'rgba(26,91,246,0.1)', border: '1px solid rgba(26,91,246,0.3)', borderRadius: 50 }}>
            <Sparkles size={13} color="#5B9BFF" />
            <span style={{ color: '#5B9BFF', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>IT Software . Events . Digital</span>
          </motion.div>

          <h1 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)', color: 'white', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 28 }}>
            Technology. Events.{' '}
            <span style={{ background: 'linear-gradient(90deg, #1A5BF6, #7C3AED, #0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital Growth.</span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>{companyInfo.description}</p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 38px', background: 'linear-gradient(135deg, #1A5BF6, #7C3AED)', color: 'white', fontWeight: 700, fontSize: '1rem', borderRadius: 50, textDecoration: 'none', boxShadow: '0 8px 40px rgba(26,91,246,0.4)' }}>
              Explore Our Services <ArrowRight size={18} />
            </Link>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 34px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', fontWeight: 600, fontSize: '1rem', borderRadius: 50, textDecoration: 'none' }}>
              Get a Free Quote <ChevronRight size={18} />
            </Link>
          </div>

          <div style={{ display: 'flex', gap: 44, flexWrap: 'wrap', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: '2rem', color: 'white', letterSpacing: '-0.03em', background: 'linear-gradient(135deg,#fff 30%,#5B9BFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <AnimatedCounter end={parseInt(s.value)} suffix={s.value.replace(/[0-9]/g,'')} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 500, marginTop: 4 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Photo */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.94 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 1.0, ease: 'easeOut' }}
          style={{ position: 'relative' }}
        >
          {/* Glow */}
          <div style={{ position: 'absolute', inset: -28, background: 'radial-gradient(ellipse at center, rgba(26,91,246,0.2) 0%, rgba(124,58,237,0.1) 50%, transparent 75%)', borderRadius: 36, filter: 'blur(24px)', zIndex: 0 }} />

          {/* Corner accents */}
          <div style={{ position: 'absolute', top: -5, left: -5, width: 36, height: 36, borderTop: '2.5px solid #1A5BF6', borderLeft: '2.5px solid #1A5BF6', borderRadius: '8px 0 0 0', zIndex: 3 }} />
          <div style={{ position: 'absolute', bottom: -5, right: -5, width: 36, height: 36, borderBottom: '2.5px solid #7C3AED', borderRight: '2.5px solid #7C3AED', borderRadius: '0 0 8px 0', zIndex: 3 }} />

          {/* Image frame */}
          <div style={{ position: 'relative', zIndex: 1, borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(26,91,246,0.22)', boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)', aspectRatio: '4/3' }}>
            <img
              src={heroTeamImg}
              alt="CSR Tech Solutions team working in a modern office"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.6s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(5,13,31,0.7) 100%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,91,246,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
          </div>

          {/* Badge: Live Projects */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9, duration: 0.6 }} whileHover={{ y: -3 }}
            style={{ position: 'absolute', top: -18, left: -22, zIndex: 4, background: 'rgba(5,13,31,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(26,91,246,0.3)', borderRadius: 16, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 11, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#1A5BF6,#7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Zap size={17} color="white" fill="white" />
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '0.86rem', fontFamily: 'Plus Jakarta Sans' }}>Live Projects</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', marginTop: 2 }}>12 active right now</div>
            </div>
          </motion.div>

          {/* Badge: Rating */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.1, duration: 0.6 }} whileHover={{ y: -3 }}
            style={{ position: 'absolute', bottom: -18, right: -22, zIndex: 4, background: 'rgba(5,13,31,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,215,0,0.22)', borderRadius: 16, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 11, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#FFD700,#FF8C00)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Star size={17} color="white" fill="white" />
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '0.86rem', fontFamily: 'Plus Jakarta Sans' }}>5.0 Rating</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', marginTop: 2 }}>From 200+ clients</div>
            </div>
          </motion.div>

          {/* Badge: Team */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1.25, duration: 0.6 }}
            style={{ position: 'absolute', bottom: 60, left: -26, zIndex: 4, background: 'rgba(5,13,31,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,208,132,0.25)', borderRadius: 14, padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 28px rgba(0,0,0,0.5)' }}>
            <Users size={14} color="#00D084" />
            <span style={{ color: '#00D084', fontWeight: 700, fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans' }}>50+ Experts</span>
          </motion.div>

          {/* Location pill */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.4, duration: 0.5 }}
            style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 4, background: 'rgba(5,13,31,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 30, padding: '6px 16px', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
            <MapPin size={11} color="#5B9BFF" />
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem', fontWeight: 500 }}>Sawyerpuram, Thoothukudi — Serving across India</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <>
    <WaveDivider topColor="#050d1f" bottomColor="#0d1f3c" />
    <section style={{ padding: '100px 32px', background: 'linear-gradient(180deg, #0d1f3c 0%, #071320 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <span style={{ display: 'inline-block', padding: '7px 22px', background: 'rgba(26,91,246,0.08)', border: '1px solid rgba(26,91,246,0.2)', borderRadius: 50, color: '#1A5BF6', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>About Us</span>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
              A trusted partner for <span style={{ color: '#5B9BFF' }}>technology</span>, <span style={{ color: '#a78bfa' }}>events</span> & <span style={{ color: '#38bdf8' }}>digital growth</span>.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: 24 }}>{companyInfo.description}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
              {['Innovative Tech Services', 'Successful Event Experiences', 'Effective Digital Strategies', 'Reliable Long-term Support'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.85)', fontWeight: 600, fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="#00C2FF" />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} style={{ display: 'grid', gap: 20 }}>
            <div style={{ padding: 28, background: 'rgba(26,91,246,0.08)', border: '1px solid rgba(26,91,246,0.25)', borderRadius: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#1A5BF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={20} color="white" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: 'white' }}>Our Mission</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{companyInfo.mission}</p>
            </div>
            <div style={{ padding: 28, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Eye size={20} color="white" />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '1.15rem', color: 'white' }}>Our Vision</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{companyInfo.vision}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}

function ServicesPillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section style={{ padding: '100px 32px', background: 'linear-gradient(180deg, #071320 0%, #0a1628 100%)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ display: 'inline-block', padding: '7px 22px', background: 'rgba(26,91,246,0.08)', border: '1px solid rgba(26,91,246,0.2)', borderRadius: 50, color: '#1A5BF6', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>What We Do</span>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white', letterSpacing: '-0.03em', marginBottom: 16 }}>Three Pillars of Excellence</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: 620, margin: '0 auto' }}>From technology to events to digital marketing — we cover every dimension of your business growth.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
          {servicePillars.map((p, i) => {
            const [tilt, setTilt] = useState({ x: 0, y: 0 });
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientY - r.top) / r.height - 0.5) * 14;
                  const y = -((e.clientX - r.left) / r.width - 0.5) * 14;
                  setTilt({ x, y });
                }}
                onMouseLeave={() => setTilt({ x: 0, y: 0 })}
                whileHover={{ y: -10, boxShadow: '0 32px 80px ' + p.color + '33, 0 0 0 1px ' + p.color + '44', background: 'rgba(255,255,255,0.06)' }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                  transformStyle: 'preserve-3d',
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: 'box-shadow 0.35s ease, transform 0.15s ease',
                }}
              >
                <div style={{ height: 4, background: 'linear-gradient(90deg, ' + p.color + ', ' + p.color + '60)' }} />
                <div style={{ padding: '32px' }}>
                  <div style={{ fontSize: '2.4rem', marginBottom: 16 }}>{p.icon}</div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.3rem', color: 'white', marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: 20 }}>{p.shortDesc}</p>
                  <ul style={{ listStyle: 'none', marginBottom: 24 }}>
                    {p.offerings.slice(0, 4).map((o) => (
                      <li key={o} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link to={p.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: p.color, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                    Explore {p.title.split(' ')[0]} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section style={{ padding: '100px 32px', background: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{ display: 'inline-block', padding: '7px 22px', background: 'rgba(26,91,246,0.08)', border: '1px solid rgba(26,91,246,0.2)', borderRadius: 50, color: '#1A5BF6', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Why CSR</span>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', letterSpacing: '-0.03em', marginBottom: 16 }}>Why businesses choose CSR</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.02rem', maxWidth: 600, margin: '0 auto' }}>Friendly, professional and committed to your success.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {whyCSR.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{ padding: 24, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, transition: 'all 0.3s' }}
              whileHover={{ background: 'rgba(0,194,255,0.06)', borderColor: 'rgba(0,194,255,0.25)', y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.3)' }}
            >
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

function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section style={{ padding: '100px 32px', background: 'linear-gradient(135deg, #0D3DBF 0%, #1A5BF6 60%, #38BDF8 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white', letterSpacing: '-0.03em', marginBottom: 18 }}>
          Let's build your next big project together.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: 32 }}>
          Call us, email us, or visit our office in Sawyerpuram, Thoothukudi. We're ready to help your business grow.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', background: 'white', color: '#1A5BF6', fontWeight: 800, fontSize: '1rem', borderRadius: 50, textDecoration: 'none', boxShadow: '0 8px 40px rgba(0,0,0,0.2)' }}>
            Contact Us <ArrowRight size={18} />
          </Link>
          <a href={'tel:' + companyInfo.phone} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.35)', color: 'white', fontWeight: 600, fontSize: '1rem', borderRadius: 50, textDecoration: 'none' }}>
            <Phone size={18} /> {companyInfo.phone}
          </a>
        </div>
        <div style={{ display: 'flex', gap: 28, justifyContent: 'center', flexWrap: 'wrap', color: 'rgba(255,255,255,0.9)', fontSize: '0.92rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><MapPin size={16} /> {companyInfo.address}</span>
          <a href={'mailto:' + companyInfo.email} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'white', textDecoration: 'none' }}><Mail size={16} /> {companyInfo.email}</a>
        </div>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesPillars />
      <WhySection />
      <ContactCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
