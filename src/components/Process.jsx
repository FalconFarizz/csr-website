import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    desc: 'Deep-dive consultation to understand your goals, challenges, and technical requirements.',
    icon: '🔍',
    color: '#00C2FF',
  },
  {
    step: '02',
    title: 'Architecture Design',
    desc: 'Our senior architects design a scalable, future-proof technical blueprint tailored to your needs.',
    icon: '📐',
    color: '#00D084',
  },
  {
    step: '03',
    title: 'Agile Development',
    desc: '2-week sprints with continuous demos. Working software delivered from week one.',
    icon: '⚡',
    color: '#a855f7',
  },
  {
    step: '04',
    title: 'QA & Security Testing',
    desc: 'Rigorous automated testing, security audits, and performance optimization before launch.',
    icon: '🛡️',
    color: '#FFB800',
  },
  {
    step: '05',
    title: 'Launch & Scale',
    desc: 'Zero-downtime deployment with full DevOps automation and monitoring from day one.',
    icon: '🚀',
    color: '#FF4D6D',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="process" style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, #071320 0%, #0a1a30 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,194,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,194,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <span style={{
            display: 'inline-block', padding: '6px 20px',
            background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)',
            borderRadius: 50, color: '#a855f7', fontSize: '0.8rem',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
          }}>
            Our Process
          </span>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white',
            letterSpacing: '-0.03em', marginBottom: 20,
          }}>
            From Idea to
            <span style={{
              background: 'linear-gradient(90deg, #a855f7, #00C2FF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}> Production</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>
            Our proven 5-step engineering methodology has delivered 250+ successful projects
            for enterprises across 32 countries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Connecting Line */}
          <div style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            top: 40, bottom: 40, width: 2,
            background: 'linear-gradient(to bottom, transparent, rgba(0,194,255,0.3), rgba(0,208,132,0.3), rgba(168,85,247,0.3), rgba(255,184,0,0.3), transparent)',
          }} />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                paddingBottom: 60, position: 'relative',
              }}
            >
              {/* Center dot */}
              <div style={{
                position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                top: 24, width: 16, height: 16, borderRadius: '50%',
                background: step.color,
                boxShadow: `0 0 20px ${step.color}60`,
                border: `3px solid ${step.color}40`,
                zIndex: 2,
              }} />

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                style={{
                  width: '44%',
                  padding: '32px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${step.color}25`,
                  borderRadius: 22,
                  boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    fontFamily: 'Space Grotesk', fontWeight: 900,
                    fontSize: '2.5rem', lineHeight: 1,
                    color: step.color, opacity: 0.3,
                  }}>
                    {step.step}
                  </div>
                  <div style={{ fontSize: '1.8rem' }}>{step.icon}</div>
                </div>
                <h3 style={{
                  fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
                  fontSize: '1.1rem', color: 'white', marginBottom: 10,
                }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #process .timeline-item { justify-content: center !important; }
          #process .timeline-item > div:last-child { width: 100% !important; }
          #process .center-line { display: none; }
        }
      `}</style>
    </section>
  );
}
