import { motion, AnimatePresence } from 'framer-motion';
import { Box, Eye, RotateCw, Maximize, Volume2, Layers } from 'lucide-react';

const configs = {
  2: { title: 'ANTIQUITIES', color: '#78350F', tagline: 'Archaeology Museum Portal', desc: 'Interactive digital museum with artifact galleries, 3D exhibits and online ticketing.' },
  6: { title: 'ESTATE', color: '#E11D48', tagline: 'Luxury Real Estate Portal', desc: 'Property listing platform with 3D tours, mortgage calculator and agent management.' },
  22: { title: 'SnapFolio', color: '#A21CAF', tagline: 'Photography Portfolio Site', desc: 'Stunning photographer portfolio with masonry gallery, client proofing and print shop.' },
  23: { title: 'VirtuFit', color: '#EC4899', tagline: 'Virtual Fitting Room', desc: 'AR-powered virtual fitting room allowing users to try on clothes remotely.' },
  29: { title: 'AgriView', color: '#F59E0B', tagline: 'Drone Mapping Software', desc: '3D topographic mapping software processing drone imagery for crop health analysis.' },
  34: { title: 'ARoom', color: '#E11D48', tagline: 'AR Furniture Viewer', desc: 'Augmented reality app letting customers preview furniture in their homes before buying.' },
  39: { title: 'AutoShow', color: '#DB2777', tagline: 'Virtual Car Showroom', desc: 'Immersive 3D showroom for configuring and exploring luxury vehicles.' },
  44: { title: 'AnatomiX', color: '#4F46E5', tagline: '3D Anatomy Visualizer', desc: 'Interactive 3D human anatomy models used by medical students and doctors.' },
  49: { title: 'VirtuCon', color: '#7C3AED', tagline: 'Virtual Event Platform', desc: 'Metaverse-style virtual conference platform with spatial audio and networking.' },
  54: { title: 'VRSim', color: '#A21CAF', tagline: 'VR Training Simulator', desc: 'Virtual reality hazard training simulator for heavy machinery operators.' },
};

const gallery = [
  { title: '3D Model Viewer', img: 'https://images.unsplash.com/photo-1622979135225-d2ba269c4ea1?auto=format&fit=crop&w=800&q=80' },
  { title: 'Virtual Tour', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
  { title: 'AR Experience', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' },
  { title: 'Immersive Gallery', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
];

export default function AR3DDemo({ projectId, state }) {
  const { innerTab, setInnerTab, lightboxIndex, setLightboxIndex } = state;
  const c = configs[projectId] || { title: `3D ${projectId}`, color: '#2563EB', tagline: '3D/AR Experience', desc: 'Immersive 3D and augmented reality experience platform.' };
  const navItems = ['explore', 'gallery', 'features', 'about'];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#080808', color: 'white', minHeight: '100vh' }}>
      <nav style={{ padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(8,8,8,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ fontWeight: 900, fontSize: '1.4rem', color: c.color, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Box size={22} color={c.color} /> {c.title}
        </div>
        <div style={{ display: 'flex', gap: 32, fontWeight: 600 }}>
          {navItems.map(tab => (
            <span key={tab} onClick={() => { setInnerTab(tab); window.scrollTo(0,0); }}
              style={{ cursor: 'pointer', color: innerTab === tab ? c.color : '#64748B', textTransform: 'capitalize' }}>
              {tab}
            </span>
          ))}
        </div>
        <button style={{ background: c.color, color: 'white', border: 'none', padding: '10px 24px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>Launch 3D</button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          {innerTab === 'explore' && (
            <div style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #080808 0%, transparent 100%)' }} />
              <div style={{ position: 'relative', padding: '80px 5%', maxWidth: 700 }}>
                <span style={{ color: c.color, fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 2 }}>Next-Gen Experience</span>
                <h1 style={{ fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 900, margin: '24px 0', lineHeight: 1.05 }}>Enter the World of <span style={{ color: c.color }}>{c.title}</span></h1>
                <p style={{ color: '#94A3B8', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: 40 }}>{c.desc}</p>
                <div style={{ display: 'flex', gap: 16 }}>
                  <button onClick={() => setInnerTab('gallery')} style={{ background: c.color, color: 'white', padding: '16px 36px', borderRadius: 8, border: 'none', fontWeight: 800, cursor: 'pointer' }}>Explore Gallery</button>
                  <button style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 36px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>Watch Demo</button>
                </div>
              </div>
            </div>
          )}

          {innerTab === 'gallery' && (
            <div style={{ padding: '80px 5%' }}>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>3D Gallery</h1>
                <p style={{ color: '#64748B', marginTop: 16 }}>Browse our immersive 3D collection.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 30 }}>
                {gallery.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', cursor: 'pointer', height: 350 }}
                    onClick={() => setLightboxIndex(i)}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 30, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{item.title}</h3>
                    </div>
                    <div style={{ position: 'absolute', top: 20, right: 20, background: c.color, padding: 8, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Eye size={20} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {lightboxIndex !== null && (
                <div onClick={() => setLightboxIndex(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 40 }}>
                  <img src={gallery[lightboxIndex]?.img} alt="" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 20, objectFit: 'contain' }} />
                  <button onClick={() => setLightboxIndex(null)} style={{ position: 'absolute', top: 30, right: 30, background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '12px 20px', borderRadius: 50, fontSize: '1.2rem', cursor: 'pointer' }}>✕ Close</button>
                </div>
              )}
            </div>
          )}

          {innerTab === 'features' && (
            <div style={{ padding: '80px 5%', background: '#0F0F0F' }}>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Immersive Features</h1>
                <p style={{ color: '#64748B', marginTop: 16 }}>Powered by cutting-edge 3D and AR technology.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
                {[
                  { icon: <Box size={28} />, title: 'Real-time 3D Rendering', desc: 'High-fidelity 3D models rendered in real-time with PBR materials.' },
                  { icon: <RotateCw size={28} />, title: '360° Interaction', desc: 'Full rotational control with smooth touch and mouse gestures.' },
                  { icon: <Maximize size={28} />, title: 'Fullscreen VR Mode', desc: 'Immersive virtual reality mode for compatible headsets.' },
                  { icon: <Eye size={28} />, title: 'AR Placement', desc: 'Preview objects in your real environment using augmented reality.' },
                  { icon: <Layers size={28} />, title: 'Multi-layer Scenes', desc: 'Complex layered environments with dynamic lighting.' },
                  { icon: <Volume2 size={28} />, title: 'Spatial Audio', desc: '3D positional audio for truly immersive experiences.' },
                ].map((f, i) => (
                  <div key={i} style={{ padding: 30, background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: c.color, marginBottom: 16 }}>{f.icon}</div>
                    <h3 style={{ fontWeight: 800, marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ color: '#64748B', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {innerTab === 'about' && (
            <div style={{ padding: '80px 5%', textAlign: 'center' }}>
              <div style={{ maxWidth: 700, margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: 20 }}>About {c.title}</h1>
                <p style={{ color: '#64748B', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: 50 }}>{c.desc}</p>
                <img src="https://images.unsplash.com/photo-1622979135225-d2ba269c4ea1?auto=format&fit=crop&w=1000&q=80" alt="VR" style={{ width: '100%', borderRadius: 24, boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }} />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <footer style={{ background: '#080808', padding: 40, textAlign: 'center', color: '#64748B', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p>© 2026 {c.title}. Immersive 3D/AR Platform.</p>
      </footer>
    </div>
  );
}