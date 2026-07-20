import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState(0); // 0=bar growing, 1=exit

  useEffect(() => {
    // Phase 0 → 1 after 1.2s (bar fills), then exit
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setVisible(false), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 999999,
            background: 'linear-gradient(160deg, #040d1a 0%, #0B1F45 60%, #071320 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 32,
          }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
          >
            <div style={{
              width: 72, height: 72,
              background: 'linear-gradient(135deg, #00C2FF, #163B80)',
              borderRadius: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 60px rgba(0,194,255,0.5)',
              animation: 'loaderPulse 1.2s ease-in-out infinite',
            }}>
              <Zap size={36} color="white" strokeWidth={2.5} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
                fontSize: '1.4rem', color: 'white', letterSpacing: '-0.02em',
              }}>CSR Tech Solutions</div>
              <div style={{
                fontSize: '0.72rem', color: '#00C2FF', fontWeight: 600,
                letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 4,
              }}>Innovate • Build • Scale</div>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div style={{ width: 200, height: 2, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: phase === 0 ? '70%' : '100%' }}
              transition={{ duration: phase === 0 ? 1.1 : 0.3, ease: 'easeOut' }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #00C2FF, #00D084)', borderRadius: 2 }}
            />
          </div>

          <style>{`
            @keyframes loaderPulse {
              0%, 100% { box-shadow: 0 0 40px rgba(0,194,255,0.4); }
              50% { box-shadow: 0 0 80px rgba(0,194,255,0.8); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
