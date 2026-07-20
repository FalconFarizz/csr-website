import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { technologies } from '../data/data';
import AnimatedCounter from './AnimatedCounter';

const tabs = Object.keys(technologies);

function TechCard({ tech, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '20px 16px',
        background: hovered ? 'rgba(0,194,255,0.08)' : 'rgba(255,255,255,0.03)',
        border: hovered ? '1px solid rgba(0,194,255,0.3)' : '1px solid rgba(255,255,255,0.06)',
        borderRadius: 16,
        textAlign: 'center',
        cursor: 'default',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,194,255,0.15)' : 'none',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: 10 }}>{tech.logo}</div>
      <div style={{
        fontFamily: 'Inter', fontWeight: 600, fontSize: '0.88rem',
        color: hovered ? '#00C2FF' : 'rgba(255,255,255,0.8)',
        transition: 'color 0.3s',
      }}>
        {tech.name}
      </div>

      {/* Skill bar */}
      <div style={{
        marginTop: 10, height: 2, background: 'rgba(255,255,255,0.08)',
        borderRadius: 2, overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: hovered ? `${tech.level}%` : '0%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #00C2FF, #00D084)', borderRadius: 2 }}
        />
      </div>
      {hovered && (
        <div style={{ fontSize: '0.72rem', color: '#00C2FF', marginTop: 4, fontFamily: 'Space Grotesk', fontWeight: 600 }}>
          {tech.level}%
        </div>
      )}
    </motion.div>
  );
}

export default function Technologies() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="technologies" style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, #0a1628 0%, #071320 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 800, height: 600,
        background: 'radial-gradient(ellipse, rgba(22,59,128,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <span style={{
            display: 'inline-block', padding: '6px 20px',
            background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.3)',
            borderRadius: 50, color: '#00D084', fontSize: '0.8rem',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
          }}>
            Technology Stack
          </span>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20,
          }}>
            Built with the
            <span style={{
              background: 'linear-gradient(90deg, #00D084, #00C2FF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}> Best Tools </span>
            in the Industry
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>
            Our engineers are certified experts in the technologies that power the world's
            most successful digital products.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center',
          marginBottom: 48,
        }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 22px',
                background: activeTab === tab
                  ? 'linear-gradient(135deg, #00C2FF, #163B80)'
                  : 'rgba(255,255,255,0.04)',
                border: activeTab === tab ? 'none' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: 50, cursor: 'pointer',
                color: activeTab === tab ? 'white' : 'rgba(255,255,255,0.6)',
                fontFamily: 'Inter', fontWeight: 600, fontSize: '0.88rem',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === tab ? '0 4px 20px rgba(0,194,255,0.3)' : 'none',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 14,
          }}
        >
          {technologies[activeTab].map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </motion.div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            marginTop: 80, padding: '40px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 24,
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 40, textAlign: 'center',
          }}
        >
          {[
            { num: 40, suffix: '+', label: 'Technologies Mastered' },
            { num: 8, suffix: '', label: 'Tech Categories' },
            { num: 100, suffix: '%', label: 'Certified Experts' },
            { num: 15, suffix: '+', label: 'Cloud Platforms' },
          ].map((item) => (
            <div key={item.label}>
              <div style={{
                fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '2.5rem',
                background: 'linear-gradient(135deg, #fff, #00C2FF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                <AnimatedCounter end={item.num} suffix={item.suffix} />
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: 6 }}>
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
