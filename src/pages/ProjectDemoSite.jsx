import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, Globe, Briefcase, BarChart, Users, Database, Plus, Trash, Check, Mail, Phone, MapPin, Star, ShoppingCart, Heart, Home, Search, Sun, Activity, BookOpen, Watch, TrendingUp, CreditCard, Headphones, Calendar, Bell, Monitor, Shield } from 'lucide-react';
import Project4 from './demos/Project4';
import Project7 from './demos/Project7';
import ProjectGeneric from './demos/ProjectGeneric';
import EcommerceDemo from './demos/EcommerceDemo';
import IoTDemo from './demos/IoTDemo';
import AppDemo from './demos/AppDemo';
import ScitechDemo from './demos/ScitechDemo';
import AR3DDemo from './demos/AR3DDemo';
import HotelDemo from './demos/HotelDemo';
import RealEstateDemo from './demos/RealEstateDemo';
import SchoolDemo from './demos/SchoolDemo';
import TravelDemo from './demos/TravelDemo';
import FinanceDemo from './demos/FinanceDemo';
import SalonDemo from './demos/SalonDemo';
import FoodDeliveryDemo from './demos/FoodDeliveryDemo';
import PharmacyDemo from './demos/PharmacyDemo';
import NGODemo from './demos/NGODemo';

export default function ProjectDemoSite({ projectId, state }) {
  // Custom individual demos
  if (projectId === 1) return <Project1 state={state} />;
  if (projectId === 2) return <Project2 state={state} />;
  if (projectId === 3) return <Project3 state={state} />;
  if (projectId === 4) return <Project4 state={state} />;
  if (projectId === 6) return <RealEstateDemo state={state} />;
  if (projectId === 7) return <Project7 state={state} />;
  if (projectId === 8) return <SchoolDemo state={state} />;
  if (projectId === 9) return <HotelDemo state={state} />;
  if (projectId === 13) return <TravelDemo state={state} />;
  if (projectId === 15) return <FinanceDemo state={state} />;
  if (projectId === 16) return <FoodDeliveryDemo state={state} />;
  if (projectId === 17) return <SalonDemo state={state} />;
  if (projectId === 18) return <PharmacyDemo state={state} />;
  if (projectId === 19) return <NGODemo state={state} />;

  // Category-based routing for remaining projects
  const ecommerceIds = [5, 20, 21, 26, 31, 36, 41, 46, 51, 56];
  const ar3dIds = [22, 23, 29, 34, 39, 44, 49, 54];
  const appIds = [12, 16, 18, 27, 32, 37, 42, 47, 52, 57];
  const iotIds = [10, 24, 30, 35, 40, 45, 50, 55];
  const scitechIds = [11, 14, 25, 28, 33, 38, 43, 48, 53];

  if (ecommerceIds.includes(projectId)) return <EcommerceDemo projectId={projectId} state={state} />;
  if (ar3dIds.includes(projectId)) return <AR3DDemo projectId={projectId} state={state} />;
  if (appIds.includes(projectId)) return <AppDemo projectId={projectId} state={state} />;
  if (iotIds.includes(projectId)) return <IoTDemo projectId={projectId} state={state} />;
  if (scitechIds.includes(projectId)) return <ScitechDemo projectId={projectId} state={state} />;

  return <ProjectGeneric projectId={projectId} state={state} />;
}

