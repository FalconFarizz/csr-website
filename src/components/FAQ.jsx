import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/data';

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{
        borderRadius: 16, overflow: 'hidden',
        border: open ? '1px solid rgba(0,194,255,0.3)' : '1px solid rgba(255,255,255,0.07)',
        transition: 'border-color 0.3s',
        background: open ? 'rgba(0,194,255,0.04)' : 'rgba(255,255,255,0.02)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '22px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'white', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 600,
          fontSize: '1rem', color: open ? '#00C2FF' : 'white',
          transition: 'color 0.3s', paddingRight: 20,
        }}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={20} color={open ? '#00C2FF' : 'rgba(255,255,255,0.4)'} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              padding: '0 28px 24px',
              color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem',
              lineHeight: 1.75, fontFamily: 'Inter',
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="faq" style={{
      padding: '120px 0', background: '#071320', position: 'relative',
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <span style={{
            display: 'inline-block', padding: '6px 20px',
            background: 'rgba(255,77,109,0.1)', border: '1px solid rgba(255,77,109,0.3)',
            borderRadius: 50, color: '#FF4D6D', fontSize: '0.8rem',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
          }}>
            FAQ
          </span>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white',
            letterSpacing: '-0.03em', marginBottom: 20,
          }}>
            Frequently Asked
            <span style={{
              background: 'linear-gradient(90deg, #FF4D6D, #FFB800)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}> Questions</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
            Everything you need to know about working with CSR Tech Solutions.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
