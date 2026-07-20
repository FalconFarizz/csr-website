import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, MapPin, Calendar, Users, Star, Search, Heart, Clock, Sun } from 'lucide-react';

const destinations = [
  { id:1, name:'Maldives', country:'Indian Ocean', price:2499, days:7, rating:4.9, img:'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80', tag:'Bestseller' },
  { id:2, name:'Santorini', country:'Greece', price:1899, days:6, rating:4.8, img:'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=80', tag:'Hot' },
  { id:3, name:'Bali', country:'Indonesia', price:1299, days:8, rating:4.7, img:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', tag:'Value' },
  { id:4, name:'Swiss Alps', country:'Switzerland', price:3299, days:10, rating:5.0, img:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80', tag:'Luxury' },
  { id:5, name:'Kyoto', country:'Japan', price:2199, days:9, rating:4.9, img:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80', tag:'' },
  { id:6, name:'Amalfi Coast', country:'Italy', price:2699, days:7, rating:4.8, img:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80', tag:'New' },
];

export default function TravelDemo({ state }) {
  const { innerTab, setInnerTab, travelDestination, setTravelDestination, travelGuests, setTravelGuests, travelBookedStatus, setTravelBookedStatus } = state;
  const [wish, setWish] = useState([]);
  const nav = ['home', 'packages', 'book', 'about'];
  const sel = destinations.find(d => d.name === travelDestination) || destinations[0];

  return (
    <div style={{ fontFamily:'Inter,sans-serif', background:'#F0F9FF', color:'#0F172A', minHeight:'100vh' }}>
      <nav style={{ padding:'18px 5%', display:'flex', justifyContent:'space-between', alignItems:'center', background:'white', borderBottom:'1px solid #E0F2FE', position:'sticky', top:0, zIndex:50 }}>
        <div style={{ fontWeight:900, fontSize:'1.5rem', color:'#0284C7' }}>✈ TripWise</div>
        <div style={{ display:'flex', gap:32, fontWeight:600 }}>
          {nav.map(t=><span key={t} onClick={()=>{setInnerTab(t);window.scrollTo(0,0);}} style={{ cursor:'pointer', color:innerTab===t?'#0284C7':'#64748B', textTransform:'capitalize', borderBottom:innerTab===t?'2px solid #0284C7':'2px solid transparent', paddingBottom:4 }}>{t}</span>)}
        </div>
        <button onClick={()=>setInnerTab('book')} style={{ background:'linear-gradient(135deg,#0284C7,#0EA5E9)', color:'white', border:'none', padding:'12px 28px', borderRadius:50, fontWeight:700, cursor:'pointer' }}>Book Now</button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}>
          {innerTab==='home' && (
            <div>
              <div style={{ position:'relative', height:'88vh', overflow:'hidden' }}>
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)' }}/>
                <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', textAlign:'center', width:'90%', maxWidth:800 }}>
                  <motion.div initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }} style={{ color:'#7DD3FC', fontSize:'0.9rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:16 }}>Your Dream Awaits</motion.div>
                  <h1 style={{ fontSize:'clamp(3rem,6vw,5.5rem)', fontWeight:900, color:'white', lineHeight:1.05, marginBottom:24 }}>Explore the World with <span style={{ color:'#38BDF8' }}>TripWise</span></h1>
                  <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'1.2rem', lineHeight:1.6, marginBottom:40 }}>500,000+ bookings. Curated packages. Visa assistance. 24/7 support.</p>
                  <div style={{ display:'flex', gap:0, background:'white', borderRadius:16, padding:8, maxWidth:600, margin:'0 auto', boxShadow:'0 20px 40px rgba(0,0,0,0.2)' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10, flex:1, padding:'0 16px' }}><Search size={18} color="#94A3B8"/><input placeholder="Where do you want to go?" style={{ border:'none', outline:'none', fontSize:'1rem', width:'100%' }}/></div>
                    <button onClick={()=>setInnerTab('packages')} style={{ background:'linear-gradient(135deg,#0284C7,#0EA5E9)', color:'white', border:'none', padding:'14px 28px', borderRadius:12, fontWeight:700, cursor:'pointer' }}>Search</button>
                  </div>
                </div>
              </div>
              <div style={{ padding:'70px 5%', background:'white' }}>
                <div style={{ textAlign:'center', marginBottom:48 }}>
                  <h2 style={{ fontSize:'2.2rem', fontWeight:900, marginBottom:12 }}>Why Choose TripWise?</h2>
                  <p style={{ color:'#64748B' }}>Trusted by 500K+ travellers worldwide</p>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, maxWidth:1100, margin:'0 auto' }}>
                  {[{icon:<Plane size={28}/>,v:'500K+',l:'Bookings Made',c:'#0284C7'},{icon:<Star size={28}/>,v:'4.9★',l:'Average Rating',c:'#F59E0B'},{icon:<MapPin size={28}/>,v:'120+',l:'Destinations',c:'#10B981'},{icon:<Clock size={28}/>,v:'24/7',l:'Customer Support',c:'#8B5CF6'}].map((s,i)=>(
                    <div key={i} style={{ textAlign:'center', padding:28, borderRadius:20, border:'1px solid #E0F2FE', background:'#F0F9FF' }}>
                      <div style={{ color:s.c, marginBottom:12 }}>{s.icon}</div>
                      <div style={{ fontSize:'2rem', fontWeight:900 }}>{s.v}</div>
                      <div style={{ color:'#64748B', fontSize:'0.9rem', marginTop:6 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab==='packages' && (
            <div style={{ padding:'60px 5%' }}>
              <div style={{ textAlign:'center', marginBottom:48 }}>
                <h1 style={{ fontSize:'2.5rem', fontWeight:900, marginBottom:12 }}>Top Holiday Packages</h1>
                <p style={{ color:'#64748B' }}>Handpicked destinations for unforgettable experiences</p>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:28 }}>
                {destinations.map((d,i)=>(
                  <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.08 }} style={{ background:'white', borderRadius:20, overflow:'hidden', boxShadow:'0 4px 16px rgba(0,0,0,0.06)', position:'relative' }}>
                    <div style={{ position:'relative' }}>
                      <img src={d.img} alt={d.name} style={{ width:'100%', height:220, objectFit:'cover' }}/>
                      {d.tag && <span style={{ position:'absolute', top:14, left:14, background:'#0284C7', color:'white', padding:'4px 12px', borderRadius:50, fontSize:'0.78rem', fontWeight:700 }}>{d.tag}</span>}
                      <button onClick={()=>setWish(w=>w.includes(d.id)?w.filter(x=>x!==d.id):[...w,d.id])} style={{ position:'absolute', top:12, right:12, width:34, height:34, borderRadius:'50%', background:'white', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <Heart size={16} color={wish.includes(d.id)?'#E11D48':'#94A3B8'} fill={wish.includes(d.id)?'#E11D48':'none'}/>
                      </button>
                    </div>
                    <div style={{ padding:22 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                        <div>
                          <h3 style={{ fontWeight:800, fontSize:'1.15rem' }}>{d.name}</h3>
                          <div style={{ display:'flex', alignItems:'center', gap:5, color:'#64748B', fontSize:'0.85rem', marginTop:4 }}><MapPin size={13}/>{d.country}</div>
                        </div>
                        <div style={{ display:'flex', alignItems:'center', gap:4, color:'#F59E0B' }}><Star size={14} fill="#F59E0B"/><span style={{ fontWeight:700, fontSize:'0.9rem' }}>{d.rating}</span></div>
                      </div>
                      <div style={{ display:'flex', gap:16, color:'#64748B', fontSize:'0.85rem', marginBottom:18 }}>
                        <span style={{ display:'flex', alignItems:'center', gap:5 }}><Calendar size={13}/>{d.days} days</span>
                        <span style={{ display:'flex', alignItems:'center', gap:5 }}><Sun size={13}/>All Inclusive</span>
                      </div>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <div><span style={{ fontSize:'1.6rem', fontWeight:900, color:'#0284C7' }}>${d.price}</span><span style={{ color:'#94A3B8', fontSize:'0.82rem' }}>/person</span></div>
                        <button onClick={()=>{setTravelDestination(d.name);setInnerTab('book');}} style={{ background:'linear-gradient(135deg,#0284C7,#0EA5E9)', color:'white', border:'none', padding:'10px 22px', borderRadius:10, fontWeight:700, cursor:'pointer' }}>Book Now</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {innerTab==='book' && (
            <div style={{ padding:'80px 5%', display:'flex', gap:60, maxWidth:1100, margin:'0 auto', alignItems:'flex-start' }}>
              <div style={{ flex:1 }}>
                <h1 style={{ fontSize:'2.2rem', fontWeight:900, marginBottom:8 }}>Book Your Trip</h1>
                <p style={{ color:'#64748B', marginBottom:36 }}>Complete your holiday package booking</p>
                {travelBookedStatus ? (
                  <div style={{ textAlign:'center', padding:60, background:'white', borderRadius:24, border:'1px solid #E0F2FE' }}>
                    <div style={{ fontSize:'3rem', marginBottom:16 }}>🎉</div>
                    <h3 style={{ fontSize:'2rem', fontWeight:900, color:'#0284C7', marginBottom:12 }}>Booking Confirmed!</h3>
                    <p style={{ color:'#64748B' }}>{travelDestination} · {travelGuests} guest{travelGuests>1?'s':''} · ${(sel.price*travelGuests).toLocaleString()} total</p>
                    <p style={{ color:'#94A3B8', fontSize:'0.9rem', marginTop:8 }}>Confirmation sent to your email. Have a great trip! ✈</p>
                    <button onClick={()=>setTravelBookedStatus(false)} style={{ marginTop:28, background:'#0284C7', color:'white', border:'none', padding:'12px 28px', borderRadius:10, fontWeight:700, cursor:'pointer' }}>Book Another</button>
                  </div>
                ) : (
                  <div style={{ background:'white', padding:36, borderRadius:20, border:'1px solid #E0F2FE' }}>
                    <div style={{ marginBottom:20 }}>
                      <label style={{ fontWeight:600, fontSize:'0.85rem', color:'#475569', display:'block', marginBottom:8 }}>DESTINATION</label>
                      <select value={travelDestination} onChange={e=>setTravelDestination(e.target.value)} style={{ width:'100%', padding:14, border:'1px solid #E2E8F0', borderRadius:10, fontSize:'1rem', cursor:'pointer' }}>
                        {destinations.map(d=><option key={d.name} value={d.name}>{d.name}, {d.country} — ${d.price}/person ({d.days} days)</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom:20 }}>
                      <label style={{ fontWeight:600, fontSize:'0.85rem', color:'#475569', display:'block', marginBottom:8 }}>GUESTS</label>
                      <div style={{ display:'flex', gap:10 }}>
                        {[1,2,3,4,5,6].map(n=>(
                          <button key={n} onClick={()=>setTravelGuests(n)} style={{ flex:1, padding:14, background:travelGuests===n?'linear-gradient(135deg,#0284C7,#0EA5E9)':'#F8FAFC', color:travelGuests===n?'white':'#475569', border:travelGuests===n?'none':'1px solid #E2E8F0', borderRadius:10, fontWeight:700, cursor:'pointer' }}>{n}</button>
                        ))}
                      </div>
                    </div>
                    <div style={{ padding:20, background:'#F0F9FF', border:'1px solid #BAE6FD', borderRadius:12, marginBottom:24 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}><span style={{ color:'#64748B' }}>Package ({sel.days} days)</span><span>${sel.price.toLocaleString()}/person</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}><span style={{ color:'#64748B' }}>× {travelGuests} guest{travelGuests>1?'s':''}</span><span>${(sel.price*travelGuests).toLocaleString()}</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}><span style={{ color:'#64748B' }}>Visa & Taxes</span><span>Included</span></div>
                      <div style={{ borderTop:'1px solid #BAE6FD', paddingTop:12, display:'flex', justifyContent:'space-between', fontWeight:800 }}>
                        <span>Total</span><span style={{ color:'#0284C7', fontSize:'1.2rem' }}>${(sel.price*travelGuests).toLocaleString()}</span>
                      </div>
                    </div>
                    <button onClick={()=>setTravelBookedStatus(true)} style={{ width:'100%', background:'linear-gradient(135deg,#0284C7,#0EA5E9)', color:'white', border:'none', padding:18, borderRadius:12, fontWeight:900, fontSize:'1.1rem', cursor:'pointer' }}>Confirm Booking ✈</button>
                  </div>
                )}
              </div>
              <div style={{ width:320, background:'white', borderRadius:20, overflow:'hidden', border:'1px solid #E0F2FE' }}>
                <img src={sel.img} alt={sel.name} style={{ width:'100%', height:190, objectFit:'cover' }}/>
                <div style={{ padding:22 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                    <h3 style={{ fontWeight:800, fontSize:'1.15rem' }}>{sel.name}</h3>
                    <div style={{ display:'flex', alignItems:'center', gap:4, color:'#F59E0B' }}><Star size={14} fill="#F59E0B"/><span style={{ fontWeight:700 }}>{sel.rating}</span></div>
                  </div>
                  <div style={{ color:'#64748B', fontSize:'0.85rem', marginBottom:16 }}>{sel.country} · {sel.days} Days · All Inclusive</div>
                  {['Flights Included','Hotel (4-5 Star)','Daily Breakfast','Visa Assistance','Travel Insurance'].map((f,i)=>(
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:8, color:'#475569', fontSize:'0.85rem', marginBottom:8 }}>
                      <div style={{ width:18, height:18, borderRadius:'50%', background:'#E0F2FE', display:'flex', alignItems:'center', justifyContent:'center' }}>✓</div>{f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab==='about' && (
            <div style={{ padding:'80px 5%', background:'white' }}>
              <div style={{ maxWidth:900, margin:'0 auto', textAlign:'center' }}>
                <h1 style={{ fontSize:'2.5rem', fontWeight:900, marginBottom:16 }}>About TripWise</h1>
                <p style={{ color:'#64748B', fontSize:'1.1rem', lineHeight:1.8, marginBottom:60 }}>Full-featured travel booking platform with curated tour packages, flight search, visa guidance, and 24/7 customer support for 500K+ happy travellers.</p>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28 }}>
                  {[{t:'Expert Guides',d:'Our local guides know every hidden gem in each destination.'},{t:'Best Price Guarantee',d:'Find it cheaper and we\'ll match the price + 5% discount.'},{t:'24/7 Support',d:'Our team is always ready to help, no matter where you are.'}].map((f,i)=>(
                    <div key={i} style={{ padding:32, background:'#F0F9FF', borderRadius:20, border:'1px solid #E0F2FE' }}>
                      <h3 style={{ fontWeight:800, fontSize:'1.1rem', marginBottom:12 }}>{f.t}</h3>
                      <p style={{ color:'#64748B', lineHeight:1.6 }}>{f.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <footer style={{ background:'#0F172A', padding:32, textAlign:'center', color:'#64748B' }}>
        <p>© 2026 TripWise — Travel Booking Platform</p>
      </footer>
    </div>
  );
}
