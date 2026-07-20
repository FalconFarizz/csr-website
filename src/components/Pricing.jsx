import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';
import { pricingPlans } from '../data/data';

function PricingCard({ plan, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', padding: 36, borderRadius: 28,
        background: plan.popular
          ? `linear-gradient(160deg, rgba(0,194,255,0.08), rgba(22,59,128,0.12))`
          : 'rgba(255,255,255,0.03)',
        border: plan.popular
          ? '1px solid rgba(0,194,255,0.35)'
          : '1px solid rgba(255,255,255,0.07)',
        transform: plan.popular ? 'scale(1.04)' : hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: plan.popular
          ? '0 0 60px rgba(0,194,255,0.15), 0 20px 60px rgba(0,0,0,0.4)'
          : hovered ? '0 20px 60px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.2)',
      }}
    >
      {plan.popular && (
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          padding: '6px 20px',
          background: 'linear-gradient(90deg, #00C2FF, #163B80)',
          borderRadius: 50, fontSize: '0.78rem', fontWeight: 700,
          color: 'white', letterSpacing: '0.08em', textTransform: 'uppercase',
          boxShadow: '0 4px 20px rgba(0,194,255,0.4)',
          whiteSpace: 'nowrap',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <Zap size={12} /> Most Popular
        </div>
      )}

      <div style={{ marginBottom: 28 }}>
        <h3 style={{
          fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
          fontSize: '1.25rem', color: 'white', marginBottom: 8,
        }}>
          {plan.name}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 24 }}>
          {plan.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{
            fontFamily: 'Space Grotesk', fontWeight: 900,
            fontSize: plan.price === 'Custom' ? '2.2rem' : '2.8rem',
            color: 'white',
            background: `linear-gradient(135deg, #fff, ${plan.accent})`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            {plan.price}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>
            / {plan.period}
          </span>
        </div>
      </div>

      {/* Features */}
      <div style={{ marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {plan.features.map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 20, height: 20, borderRadius: '50%',
              background: `${plan.accent}20`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Check size={11} color={plan.accent} strokeWidth={3} />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>{f}</span>
          </div>
        ))}
        {plan.excluded.map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 20, height: 20, borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <X size={11} color="rgba(255,255,255,0.2)" strokeWidth={2.5} />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.88rem' }}>{f}</span>
          </div>
        ))}
      </div>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'block', textAlign: 'center',
          padding: '14px 24px',
          background: plan.popular
            ? `linear-gradient(135deg, #00C2FF, #163B80)`
            : 'rgba(255,255,255,0.06)',
          border: plan.popular ? 'none' : `1px solid ${plan.accent}40`,
          borderRadius: 50, color: 'white',
          fontFamily: 'Inter', fontWeight: 600, fontSize: '0.92rem',
          textDecoration: 'none', transition: 'all 0.3s',
          boxShadow: plan.popular ? `0 8px 30px rgba(0,194,255,0.3)` : 'none',
        }}
      >
        {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
      </motion.a>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="pricing" style={{
      padding: '140px 0', background: 'linear-gradient(180deg, #071320 0%, #0B1F45 50%, #071320 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '30%', right: '-5%',
        width: 500, height: 500,
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
            background: 'rgba(0,208,132,0.1)', border: '1px solid rgba(0,208,132,0.3)',
            borderRadius: 50, color: '#00D084', fontSize: '0.8rem',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
          }}>
            Transparent Pricing
          </span>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white',
            letterSpacing: '-0.03em', marginBottom: 20,
          }}>
            Investment That
            <span style={{
              background: 'linear-gradient(90deg, #00D084, #00C2FF)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}> Delivers ROI</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>
            Flexible engagement models designed to scale with your business.
            No hidden fees, no surprises — just premium value.
          </p>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24, alignItems: 'center',
        }}>
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: 'center', marginTop: 48,
            color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem',
          }}
        >
          💳 All plans include free consultation · 14-day money-back guarantee · Cancel anytime
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #pricing .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
