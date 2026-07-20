import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/data';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isWide = project.span === 'col-span-2';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isWide ? 'span 2' : 'span 1',
        position: 'relative', borderRadius: 24, overflow: 'hidden',
        minHeight: isWide ? 320 : 280,
        background: '#071320',
        border: `1px solid ${hovered ? project.color + '50' : 'rgba(255,255,255,0.06)'}`,
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}30`
          : '0 4px 30px rgba(0,0,0,0.3)',
      }}
    >
      {/* Background Image */}
      {project.img && (
        <img 
          src={project.img} 
          alt={project.title}
          style={{ 
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', 
            transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s', 
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            opacity: hovered ? 0.3 : 0.15
          }} 
        />
      )}

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at ${isWide ? '80% 50%' : '50% 0%'}, ${project.color}40 0%, #071320 80%)`,
        transition: 'opacity 0.4s',
        opacity: hovered ? 0.8 : 0.95,
      }} />

      {/* Large number/icon background */}
      <div style={{
        position: 'absolute', right: -20, top: -20,
        fontSize: isWide ? '12rem' : '8rem', lineHeight: 1,
        opacity: 0.05, fontFamily: 'Space Grotesk', fontWeight: 900,
        color: project.color, pointerEvents: 'none',
        transition: 'transform 0.5s',
        transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div style={{ position: 'relative', padding: '36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Meta */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          <span style={{
            padding: '4px 12px',
            background: `${project.color}18`,
            border: `1px solid ${project.color}35`,
            borderRadius: 50, fontSize: '0.75rem', fontWeight: 600,
            color: project.color,
          }}>
            {project.category}
          </span>
          <span style={{
            padding: '4px 12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 50, fontSize: '0.75rem', fontWeight: 500,
            color: 'rgba(255,255,255,0.5)',
          }}>
            {project.industry}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
          fontSize: isWide ? '1.8rem' : '1.3rem', color: 'white',
          letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.15,
        }}>
          {project.title}
        </h3>

        <p style={{
          color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem',
          lineHeight: 1.65, marginBottom: 24, flex: 1,
          maxWidth: isWide ? 500 : '100%',
        }}>
          {project.description}
        </p>

        {/* Metrics */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
          {project.metrics.map((m) => (
            <div key={m} style={{
              padding: '6px 14px',
              background: `${project.color}12`,
              border: `1px solid ${project.color}25`,
              borderRadius: 8, fontSize: '0.78rem', fontWeight: 600,
              color: project.color,
            }}>
              {m}
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: '3px 10px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 6, fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.6)',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 20,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            color: project.color, fontSize: '0.88rem', fontWeight: 600,
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s',
          }}>
            View Case Study <ArrowRight size={14} />
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem',
          }}>
            <ExternalLink size={14} /> Live Demo
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="portfolio" style={{
      padding: '120px 0', background: '#071320', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '40%', right: '-10%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(0,194,255,0.06), transparent 70%)',
        pointerEvents: 'none',
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
            Portfolio
          </span>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white',
            letterSpacing: '-0.03em', marginBottom: 20,
          }}>
            Work That Speaks
            <span style={{
              background: 'linear-gradient(90deg, #a855f7, #00C2FF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}> for Itself</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>
            A curated selection of enterprise projects that demonstrate our capability
            to deliver transformative digital solutions at scale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: 60 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 40px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 50, color: 'white',
              fontFamily: 'Inter', fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none', backdropFilter: 'blur(10px)',
            }}
          >
            View All Projects <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #portfolio .bento-grid { grid-template-columns: 1fr !important; }
          #portfolio .bento-grid > * { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
