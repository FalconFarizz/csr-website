import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Clock, Star, User, Check, Calendar, MapPin, Phone } from 'lucide-react';

const services = [
  { name:'Signature Haircut', price:35, duration:'45 min', rating:4.9 },
  { name:'Hair Color & Highlights', price:120, duration:'2 hrs', rating:4.8 },
  { name:'Facial Treatment', price:75, duration:'60 min', rating:4.9 },
  { name:'Manicure & Pedicure', price:65, duration:'90 min', rating:4.7 },
  { name:'Bridal Package', price:350, duration:'4 hrs', rating:5.0 },
  { name:'Keratin Treatment', price:180, duration:'3 hrs', rating:4.8 },
];

const stylists = [
  { name:'Sofia Rodriguez', spec:'Color Expert', rating:5.0, exp:'8 yrs', img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', avail:true },
  { name:'Aisha Patel', spec:'Bridal Specialist', rating:4.9, exp:'6 yrs', img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', avail:true },
  { name:'Emma Johnson', spec:'Hair Artist', rating:4.8, exp:'5 yrs', img:'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80', avail:false },
  { name:'Luna Kim', spec:'Skincare Expert', rating:4.9, exp:'7 yrs', img:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', avail:true },
];

const times = ['09:00 AM','10:00 AM','11:00 AM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM'];

export default function SalonDemo({ state }) {
  const { innerTab, setInnerTab, salonService, setSalonService, salonStylist, setSalonStylist, salonBooked, setSalonBooked } = state;
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const nav = ['home', 'services', 'book', 'stylists'];
  const selSvc = services.find(s => s.name === salonService) || services[0];
  const selSty = stylists.find(s => s.name === salonStylist) || stylists[0];

  return (
    <div style={{ fontFamily:'Inter,sans-serif', background:'#FFF5F8', color:'#1a1a1a', minHeight:'100vh' }}>
      <nav style={{ padding:'18px 5%', display:'flex', justifyContent:'space-between', alignItems:'center', background:'white', borderBottom:'1px solid #FCE7F3', position:'sticky', top:0, zIndex:50 }}>
        <div style={{ fontWeight:900, fontSize:'1.5rem', color:'#DB2777', display:'flex', alignItems:'center', gap:8 }}><Scissors size={22} color="#DB2777"/>GlamBook</div>
        <div style={{ display:'flex', gap:32, fontWeight:600 }}>
          {nav.map(t=><span key={t} onClick={()=>{setInnerTab(t);window.scrollTo(0,0);}} style={{ cursor:'pointer', color:innerTab===t?'#DB2777':'#94A3B8', textTransform:'capitalize', borderBottom:innerTab===t?'2px solid #DB2777':'2px solid transparent', paddingBottom:4 }}>{t}</span>)}
        </div>
        <button onClick={()=>setInnerTab('book')} style={{ background:'linear-gradient(135deg,#DB2777,#EC4899)', color:'white', border:'none', padding:'12px 28px', borderRadius:50, fontWeight:700, cursor:'pointer' }}>Book Now</button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}>
          {innerTab==='home' && (
            <div>
              <div style={{ position:'relative', height:'85vh', overflow:'hidden' }}>
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(219,39,119,0.8) 0%, rgba(0,0,0,0.3) 100%)' }}/>
                <div style={{ position:'absolute', top:'50%', left:'5%', transform:'translateY(-50%)', maxWidth:580 }}>
                  <div style={{ color:'rgba(255,255,255,0.85)', fontSize:'0.9rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:16 }}>Premium Beauty Studio</div>
                  <h1 style={{ fontSize:'clamp(3rem,5.5vw,5rem)', fontWeight:900, color:'white', lineHeight:1.05, marginBottom:24 }}>Your Beauty, Our <span style={{ color:'#FBCFE8' }}>Passion</span></h1>
                  <p style={{ color:'rgba(255,255,255,0.85)', fontSize:'1.15rem', lineHeight:1.7, marginBottom:40 }}>Book top stylists, discover premium treatments, and experience luxury beauty care at GlamBook.</p>
                  <button onClick={()=>setInnerTab('book')} style={{ background:'white', color:'#DB2777', border:'none', padding:'16px 40px', borderRadius:50, fontWeight:800, fontSize:'1.05rem', cursor:'pointer' }}>Book Appointment</button>
                </div>
              </div>
              <div style={{ padding:'70px 5%', background:'white' }}>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, maxWidth:1000, margin:'0 auto' }}>
                  {[{v:'2K+',l:'Happy Clients',icon:'💄'},{v:'4.9★',l:'Average Rating',icon:'⭐'},{v:'50+',l:'Expert Stylists',icon:'✂️'},{v:'80%',l:'No-show Reduction',icon:'📅'}].map((s,i)=>(
                    <div key={i} style={{ textAlign:'center', padding:28, borderRadius:20, border:'1px solid #FCE7F3', background:'#FFF5F8' }}>
                      <div style={{ fontSize:'2rem', marginBottom:10 }}>{s.icon}</div>
                      <div style={{ fontSize:'2rem', fontWeight:900, color:'#DB2777' }}>{s.v}</div>
                      <div style={{ color:'#94A3B8', fontSize:'0.9rem', marginTop:6 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab==='services' && (
            <div style={{ padding:'60px 5%' }}>
              <div style={{ textAlign:'center', marginBottom:48 }}>
                <h1 style={{ fontSize:'2.5rem', fontWeight:900, marginBottom:12 }}>Our Services</h1>
                <p style={{ color:'#64748B' }}>Premium beauty treatments tailored for you</p>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:24, maxWidth:1100, margin:'0 auto' }}>
                {services.map((s,i)=>(
                  <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.07 }} style={{ background:'white', borderRadius:20, padding:28, border:'1px solid #FCE7F3', cursor:'pointer', boxShadow:'0 4px 12px rgba(219,39,119,0.05)' }}
                    onClick={()=>{setSalonService(s.name);setInnerTab('book');}}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
                      <div style={{ width:48, height:48, borderRadius:14, background:'#FDF2F8', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem' }}>✂️</div>
                      <div style={{ display:'flex', alignItems:'center', gap:4, color:'#DB2777' }}><Star size={14} fill="#DB2777"/><span style={{ fontWeight:700, fontSize:'0.9rem' }}>{s.rating}</span></div>
                    </div>
                    <h3 style={{ fontWeight:800, fontSize:'1.1rem', marginBottom:8 }}>{s.name}</h3>
                    <div style={{ display:'flex', gap:16, color:'#94A3B8', fontSize:'0.85rem', marginBottom:20 }}>
                      <span style={{ display:'flex', alignItems:'center', gap:5 }}><Clock size={13}/>{s.duration}</span>
                    </div>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <span style={{ fontSize:'1.5rem', fontWeight:900, color:'#DB2777' }}>${s.price}</span>
                      <button style={{ background:'linear-gradient(135deg,#DB2777,#EC4899)', color:'white', border:'none', padding:'10px 20px', borderRadius:10, fontWeight:700, cursor:'pointer', fontSize:'0.85rem' }}>Book</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {innerTab==='book' && (
            <div style={{ padding:'60px 5%', maxWidth:1000, margin:'0 auto' }}>
              <h1 style={{ fontSize:'2.2rem', fontWeight:900, marginBottom:8 }}>Book Appointment</h1>
              <p style={{ color:'#64748B', marginBottom:40 }}>Schedule your beauty session in just a few clicks</p>
              {salonBooked ? (
                <div style={{ textAlign:'center', padding:80, background:'white', borderRadius:24, border:'1px solid #FCE7F3' }}>
                  <div style={{ width:80, height:80, borderRadius:'50%', background:'linear-gradient(135deg,#DB2777,#EC4899)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 24px' }}><Check size={36} color="white"/></div>
                  <h3 style={{ fontSize:'2rem', fontWeight:900, color:'#DB2777', marginBottom:12 }}>Appointment Booked!</h3>
                  <p style={{ color:'#64748B', marginBottom:8 }}>{selSvc.name} with {selSty.name}</p>
                  <p style={{ color:'#94A3B8', fontSize:'0.9rem' }}>Today at {selectedTime} · ${selSvc.price}</p>
                  <button onClick={()=>setSalonBooked(false)} style={{ marginTop:32, background:'linear-gradient(135deg,#DB2777,#EC4899)', color:'white', border:'none', padding:'14px 32px', borderRadius:50, fontWeight:700, cursor:'pointer' }}>Book Another</button>
                </div>
              ) : (
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
                  <div>
                    <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #FCE7F3', marginBottom:20 }}>
                      <h3 style={{ fontWeight:800, marginBottom:20, fontSize:'1rem', color:'#DB2777' }}>1. SELECT SERVICE</h3>
                      {services.map((s,i)=>(
                        <div key={i} onClick={()=>setSalonService(s.name)} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 16px', borderRadius:10, cursor:'pointer', marginBottom:8, background:salonService===s.name?'linear-gradient(135deg,rgba(219,39,119,0.08),rgba(236,72,153,0.08))':'#F8FAFC', border:salonService===s.name?'1px solid rgba(219,39,119,0.3)':'1px solid #F1F5F9' }}>
                          <div>
                            <div style={{ fontWeight:700, fontSize:'0.9rem' }}>{s.name}</div>
                            <div style={{ color:'#94A3B8', fontSize:'0.78rem', marginTop:2 }}>{s.duration}</div>
                          </div>
                          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                            <span style={{ fontWeight:800, color:'#DB2777' }}>${s.price}</span>
                            {salonService===s.name && <Check size={16} color="#DB2777"/>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #FCE7F3' }}>
                      <h3 style={{ fontWeight:800, marginBottom:20, fontSize:'1rem', color:'#DB2777' }}>2. SELECT STYLIST</h3>
                      {stylists.map((s,i)=>(
                        <div key={i} onClick={()=>s.avail&&setSalonStylist(s.name)} style={{ display:'flex', alignItems:'center', gap:14, padding:'12px', borderRadius:10, cursor:s.avail?'pointer':'not-allowed', marginBottom:8, background:salonStylist===s.name?'rgba(219,39,119,0.06)':'transparent', border:salonStylist===s.name?'1px solid rgba(219,39,119,0.2)':'1px solid transparent', opacity:s.avail?1:0.5 }}>
                          <img src={s.img} alt={s.name} style={{ width:44, height:44, borderRadius:'50%', objectFit:'cover' }}/>
                          <div style={{ flex:1 }}>
                            <div style={{ fontWeight:700, fontSize:'0.9rem' }}>{s.name}</div>
                            <div style={{ color:'#94A3B8', fontSize:'0.78rem' }}>{s.spec} · {s.exp}</div>
                          </div>
                          <div>
                            {!s.avail ? <span style={{ color:'#EF4444', fontSize:'0.75rem' }}>Unavail.</span> : <span style={{ color:'#22C55E', fontSize:'0.75rem', fontWeight:700 }}>★{s.rating}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #FCE7F3', marginBottom:20 }}>
                      <h3 style={{ fontWeight:800, marginBottom:20, fontSize:'1rem', color:'#DB2777' }}>3. SELECT TIME</h3>
                      <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:10 }}>
                        {times.map(t=>(
                          <button key={t} onClick={()=>setSelectedTime(t)} style={{ padding:'12px 8px', background:selectedTime===t?'linear-gradient(135deg,#DB2777,#EC4899)':'#F8FAFC', color:selectedTime===t?'white':'#475569', border:selectedTime===t?'none':'1px solid #E2E8F0', borderRadius:10, fontWeight:600, cursor:'pointer', fontSize:'0.85rem' }}>{t}</button>
                        ))}
                      </div>
                    </div>
                    <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #FCE7F3' }}>
                      <h3 style={{ fontWeight:800, marginBottom:20, fontSize:'1rem' }}>Booking Summary</h3>
                      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
                        {[{l:'Service',v:selSvc.name},{l:'Duration',v:selSvc.duration},{l:'Stylist',v:selSty.name},{l:'Time',v:`Today at ${selectedTime}`},{l:'Price',v:`$${selSvc.price}`}].map((r,i)=>(
                          <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px solid #F1F5F9' }}>
                            <span style={{ color:'#64748B', fontSize:'0.9rem' }}>{r.l}</span>
                            <span style={{ fontWeight:700, fontSize:'0.9rem' }}>{r.v}</span>
                          </div>
                        ))}
                      </div>
                      <button onClick={()=>setSalonBooked(true)} style={{ width:'100%', background:'linear-gradient(135deg,#DB2777,#EC4899)', color:'white', border:'none', padding:'16px', borderRadius:12, fontWeight:800, fontSize:'1.05rem', cursor:'pointer' }}>Confirm Booking ✓</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {innerTab==='stylists' && (
            <div style={{ padding:'60px 5%' }}>
              <div style={{ textAlign:'center', marginBottom:48 }}>
                <h1 style={{ fontSize:'2.5rem', fontWeight:900, marginBottom:12 }}>Our Expert Stylists</h1>
                <p style={{ color:'#64748B' }}>Certified professionals dedicated to your beauty</p>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:28, maxWidth:1100, margin:'0 auto' }}>
                {stylists.map((s,i)=>(
                  <div key={i} style={{ background:'white', borderRadius:20, overflow:'hidden', border:'1px solid #FCE7F3', textAlign:'center' }}>
                    <div style={{ position:'relative' }}>
                      <img src={s.img} alt={s.name} style={{ width:'100%', height:200, objectFit:'cover' }}/>
                      <span style={{ position:'absolute', bottom:12, right:12, background:s.avail?'#22C55E':'#94A3B8', color:'white', padding:'4px 10px', borderRadius:50, fontSize:'0.75rem', fontWeight:700 }}>{s.avail?'Available':'Booked'}</span>
                    </div>
                    <div style={{ padding:24 }}>
                      <h3 style={{ fontWeight:800, fontSize:'1.1rem', marginBottom:4 }}>{s.name}</h3>
                      <div style={{ color:'#DB2777', fontSize:'0.85rem', fontWeight:600, marginBottom:12 }}>{s.spec}</div>
                      <div style={{ display:'flex', justifyContent:'center', gap:28, marginBottom:20 }}>
                        <div><div style={{ fontWeight:800 }}>★{s.rating}</div><div style={{ color:'#94A3B8', fontSize:'0.78rem' }}>Rating</div></div>
                        <div><div style={{ fontWeight:800 }}>{s.exp}</div><div style={{ color:'#94A3B8', fontSize:'0.78rem' }}>Experience</div></div>
                      </div>
                      <button onClick={()=>{setSalonStylist(s.name);setInnerTab('book');}} disabled={!s.avail} style={{ width:'100%', background:s.avail?'linear-gradient(135deg,#DB2777,#EC4899)':'#E2E8F0', color:s.avail?'white':'#94A3B8', border:'none', padding:'12px', borderRadius:10, fontWeight:700, cursor:s.avail?'pointer':'not-allowed' }}>
                        {s.avail?'Book Now':'Unavailable'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <footer style={{ background:'#1a1a1a', padding:28, textAlign:'center', color:'#64748B' }}>
        <p>© 2026 GlamBook — Salon Booking System</p>
      </footer>
    </div>
  );
}
