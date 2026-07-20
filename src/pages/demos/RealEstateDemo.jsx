import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Bed, Bath, Maximize, Heart, Phone, TrendingUp, Home, Search, DollarSign } from 'lucide-react';

const listings = [
  { id:1, name:'Oceanfront Penthouse', price:'$4,500,000', loc:'Malibu, CA', beds:4, baths:3, sqft:3200, img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', tag:'Featured' },
  { id:2, name:'Modern Villa', price:'$2,800,000', loc:'Beverly Hills, CA', beds:5, baths:4, sqft:5100, img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', tag:'New' },
  { id:3, name:'Sky View Loft', price:'$1,200,000', loc:'Manhattan, NY', beds:2, baths:2, sqft:1800, img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80', tag:'Hot' },
  { id:4, name:'Lakeside Estate', price:'$6,900,000', loc:'Lake Tahoe, NV', beds:6, baths:5, sqft:8400, img:'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80', tag:'Exclusive' },
  { id:5, name:'Urban Townhouse', price:'$890,000', loc:'Austin, TX', beds:3, baths:2, sqft:2100, img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80', tag:'' },
  { id:6, name:'Desert Retreat', price:'$3,200,000', loc:'Scottsdale, AZ', beds:4, baths:3, sqft:4200, img:'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80', tag:'Reduced' },
];

export default function RealEstateDemo({ state }) {
  const { innerTab, setInnerTab, getMortgagePayment } = state;
  const [search, setSearch] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [loanAmt, setLoanAmt] = useState(500000);
  const [rate, setRate] = useState(4.8);
  const [term, setTerm] = useState(30);
  const nav = ['home', 'listings', 'calculator', 'agents'];

  const toggleWish = (id) => setWishlist(w => w.includes(id) ? w.filter(x=>x!==id) : [...w, id]);
  const filtered = listings.filter(l => l.name.toLowerCase().includes(search.toLowerCase()) || l.loc.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F8F5F0', color: '#1a1a1a', minHeight: '100vh' }}>
      <nav style={{ padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', borderBottom: '1px solid #E8E0D8', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ fontWeight: 900, fontSize: '1.5rem', color: '#8B4513', letterSpacing: '0.05em' }}>ESTATE<span style={{ color:'#C4A882' }}>PRO</span></div>
        <div style={{ display: 'flex', gap: 32, fontWeight: 600 }}>
          {nav.map(t => <span key={t} onClick={() => { setInnerTab(t); window.scrollTo(0,0); }} style={{ cursor: 'pointer', color: innerTab===t ? '#8B4513' : '#94A3B8', textTransform: 'capitalize', borderBottom: innerTab===t ? '2px solid #8B4513' : '2px solid transparent', paddingBottom: 4 }}>{t}</span>)}
        </div>
        <button onClick={() => setInnerTab('listings')} style={{ background: 'linear-gradient(135deg,#8B4513,#C4A882)', color: 'white', border: 'none', padding: '12px 28px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>Browse Properties</button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          {innerTab === 'home' && (
            <div>
              <div style={{ position: 'relative', height: '88vh', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(10,10,10,0.8) 0%, rgba(0,0,0,0.3) 100%)' }} />
                <div style={{ position:'absolute', top:'50%', left:'5%', transform:'translateY(-50%)', maxWidth:650 }}>
                  <div style={{ color:'#C4A882', fontSize:'0.9rem', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:16 }}>Luxury Real Estate</div>
                  <h1 style={{ fontSize:'clamp(3rem,5.5vw,5rem)', fontWeight:900, color:'white', lineHeight:1.05, marginBottom:24 }}>Find Your <span style={{ color:'#C4A882' }}>Dream</span> Property</h1>
                  <p style={{ color:'rgba(255,255,255,0.75)', fontSize:'1.15rem', lineHeight:1.7, marginBottom:40 }}>Browse thousands of luxury listings with 3D virtual tours, mortgage calculators, and expert agent support.</p>
                  <div style={{ display:'flex', gap:12, background:'rgba(255,255,255,0.95)', borderRadius:12, padding:8, maxWidth:520 }}>
                    <Search size={20} color="#94A3B8" style={{ margin:'auto 8px' }} />
                    <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by city or property name..." style={{ flex:1, border:'none', outline:'none', fontSize:'1rem', background:'transparent' }} />
                    <button onClick={() => setInnerTab('listings')} style={{ background:'#8B4513', color:'white', border:'none', padding:'12px 24px', borderRadius:8, fontWeight:700, cursor:'pointer' }}>Search</button>
                  </div>
                </div>
              </div>
              <div style={{ padding:'70px 5%', background:'white' }}>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, maxWidth:1100, margin:'0 auto' }}>
                  {[{icon:<Home size={28}/>,v:'15K+',l:'Properties Listed'},{icon:<TrendingUp size={28}/>,v:'$500M',l:'Property Value Sold'},{icon:<MapPin size={28}/>,v:'120+',l:'Cities Covered'},{icon:<Phone size={28}/>,v:'500+',l:'Verified Agents'}].map((s,i)=>(
                    <div key={i} style={{ textAlign:'center', padding:28, borderRadius:16, border:'1px solid #E8E0D8' }}>
                      <div style={{ color:'#8B4513', marginBottom:12 }}>{s.icon}</div>
                      <div style={{ fontSize:'2rem', fontWeight:900, color:'#1a1a1a' }}>{s.v}</div>
                      <div style={{ color:'#94A3B8', marginTop:6, fontSize:'0.9rem' }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab === 'listings' && (
            <div style={{ padding:'60px 5%' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:40 }}>
                <div>
                  <h1 style={{ fontSize:'2.5rem', fontWeight:900 }}>Property Listings</h1>
                  <p style={{ color:'#64748B', marginTop:6 }}>{filtered.length} properties found</p>
                </div>
                <div style={{ display:'flex', gap:12, background:'white', borderRadius:10, padding:8, border:'1px solid #E8E0D8' }}>
                  <Search size={18} color="#94A3B8" style={{ margin:'auto 4px' }} />
                  <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Filter properties..." style={{ border:'none', outline:'none', fontSize:'0.95rem', width:220 }} />
                </div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:28 }}>
                {filtered.map((p,i) => (
                  <motion.div key={p.id} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.06 }} style={{ background:'white', borderRadius:20, overflow:'hidden', boxShadow:'0 4px 16px rgba(0,0,0,0.06)', border:'1px solid #E8E0D8', position:'relative' }}>
                    <div style={{ position:'relative' }}>
                      <img src={p.img} alt={p.name} style={{ width:'100%', height:220, objectFit:'cover' }} />
                      {p.tag && <span style={{ position:'absolute', top:16, left:16, background:'#8B4513', color:'white', padding:'4px 12px', borderRadius:50, fontSize:'0.78rem', fontWeight:700 }}>{p.tag}</span>}
                      <button onClick={() => toggleWish(p.id)} style={{ position:'absolute', top:12, right:12, width:36, height:36, borderRadius:'50%', background:'white', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <Heart size={18} color={wishlist.includes(p.id) ? '#E11D48' : '#94A3B8'} fill={wishlist.includes(p.id) ? '#E11D48' : 'none'} />
                      </button>
                    </div>
                    <div style={{ padding:22 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:6, color:'#94A3B8', fontSize:'0.85rem', marginBottom:8 }}><MapPin size={13}/>{p.loc}</div>
                      <h3 style={{ fontWeight:800, fontSize:'1.15rem', marginBottom:12 }}>{p.name}</h3>
                      <div style={{ display:'flex', gap:16, color:'#64748B', fontSize:'0.85rem', marginBottom:18 }}>
                        <span style={{ display:'flex', alignItems:'center', gap:5 }}><Bed size={14}/>{p.beds} beds</span>
                        <span style={{ display:'flex', alignItems:'center', gap:5 }}><Bath size={14}/>{p.baths} baths</span>
                        <span style={{ display:'flex', alignItems:'center', gap:5 }}><Maximize size={14}/>{p.sqft.toLocaleString()} sqft</span>
                      </div>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ fontSize:'1.4rem', fontWeight:900, color:'#8B4513' }}>{p.price}</span>
                        <button onClick={() => setInnerTab('calculator')} style={{ background:'#8B4513', color:'white', border:'none', padding:'9px 18px', borderRadius:8, fontWeight:700, cursor:'pointer', fontSize:'0.85rem' }}>View Details</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {innerTab === 'calculator' && (
            <div style={{ padding:'80px 5%', background:'white' }}>
              <div style={{ maxWidth:800, margin:'0 auto' }}>
                <div style={{ textAlign:'center', marginBottom:48 }}>
                  <h1 style={{ fontSize:'2.5rem', fontWeight:900 }}>Mortgage Calculator</h1>
                  <p style={{ color:'#64748B', marginTop:12 }}>Estimate your monthly mortgage payments instantly.</p>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40 }}>
                  <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
                    {[{ label:'Loan Amount', val:loanAmt, set:setLoanAmt, min:100000, max:5000000, step:50000, fmt: v=>`$${v.toLocaleString()}` },
                      { label:'Interest Rate (%)', val:rate, set:setRate, min:1, max:15, step:0.1, fmt: v=>`${v}%` },
                      { label:'Loan Term (years)', val:term, set:setTerm, min:5, max:30, step:5, fmt: v=>`${v} yrs` }].map((f,i) => (
                      <div key={i}>
                        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                          <label style={{ fontWeight:600, color:'#475569' }}>{f.label}</label>
                          <span style={{ fontWeight:800, color:'#8B4513' }}>{f.fmt(f.val)}</span>
                        </div>
                        <input type="range" min={f.min} max={f.max} step={f.step} value={f.val} onChange={e=>f.set(Number(e.target.value))} style={{ width:'100%', accentColor:'#8B4513' }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ background:'linear-gradient(135deg,#8B4513,#C4A882)', borderRadius:24, padding:40, color:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
                    <DollarSign size={40} style={{ marginBottom:16, opacity:0.8 }} />
                    <div style={{ fontSize:'0.9rem', opacity:0.85, marginBottom:8 }}>Monthly Payment</div>
                    <div style={{ fontSize:'3.5rem', fontWeight:900 }}>${getMortgagePayment(loanAmt, rate, term)}</div>
                    <div style={{ marginTop:24, opacity:0.8, fontSize:'0.9rem' }}>
                      <div>Principal: ${loanAmt.toLocaleString()}</div>
                      <div>Rate: {rate}% / {term} years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {innerTab === 'agents' && (
            <div style={{ padding:'80px 5%' }}>
              <div style={{ textAlign:'center', marginBottom:60 }}>
                <h1 style={{ fontSize:'2.5rem', fontWeight:900 }}>Our Expert Agents</h1>
                <p style={{ color:'#64748B', marginTop:12 }}>Verified professionals ready to help you find your dream home.</p>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:24, maxWidth:1100, margin:'0 auto' }}>
                {[{name:'Sarah Chen',spec:'Luxury Homes',deals:142,rating:4.9,img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'},
                  {name:'Marcus Rivera',spec:'Commercial',deals:98,rating:4.8,img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'},
                  {name:'Priya Patel',spec:'Residential',deals:215,rating:5.0,img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'},
                  {name:'James Walker',spec:'Investment',deals:176,rating:4.9,img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'}].map((a,i)=>(
                  <div key={i} style={{ background:'white', borderRadius:20, overflow:'hidden', border:'1px solid #E8E0D8', textAlign:'center' }}>
                    <img src={a.img} alt={a.name} style={{ width:'100%', height:200, objectFit:'cover' }} />
                    <div style={{ padding:24 }}>
                      <h3 style={{ fontWeight:800, fontSize:'1.1rem', marginBottom:4 }}>{a.name}</h3>
                      <div style={{ color:'#8B4513', fontSize:'0.85rem', fontWeight:600, marginBottom:12 }}>{a.spec} Specialist</div>
                      <div style={{ display:'flex', justifyContent:'center', gap:24, marginBottom:20 }}>
                        <div><div style={{ fontWeight:800 }}>{a.deals}</div><div style={{ color:'#94A3B8', fontSize:'0.8rem' }}>Deals</div></div>
                        <div><div style={{ fontWeight:800, color:'#F59E0B' }}>★ {a.rating}</div><div style={{ color:'#94A3B8', fontSize:'0.8rem' }}>Rating</div></div>
                      </div>
                      <button style={{ width:'100%', background:'#8B4513', color:'white', border:'none', padding:'10px', borderRadius:10, fontWeight:700, cursor:'pointer' }}>Contact Agent</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <footer style={{ background:'#1a1a1a', padding:32, textAlign:'center', color:'#64748B' }}>
        <p>© 2026 EstatePro — Luxury Real Estate Platform</p>
      </footer>
    </div>
  );
}
