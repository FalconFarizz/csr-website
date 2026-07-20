import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Cloud, Shield, Cpu, Database, ArrowRight, Check } from 'lucide-react';

const configs = {
  1: { title: 'AURUM', color: '#00C2FF', tagline: 'Corporate Business Website', desc: 'Premium corporate website with animated hero, services showcase and lead generation system.' },
  11: { title: 'LexPortal', color: '#7C3AED', tagline: 'Law Firm Website', desc: 'Professional law firm portal with attorney profiles, case consultation booking and blog.' },
  14: { title: 'BuildPro', color: '#F59E0B', tagline: 'Construction Company Site', desc: 'Corporate construction website with project gallery, bid request system and client portal.' },
  15: { title: 'WealthWise', color: '#22C55E', tagline: 'Finance Analytics Dashboard', desc: 'Real-time financial dashboard with stock portfolio, expense tracker and crypto analytics.' },
  25: { title: 'TeleHealth', color: '#059669', tagline: 'Telemedicine Portal', desc: 'Secure platform for remote consultations, electronic prescriptions, and health tracking.' },
  28: { title: 'GenStudio', color: '#E11D48', tagline: 'AI Content Generator', desc: 'LLM-powered tool for generating marketing copy, blog posts, and SEO metadata.' },
  33: { title: 'GenoVis', color: '#DB2777', tagline: 'Genetic Research DB', desc: 'High-performance database and visualizer for complex genomic sequencing data.' },
  38: { title: 'QuantumSim', color: '#4F46E5', tagline: 'Quantum Simulator', desc: 'Web-based simulator for building and running quantum computing algorithms.' },
  43: { title: 'SatMap', color: '#7C3AED', tagline: 'Satellite Data Analysis', desc: 'Platform for analyzing satellite imagery to track deforestation and urban growth.' },
  48: { title: 'ClimaView', color: '#A21CAF', tagline: 'Climate Data Platform', desc: 'Data visualization tool forecasting climate trends for agricultural planning.' },
  53: { title: 'PrediMaint', color: '#EC4899', tagline: 'Predictive Maintenance AI', desc: 'Machine learning platform analyzing acoustic signatures to predict machine failure.' },
};

const techStack = ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'Redis'];

