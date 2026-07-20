import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Download, Star, Users, Activity, Calendar, Bell, Settings } from 'lucide-react';

const configs = {
  7: { title: 'MedCare', color: '#EC4899', tagline: 'Hospital Management System', desc: 'HIPAA-compliant HMS with patient records, appointment scheduling and billing integration.' },
  8: { title: 'EduVerse', color: '#4F46E5', tagline: 'School Education Portal', desc: 'Complete LMS with live classes, attendance tracking, grade reports and parent portal.' },
  12: { title: 'FitForge', color: '#22D3EE', tagline: 'Gym & Fitness App', desc: 'Cross-platform fitness app with workout plans, progress tracking, nutrition and live coaching.' },
  16: { title: 'QuickBite', color: '#F97316', tagline: 'Food Delivery App', desc: 'On-demand food delivery platform with restaurant onboarding, live order tracking and ratings.' },
  17: { title: 'GlamBook', color: '#DB2777', tagline: 'Salon Booking System', desc: 'Beauty salon management with appointment scheduling, stylist profiles and loyalty rewards.' },
  18: { title: 'PharmaSys', color: '#059669', tagline: 'Pharmacy Management', desc: 'Digital pharmacy with medicine inventory, prescription tracking and supplier management.' },
  27: { title: 'CryptoVault', color: '#627EEA', tagline: 'Crypto Wallet App', desc: 'Secure multi-currency crypto wallet with real-time trading and staking features.' },
  32: { title: 'ZenSpace', color: '#7C3AED', tagline: 'Meditation & Sleep App', desc: 'Wellness app offering guided meditations, sleep sounds, and daily habit tracking.' },
  37: { title: 'LinguaLearn', color: '#7C3AED', tagline: 'Language Learning App', desc: 'Gamified language learning app with voice recognition and AI conversation partners.' },
  42: { title: 'PetCare', color: '#A21CAF', tagline: 'Pet Care & Vet App', desc: 'All-in-one app for pet health records, vet appointments, and pet sitting services.' },
  47: { title: 'LocalNews', color: '#EC4899', tagline: 'Local News Aggregator', desc: 'Hyper-local news app pulling feeds, weather, and community alerts into one UI.' },
  52: { title: 'EcoRide', color: '#E11D48', tagline: 'Rideshare App', desc: 'Eco-friendly ridesharing app exclusively for electric vehicles and carpooling.' },
  57: { title: 'NeoBank', color: '#DB2777', tagline: 'Mobile Banking App', desc: 'Next-gen neobank app with instant transfers, budgeting tools, and virtual cards.' },
};

const features = [
  { icon: <Activity size={24} />, title: 'Real-time Sync', desc: 'Data syncs instantly across all your devices.' },
  { icon: <Bell size={24} />, title: 'Smart Notifications', desc: 'Get alerts for important updates and events.' },
  { icon: <Users size={24} />, title: 'Team Collaboration', desc: 'Share and collaborate with your team.' },
  { icon: <Calendar size={24} />, title: 'Calendar Integration', desc: 'Sync with your favorite calendar apps.' },
];

