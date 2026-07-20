import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ScrollToTop() {
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (btnRef.current) {
        btnRef.current.style.opacity = window.scrollY > 600 ? '1' : '0';
        btnRef.current.style.pointerEvents = window.scrollY > 600 ? 'auto' : 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      ref={btnRef}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 50,
        width: 48, height: 48, borderRadius: '50%',
        background: 'linear-gradient(135deg, #00C2FF, #163B80)',
        border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'white', fontSize: '1.2rem',
        boxShadow: '0 4px 20px rgba(0,194,255,0.4)',
        opacity: 0, transition: 'opacity 0.3s',
      }}
    >
      ↑
    </motion.button>
  );
}
