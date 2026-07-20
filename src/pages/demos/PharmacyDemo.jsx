import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pill, Search, ShoppingCart, AlertCircle, Check, Package, Clock, Shield } from 'lucide-react';

const medicines = [
  { id:1, name:'Paracetamol 500mg', brand:'Generic', cat:'Pain Relief', price:4.99, stock:250, rx:false, img:'💊' },
  { id:2, name:'Amoxicillin 250mg', brand:'Amoxil', cat:'Antibiotics', price:12.99, stock:85, rx:true, img:'💉' },
  { id:3, name:'Vitamin D3 1000IU', brand:'HealthPlus', cat:'Vitamins', price:8.99, stock:320, rx:false, img:'🌟' },
  { id:4, name:'Metformin 500mg', brand:'Glucophage', cat:'Diabetes', price:9.49, stock:140, rx:true, img:'💊' },
  { id:5, name:'Omeprazole 20mg', brand:'Prilosec', cat:'Gastric', price:7.99, stock:190, rx:false, img:'💊' },
  { id:6, name:'Atorvastatin 10mg', brand:'Lipitor', cat:'Cholesterol', price:15.49, stock:65, rx:true, img:'💊' },
  { id:7, name:'Cetirizine 10mg', brand:'Zyrtec', cat:'Allergy', price:6.49, stock:280, rx:false, img:'💊' },
  { id:8, name:'Omega-3 1000mg', brand:'NaturalCare', cat:'Vitamins', price:11.99, stock:210, rx:false, img:'🐟' },
];

const cats = ['All','Pain Relief','Antibiotics','Vitamins','Diabetes','Gastric','Allergy','Cholesterol'];