export default function AppDemo({ projectId, state }) {
  const { innerTab, setInnerTab, contactForm, setContactForm, contactSent, setContactSent } = state;
  const c = configs[projectId] || { title: `App ${projectId}`, color: '#2563EB', tagline: 'Mobile App', desc: 'Cross-platform mobile application with modern features.' };
  const navItems = ['home', 'features', 'pricing', 'contact'];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8FAFC', minHeight: '100vh', color: '#0F172A' }}>
      <nav style={{ padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(10px)' }}>
        <div style={{ fontWeight: 900, fontSize: '1.4rem', color: c.color, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Smartphone size={24} color={c.color} /> {c.title}
        </div>
        <div style={{ display: 'flex', gap: 32, fontWeight: 600 }}>
          {navItems.map(tab => (
            <span key={tab} onClick={() => { setInnerTab(tab); window.scrollTo(0,0); }}
              style={{ cursor: 'pointer', color: innerTab === tab ? c.color : '#64748B', textTransform: 'capitalize', borderBottom: innerTab === tab ? `2px solid ${c.color}` : '2px solid transparent', paddingBottom: 4 }}>
              {tab}
            </span>
          ))}
        </div>
        <button style={{ background: c.color, color: 'white', border: 'none', padding: '10px 24px', borderRadius: 50, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Download size={18} /> Download
        </button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
          {innerTab === 'home' && (
            <div style={{ display: 'flex', alignItems: 'center', padding: '80px 5%', minHeight: '85vh', gap: 60 }}>
              <div style={{ flex: 1 }}>
                <span style={{ color: c.color, fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1, padding: '6px 14px', background: `${c.color}15`, borderRadius: 50 }}>
                  {c.tagline}
                </span>
                <h1 style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, lineHeight: 1.1, margin: '24px 0' }}>
                  The <span style={{ color: c.color }}>{c.title}</span> App
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7, maxWidth: 540, marginBottom: 40 }}>{c.desc}</p>
                <div style={{ display: 'flex', gap: 20 }}>
                  <button style={{ background: c.color, color: 'white', padding: '16px 36px', borderRadius: 12, border: 'none', fontWeight: 800, fontSize: '1.05rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Download size={20} /> Download Now
                  </button>
                  <button onClick={() => setInnerTab('features')} style={{ background: 'white', color: '#0F172A', border: '1px solid #E2E8F0', padding: '16px 36px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>
                    Learn More
                  </button>
                </div>
                <div style={{ display: 'flex', gap: 30, marginTop: 50 }}>
                  {[
                    { value: '4.9', label: 'App Store', icon: <Star size={16} fill="#F59E0B" color="#F59E0B" /> },
                    { value: '4.8', label: 'Play Store', icon: <Star size={16} fill="#F59E0B" color="#F59E0B" /> },
                    { value: '1M+', label: 'Downloads' },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: 'center', padding: '0 20px', borderRight: i < 2 ? '1px solid #E2E8F0' : 'none' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 900 }}>{s.value}</div>
                      <div style={{ color: '#64748B', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'center' }}>{s.icon} {s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 320, height: 600, background: '#0F172A', borderRadius: 48, border: '4px solid #1E293B', padding: 16, boxShadow: '0 30px 80px rgba(0,0,0,0.2)' }}>
                  <div style={{ height: 28, width: 120, background: '#0F172A', margin: '0 auto 20px', borderRadius: 20 }} />
                  <div style={{ background: c.color, borderRadius: 20, padding: 20, color: 'white', marginBottom: 16 }}>
                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Welcome to</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900 }}>{c.title}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: '#1E293B', borderRadius: 12 }}>
                        <div style={{ width: 40, height: 40, background: `${c.color}33`, borderRadius: 10 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ height: 10, width: '80%', background: '#334155', borderRadius: 4, marginBottom: 4 }} />
                          <div style={{ height: 8, width: '50%', background: '#1E293B', borderRadius: 4 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {innerTab === 'features' && (
            <div style={{ padding: '80px 5%', background: 'white' }}>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Powerful Features</h1>
                <p style={{ color: '#64748B', marginTop: 16, fontSize: '1.1rem' }}>Everything you need in one mobile app.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 800, margin: '0 auto' }}>
                {features.map((f, i) => (
                  <div key={i} style={{ padding: 30, background: '#F8FAFC', borderRadius: 20, border: '1px solid #E2E8F0' }}>
                    <div style={{ color: c.color, marginBottom: 16 }}>{f.icon}</div>
                    <h3 style={{ fontWeight: 800, marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ color: '#64748B', lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 60, textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80" alt="App screens" style={{ width: '100%', maxWidth: 700, borderRadius: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} />
              </div>
            </div>
          )}

          {innerTab === 'pricing' && (
            <div style={{ padding: '80px 5%' }}>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Simple Plans</h1>
                <p style={{ color: '#64748B', marginTop: 12 }}>Start free, upgrade when you need more.</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
                {[
                  { name: 'Free', price: '$0', features: ['Basic features', '5 projects', 'Community support' ] },
                  { name: 'Pro', price: '$9.99', features: ['All features', 'Unlimited projects', 'Priority support', 'Team access'], popular: true },
                  { name: 'Enterprise', price: '$29.99', features: ['Everything in Pro', 'Custom branding', 'Dedicated manager', 'API access'] },
                ].map((t, i) => (
                  <div key={i} style={{
                    background: t.popular ? c.color : 'white', color: t.popular ? 'white' : '#0F172A',
                    padding: 40, borderRadius: 24, width: 300, border: t.popular ? 'none' : '1px solid #E2E8F0',
                    boxShadow: t.popular ? `0 20px 40px ${c.color}40` : '0 10px 20px rgba(0,0,0,0.03)'
                  }}>
                    {t.popular && <div style={{ background: '#0F172A', color: 'white', padding: '4px 14px', borderRadius: 50, fontSize: '0.8rem', fontWeight: 800, display: 'inline-block', marginBottom: 12 }}>POPULAR</div>}
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 8 }}>{t.name}</h3>
                    <div style={{ fontSize: '3rem', fontWeight: 900, margin: '16px 0' }}>{t.price}<span style={{ fontSize: '1rem', fontWeight: 600, opacity: 0.7 }}>/mo</span></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '24px 0' }}>
                      {t.features.map((f, j) => <div key={j} style={{ fontWeight: 600 }}>✓ {f}</div>)}
                    </div>
                    <button style={{ width: '100%', padding: 14, borderRadius: 12, border: 'none', background: t.popular ? 'white' : '#F1F5F9', color: t.popular ? c.color : '#0F172A', fontWeight: 800, cursor: 'pointer' }}>Subscribe</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {innerTab === 'contact' && (
            <div style={{ padding: '80px 5%', background: 'white' }}>
              <div style={{ maxWidth: 700, margin: '0 auto', padding: 50, background: '#F8FAFC', borderRadius: 24, border: '1px solid #E2E8F0' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, textAlign: 'center', marginBottom: 30 }}>Get in Touch</h2>
                {contactSent ? (
                  <div style={{ textAlign: 'center', padding: 40 }}>
                    <div style={{ width: 60, height: 60, background: `${c.color}20`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>✓</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Message Sent!</h3>
                    <p style={{ color: '#64748B' }}>We'll get back to you shortly.</p>
                    <button onClick={() => setContactSent(false)} style={{ marginTop: 20, background: c.color, color: 'white', border: 'none', padding: '10px 24px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setContactSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <input type="text" placeholder="Your Name" value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})} style={{ padding: 16, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '1rem' }} required />
                    <input type="email" placeholder="Email" value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} style={{ padding: 16, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '1rem' }} required />
                    <textarea placeholder="Your Message" rows={4} value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})} style={{ padding: 16, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '1rem', resize: 'none' }} required />
                    <button type="submit" style={{ background: c.color, color: 'white', padding: 16, borderRadius: 12, border: 'none', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer' }}>Send Message</button>
                  </form>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <footer style={{ background: '#0F172A', padding: 40, textAlign: 'center', color: '#64748B' }}>
        <p>© 2026 {c.title}. Available on iOS and Android.</p>
      </footer>
    </div>
  );
}