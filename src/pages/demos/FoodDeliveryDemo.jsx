import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Star, Clock, Plus, Minus, MapPin, Check, Bike } from 'lucide-react';

const categories = ['All', 'Burgers', 'Pizza', 'Asian', 'Healthy', 'Desserts'];
const menuItems = [
  { id:1, name:'Smash Burger', cat:'Burgers', price:12.99, time:'15 min', rating:4.9, cal:680, img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
  { id:2, name:'Margherita Pizza', cat:'Pizza', price:14.99, time:'20 min', rating:4.8, cal:820, img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80' },
  { id:3, name:'Pad Thai', cat:'Asian', price:13.49, time:'18 min', rating:4.7, cal:620, img:'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=400&q=80' },
  { id:4, name:'Acai Bowl', cat:'Healthy', price:11.99, time:'10 min', rating:4.9, cal:380, img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80' },
  { id:5, name:'Cheese Lava Cake', cat:'Desserts', price:8.99, time:'12 min', rating:4.9, cal:520, img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80' },
  { id:6, name:'BBQ Chicken Pizza', cat:'Pizza', price:16.99, time:'22 min', rating:4.8, cal:940, img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80' },
  { id:7, name:'Sushi Platter', cat:'Asian', price:22.99, time:'25 min', rating:4.9, cal:480, img:'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80' },
  { id:8, name:'Caesar Salad', cat:'Healthy', price:10.99, time:'8 min', rating:4.6, cal:290, img:'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=400&q=80' },
];

const steps = ['Order Placed','Preparing','Out for Delivery','Delivered'];

export default function FoodDeliveryDemo({ state }) {
  const { innerTab, setInnerTab, restaurantCart, setRestaurantCart, deliveryStep, setDeliveryStep } = state;
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');
  const nav = ['home', 'menu', 'cart', 'track'];

  const filtered = menuItems.filter(m => (cat === 'All' || m.cat === cat) && m.name.toLowerCase().includes(search.toLowerCase()));
  const cartTotal = restaurantCart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = restaurantCart.reduce((s, i) => s + i.qty, 0);

  const addItem = (item) => {
    setRestaurantCart(c => {
      const ex = c.find(x => x.id === item.id);
      if (ex) return c.map(x => x.id === item.id ? {...x, qty: x.qty + 1} : x);
      return [...c, {...item, qty: 1}];
    });
  };
  const removeItem = (id) => setRestaurantCart(c => c.map(x => x.id === id ? {...x, qty: x.qty - 1} : x).filter(x => x.qty > 0));

  return (
    <div style={{ fontFamily:'Inter,sans-serif', background:'#FFF7ED', color:'#1a1a1a', minHeight:'100vh' }}>
      <nav style={{ padding:'16px 5%', display:'flex', justifyContent:'space-between', alignItems:'center', background:'white', borderBottom:'1px solid #FED7AA', position:'sticky', top:0, zIndex:50 }}>
        <div style={{ fontWeight:900, fontSize:'1.4rem', color:'#EA580C', display:'flex', alignItems:'center', gap:8 }}>🍔 QuickBite</div>
        <div style={{ display:'flex', gap:28, fontWeight:600 }}>
          {nav.map(t=><span key={t} onClick={()=>{setInnerTab(t);window.scrollTo(0,0);}} style={{ cursor:'pointer', color:innerTab===t?'#EA580C':'#64748B', textTransform:'capitalize', borderBottom:innerTab===t?'2px solid #EA580C':'2px solid transparent', paddingBottom:4 }}>{t}</span>)}
        </div>
        <button onClick={()=>setInnerTab('cart')} style={{ background:'linear-gradient(135deg,#EA580C,#F97316)', color:'white', border:'none', padding:'10px 22px', borderRadius:50, fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', gap:8 }}>
          <ShoppingBag size={16}/> Cart {cartCount > 0 && `(${cartCount})`}
        </button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}>
          {innerTab==='home' && (
            <div>
              <div style={{ position:'relative', height:'70vh', overflow:'hidden' }}>
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(234,88,12,0.9) 0%, rgba(0,0,0,0.4) 100%)' }}/>
                <div style={{ position:'absolute', top:'50%', left:'5%', transform:'translateY(-50%)', maxWidth:560 }}>
                  <div style={{ color:'rgba(255,255,255,0.9)', fontSize:'0.9rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:16 }}>Fast Food Delivery</div>
                  <h1 style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:900, color:'white', lineHeight:1.05, marginBottom:24 }}>Delicious Food, <span style={{ color:'#FED7AA' }}>Delivered Fast</span></h1>
                  <p style={{ color:'rgba(255,255,255,0.85)', fontSize:'1.1rem', lineHeight:1.6, marginBottom:36 }}>Order from 500+ restaurants. Live tracking. 30-min delivery guaranteed.</p>
                  <div style={{ display:'flex', gap:0, background:'white', borderRadius:12, padding:6, maxWidth:460 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:8, flex:1, padding:'0 12px' }}>
                      <MapPin size={18} color="#94A3B8"/><input placeholder="Enter delivery address..." style={{ border:'none', outline:'none', fontSize:'0.95rem', width:'100%' }}/>
                    </div>
                    <button onClick={()=>setInnerTab('menu')} style={{ background:'linear-gradient(135deg,#EA580C,#F97316)', color:'white', border:'none', padding:'12px 24px', borderRadius:8, fontWeight:700, cursor:'pointer' }}>Find Food</button>
                  </div>
                </div>
              </div>
              <div style={{ padding:'60px 5%', background:'white' }}>
                <h2 style={{ fontSize:'2rem', fontWeight:900, marginBottom:36, textAlign:'center' }}>Why QuickBite?</h2>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, maxWidth:1000, margin:'0 auto' }}>
                  {[{e:'⚡',v:'30 min',l:'Avg Delivery'},{e:'🍕',v:'500+',l:'Restaurants'},{e:'⭐',v:'4.8',l:'App Rating'},{e:'🛵',v:'24/7',l:'Service Hours'}].map((s,i)=>(
                    <div key={i} style={{ textAlign:'center', padding:24, borderRadius:16, border:'1px solid #FED7AA', background:'#FFF7ED' }}>
                      <div style={{ fontSize:'2.2rem', marginBottom:8 }}>{s.e}</div>
                      <div style={{ fontSize:'1.8rem', fontWeight:900, color:'#EA580C' }}>{s.v}</div>
                      <div style={{ color:'#64748B', fontSize:'0.85rem', marginTop:4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab==='menu' && (
            <div style={{ padding:'40px 5%' }}>
              <div style={{ display:'flex', gap:16, marginBottom:24, flexWrap:'wrap', alignItems:'center' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, background:'white', border:'1px solid #FED7AA', borderRadius:10, padding:'10px 16px', flex:1, maxWidth:320 }}>
                  <Search size={18} color="#94A3B8"/>
                  <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search dishes..." style={{ border:'none', outline:'none', fontSize:'0.95rem', width:'100%' }}/>
                </div>
                <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                  {categories.map(c=>(
                    <button key={c} onClick={()=>setCat(c)} style={{ padding:'8px 18px', borderRadius:50, border:'none', background:cat===c?'linear-gradient(135deg,#EA580C,#F97316)':'white', color:cat===c?'white':'#64748B', fontWeight:600, cursor:'pointer', fontSize:'0.85rem', boxShadow:'0 2px 8px rgba(0,0,0,0.06)' }}>{c}</button>
                  ))}
                </div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:24 }}>
                {filtered.map((item,i)=>{
                  const inCart = restaurantCart.find(x=>x.id===item.id);
                  return (
                    <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.05 }} style={{ background:'white', borderRadius:20, overflow:'hidden', boxShadow:'0 4px 16px rgba(0,0,0,0.05)', border:'1px solid #FEE2C8' }}>
                      <div style={{ position:'relative' }}>
                        <img src={item.img} alt={item.name} style={{ width:'100%', height:180, objectFit:'cover' }}/>
                        <span style={{ position:'absolute', top:12, left:12, background:'white', padding:'4px 10px', borderRadius:50, fontSize:'0.75rem', fontWeight:700, color:'#EA580C' }}>{item.cat}</span>
                      </div>
                      <div style={{ padding:18 }}>
                        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                          <h3 style={{ fontWeight:800, fontSize:'1rem' }}>{item.name}</h3>
                          <div style={{ display:'flex', alignItems:'center', gap:4, color:'#F59E0B', fontSize:'0.85rem' }}><Star size={13} fill="#F59E0B"/>{item.rating}</div>
                        </div>
                        <div style={{ display:'flex', gap:14, color:'#94A3B8', fontSize:'0.8rem', marginBottom:16 }}>
                          <span style={{ display:'flex', alignItems:'center', gap:4 }}><Clock size={12}/>{item.time}</span>
                          <span>🔥 {item.cal} cal</span>
                        </div>
                        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                          <span style={{ fontSize:'1.3rem', fontWeight:900, color:'#EA580C' }}>${item.price}</span>
                          {inCart ? (
                            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                              <button onClick={()=>removeItem(item.id)} style={{ width:30, height:30, borderRadius:'50%', background:'#FFF7ED', border:'1px solid #FED7AA', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'#EA580C' }}><Minus size={14}/></button>
                              <span style={{ fontWeight:800, minWidth:20, textAlign:'center' }}>{inCart.qty}</span>
                              <button onClick={()=>addItem(item)} style={{ width:30, height:30, borderRadius:'50%', background:'linear-gradient(135deg,#EA580C,#F97316)', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}><Plus size={14}/></button>
                            </div>
                          ) : (
                            <button onClick={()=>addItem(item)} style={{ background:'linear-gradient(135deg,#EA580C,#F97316)', color:'white', border:'none', padding:'8px 18px', borderRadius:10, fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', gap:6, fontSize:'0.85rem' }}><Plus size={14}/> Add</button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {innerTab==='cart' && (
            <div style={{ padding:'40px 5%', maxWidth:900, margin:'0 auto' }}>
              <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:28 }}>Your Order</h1>
              {restaurantCart.length === 0 ? (
                <div style={{ textAlign:'center', padding:80, background:'white', borderRadius:20, border:'1px solid #FED7AA' }}>
                  <div style={{ fontSize:'3rem', marginBottom:16 }}>🛒</div>
                  <h3 style={{ fontWeight:800, fontSize:'1.3rem', marginBottom:8 }}>Your cart is empty</h3>
                  <p style={{ color:'#64748B', marginBottom:24 }}>Add delicious items from our menu</p>
                  <button onClick={()=>setInnerTab('menu')} style={{ background:'linear-gradient(135deg,#EA580C,#F97316)', color:'white', border:'none', padding:'14px 32px', borderRadius:12, fontWeight:700, cursor:'pointer' }}>Browse Menu</button>
                </div>
              ) : (
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:28 }}>
                  <div style={{ background:'white', borderRadius:20, padding:28, border:'1px solid #FED7AA' }}>
                    <h3 style={{ fontWeight:800, marginBottom:20 }}>Order Items</h3>
                    {restaurantCart.map((item,i)=>(
                      <div key={i} style={{ display:'flex', gap:14, alignItems:'center', marginBottom:16, padding:'12px', background:'#FFF7ED', borderRadius:12 }}>
                        <img src={item.img} alt={item.name} style={{ width:56, height:56, borderRadius:10, objectFit:'cover' }}/>
                        <div style={{ flex:1 }}>
                          <div style={{ fontWeight:700 }}>{item.name}</div>
                          <div style={{ color:'#EA580C', fontWeight:800, marginTop:4 }}>${(item.price*item.qty).toFixed(2)}</div>
                        </div>
                        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                          <button onClick={()=>removeItem(item.id)} style={{ width:28, height:28, borderRadius:'50%', background:'white', border:'1px solid #FED7AA', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'#EA580C' }}><Minus size={13}/></button>
                          <span style={{ fontWeight:800, minWidth:20, textAlign:'center' }}>{item.qty}</span>
                          <button onClick={()=>addItem(item)} style={{ width:28, height:28, borderRadius:'50%', background:'#EA580C', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}><Plus size={13}/></button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background:'white', borderRadius:20, padding:28, border:'1px solid #FED7AA', height:'fit-content' }}>
                    <h3 style={{ fontWeight:800, marginBottom:20 }}>Bill Summary</h3>
                    <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span style={{ color:'#64748B' }}>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span style={{ color:'#64748B' }}>Delivery Fee</span><span>$2.99</span></div>
                      <div style={{ display:'flex', justifyContent:'space-between' }}><span style={{ color:'#64748B' }}>Taxes</span><span>${(cartTotal*0.08).toFixed(2)}</span></div>
                      <div style={{ borderTop:'1px solid #FED7AA', paddingTop:12, display:'flex', justifyContent:'space-between', fontWeight:900 }}>
                        <span>Total</span><span style={{ color:'#EA580C', fontSize:'1.2rem' }}>${(cartTotal+2.99+cartTotal*0.08).toFixed(2)}</span>
                      </div>
                    </div>
                    <button onClick={()=>{setDeliveryStep(0);setInnerTab('track');}} style={{ width:'100%', background:'linear-gradient(135deg,#EA580C,#F97316)', color:'white', border:'none', padding:16, borderRadius:12, fontWeight:800, fontSize:'1.05rem', cursor:'pointer' }}>Place Order 🛵</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {innerTab==='track' && (
            <div style={{ padding:'60px 5%', maxWidth:700, margin:'0 auto' }}>
              <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:8 }}>Order Tracking</h1>
              <p style={{ color:'#64748B', marginBottom:40 }}>Estimated delivery: 28 minutes</p>
              <div style={{ background:'white', borderRadius:24, padding:36, border:'1px solid #FED7AA', marginBottom:24 }}>
                {steps.map((s,i)=>(
                  <div key={i} style={{ display:'flex', gap:20, alignItems:'flex-start', marginBottom: i<steps.length-1 ? 0 : undefined }}>
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                      <div style={{ width:40, height:40, borderRadius:'50%', background: i<=deliveryStep ? 'linear-gradient(135deg,#EA580C,#F97316)' : '#F1F5F9', display:'flex', alignItems:'center', justifyContent:'center', color: i<=deliveryStep ? 'white' : '#94A3B8' }}>
                        {i<=deliveryStep ? <Check size={18}/> : <span style={{ fontWeight:800, fontSize:'0.85rem' }}>{i+1}</span>}
                      </div>
                      {i<steps.length-1 && <div style={{ width:2, height:40, background: i<deliveryStep ? '#EA580C' : '#F1F5F9', margin:'4px 0' }}/>}
                    </div>
                    <div style={{ paddingTop:8 }}>
                      <div style={{ fontWeight:800, color: i<=deliveryStep ? '#EA580C' : '#64748B' }}>{s}</div>
                      {i===deliveryStep && <div style={{ color:'#94A3B8', fontSize:'0.85rem', marginTop:4 }}>In progress...</div>}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display:'flex', gap:12 }}>
                {deliveryStep < 3 && <button onClick={()=>setDeliveryStep(d=>Math.min(d+1,3))} style={{ flex:1, background:'linear-gradient(135deg,#EA580C,#F97316)', color:'white', border:'none', padding:14, borderRadius:12, fontWeight:700, cursor:'pointer' }}>Simulate Next Step</button>}
                {deliveryStep === 3 && <div style={{ flex:1, textAlign:'center', padding:20, background:'#DCFCE7', borderRadius:12, color:'#15803D', fontWeight:800 }}>🎉 Order Delivered! Enjoy your meal!</div>}
                <button onClick={()=>{setDeliveryStep(0);setInnerTab('menu');}} style={{ flex:1, background:'white', border:'1px solid #FED7AA', color:'#EA580C', padding:14, borderRadius:12, fontWeight:700, cursor:'pointer' }}>Order Again</button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <footer style={{ background:'#1a1a1a', padding:28, textAlign:'center', color:'#64748B' }}>
        <p>© 2026 QuickBite — Food Delivery App</p>
      </footer>
    </div>
  );
}
