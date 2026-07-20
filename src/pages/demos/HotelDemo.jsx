import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Wifi, Coffee, Car, Waves, ChevronRight, Calendar, Users, Check } from 'lucide-react';

const rooms = [
  { name: 'Deluxe Suite', price: 250, img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80', beds: '1 King', size: '45 m²', rating: 4.9 },
  { name: 'Ocean View Room', price: 180, img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80', beds: '2 Queen', size: '32 m²', rating: 4.8 },
  { name: 'Presidential Villa', price: 650, img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', beds: '3 King', size: '120 m²', rating: 5.0 },
  { name: 'Garden Cottage', price: 140, img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', beds: '1 Queen', size: '28 m²', rating: 4.7 },
];

export default function HotelDemo({ state }) {
  const { innerTab, setInnerTab, hotelRoom, setHotelRoom, hotelDays, setHotelDays, hotelBooked, setHotelBooked } = state;
  const nav = ['home', 'rooms', 'amenities', 'booking'];
  const selected = rooms.find(r => r.name === hotelRoom) || rooms[0];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0A0A0A', color: 'white', minHeight: '100vh' }}>
      <nav style={{ padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '0.15em', color: '#D4AF37' }}>LUMIÈRE</div>
        <div style={{ display: 'flex', gap: 36, fontWeight: 600 }}>
          {nav.map(t => <span key={t} onClick={() => { setInnerTab(t); window.scrollTo(0,0); }} style={{ cursor: 'pointer', color: innerTab === t ? '#D4AF37' : '#94A3B8', textTransform: 'capitalize', borderBottom: innerTab === t ? '2px solid #D4AF37' : '2px solid transparent', paddingBottom: 4 }}>{t}</span>)}
        </div>
        <button onClick={() => setInnerTab('booking')} style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)', color: '#0A0A0A', border: 'none', padding: '12px 28px', borderRadius: 8, fontWeight: 800, cursor: 'pointer' }}>Book Now</button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          {innerTab === 'home' && (
            <div>
              <div style={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=80" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 100%)' }} />
                <div style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)', maxWidth: 650 }}>
                  <div style={{ color: '#D4AF37', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>5-Star Luxury Experience</div>
                  <h1 style={{ fontSize: 'clamp(3rem,6vw,5.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: 24 }}>Where Luxury Meets <span style={{ color: '#D4AF37' }}>Paradise</span></h1>
                  <p style={{ color: '#94A3B8', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: 40 }}>Experience unparalleled luxury at Lumière Hotel. Book your perfect room with our seamless reservation system.</p>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <button onClick={() => setInnerTab('rooms')} style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)', color: '#0A0A0A', padding: '16px 36px', borderRadius: 8, border: 'none', fontWeight: 800, fontSize: '1.05rem', cursor: 'pointer' }}>Explore Rooms</button>
                    <button onClick={() => setInnerTab('amenities')} style={{ background: 'rgba(255,255,255,0.07)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 36px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>Our Amenities</button>
                  </div>
                </div>
              </div>
              <div style={{ padding: '80px 5%', background: '#111' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
                  {[{icon:<Star size={28}/>, val:'5.0', lbl:'Average Rating'},{icon:<Users size={28}/>, val:'1M+', lbl:'Happy Guests'},{icon:<MapPin size={28}/>, val:'12', lbl:'Locations'},{icon:<Calendar size={28}/>, val:'24/7', lbl:'Concierge'}].map((s,i)=>(
                    <div key={i} style={{ textAlign:'center', padding:32, background:'rgba(212,175,55,0.06)', border:'1px solid rgba(212,175,55,0.15)', borderRadius:20 }}>
                      <div style={{ color:'#D4AF37', marginBottom:12 }}>{s.icon}</div>
                      <div style={{ fontSize:'2.5rem', fontWeight:900, color:'#D4AF37' }}>{s.val}</div>
                      <div style={{ color:'#64748B', marginTop:8 }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab === 'rooms' && (
            <div style={{ padding: '80px 5%' }}>
              <div style={{ textAlign:'center', marginBottom:60 }}>
                <h1 style={{ fontSize:'3rem', fontWeight:900 }}>Our Luxury Rooms</h1>
                <p style={{ color:'#64748B', marginTop:16, fontSize:'1.1rem' }}>Each room crafted for the ultimate luxury experience.</p>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:32, maxWidth:1200, margin:'0 auto' }}>
                {rooms.map((r,i) => (
                  <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.1 }} style={{ background:'#111', borderRadius:20, overflow:'hidden', border:'1px solid rgba(212,175,55,0.15)', cursor:'pointer' }}
                    onClick={() => { setHotelRoom(r.name); setInnerTab('booking'); }}>
                    <img src={r.img} alt={r.name} style={{ width:'100%', height:220, objectFit:'cover' }} />
                    <div style={{ padding:24 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
                        <h3 style={{ fontWeight:800, fontSize:'1.2rem' }}>{r.name}</h3>
                        <div style={{ display:'flex', alignItems:'center', gap:4, color:'#D4AF37' }}><Star size={14} fill="#D4AF37"/><span style={{ fontWeight:700 }}>{r.rating}</span></div>
                      </div>
                      <div style={{ color:'#64748B', fontSize:'0.9rem', marginBottom:20 }}>{r.beds} · {r.size}</div>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <div><span style={{ fontSize:'1.8rem', fontWeight:900, color:'#D4AF37' }}>${r.price}</span><span style={{ color:'#64748B', fontSize:'0.85rem' }}>/night</span></div>
                        <button style={{ background:'linear-gradient(135deg,#D4AF37,#B8860B)', color:'#0A0A0A', border:'none', padding:'10px 22px', borderRadius:8, fontWeight:800, cursor:'pointer', display:'flex', alignItems:'center', gap:6 }}>Book <ChevronRight size={16}/></button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {innerTab === 'amenities' && (
            <div style={{ padding:'80px 5%', background:'#111' }}>
              <div style={{ textAlign:'center', marginBottom:60 }}>
                <h1 style={{ fontSize:'3rem', fontWeight:900 }}>World-Class Amenities</h1>
                <p style={{ color:'#64748B', marginTop:16 }}>Everything you need for a perfect stay.</p>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28, maxWidth:1000, margin:'0 auto' }}>
                {[{icon:<Waves size={32}/>,t:'Infinity Pool',d:'Rooftop pool with panoramic ocean views open 24/7.'},{icon:<Coffee size={32}/>,t:'Fine Dining',d:'3 Michelin-star restaurants serving global cuisine.'},{icon:<Wifi size={32}/>,t:'Ultra-Fast WiFi',d:'1Gbps fiber in every room and common area.'},{icon:<Car size={32}/>,t:'Valet Parking',d:'Complimentary valet for all hotel guests.'},{icon:<Star size={32}/>,t:'Spa & Wellness',d:'Full-service spa with 40+ treatment options.'},{icon:<Calendar size={32}/>,t:'Event Spaces',d:'8 fully-equipped halls for corporate events.'}].map((a,i)=>(
                  <div key={i} style={{ padding:36, background:'#0A0A0A', borderRadius:20, border:'1px solid rgba(212,175,55,0.1)' }}>
                    <div style={{ color:'#D4AF37', marginBottom:16 }}>{a.icon}</div>
                    <h3 style={{ fontWeight:800, fontSize:'1.15rem', marginBottom:10 }}>{a.t}</h3>
                    <p style={{ color:'#64748B', lineHeight:1.6, fontSize:'0.95rem' }}>{a.d}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {innerTab === 'booking' && (
            <div style={{ padding:'80px 5%', display:'flex', gap:60, maxWidth:1100, margin:'0 auto', alignItems:'flex-start' }}>
              <div style={{ flex:1 }}>
                <h1 style={{ fontSize:'2.5rem', fontWeight:900, marginBottom:8 }}>Complete Your Booking</h1>
                <p style={{ color:'#64748B', marginBottom:40 }}>Reserve your luxury stay in minutes.</p>
                {hotelBooked ? (
                  <div style={{ textAlign:'center', padding:60, background:'rgba(212,175,55,0.06)', border:'1px solid rgba(212,175,55,0.2)', borderRadius:24 }}>
                    <div style={{ width:80, height:80, background:'rgba(212,175,55,0.15)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 24px', fontSize:'2rem' }}>✓</div>
                    <h3 style={{ fontSize:'2rem', fontWeight:900, color:'#D4AF37', marginBottom:12 }}>Booking Confirmed!</h3>
                    <p style={{ color:'#94A3B8' }}>{selected.name} · {hotelDays} nights · ${(selected.price * hotelDays).toLocaleString()} total</p>
                    <button onClick={() => setHotelBooked(false)} style={{ marginTop:28, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.15)', color:'white', padding:'12px 28px', borderRadius:8, cursor:'pointer', fontWeight:600 }}>Book Another</button>
                  </div>
                ) : (
                  <div style={{ background:'#111', padding:36, borderRadius:20, border:'1px solid rgba(212,175,55,0.15)' }}>
                    <div style={{ marginBottom:24 }}>
                      <label style={{ color:'#94A3B8', fontSize:'0.85rem', fontWeight:600, display:'block', marginBottom:8 }}>ROOM TYPE</label>
                      <select value={hotelRoom} onChange={e => setHotelRoom(e.target.value)} style={{ width:'100%', padding:14, background:'#0A0A0A', border:'1px solid rgba(255,255,255,0.1)', borderRadius:10, color:'white', fontSize:'1rem', cursor:'pointer' }}>
                        {rooms.map(r => <option key={r.name} value={r.name}>{r.name} — ${r.price}/night</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom:24 }}>
                      <label style={{ color:'#94A3B8', fontSize:'0.85rem', fontWeight:600, display:'block', marginBottom:8 }}>NIGHTS</label>
                      <div style={{ display:'flex', gap:12 }}>
                        {[1,2,3,5,7,14].map(d => (
                          <button key={d} onClick={() => setHotelDays(d)} style={{ flex:1, padding:12, background: hotelDays===d ? 'linear-gradient(135deg,#D4AF37,#B8860B)' : '#0A0A0A', color: hotelDays===d ? '#0A0A0A' : '#94A3B8', border: hotelDays===d ? 'none' : '1px solid rgba(255,255,255,0.08)', borderRadius:8, fontWeight:700, cursor:'pointer' }}>{d}</button>
                        ))}
                      </div>
                    </div>
                    <div style={{ padding:20, background:'rgba(212,175,55,0.06)', border:'1px solid rgba(212,175,55,0.15)', borderRadius:12, marginBottom:24 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                        <span style={{ color:'#94A3B8' }}>${selected.price} × {hotelDays} nights</span>
                        <span>${(selected.price * hotelDays).toLocaleString()}</span>
                      </div>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                        <span style={{ color:'#94A3B8' }}>Taxes & fees</span>
                        <span>${Math.round(selected.price * hotelDays * 0.12).toLocaleString()}</span>
                      </div>
                      <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:12, display:'flex', justifyContent:'space-between', fontWeight:800 }}>
                        <span>Total</span>
                        <span style={{ color:'#D4AF37', fontSize:'1.2rem' }}>${Math.round(selected.price * hotelDays * 1.12).toLocaleString()}</span>
                      </div>
                    </div>
                    <button onClick={() => setHotelBooked(true)} style={{ width:'100%', background:'linear-gradient(135deg,#D4AF37,#B8860B)', color:'#0A0A0A', border:'none', padding:18, borderRadius:12, fontWeight:900, fontSize:'1.1rem', cursor:'pointer' }}>Confirm Reservation</button>
                  </div>
                )}
              </div>
              <div style={{ width:340, background:'#111', borderRadius:20, overflow:'hidden', border:'1px solid rgba(212,175,55,0.15)' }}>
                <img src={selected.img} alt={selected.name} style={{ width:'100%', height:200, objectFit:'cover' }} />
                <div style={{ padding:24 }}>
                  <h3 style={{ fontWeight:800, fontSize:'1.3rem', marginBottom:8 }}>{selected.name}</h3>
                  <div style={{ display:'flex', alignItems:'center', gap:6, color:'#D4AF37', marginBottom:16 }}><Star size={14} fill="#D4AF37"/><span style={{ fontWeight:700 }}>{selected.rating}</span><span style={{ color:'#64748B' }}>· {selected.size} · {selected.beds}</span></div>
                  {[{icon:<Wifi size={16}/>,t:'Free WiFi'},{icon:<Coffee size={16}/>,t:'Breakfast Included'},{icon:<Car size={16}/>,t:'Free Parking'}].map((f,i)=>(<div key={i} style={{ display:'flex', alignItems:'center', gap:10, color:'#94A3B8', fontSize:'0.9rem', marginBottom:8 }}><span style={{ color:'#D4AF37' }}>{f.icon}</span>{f.t}</div>))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <footer style={{ background:'#050505', padding:32, textAlign:'center', color:'#64748B', borderTop:'1px solid rgba(212,175,55,0.1)' }}>
        <p>© 2026 Lumière Hotels. Luxury Hotel Booking Platform.</p>
      </footer>
    </div>
  );
}
