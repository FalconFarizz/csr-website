import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../data/data';

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 4) * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', padding: 28,
        background: hovered
          ? 'rgba(255,255,255,0.07)'
          : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        border: hovered
          ? `1px solid ${service.accent}40`
          : '1px solid rgba(255,255,255,0.06)',
        borderRadius: 24,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${service.accent}30, inset 0 1px 0 rgba(255,255,255,0.08)`
          : '0 4px 20px rgba(0,0,0,0.2)',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient on hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: `radial-gradient(circle at top left, ${service.accent}12 0%, transparent 60%)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        borderRadius: 24,
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        width: 56, height: 56, borderRadius: 16,
        background: `${service.accent}18`,
        border: `1px solid ${service.accent}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.6rem', marginBottom: 20,
        transition: 'all 0.3s',
        boxShadow: hovered ? `0 0 20px ${service.accent}30` : 'none',
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
        fontSize: '1.1rem', color: 'white', marginBottom: 10,
        letterSpacing: '-0.01em',
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem',
        lineHeight: 1.65, marginBottom: 20,
      }}>
        {service.description}
      </p>

      {/* Features */}
      <div style={{ marginBottom: 20, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {service.features.map((f) => (
          <span key={f} style={{
            padding: '4px 10px',
            background: `${service.accent}12`,
            border: `1px solid ${service.accent}25`,
            borderRadius: 6, fontSize: '0.75rem',
            color: service.accent, fontWeight: 500,
          }}>
            {f}
          </span>
        ))}
      </div>

      {/* Benefits */}
      <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {service.benefits.map((b) => (
          <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 16, height: 16, borderRadius: '50%',
              background: `${service.accent}20`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Check size={9} color={service.accent} strokeWidth={3} />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{b}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        color: service.accent, fontSize: '0.85rem', fontWeight: 600,
        cursor: 'pointer',
        transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        transition: 'transform 0.3s',
      }}>
        Learn More <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="services" style={{ padding: '120px 0', background: '#071320', position: 'relative', overflow: 'hidden' }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(0,194,255,0.04) 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
      }} />

      {/* Top gradient fade */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 200,
        background: 'linear-gradient(to bottom, #071320, transparent)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <span style={{
            display: 'inline-block', padding: '6px 20px',
            background: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)',
            borderRadius: 50, color: '#00C2FF', fontSize: '0.8rem',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
          }}>
            Our Services
          </span>

          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white',
            letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20,
          }}>
            Everything You Need to
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #00C2FF, #00D084)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Build & Scale
            </span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.5)', fontSize: '1.05rem',
            lineHeight: 1.7, maxWidth: 560, margin: '0 auto',
          }}>
            16 premium technology services crafted for enterprises that demand
            excellence, reliability, and measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