// --- PROJECT 1: Corporate Business Website (AURUM) ---
function Project1({ state }) {
  const { innerTab, setInnerTab, contactForm, setContactForm, contactSent, setContactSent } = state;
  const navItems = ['home', 'services', 'about', 'contact'];
  return (
    <div style={{ background: '#070F2B', color: 'white', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', background: 'rgba(7,15,43,0.9)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid rgba(0,194,255,0.1)' }}>
        <div style={{ fontWeight: 900, fontSize: '1.6rem', color: '#00C2FF', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#00C2FF,#163B80)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Zap size={18} color="white" /></div>AURUM
        </div>
        <div style={{ display: 'flex', gap: 30, fontWeight: 600 }}>
          {navItems.map(tab => (
            <span key={tab} onClick={() => { setInnerTab(tab); window.scrollTo(0,0); }}
              style={{ cursor: 'pointer', color: innerTab === tab ? '#00C2FF' : '#94A3B8', textTransform: 'capitalize', borderBottom: innerTab === tab ? '2px solid #00C2FF' : '2px solid transparent', paddingBottom: 4 }}>
              {tab}
            </span>
          ))}
        </div>
        <button onClick={() => setInnerTab('contact')} style={{ background: 'linear-gradient(135deg,#00C2FF,#163B80)', color: 'white', padding: '12px 28px', borderRadius: 50, border: 'none', fontWeight: 700, cursor: 'pointer' }}>Get Started</button>
      </nav>
      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
          {innerTab === 'home' && (
            <><div style={{ position: 'relative', padding: '120px 5%', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, zIndex: 0 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#070F2B 0%,rgba(7,15,43,0.6) 100%)', zIndex: 1 }} />
              <div style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}>
                <span style={{ background: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)', color: '#00C2FF', padding: '8px 16px', borderRadius: 50, fontSize: '0.8rem', fontWeight: 700, letterSpacing: 1, display: 'inline-flex', alignItems: 'center', gap: 8 }}><div style={{ width: 8, height: 8, background: '#00C2FF', borderRadius: '50%' }} /> STRATEGY & VALUE FIRST</span>
                <h1 style={{ fontSize: '5rem', fontWeight: 800, marginTop: 24, marginBottom: 24, lineHeight: 1.05 }}>Elevate Your <span style={{ color: '#00C2FF' }}>Corporate</span> Operations.</h1>
                <p style={{ color: '#94A3B8', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: 40, maxWidth: 650 }}>We integrate bespoke operational models, cloud architectures, and intelligence networks to boost enterprise value chains on a global scale.</p>
                <div style={{ display: 'flex', gap: 20 }}><button onClick={() => setInnerTab('contact')} style={{ background: '#00C2FF', color: '#0B132B', padding: '16px 36px', borderRadius: 8, border: 'none', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>Book Audit <ArrowRight size={20} /></button><button onClick={() => setInnerTab('services')} style={{ background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 36px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}><Globe size={20} /> Our Services</button></div>
              </div>
            </div>
            <div style={{ padding: '100px 5%', background: '#1B1A55' }}>
              <div style={{ marginBottom: 60 }}><h2 style={{ fontSize: '2.8rem', fontWeight: 800 }}>Core Consulting Directives</h2><p style={{ color: '#94A3B8', marginTop: 16, fontSize: '1.1rem' }}>Delivering excellence across three primary verticals.</p></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 30 }}>
                {[{ title: 'Global M&A', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=600&q=80', desc: 'Complete due diligence, compliance automation, and integration planning.' },
                  { title: 'Cloud Migrations', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', desc: 'Secure transitions of legacy frameworks into cloud structures running on AWS.' },
                  { title: 'Data Intelligence', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', desc: 'Setup real-time business operations intelligence metrics models.' }].map((s, i) => (
                  <div key={i} style={{ background: '#070F2B', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(0,194,255,0.1)' }}>
                    <img src={s.img} alt={s.title} style={{ width: '100%', height: 240, objectFit: 'cover' }} />
                    <div style={{ padding: 30 }}><h3 style={{ fontSize: '1.5rem', color: '#00C2FF', fontWeight: 800, marginBottom: 16 }}>{s.title}</h3><p style={{ color: '#94A3B8', lineHeight: 1.6 }}>{s.desc}</p></div>
                  </div>
                ))}
              </div>
            </div></>
          )}
          {innerTab === 'services' && (
            <div style={{ padding: '80px 5%', background: '#070F2B' }}>
              <div style={{ textAlign: 'center', marginBottom: 80 }}><span style={{ color: '#00C2FF', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Expertise</span><h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '20px 0' }}>Comprehensive Solutions</h1><p style={{ color: '#94A3B8', fontSize: '1.2rem' }}>We tackle the most complex enterprise challenges with innovative, data-driven methodologies.</p></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                {[{ title: 'Strategic Advisory', icon: <Briefcase size={32}/>, img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', desc: 'Navigate market shifts and secure competitive advantage with our proprietary strategic frameworks.' },
                  { title: 'Digital Transformation', icon: <Zap size={32}/>, img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', desc: 'Overhaul legacy systems and embrace modern cloud-native architectures for maximum agility.' },
                  { title: 'Financial Restructuring', icon: <TrendingUp size={32}/>, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', desc: 'Optimize capital allocation, reduce operational overhead, and maximize shareholder returns.' },
                  { title: 'Data & AI Integration', icon: <BarChart size={32}/>, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', desc: 'Turn siloed data into actionable intelligence with custom machine learning pipelines.' }].map((s, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse', background: '#1B1A55', borderRadius: 32, overflow: 'hidden', border: '1px solid rgba(0,194,255,0.1)' }}>
                    <div style={{ flex: 1 }}><img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', minHeight: 400, objectFit: 'cover' }} /></div>
                    <div style={{ flex: 1, padding: 60, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ width: 60, height: 60, background: 'rgba(0,194,255,0.1)', color: '#00C2FF', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>{s.icon}</div>
                      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 20 }}>{s.title}</h2>
                      <p style={{ color: '#94A3B8', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: 30 }}>{s.desc}</p>
                      <button style={{ alignSelf: 'flex-start', background: 'transparent', color: '#00C2FF', border: '1px solid #00C2FF', padding: '12px 24px', borderRadius: 50, fontWeight: 700, cursor: 'pointer' }}>Learn More</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {innerTab === 'about' && (
            <div style={{ padding: '80px 5%', background: '#070F2B' }}>
              <div style={{ textAlign: 'center', marginBottom: 80 }}><h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: 24 }}>The Team Behind the Transformation</h1><p style={{ color: '#94A3B8', fontSize: '1.2rem', maxWidth: 700, margin: '0 auto' }}>Aurum brings together the brightest minds in strategy, technology, and finance to solve global business challenges.</p></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
                {[{ value: '15+', label: 'Years Experience' },{ value: '300+', label: 'Enterprise Clients' },{ value: '$10B+', label: 'Value Created' },{ value: '50+', label: 'Global Offices' }].map((m, i) => (
                  <div key={i} style={{ background: '#1B1A55', padding: 40, borderRadius: 24, textAlign: 'center', border: '1px solid rgba(0,194,255,0.1)' }}>
                    <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#00C2FF', marginBottom: 10 }}>{m.value}</div>
                    <div style={{ color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {innerTab === 'contact' && (
            <div style={{ padding: '80px 5%', background: '#070F2B', display: 'flex', gap: 60, alignItems: 'center', minHeight: '80vh' }}>
              <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: 24 }}>Let's Build the Future.</h1>
                <p style={{ color: '#94A3B8', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: 40 }}>Contact our advisory team to discuss how Aurum can accelerate your business transformation.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}><div style={{ width: 60, height: 60, background: 'rgba(0,194,255,0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#00C2FF' }}><MapPin size={24} /></div><div><h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Global Headquarters</h4><p style={{ color: '#94A3B8', marginTop: 4 }}>1 World Trade Center, Suite 4500, New York, NY</p></div></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}><div style={{ width: 60, height: 60, background: 'rgba(0,194,255,0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#00C2FF' }}><Mail size={24} /></div><div><h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Email Us</h4><p style={{ color: '#94A3B8', marginTop: 4 }}>strategy@aurum.com</p></div></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}><div style={{ width: 60, height: 60, background: 'rgba(0,194,255,0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#00C2FF' }}><Phone size={24} /></div><div><h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Call Us</h4><p style={{ color: '#94A3B8', marginTop: 4 }}>+1 (800) 123-4567</p></div></div>
                </div>
              </div>
              <div style={{ flex: 1, background: '#1B1A55', padding: 50, borderRadius: 32, border: '1px solid rgba(0,194,255,0.2)' }}>
                {contactSent ? (
                  <div style={{ textAlign: 'center', padding: '60px 20px' }}><div style={{ width: 80, height: 80, background: 'rgba(0,255,132,0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 24px' }}><Check size={40} color="#00FF84" /></div><h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 16 }}>Request Received!</h3><p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>Thank you. Our partners will review your request and contact {contactForm.email} within 24 hours.</p><button onClick={() => setContactSent(false)} style={{ marginTop: 30, background: 'transparent', border: '1px solid #00C2FF', color: '#00C2FF', padding: '12px 30px', borderRadius: 50, cursor: 'pointer' }}>Send Another</button></div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setContactSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 20 }}>Request Consultation</h3>
                    <input type="text" placeholder="Full Name" required value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})} style={{ padding: 20, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', fontSize: '1.1rem' }} />
                    <input type="email" placeholder="Work Email" required value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} style={{ padding: 20, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', fontSize: '1.1rem' }} />
                    <textarea placeholder="Tell us about your operational challenges" required rows={5} style={{ padding: 20, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', fontSize: '1.1rem', resize: 'none' }} />
                    <button type="submit" style={{ background: 'linear-gradient(135deg,#00C2FF,#163B80)', color: 'white', padding: 20, borderRadius: 12, border: 'none', fontWeight: 800, fontSize: '1.2rem', cursor: 'pointer', marginTop: 10 }}>Submit Request</button>
                  </form>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// --- PROJECT 2: Museum Portal (ANTIQUITIES) ---
function Project2({ state }) {
  const { innerTab, setInnerTab } = state;
  return (
    <div style={{ background: '#FAF6EE', color: '#2C1B18', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 5%', borderBottom: '1px solid #E3DBCF', background: 'rgba(250,246,238,0.95)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(10px)' }}>
        <div style={{ fontWeight: 900, fontSize: '1.6rem', color: '#78350F', letterSpacing: '0.1em' }}>ANTIQUITIES</div>
        <div style={{ display: 'flex', gap: 40, fontWeight: 600, fontFamily: 'sans-serif' }}>
          {['home', 'exhibits', 'tickets'].map(tab => (
            <span key={tab} onClick={() => { setInnerTab(tab); window.scrollTo(0,0); }} style={{ cursor: 'pointer', color: innerTab === tab ? '#78350F' : '#78716C', textTransform: 'uppercase', letterSpacing: 2, borderBottom: innerTab === tab ? '2px solid #78350F' : '2px solid transparent', paddingBottom: 4 }}>{tab}</span>
          ))}
        </div>
      </nav>
      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          {innerTab === 'home' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '85vh' }}>
              <div style={{ flex: '1 1 500px', padding: '80px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#B45309', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Now Exhibiting Globally</span>
                <h1 style={{ fontSize: '5rem', fontWeight: 400, margin: '24px 0', lineHeight: 1.1, fontStyle: 'italic' }}>Lost Dynasties of the Mediterranean</h1>
                <p style={{ fontSize: '1.3rem', color: '#57534E', lineHeight: 1.8, marginBottom: 40 }}>Browse high-resolution 3D artifacts, curatorial records, and carbon-dated collections representing the peak of ancient commerce.</p>
                <div style={{ display: 'flex', gap: 20 }}><button onClick={() => setInnerTab('exhibits')} style={{ background: '#78350F', color: 'white', padding: '18px 40px', border: 'none', borderRadius: 4, fontWeight: 600, fontFamily: 'sans-serif', cursor: 'pointer', fontSize: '1.1rem' }}>Enter Galleries</button><button onClick={() => setInnerTab('tickets')} style={{ background: 'transparent', border: '1px solid #78350F', color: '#78350F', padding: '18px 40px', borderRadius: 4, fontWeight: 600, fontFamily: 'sans-serif', cursor: 'pointer', fontSize: '1.1rem' }}>Reserve Tickets</button></div>
              </div>
              <div style={{ flex: '1 1 500px', backgroundImage: 'url(https://images.unsplash.com/photo-1544253163-f2730ca78cc4?auto=format&fit=crop&w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
          )}
          {innerTab === 'exhibits' && (
            <div style={{ padding: '80px 5%', background: '#F5EBE1' }}>
              <div style={{ textAlign: 'center', marginBottom: 80 }}><h1 style={{ fontSize: '4.5rem', fontStyle: 'italic', color: '#78350F', marginBottom: 20 }}>Archived Collections</h1><p style={{ fontSize: '1.3rem', color: '#57534E', maxWidth: 800, margin: '0 auto', lineHeight: 1.7 }}>Delve into our painstakingly curated archives featuring relics from the world's most influential ancient civilizations.</p></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
                {[{ title: 'Attic Kylix Drinking Cup', date: 'c. 480 BCE', img: 'https://images.unsplash.com/photo-1605809147551-9333da781c8b?auto=format&fit=crop&w=800&q=80', desc: 'A pristine example of red-figure pottery depicting symposium scenes.' },
                  { title: 'Roman Mosaic Fragment', date: 'c. 150 CE', img: 'https://images.unsplash.com/photo-1600109787127-14eaf0f09a56?auto=format&fit=crop&w=800&q=80', desc: 'Intricate tesserae forming a geometric pattern from a Pompeii villa.' },
                  { title: 'Limestone Ushabti', date: 'c. 1320 BCE', img: 'https://images.unsplash.com/photo-1599939226462-fc8e33f38012?auto=format&fit=crop&w=800&q=80', desc: 'Funerary figurine intended to act as a servant for the deceased in the afterlife.' }].map((item, idx) => (
                  <div key={idx} style={{ background: '#FFFFFF', padding: 30, boxShadow: '0 15px 40px rgba(120,53,15,0.08)', borderRadius: 4 }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: 350, objectFit: 'cover', marginBottom: 24 }} />
                    <span style={{ fontSize: '0.9rem', color: '#B45309', fontFamily: 'sans-serif', fontWeight: 700, letterSpacing: 1 }}>{item.date}</span>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 400, color: '#2C1B18', margin: '12px 0', fontStyle: 'italic' }}>{item.title}</h3>
                    <p style={{ color: '#57534E', lineHeight: 1.6, fontFamily: 'sans-serif', fontSize: '1.05rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {innerTab === 'tickets' && (
            <div style={{ padding: '80px 5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h1 style={{ fontSize: '4rem', fontStyle: 'italic', color: '#78350F', marginBottom: 20 }}>Plan Your Visit</h1>
              <p style={{ fontSize: '1.2rem', color: '#57534E', marginBottom: 60, textAlign: 'center' }}>Select an entry pass to experience the wonders of antiquity in person.</p>
              <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
                {[{ type: 'General Admission', price: '$25', desc: 'Access to all permanent collections and public galleries.' },
                  { type: 'Special Exhibit Pass', price: '$40', desc: 'Includes General Admission plus entry to "Lost Dynasties".', featured: true },
                  { type: 'Annual Membership', price: '$120', desc: 'Unlimited visits, guest passes, and exclusive preview invites.' }].map((t, i) => (
                  <div key={i} style={{ width: 350, background: t.featured ? '#78350F' : 'white', color: t.featured ? '#FAF6EE' : '#2C1B18', padding: 40, border: t.featured ? 'none' : '1px solid #E3DBCF', borderRadius: 8, boxShadow: t.featured ? '0 20px 40px rgba(120,53,15,0.2)' : 'none', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.6rem', fontStyle: 'italic', marginBottom: 20 }}>{t.type}</h3>
                    <div style={{ fontSize: '3.5rem', fontFamily: 'sans-serif', fontWeight: 300, marginBottom: 20 }}>{t.price}</div>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 40, opacity: 0.9 }}>{t.desc}</p>
                    <button onClick={() => alert(`${t.type} added to cart.`)} style={{ width: '100%', padding: 16, background: t.featured ? '#FAF6EE' : '#78350F', color: t.featured ? '#78350F' : 'white', border: 'none', borderRadius: 4, fontFamily: 'sans-serif', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>Purchase</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// --- PROJECT 3: Billing Software (Invoify) ---
function Project3({ state }) {
  const { invoices, setInvoices, newClient, setNewClient, newAmount, setNewAmount, innerTab, setInnerTab } = state;
  const currentTab = ['invoices', 'clients', 'reports', 'settings'].includes(innerTab) ? innerTab : 'invoices';
  return (
    <div style={{ background: '#F8FAFC', color: '#0F172A', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <nav style={{ background: 'white', padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ fontWeight: 800, color: '#6366F1', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: 12 }}><div style={{ background: '#6366F1', padding: 8, borderRadius: 8 }}><Database size={24} color="white" /></div>Invoify Pro</div>
      </nav>
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
        <div style={{ width: 240, background: 'white', padding: '30px 20px', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h3 style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16, paddingLeft: 16 }}>Dashboard</h3>
          {[{ id: 'invoices', label: 'Invoices', icon: <Briefcase size={20} /> },{ id: 'clients', label: 'Clients', icon: <Users size={20} /> },{ id: 'reports', label: 'Reports', icon: <BarChart size={20} /> }].map(item => (
            <div key={item.id} onClick={() => setInnerTab(item.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, background: currentTab === item.id ? '#EEF2FF' : 'transparent', color: currentTab === item.id ? '#4F46E5' : '#64748B', padding: '14px 16px', borderRadius: 12, fontWeight: 600, cursor: 'pointer' }}>{item.icon} {item.label}</div>
          ))}
        </div>
        <div style={{ flex: 1, padding: '40px 5%' }}>
          {currentTab === 'invoices' && (
            <><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}><div><h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 8 }}>Invoice Ledger</h1><p style={{ color: '#64748B', fontSize: '1.1rem' }}>Manage and track all your client billing in one place.</p></div><div style={{ background: 'white', padding: '20px 30px', borderRadius: 16, border: '1px solid #E2E8F0', textAlign: 'right' }}><span style={{ fontSize: '0.9rem', color: '#64748B', display: 'block', fontWeight: 600 }}>Total Outstanding</span><strong style={{ color: '#4F46E5', fontSize: '2rem', fontWeight: 900 }}>${invoices.reduce((a, c) => a + c.amount, 0).toLocaleString()}</strong></div></div>
            <div style={{ background: 'white', padding: 30, borderRadius: 20, border: '1px solid #E2E8F0', marginBottom: 40 }}><h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>Create New Invoice</h3><form onSubmit={e => { e.preventDefault(); if(!newClient || !newAmount) return; setInvoices([{ id: `INV-${Math.floor(100+Math.random()*900)}`, client: newClient, amount: parseFloat(newAmount), status: 'Pending', date: new Date().toISOString().split('T')[0] }, ...invoices]); setNewClient(''); setNewAmount(''); }} style={{ display: 'flex', gap: 20, alignItems: 'center' }}><input type="text" placeholder="Client Name" value={newClient} onChange={e => setNewClient(e.target.value)} required style={{ flex: 1, padding: 16, border: '1px solid #CBD5E1', borderRadius: 12, fontSize: '1.05rem', background: '#F8FAFC' }} /><input type="number" placeholder="Amount ($)" value={newAmount} onChange={e => setNewAmount(e.target.value)} required style={{ width: 200, padding: 16, border: '1px solid #CBD5E1', borderRadius: 12, fontSize: '1.05rem', background: '#F8FAFC' }} /><button type="submit" style={{ background: '#4F46E5', color: 'white', border: 'none', padding: '16px 30px', borderRadius: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}><Plus size={20} /> Create</button></form></div>
            <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 20, overflow: 'hidden' }}><table style={{ width: '100%', borderCollapse: 'collapse' }}><thead><tr style={{ background: '#F1F5F9' }}><th style={{ padding: '20px 24px', textAlign: 'left', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', color: '#475569' }}>Invoice</th><th style={{ padding: '20px 24px', textAlign: 'left', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', color: '#475569' }}>Client</th><th style={{ padding: '20px 24px', textAlign: 'left', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', color: '#475569' }}>Amount</th><th style={{ padding: '20px 24px', textAlign: 'left', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', color: '#475569' }}>Status</th><th style={{ padding: '20px 24px' }}></th></tr></thead><tbody>{invoices.map(inv => (<tr key={inv.id} style={{ borderBottom: '1px solid #F1F5F9' }}><td style={{ padding: '20px 24px', fontWeight: 700 }}>{inv.id}</td><td style={{ padding: '20px 24px' }}>{inv.client}</td><td style={{ padding: '20px 24px', fontWeight: 800 }}>${inv.amount.toLocaleString()}</td><td style={{ padding: '20px 24px' }}><span style={{ padding: '6px 16px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700, background: inv.status === 'Paid' ? '#DCFCE7' : '#FEF3C7', color: inv.status === 'Paid' ? '#15803D' : '#B45309' }}>{inv.status}</span></td><td style={{ padding: '20px 24px' }}><button onClick={() => setInvoices(invoices.filter(i => i.id !== inv.id))} style={{ background: '#FEE2E2', border: 'none', color: '#EF4444', cursor: 'pointer', padding: 10, borderRadius: 8 }}><Trash size={18} /></button></td></tr>))}</tbody></table></div></>
          )}
        </div>
      </div>
    </div>
  );
}