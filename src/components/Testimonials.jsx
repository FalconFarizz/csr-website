import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/data';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" style={{
      padding: '120px 0', background: '#071320', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(0,208,132,0.07), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <span style={{
            display: 'inline-block', padding: '6px 20px',
            background: 'rgba(255,184,0,0.1)', border: '1px solid rgba(255,184,0,0.3)',
            borderRadius: 50, color: '#FFB800', fontSize: '0.8rem',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
          }}>
            Testimonials
          </span>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white',
            letterSpacing: '-0.03em', marginBottom: 20,
          }}>
            Trusted by Industry
            <span style={{
              background: 'linear-gradient(90deg, #FFB800, #FF4D6D)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}> Leaders</span>
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: 820, margin: '0 auto 60px',
            padding: '52px', borderRadius: 28,
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 20px 80px rgba(0,0,0,0.4)',
            position: 'relative', textAlign: 'center',
          }}
        >
          {/* Quote Icon */}
          <div style={{
            position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
            width: 40, height: 40, borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFB800, #FF4D6D)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Quote size={18} color="white" />
          </div>

          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
            ))}
          </div>

          <p style={{
            color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem',
            lineHeight: 1.8, marginBottom: 36, fontStyle: 'italic',
            fontFamily: 'Inter',
          }}>
            "{testimonials[active].text}"
          </p>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: `linear-gradient(135deg, ${testimonials[active].gradient.split(' ')[1]}, ${testimonials[active].gradient.split(' ')[3]})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1rem', color: 'white',
              border: '2px solid rgba(255,255,255,0.15)',
            }}>
              {testimonials[active].avatar}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: 'white', fontWeight: 700, fontFamily: 'Plus Jakarta Sans' }}>
                {testimonials[active].name}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                {testimonials[active].role}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Thumbnails */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: 240, padding: '20px', borderRadius: 18,
                background: active === i ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                border: active === i ? '1px solid rgba(255,184,0,0.4)' : '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer', transition: 'all 0.3s',
                boxShadow: active === i ? '0 8px 30px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.gradient.split(' ')[1]}, ${t.gradient.split(' ')[3]})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 800, color: 'white',
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem' }}>{t.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{t.company}</div>
                </div>
              </div>
              <p style={{
                color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem',
                lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical', overflow: 'hidden',
              }}>
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