export default function ScitechDemo({ projectId, state }) {
  const { innerTab, setInnerTab } = state;
  const c = configs[projectId] || { title: `Tech ${projectId}`, color: '#2563EB', tagline: 'Technology Platform', desc: 'Advanced technology platform built for scale and performance.' };
  const navItems = ['overview', 'tech', 'solutions', 'contact'];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0B1120', color: 'white', minHeight: '100vh' }}>
      <nav style={{ padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(11,17,32,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ fontWeight: 900, fontSize: '1.4rem', color: c.color, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Cpu size={22} color={c.color} /> {c.title}
        </div>
        <div style={{ display: 'flex', gap: 32, fontWeight: 600 }}>
          {navItems.map(tab => (
            <span key={tab} onClick={() => { setInnerTab(tab); window.scrollTo(0,0); }}
              style={{ cursor: 'pointer', color: innerTab === tab ? c.color : '#64748B', textTransform: 'capitalize', borderBottom: innerTab === tab ? `2px solid ${c.color}` : '2px solid transparent', paddingBottom: 4 }}>
              {tab}
            </span>
          ))}
        </div>
        <button style={{ background: c.color, color: '#0B1120', border: 'none', padding: '10px 24px', borderRadius: 8, fontWeight: 800, cursor: 'pointer' }}>Get Access</button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
          {innerTab === 'overview' && (
            <div>
              <div style={{ position: 'relative', padding: '100px 5%', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 30% 50%, ${c.color}15 0%, transparent 60%)`, pointerEvents: 'none' }} />
                <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
                  <span style={{ color: c.color, fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 2, padding: '6px 16px', border: `1px solid ${c.color}40`, borderRadius: 50 }}>{c.tagline}</span>
                  <h1 style={{ fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 900, margin: '30px 0', lineHeight: 1.05, letterSpacing: '-0.02em' }}>{c.title}</h1>
                  <p style={{ color: '#94A3B8', fontSize: '1.3rem', lineHeight: 1.7, maxWidth: 700, margin: '0 auto 40px' }}>{c.desc}</p>
                  <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                    <button style={{ background: c.color, color: '#0B1120', padding: '16px 36px', borderRadius: 8, border: 'none', fontWeight: 800, fontSize: '1.05rem', cursor: 'pointer' }}>View Demo</button>
                    <button onClick={() => setInnerTab('tech')} style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.15)', padding: '16px 36px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>Tech Stack</button>
                  </div>
                </div>
              </div>
              <div style={{ padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, maxWidth: 1000, margin: '0 auto' }}>
                  {[
                    { icon: <Server size={28} />, value: '99.99%', label: 'Uptime SLA' },
                    { icon: <Database size={28} />, value: '<50ms', label: 'Avg Response' },
                    { icon: <Shield size={28} />, value: 'SOC 2', label: 'Compliance' },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: 'center', padding: 40, background: 'rgba(255,255,255,0.03)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ color: c.color, marginBottom: 16 }}>{s.icon}</div>
                      <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>{s.value}</div>
                      <div style={{ color: '#64748B', marginTop: 8 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab === 'tech' && (
            <div style={{ padding: '80px 5%' }}>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Technology Stack</h1>
                <p style={{ color: '#64748B', marginTop: 16, fontSize: '1.1rem' }}>Built with modern, battle-tested technologies.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', maxWidth: 800, margin: '0 auto' }}>
                {techStack.map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                    style={{ padding: '20px 36px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', color: c.color }}>
                    {t}
                  </motion.div>
                ))}
              </div>
              <div style={{ marginTop: 60, textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80" alt="Server room" style={{ width: '100%', maxWidth: 800, borderRadius: 20, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }} />
              </div>
            </div>
          )}

          {innerTab === 'solutions' && (
            <div style={{ padding: '80px 5%', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Enterprise Solutions</h1>
                <p style={{ color: '#64748B', marginTop: 16 }}>Scalable solutions for modern businesses.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 900, margin: '0 auto' }}>
                {[
                  { title: 'Cloud Infrastructure', desc: 'Scalable cloud architecture with auto-scaling and load balancing.', icon: <Cloud size={24} /> },
                  { title: 'Data Analytics', desc: 'Real-time data processing and visualization pipelines.', icon: <Database size={24} /> },
                  { title: 'Security Suite', desc: 'End-to-end encryption, audit logging, and compliance tools.', icon: <Shield size={24} /> },
                  { title: 'API Gateway', desc: 'Unified API management with rate limiting and monitoring.', icon: <Code size={24} /> },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 20, padding: 30, background: 'rgba(255,255,255,0.03)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: c.color, flexShrink: 0 }}>{s.icon}</div>
                    <div>
                      <h3 style={{ fontWeight: 800, marginBottom: 8 }}>{s.title}</h3>
                      <p style={{ color: '#64748B', lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {innerTab === 'contact' && (
            <div style={{ padding: '80px 5%', textAlign: 'center' }}>
              <div style={{ maxWidth: 600, margin: '0 auto', padding: 60, background: 'rgba(255,255,255,0.03)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.06)' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: 16 }}>Get Started with {c.title}</h2>
                <p style={{ color: '#64748B', marginBottom: 40, fontSize: '1.1rem' }}>Contact our team to learn how {c.title} can transform your business.</p>
                <button style={{ background: c.color, color: '#0B1120', border: 'none', padding: '16px 40px', borderRadius: 8, fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer' }}>Contact Sales</button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <footer style={{ background: '#0B1120', padding: 40, textAlign: 'center', color: '#64748B', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p>© 2026 {c.title}. Enterprise Technology Platform.</p>
      </footer>
    </div>
  );
}