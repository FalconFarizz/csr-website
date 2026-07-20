import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyCSR } from '../data/data';
import AnimatedCounter from './AnimatedCounter';

export default function WhyCSR() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="why-csr" style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, #0B1F45 0%, #071320 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background elements */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.4), transparent)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.2), transparent)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center',
        }}>
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span style={{
              display: 'inline-block', padding: '6px 20px',
              background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.3)',
              borderRadius: 50, color: '#00D084', fontSize: '0.8rem',
              fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24,
            }}>
              Why CSR Tech
            </span>

            <h2 style={{
              fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'white',
              letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24,
            }}>
              The Standard for
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #00D084, #00C2FF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Excellence
              </span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem',
              lineHeight: 1.75, marginBottom: 40,
            }}>
              We don't just build software. We engineer competitive advantages.
              With 12+ years of crafting enterprise solutions, we bring unparalleled
              expertise, precision, and dedication to every project we undertake.
            </p>

            {/* Large Stat */}
            <div className="gradient-border-animated" style={{
              padding: '28px 32px',
              borderRadius: 20,
            }}>
              <div style={{
                fontFamily: 'Space Grotesk', fontWeight: 900,
                fontSize: '3.5rem', color: '#00D084', lineHeight: 1,
              }}>
                <AnimatedCounter end={98} suffix="%" duration={2200} />
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>
                Client Satisfaction Rate — across 250+ enterprise projects
              </div>
            </div>
          </motion.div>

          {/* Right: Cards Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}>
            {whyCSR.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.6 }}
                style={{
                  padding: '24px 20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 18,
                  transition: 'all 0.3s',
                }}
                whileHover={{
                  background: 'rgba(0,194,255,0.06)',
                  borderColor: 'rgba(0,194,255,0.25)',
                  y: -4,
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{item.icon}</div>
                <h4 style={{
                  fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
                  fontSize: '0.92rem', color: 'white', marginBottom: 8,
                }}>
                  {item.title}
                </h4>
                <p style={{
                  color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem',
                  lineHeight: 1.6,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          style={{
            marginTop: 80, padding: '40px 48px',
            background: 'linear-gradient(135deg, rgba(0,194,255,0.06), rgba(0,208,132,0.04))',
            border: '1px solid rgba(0,194,255,0.15)',
            borderRadius: 24,
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40, textAlign: 'center',
          }}
        >
          {[
            { icon: '🏆', label: 'Awards Won', end: 18, suffix: '+' },
            { icon: '🌍', label: 'Countries Served', end: 32, suffix: '+' },
            { icon: '⚡', label: 'Avg Deploy Frequency', end: null, text: 'Daily' },
            { icon: '🔒', label: 'Security Incidents', end: 0, suffix: '' },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>{item.icon}</div>
              <div style={{
                fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '2rem',
                background: 'linear-gradient(135deg, #fff, #00C2FF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                {item.end !== null
                  ? <AnimatedCounter end={item.end} suffix={item.suffix} />
                  : item.text
                }
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: 4 }}>
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #why-csr > div > div:first-of-type { grid-template-columns: 1fr !important; }
          #why-csr > div > div:last-of-type { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
