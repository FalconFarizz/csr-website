import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Globe, Database, TrendingUp, Users, Check } from 'lucide-react';

const titles = {
  5: { title: 'VELURA', color: '#DB2777', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80', desc: 'Premium online shopping experience with seamless checkout and personalized recommendations.' },
  6: { title: 'ESTATE', color: '#E11D48', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', desc: 'Discover exclusive properties with 3D virtual tours and premier agent networking.' },
  7: { title: 'MedCare', color: '#EC4899', img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80', desc: 'Streamline patient care, appointment scheduling, and electronic medical records securely.' },
  8: { title: 'EduVerse', color: '#4F46E5', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80', desc: 'Complete LMS with live classes, attendance tracking, grade reports and parent portal.' },
  9: { title: 'SereneStay', color: '#B91C1C', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', desc: 'Luxury hotel booking system with room management, dynamic pricing and loyalty program.' },
  10: { title: 'LogiTrack', color: '#E11D48', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', desc: 'Real-time fleet tracking with route optimization, driver management and fuel analytics.' },
  11: { title: 'LexPortal', color: '#7C3AED', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80', desc: 'Professional law firm portal with attorney profiles, case consultation booking and blog.' },
  12: { title: 'FitForge', color: '#22D3EE', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80', desc: 'Cross-platform fitness app with workout plans, progress tracking, nutrition and live coaching.' },
  13: { title: 'WanderAI', color: '#0EA5E9', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', desc: 'Full-featured travel booking with tour packages, flight search, visa guide and reviews.' },
  14: { title: 'BuildPro', color: '#F59E0B', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80', desc: 'Corporate construction website with project gallery, bid request system and client portal.' },
  15: { title: 'WealthWise', color: '#22C55E', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80', desc: 'Real-time financial dashboard with stock portfolio, expense tracker and crypto analytics.' },
  16: { title: 'QuickBite', color: '#F97316', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80', desc: 'On-demand food delivery platform with restaurant onboarding, live order tracking and ratings.' },
  17: { title: 'GlamBook', color: '#DB2777', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80', desc: 'Beauty salon management with appointment scheduling, stylist profiles and loyalty rewards.' },
  18: { title: 'PharmaSys', color: '#059669', img: 'https://images.unsplash.com/photo-1607619056574-7b8f304b3c3f?auto=format&fit=crop&w=1200&q=80', desc: 'Digital pharmacy with medicine inventory, prescription tracking and supplier management.' },
  19: { title: 'GiveHope', color: '#EC4899', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80', desc: 'Donation-driven charity platform with campaign pages, donor portal and impact reporting.' },
  20: { title: 'RentWheel', color: '#4F46E5', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80', desc: 'Online car rental with fleet management, GPS tracking, insurance integration and reviews.' },
  21: { title: 'EventPro', color: '#F59E0B', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80', desc: 'End-to-end event ticketing with QR codes, seat selection, refunds and organizer analytics.' },
  22: { title: 'SnapFolio', color: '#A21CAF', img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80', desc: 'Stunning photographer portfolio with masonry gallery, client proofing and print shop.' },
  23: { title: 'VirtuFit', color: '#EC4899', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80', desc: 'AR-powered virtual fitting room allowing users to try on clothes remotely.' },
  24: { title: 'SmartHub', color: '#0891B2', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80', desc: 'Centralized IoT dashboard controlling lighting, security, and climate across properties.' },
  25: { title: 'TeleHealth', color: '#059669', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', desc: 'Secure platform for remote consultations, electronic prescriptions, and health tracking.' },
  26: { title: 'GreenBasket', color: '#22C55E', img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80', desc: 'Direct-to-consumer organic grocery platform with subscription boxes and local routing.' },
  27: { title: 'CryptoVault', color: '#627EEA', img: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80', desc: 'Secure multi-currency crypto wallet with real-time trading and staking features.' },
  28: { title: 'GenStudio', color: '#E11D48', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80', desc: 'LLM-powered tool for generating marketing copy, blog posts, and SEO metadata.' },
  29: { title: 'AgriView', color: '#F59E0B', img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80', desc: '3D topographic mapping software processing drone imagery for crop health analysis.' },
  30: { title: 'CityGlow', color: '#3B82F6', img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80', desc: 'Networked street lighting system that adapts to traffic and pedestrian flow automatically.' },
  31: { title: 'TalentHub', color: '#8B5CF6', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', desc: 'Platform connecting businesses with vetted top-tier freelance tech talent.' },
  32: { title: 'ZenSpace', color: '#7C3AED', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80', desc: 'Wellness app offering guided meditations, sleep sounds, and daily habit tracking.' },
  33: { title: 'GenoVis', color: '#DB2777', img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80', desc: 'High-performance database and visualizer for complex genomic sequencing data.' },
  34: { title: 'ARoom', color: '#E11D48', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80', desc: 'Augmented reality app letting customers preview furniture in their homes before buying.' },
  35: { title: 'FactorySense', color: '#EC4899', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80', desc: 'Vibration and temperature monitoring system predicting factory machine failures.' },
  36: { title: 'SubBox', color: '#A21CAF', img: 'https://images.unsplash.com/photo-1513885059635-430c6c221a65?auto=format&fit=crop&w=1200&q=80', desc: 'Customizable subscription platform for monthly curated lifestyle products.' },
  37: { title: 'LinguaLearn', color: '#7C3AED', img: 'https://images.unsplash.com/photo-1546410531-b4d24dc0f368?auto=format&fit=crop&w=1200&q=80', desc: 'Gamified language learning app with voice recognition and AI conversation partners.' },
  38: { title: 'QuantumSim', color: '#4F46E5', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80', desc: 'Web-based simulator for building and running quantum computing algorithms.' },
  39: { title: 'AutoShow', color: '#DB2777', img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80', desc: 'Immersive 3D showroom for configuring and exploring luxury vehicles.' },
  40: { title: 'GridWise', color: '#E11D48', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80', desc: 'Real-time dashboard for monitoring power distribution and renewable energy inputs.' },
  41: { title: 'WholeSell', color: '#EC4899', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1200&q=80', desc: 'Bulk ordering portal with dynamic pricing tiers, credit lines, and SAP integration.' },
  42: { title: 'PetCare', color: '#A21CAF', img: 'https://images.unsplash.com/photo-1516734212829-f203876e6db8?auto=format&fit=crop&w=1200&q=80', desc: 'All-in-one app for pet health records, vet appointments, and pet sitting services.' },
  43: { title: 'SatMap', color: '#7C3AED', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80', desc: 'Platform for analyzing satellite imagery to track deforestation and urban growth.' },
  44: { title: 'AnatomiX', color: '#4F46E5', img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80', desc: 'Interactive 3D human anatomy models used by medical students and doctors.' },
  45: { title: 'ColdGuard', color: '#DB2777', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', desc: 'Temperature tracking for pharmaceutical logistics ensuring vaccine safety.' },
  46: { title: 'ArtisanHub', color: '#E11D48', img: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1200&q=80', desc: 'Global marketplace connecting local artisans with international buyers.' },
  47: { title: 'LocalNews', color: '#EC4899', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80', desc: 'Hyper-local news app pulling feeds, weather, and community alerts into one UI.' },
  48: { title: 'ClimaView', color: '#A21CAF', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', desc: 'Data visualization tool forecasting climate trends for agricultural planning.' },
  49: { title: 'VirtuCon', color: '#7C3AED', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80', desc: 'Metaverse-style virtual conference platform with spatial audio and networking.' },
  50: { title: 'FitSync', color: '#4F46E5', img: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b0?auto=format&fit=crop&w=1200&q=80', desc: 'Companion app and cloud sync for next-gen biometrics fitness trackers.' },
  51: { title: 'ArtMint', color: '#DB2777', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80', desc: 'High-end platform for trading authenticated digital art pieces and collectibles.' },
  52: { title: 'EcoRide', color: '#E11D48', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80', desc: 'Eco-friendly ridesharing app exclusively for electric vehicles and carpooling.' },
  53: { title: 'PrediMaint', color: '#EC4899', img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80', desc: 'Machine learning platform analyzing acoustic signatures to predict machine failure.' },
  54: { title: 'VRSim', color: '#A21CAF', img: 'https://images.unsplash.com/photo-1622979135225-d2ba269c4ea1?auto=format&fit=crop&w=1200&q=80', desc: 'Virtual reality hazard training simulator for heavy machinery operators.' },
  55: { title: 'AgriSmart', color: '#7C3AED', img: 'https://images.unsplash.com/photo-1592982537447-6f2334057864?auto=format&fit=crop&w=1200&q=80', desc: 'Automated farm irrigation system responding to live soil moisture and weather data.' },
  56: { title: 'FurniCasa', color: '#4F46E5', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80', desc: 'Modern headless commerce experience for a premium Scandinavian furniture brand.' },
  57: { title: 'NeoBank', color: '#DB2777', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80', desc: 'Next-gen neobank app with instant transfers, budgeting tools, and virtual cards.' },
};

const globalFeatures = [
  { icon: <Shield size={36} />, title: 'Enterprise Security', desc: 'Bank-grade encryption and compliance built-in to protect your data at all times.' },
  { icon: <Zap size={36} />, title: 'Lightning Fast', desc: 'Optimized infrastructure ensures fast load times globally for maximum conversion.' },
  { icon: <Globe size={36} />, title: 'Global Delivery', desc: 'Deliver content instantly to users anywhere in the world via our edge network.' },
  { icon: <Database size={36} />, title: 'Unlimited Storage', desc: 'Scale without limits. Our cloud architecture grows with your business automatically.' },
  { icon: <TrendingUp size={36} />, title: 'Advanced Analytics', desc: 'Get actionable insights with real-time reporting and custom dashboard creation.' },
  { icon: <Users size={36} />, title: 'Team Collaboration', desc: 'Built for modern teams with granular permissions, activity logs, and seamless sharing.' },
];

export default function ProjectGeneric({ projectId, state }) {
  const { innerTab, setInnerTab } = state;
  const p = titles[projectId] || { title: `App ${projectId}`, color: '#2563EB', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80', desc: 'Robust digital platform built for scale.' };
  const navItems = ['home', 'features', 'pricing', 'about'];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A', background: '#F8FAFC', minHeight: '100vh' }}>
      <nav style={{ padding: '16px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ fontWeight: 900, fontSize: '1.5rem', color: p.color, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, background: p.color, borderRadius: 8 }} />
          {p.title}
        </div>
        <div style={{ display: 'flex', gap: 32, fontWeight: 600 }}>
          {navItems.map(tab => (
            <span key={tab} onClick={() => { setInnerTab(tab); window.scrollTo(0,0); }}
              style={{ cursor: 'pointer', color: innerTab === tab ? p.color : '#64748B', textTransform: 'capitalize' }}>
              {tab}
            </span>
          ))}
        </div>
        <button style={{ background: p.color, color: 'white', border: 'none', padding: '10px 24px', borderRadius: 50, fontWeight: 700, cursor: 'pointer' }}>
          Get Started
        </button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
          {innerTab === 'home' && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', padding: '80px 5%', minHeight: '80vh', gap: 60 }}>
                <div style={{ flex: 1 }}>
                  <span style={{ color: p.color, fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1, padding: '6px 14px', background: `${p.color}15`, borderRadius: 50 }}>
                    Next Generation Platform
                  </span>
                  <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, margin: '20px 0' }}>
                    The Future of <span style={{ color: p.color }}>{p.title}</span> is Here.
                  </h1>
                  <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7, maxWidth: 540, marginBottom: 40 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <button style={{ background: p.color, color: 'white', padding: '16px 36px', borderRadius: 12, border: 'none', fontWeight: 800, fontSize: '1.05rem', cursor: 'pointer' }}>
                      Start Free Trial
                    </button>
                    <button onClick={() => setInnerTab('features')} style={{ background: 'white', color: '#0F172A', border: '1px solid #E2E8F0', padding: '16px 36px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>
                      Explore Features
                    </button>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', borderRadius: 24, boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3)', height: 500, objectFit: 'cover' }} />
                </div>
              </div>
              <div style={{ padding: '50px 5%', background: 'white', textAlign: 'center', borderTop: '1px solid #E2E8F0' }}>
                <p style={{ color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 30 }}>Trusted worldwide</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 60, opacity: 0.4 }}>
                  {['Microsoft', 'Amazon', 'Google', 'Spotify', 'Netflix'].map((n, i) => (
                    <h3 key={i} style={{ fontSize: '1.8rem', fontWeight: 900 }}>{n}</h3>
                  ))}
                </div>
              </div>
            </>
          )}

          {innerTab === 'features' && (
            <div style={{ padding: '80px 5%', background: 'white' }}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Everything you need to scale</h1>
                <p style={{ color: '#64748B', fontSize: '1.1rem', marginTop: 16 }}>Powerful tools designed to accelerate growth.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
                {globalFeatures.map((f, i) => (
                  <div key={i} style={{ padding: 40, background: '#F8FAFC', borderRadius: 20, border: '1px solid #E2E8F0' }}>
                    <div style={{ color: p.color, marginBottom: 20 }}>{f.icon}</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>{f.title}</h3>
                    <p style={{ color: '#64748B', lineHeight: 1.7 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {innerTab === 'pricing' && (
            <div style={{ padding: '80px 5%' }}>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900 }}>Simple pricing</h1>
                <p style={{ color: '#64748B', fontSize: '1.1rem', marginTop: 12 }}>No hidden fees.</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap' }}>
                {[
                  { name: 'Starter', price: '$29', features: ['Up to 5 Users', 'Basic Analytics', 'Community Support', '10GB Storage'] },
                  { name: 'Professional', price: '$99', features: ['Unlimited Users', 'Advanced Analytics', '24/7 Support', '500GB Storage', 'Custom Domain'], popular: true },
                  { name: 'Enterprise', price: 'Custom', features: ['Dedicated Manager', 'On-Premise', 'SLA Guarantee', 'Unlimited Storage'] },
                ].map((t, i) => (
                  <div key={i} style={{
                    background: t.popular ? p.color : 'white', color: t.popular ? 'white' : '#0F172A',
                    padding: 40, borderRadius: 24, width: 340, position: 'relative',
                    border: t.popular ? 'none' : '1px solid #E2E8F0',
                    boxShadow: t.popular ? `0 20px 40px ${p.color}40` : '0 10px 20px rgba(0,0,0,0.03)'
                  }}>
                    {t.popular && <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#0F172A', color: 'white', padding: '6px 16px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 800 }}>POPULAR</div>}
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 8 }}>{t.name}</h3>
                    <div style={{ fontSize: '3.5rem', fontWeight: 900, margin: '20px 0' }}>{t.price}<span style={{ fontSize: '1rem', fontWeight: 600, opacity: 0.7 }}>/mo</span></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, margin: '30px 0' }}>
                      {t.features.map((f, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 600 }}>
                          <Check size={16} color={t.popular ? 'white' : p.color} /> {f}
                        </div>
                      ))}
                    </div>
                    <button style={{ width: '100%', padding: 16, borderRadius: 12, border: 'none', background: t.popular ? 'white' : '#F1F5F9', color: t.popular ? p.color : '#0F172A', fontWeight: 800, cursor: 'pointer' }}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {innerTab === 'about' && (
            <div style={{ padding: '80px 5%', background: 'white' }}>
              <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto 60px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: 20 }}>Building the infrastructure for tomorrow</h1>
                <p style={{ color: '#64748B', fontSize: '1.2rem', lineHeight: 1.8 }}>We are a team of passionate engineers and designers dedicated to creating tools that empower businesses.</p>
              </div>
              <div style={{ display: 'flex', gap: 30 }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" style={{ flex: 2, height: 400, objectFit: 'cover', borderRadius: 24 }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80" alt="Office" style={{ height: 190, objectFit: 'cover', borderRadius: 24 }} />
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" alt="Meeting" style={{ height: 190, objectFit: 'cover', borderRadius: 24 }} />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <footer style={{ background: '#0F172A', padding: '60px 5% 30px', color: 'white' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, background: p.color, borderRadius: 8 }} /> {p.title}
            </div>
            <p style={{ color: '#94A3B8', lineHeight: 1.7 }}>Empowering the future of digital business with cutting edge tools.</p>
          </div>
          <div><h4 style={{ fontWeight: 800, marginBottom: 16 }}>Product</h4><div style={{ color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: 10 }}><span>Features</span><span>Pricing</span></div></div>
          <div><h4 style={{ fontWeight: 800, marginBottom: 16 }}>Company</h4><div style={{ color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: 10 }}><span>About</span><span>Careers</span></div></div>
        </div>
        <div style={{ textAlign: 'center', color: '#64748B', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          © 2026 {p.title}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}