export default function PharmacyDemo({ state }) {
  const { innerTab, setInnerTab, pharmaSearch, setPharmaSearch } = state;
  const [selCat, setSelCat] = useState('All');
  const [cart, setCart] = useState([]);
  const nav = ['home','medicines','prescriptions','orders'];

  const filtered = medicines.filter(m =>
    (selCat==='All' || m.cat===selCat) &&
    (m.name.toLowerCase().includes(pharmaSearch.toLowerCase()) || m.brand.toLowerCase().includes(pharmaSearch.toLowerCase()))
  );
  const cartTotal = cart.reduce((s,i)=>s+i.price*i.qty,0);

  const addToCart = (med) => {
    if (med.rx) return alert('This medicine requires a valid prescription. Please upload your prescription first.');
    setCart(c => {
      const ex = c.find(x=>x.id===med.id);
      if (ex) return c.map(x=>x.id===med.id?{...x,qty:x.qty+1}:x);
      return [...c,{...med,qty:1}];
    });
  };

  return (
    <div style={{ fontFamily:'Inter,sans-serif', background:'#F0FDF4', color:'#0F172A', minHeight:'100vh' }}>
      <nav style={{ padding:'16px 5%', display:'flex', justifyContent:'space-between', alignItems:'center', background:'white', borderBottom:'1px solid #D1FAE5', position:'sticky', top:0, zIndex:50 }}>
        <div style={{ fontWeight:900, fontSize:'1.4rem', color:'#059669', display:'flex', alignItems:'center', gap:8 }}><Pill size={22} color="#059669"/>PharmaSys</div>
        <div style={{ display:'flex', gap:28, fontWeight:600 }}>
          {nav.map(t=><span key={t} onClick={()=>{setInnerTab(t);window.scrollTo(0,0);}} style={{ cursor:'pointer', color:innerTab===t?'#059669':'#64748B', textTransform:'capitalize', borderBottom:innerTab===t?'2px solid #059669':'2px solid transparent', paddingBottom:4 }}>{t}</span>)}
        </div>
        <button onClick={()=>setInnerTab('medicines')} style={{ background:'linear-gradient(135deg,#059669,#10B981)', color:'white', border:'none', padding:'10px 22px', borderRadius:50, fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', gap:8 }}>
          <ShoppingCart size={16}/>{cart.length>0?`Cart (${cart.reduce((s,i)=>s+i.qty,0)})`:'Shop Now'}
        </button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}>
          {innerTab==='home' && (
            <div>
              <div style={{ position:'relative', padding:'80px 5%', overflow:'hidden', background:'linear-gradient(135deg,#059669 0%,#0D9488 50%,#0891B2 100%)' }}>
                <div style={{ maxWidth:650 }}>
                  <div style={{ color:'rgba(255,255,255,0.85)', fontSize:'0.9rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:16 }}>Digital Pharmacy</div>
                  <h1 style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:900, color:'white', lineHeight:1.05, marginBottom:24 }}>Your Health, <span style={{ color:'#A7F3D0' }}>Delivered</span></h1>
                  <p style={{ color:'rgba(255,255,255,0.85)', fontSize:'1.1rem', lineHeight:1.7, marginBottom:40 }}>1000+ medicines. Licensed pharmacists. Prescription management. Free home delivery.</p>
                  <div style={{ display:'flex', gap:12, background:'rgba(255,255,255,0.15)', backdropFilter:'blur(10px)', borderRadius:12, padding:8, maxWidth:460, border:'1px solid rgba(255,255,255,0.25)' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:8, flex:1, padding:'0 12px' }}>
                      <Search size={18} color="rgba(255,255,255,0.7)"/>
                      <input value={pharmaSearch} onChange={e=>setPharmaSearch(e.target.value)} placeholder="Search medicines..." style={{ border:'none', outline:'none', fontSize:'0.95rem', background:'transparent', color:'white', width:'100%' }}/>
                    </div>
                    <button onClick={()=>setInnerTab('medicines')} style={{ background:'white', color:'#059669', border:'none', padding:'12px 24px', borderRadius:8, fontWeight:700, cursor:'pointer' }}>Search</button>
                  </div>
                </div>
              </div>
              <div style={{ padding:'60px 5%', background:'white' }}>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20, maxWidth:1000, margin:'0 auto' }}>
                  {[{icon:<Pill size={26}/>,v:'1000+',l:'Medicines',c:'#059669'},{icon:<Shield size={26}/>,v:'100%',l:'Genuine',c:'#0EA5E9'},{icon:<Clock size={26}/>,v:'4 hrs',l:'Delivery',c:'#F59E0B'},{icon:<Package size={26}/>,v:'50K+',l:'Orders Done',c:'#8B5CF6'}].map((s,i)=>(
                    <div key={i} style={{ textAlign:'center', padding:24, borderRadius:16, border:'1px solid #D1FAE5', background:'#F0FDF4' }}>
                      <div style={{ color:s.c, marginBottom:12 }}>{s.icon}</div>
                      <div style={{ fontSize:'1.8rem', fontWeight:900, color:'#0F172A' }}>{s.v}</div>
                      <div style={{ color:'#64748B', fontSize:'0.85rem', marginTop:4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab==='medicines' && (
            <div style={{ padding:'40px 5%' }}>
              <div style={{ display:'flex', gap:16, marginBottom:24, alignItems:'center', flexWrap:'wrap' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, background:'white', border:'1px solid #D1FAE5', borderRadius:10, padding:'10px 16px', flex:1, maxWidth:300 }}>
                  <Search size={18} color="#94A3B8"/>
                  <input value={pharmaSearch} onChange={e=>setPharmaSearch(e.target.value)} placeholder="Search medicines..." style={{ border:'none', outline:'none', fontSize:'0.9rem', width:'100%' }}/>
                </div>
                <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                  {cats.map(c=><button key={c} onClick={()=>setSelCat(c)} style={{ padding:'8px 16px', borderRadius:50, border:'none', background:selCat===c?'linear-gradient(135deg,#059669,#10B981)':'white', color:selCat===c?'white':'#64748B', fontWeight:600, cursor:'pointer', fontSize:'0.82rem', boxShadow:'0 2px 6px rgba(0,0,0,0.05)' }}>{c}</button>)}
                </div>
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:20 }}>
                {filtered.map((m,i)=>(
                  <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.05 }} style={{ background:'white', borderRadius:18, padding:22, border:'1px solid #D1FAE5', boxShadow:'0 2px 12px rgba(0,0,0,0.04)' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14 }}>
                      <div style={{ fontSize:'2.5rem' }}>{m.img}</div>
                      <div style={{ display:'flex', flexDirection:'column', gap:6, alignItems:'flex-end' }}>
                        <span style={{ padding:'3px 10px', borderRadius:50, fontSize:'0.72rem', fontWeight:700, background:'#F0FDF4', color:'#059669', border:'1px solid #D1FAE5' }}>{m.cat}</span>
                        {m.rx && <span style={{ display:'flex', alignItems:'center', gap:4, padding:'3px 10px', borderRadius:50, fontSize:'0.72rem', fontWeight:700, background:'#FEF3C7', color:'#B45309' }}><AlertCircle size={11}/>Rx Required</span>}
                      </div>
                    </div>
                    <h3 style={{ fontWeight:800, fontSize:'1rem', marginBottom:4 }}>{m.name}</h3>
                    <div style={{ color:'#94A3B8', fontSize:'0.82rem', marginBottom:14 }}>{m.brand} · Stock: {m.stock}</div>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <span style={{ fontSize:'1.4rem', fontWeight:900, color:'#059669' }}>${m.price}</span>
                      <button onClick={()=>addToCart(m)} style={{ background: m.rx?'#F1F5F9':'linear-gradient(135deg,#059669,#10B981)', color: m.rx?'#94A3B8':'white', border:'none', padding:'9px 18px', borderRadius:10, fontWeight:700, cursor:'pointer', fontSize:'0.82rem', display:'flex', alignItems:'center', gap:6 }}>
                        {m.rx?<><AlertCircle size={13}/>Prescription</>:<><ShoppingCart size={13}/>Add</>}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {cart.length > 0 && (
                <div style={{ position:'fixed', bottom:80, right:24, background:'linear-gradient(135deg,#059669,#10B981)', color:'white', padding:'16px 24px', borderRadius:16, boxShadow:'0 8px 32px rgba(5,150,105,0.4)', cursor:'pointer', zIndex:100 }} onClick={()=>setInnerTab('orders')}>
                  <div style={{ fontWeight:800 }}>🛒 {cart.reduce((s,i)=>s+i.qty,0)} items · ${cartTotal.toFixed(2)}</div>
                  <div style={{ fontSize:'0.8rem', opacity:0.85 }}>Tap to checkout</div>
                </div>
              )}
            </div>
          )}

          {innerTab==='prescriptions' && (
            <div style={{ padding:'60px 5%', maxWidth:800, margin:'0 auto' }}>
              <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:8 }}>Prescription Upload</h1>
              <p style={{ color:'#64748B', marginBottom:40 }}>Upload your prescription to order Rx medicines</p>
              <div style={{ background:'white', padding:40, borderRadius:24, border:'2px dashed #A7F3D0', textAlign:'center', marginBottom:28 }}>
                <div style={{ fontSize:'3rem', marginBottom:16 }}>📋</div>
                <h3 style={{ fontWeight:800, fontSize:'1.2rem', marginBottom:8 }}>Upload Prescription</h3>
                <p style={{ color:'#64748B', marginBottom:24 }}>Supported: JPG, PNG, PDF · Max 5MB</p>
                <button style={{ background:'linear-gradient(135deg,#059669,#10B981)', color:'white', border:'none', padding:'14px 32px', borderRadius:12, fontWeight:700, cursor:'pointer' }}>Choose File</button>
              </div>
              <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #D1FAE5' }}>
                <h3 style={{ fontWeight:800, marginBottom:20 }}>Active Prescriptions</h3>
                {[{drug:'Amoxicillin 250mg',dr:'Dr. Priya Sharma',date:'Jul 15, 2026',refills:2},{drug:'Metformin 500mg',dr:'Dr. Raj Kumar',date:'Jul 10, 2026',refills:5},{drug:'Atorvastatin 10mg',dr:'Dr. Ananya Iyer',date:'Jun 28, 2026',refills:3}].map((p,i)=>(
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:16, padding:'16px', background:'#F0FDF4', borderRadius:12, marginBottom:12 }}>
                    <div style={{ width:44, height:44, borderRadius:'50%', background:'linear-gradient(135deg,#059669,#10B981)', display:'flex', alignItems:'center', justifyContent:'center' }}><Pill size={20} color="white"/></div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:700 }}>{p.drug}</div>
                      <div style={{ color:'#64748B', fontSize:'0.82rem', marginTop:2 }}>{p.dr} · {p.date}</div>
                    </div>
                    <div style={{ textAlign:'right' }}>
                      <div style={{ fontWeight:700, color:'#059669', fontSize:'0.85rem' }}>{p.refills} refills left</div>
                      <button style={{ marginTop:4, background:'transparent', border:'1px solid #059669', color:'#059669', padding:'4px 12px', borderRadius:6, fontSize:'0.75rem', fontWeight:600, cursor:'pointer' }}>Refill</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {innerTab==='orders' && (
            <div style={{ padding:'40px 5%', maxWidth:800, margin:'0 auto' }}>
              <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:28 }}>My Orders</h1>
              {[{id:'PH-2041',items:['Paracetamol 500mg x2','Vitamin D3 x1'],total:18.97,status:'Delivered',date:'Jul 18, 2026'},
                {id:'PH-2038',items:['Omega-3 x1','Cetirizine x2'],total:25.97,status:'Out for Delivery',date:'Jul 20, 2026'},
                {id:'PH-2035',items:['Paracetamol 500mg x3'],total:14.97,status:'Processing',date:'Jul 20, 2026'}].map((o,i)=>(
                <div key={i} style={{ background:'white', borderRadius:20, padding:24, border:'1px solid #D1FAE5', marginBottom:16 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
                    <div>
                      <div style={{ fontWeight:800, fontSize:'1rem' }}>Order #{o.id}</div>
                      <div style={{ color:'#64748B', fontSize:'0.82rem', marginTop:4 }}>{o.date}</div>
                    </div>
                    <span style={{ padding:'5px 14px', borderRadius:50, fontSize:'0.78rem', fontWeight:700, background: o.status==='Delivered'?'#DCFCE7':o.status==='Out for Delivery'?'#DBEAFE':'#FEF3C7', color: o.status==='Delivered'?'#15803D':o.status==='Out for Delivery'?'#1D4ED8':'#B45309' }}>{o.status}</span>
                  </div>
                  <div style={{ color:'#64748B', fontSize:'0.85rem', marginBottom:16 }}>{o.items.join(', ')}</div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontWeight:800, color:'#059669', fontSize:'1.05rem' }}>${o.total}</span>
                    {o.status==='Delivered'&&<button style={{ background:'linear-gradient(135deg,#059669,#10B981)', color:'white', border:'none', padding:'8px 18px', borderRadius:8, fontWeight:600, cursor:'pointer', fontSize:'0.82rem' }}>Reorder</button>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <footer style={{ background:'#0F172A', padding:28, textAlign:'center', color:'#64748B' }}>
        <p>© 2026 PharmaSys — Digital Pharmacy Management</p>
      </footer>
    </div>
  );
}
