import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Star, Users, Zap, CheckCircle } from 'lucide-react';
import heroTeamImg from '../assets/hero-team.png';

const words = ['Innovate', 'Build', 'Scale', 'Automate', 'Accelerate'];

function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = words[index];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span style={{ color: '#00C2FF' }}>
      {displayed}
      <span style={{
        display: 'inline-block', width: 3, height: '0.9em',
        background: '#00C2FF', marginLeft: 2,
        animation: 'blink 1s step-start infinite',
        verticalAlign: 'text-bottom', borderRadius: 2,
      }} />
    </span>
  );
}

const clientLogos = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Stripe', 'Vercel', 'Notion', 'Figma'
];

const floatingOrbs = [
  { size: 600, x: -250, y: -150, color: 'rgba(0,194,255,0.10)', delay: 0, duration: 9 },
  { size: 500, x: 500, y: 150, color: 'rgba(22,59,128,0.14)', delay: 2, duration: 11 },
  { size: 400, x: 50, y: 350, color: 'rgba(0,208,132,0.07)', delay: 4, duration: 13 },
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(160deg, #060e1a 0%, #0a1830 45%, #071020 100%)',
      }}
    >
      {/* Animated Grid Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,194,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,194,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Floating Orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{ x: [orb.x, orb.x + 50, orb.x], y: [orb.y, orb.y - 50, orb.y] }}
          transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', width: orb.size, height: orb.size,
            borderRadius: '50%', background: orb.color,
            filter: 'blur(90px)', pointerEvents: 'none',
          }}
        />
      ))}

      {/* Center radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 1000, height: 700,
        background: 'radial-gradient(ellipse, rgba(0,194,255,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Main Content */}
      <motion.div style={{ y, opacity, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          maxWidth: 1320,
          margin: '0 auto',
          width: '100%',
          padding: '0 40px',
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          paddingTop: 140,
          paddingBottom: 80,
        }}>

          {/* ─── LEFT: Text Content ─── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ marginBottom: 28 }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 20px',
                background: 'rgba(0,194,255,0.08)',
                border: '1px solid rgba(0,194,255,0.25)',
                borderRadius: 50,
                color: '#00C2FF', fontSize: '0.80rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                fontFamily: 'Inter',
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#00C2FF',
                  animation: 'pulseGlow 2s ease-in-out infinite',
                }} />
                🏆 Award-Winning Technology Partner
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              style={{ marginBottom: 24 }}
            >
              <h1 style={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: 'clamp(2.4rem, 4vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'white',
                margin: 0,
              }}>
                We Help Enterprises
                <br />
                <TypeWriter />
                <br />
                <span style={{
                  background: 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.65) 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  at Digital Speed
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{
                color: 'rgba(255,255,255,0.58)',
                fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)',
                lineHeight: 1.75,
                marginBottom: 40,
                fontFamily: 'Inter',
                maxWidth: 520,
              }}
            >
              From AI-powered software to enterprise cloud solutions — CSR Tech Solutions delivers
              world-class technology that transforms businesses and drives measurable growth.
            </motion.p>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}
            >
              {[
                'IT Software Development & Cloud Solutions',
                'Corporate Event Management & Launches',
                'Digital Marketing, SEO & Growth Strategies',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={15} color="#00C2FF" />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', fontFamily: 'Inter' }}>
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 52 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '15px 34px',
                  background: 'linear-gradient(135deg, #00C2FF 0%, #163B80 100%)',
                  color: 'white', fontFamily: 'Inter', fontWeight: 700, fontSize: '0.98rem',
                  borderRadius: 50, textDecoration: 'none',
                  boxShadow: '0 0 50px rgba(0,194,255,0.35), 0 8px 24px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                }}
              >
                Start Your Project <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '15px 34px',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: 'white', fontFamily: 'Inter', fontWeight: 600, fontSize: '0.98rem',
                  borderRadius: 50, textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <Play size={16} fill="white" /> View Our Work
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              style={{
                display: 'flex', gap: 36, flexWrap: 'wrap',
                paddingTop: 32,
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {[
                { num: '250+', label: 'Projects Delivered' },
                { num: '98%', label: 'Client Satisfaction' },
                { num: '12+', label: 'Years Experience' },
                { num: '50+', label: 'Expert Engineers' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: 'Space Grotesk', fontWeight: 800,
                    fontSize: 'clamp(1.4rem, 2vw, 1.9rem)',
                    background: 'linear-gradient(135deg, #fff 30%, #00C2FF 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                  }}>
                    {stat.num}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', marginTop: 5, fontFamily: 'Inter' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT: Hero Photo ─── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.0, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            {/* Outer glow ring */}
            <div style={{
              position: 'absolute',
              inset: -24,
              background: 'radial-gradient(ellipse at center, rgba(0,194,255,0.18) 0%, rgba(22,59,128,0.1) 50%, transparent 75%)',
              borderRadius: 36,
              filter: 'blur(20px)',
              zIndex: 0,
            }} />

            {/* Decorative corner accents */}
            <div style={{
              position: 'absolute', top: -4, left: -4, width: 40, height: 40,
              borderTop: '2.5px solid #00C2FF', borderLeft: '2.5px solid #00C2FF',
              borderRadius: '8px 0 0 0', zIndex: 3, opacity: 0.7,
            }} />
            <div style={{
              position: 'absolute', bottom: -4, right: -4, width: 40, height: 40,
              borderBottom: '2.5px solid #00C2FF', borderRight: '2.5px solid #00C2FF',
              borderRadius: '0 0 8px 0', zIndex: 3, opacity: 0.7,
            }} />

            {/* Main Image Frame */}
            <div style={{
              position: 'relative', zIndex: 1,
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid rgba(0,194,255,0.2)',
              boxShadow: `
                0 40px 100px rgba(0,0,0,0.6),
                0 0 0 1px rgba(255,255,255,0.04),
                inset 0 0 0 1px rgba(0,194,255,0.08)
              `,
              aspectRatio: '4/3',
            }}>
              <img
                src={heroTeamImg}
                alt="CSR Tech Solutions team working in a modern office"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              {/* Gradient overlay — bottom fade for premium look */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(6,14,26,0.65) 100%)',
                pointerEvents: 'none',
              }} />
              {/* Subtle color tint overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(0,194,255,0.05) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Floating Badge: Live Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              whileHover={{ y: -3 }}
              style={{
                position: 'absolute', top: -18, left: -22, zIndex: 4,
                background: 'rgba(6,14,26,0.88)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,194,255,0.28)',
                borderRadius: 16,
                padding: '12px 18px',
                display: 'flex', alignItems: 'center', gap: 12,
                boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(0,194,255,0.1)',
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'linear-gradient(135deg, #00C2FF, #163B80)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Zap size={18} color="white" fill="white" />
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem', fontFamily: 'Space Grotesk', lineHeight: 1.2 }}>
                  Live Projects
                </div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', marginTop: 2, fontFamily: 'Inter' }}>
                  12 active right now
                </div>
              </div>
            </motion.div>

            {/* Floating Badge: Client Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ y: -3 }}
              style={{
                position: 'absolute', bottom: -18, right: -22, zIndex: 4,
                background: 'rgba(6,14,26,0.88)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,215,0,0.2)',
                borderRadius: 16,
                padding: '12px 18px',
                display: 'flex', alignItems: 'center', gap: 12,
                boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255,215,0,0.08)',
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'linear-gradient(135deg, #FFD700, #FF8C00)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Star size={18} color="white" fill="white" />
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem', fontFamily: 'Space Grotesk', lineHeight: 1.2 }}>
                  5.0 Rating
                </div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', marginTop: 2, fontFamily: 'Inter' }}>
                  From 200+ clients
                </div>
              </div>
            </motion.div>

            {/* Floating Badge: Team */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.35, duration: 0.6 }}
              whileHover={{ x: 3 }}
              style={{
                position: 'absolute', bottom: 64, left: -28, zIndex: 4,
                background: 'rgba(6,14,26,0.88)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,208,132,0.25)',
                borderRadius: 14,
                padding: '10px 16px',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}
            >
              <Users size={15} color="#00D084" />
              <span style={{ color: '#00D084', fontWeight: 700, fontSize: '0.82rem', fontFamily: 'Space Grotesk' }}>
                50+ Experts
              </span>
            </motion.div>

            {/* Location tag at bottom of image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              style={{
                position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)',
                zIndex: 4,
                background: 'rgba(6,14,26,0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 30,
                padding: '7px 18px',
                display: 'flex', alignItems: 'center', gap: 7,
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: 12 }}>📍</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.76rem', fontFamily: 'Inter', fontWeight: 500 }}>
                Sawyerpuram, Thoothukudi — Serving across India
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Client Logos Ticker ─── */}
      <div style={{ padding: '36px 0', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <p style={{
          textAlign: 'center', color: 'rgba(255,255,255,0.25)',
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', marginBottom: 22, fontFamily: 'Inter',
        }}>
          Trusted by leading companies worldwide
        </p>
        <div style={{ display: 'flex', gap: 64, animation: 'marquee 22s linear infinite', width: 'max-content' }}>
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <span key={i} style={{
              color: 'rgba(255,255,255,0.22)', fontFamily: 'Plus Jakarta Sans',
              fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}>
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: 110, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          pointerEvents: 'none',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem', letterSpacing: '0.12em', fontFamily: 'Inter' }}>SCROLL</span>
        <ChevronDown size={15} color="rgba(255,255,255,0.25)" />
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 1; box-shadow: 0 0 6px #00C2FF; } 50% { opacity: 0.4; box-shadow: none; } }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 110px !important;
            gap: 48px !important;
          }
          .hero-photo-col {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
