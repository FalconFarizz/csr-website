import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Target, TrendingUp, DollarSign, Share2, Check, Globe } from 'lucide-react';

const campaigns = [
  { id:1, title:'Clean Water for Rural India', raised:84200, goal:100000, donors:1243, days:12, img:'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&w=600&q=80', cat:'Environment' },
  { id:2, title:'Education for Street Children', raised:42800, goal:60000, donors:876, days:8, img:'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600&q=80', cat:'Education' },
  { id:3, title:'Medical Aid for Flood Victims', raised:156000, goal:200000, donors:3821, days:3, img:'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80', cat:'Disaster' },
  { id:4, title:'Plant 1 Million Trees', raised:29400, goal:50000, donors:542, days:21, img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80', cat:'Environment' },
];

export default function NGODemo({ state }) {
  const { innerTab, setInnerTab, ngoDonation, setNgoDonation, ngoTotalRaised, setNgoTotalRaised, ngoDonorsCount, setNgoDonorsCount, ngoThanks, setNgoThanks } = state;
  const [selCampaign, setSelCampaign] = useState(campaigns[0]);
  const [customAmt, setCustomAmt] = useState('');
  const nav = ['home','campaigns','donate','impact'];

  const handleDonate = () => {
    const amt = customAmt ? parseFloat(customAmt) : ngoDonation;
    setNgoTotalRaised(r => r + amt);
    setNgoDonorsCount(c => c + 1);
    setCustomAmt('');
    setNgoThanks(true);
  };

  return (
    <div style={{ fontFamily:'Inter,sans-serif', background:'#FFF7ED', color:'#1a1a1a', minHeight:'100vh' }}>
      <nav style={{ padding:'18px 5%', display:'flex', justifyContent:'space-between', alignItems:'center', background:'white', borderBottom:'1px solid #FED7AA', position:'sticky', top:0, zIndex:50 }}>
        <div style={{ fontWeight:900, fontSize:'1.4rem', color:'#DC2626', display:'flex', alignItems:'center', gap:8 }}><Heart size={22} fill="#DC2626" color="#DC2626"/>GiveHope</div>
        <div style={{ display:'flex', gap:32, fontWeight:600 }}>
          {nav.map(t=><span key={t} onClick={()=>{setInnerTab(t);window.scrollTo(0,0);}} style={{ cursor:'pointer', color:innerTab===t?'#DC2626':'#64748B', textTransform:'capitalize', borderBottom:innerTab===t?'2px solid #DC2626':'2px solid transparent', paddingBottom:4 }}>{t}</span>)}
        </div>
        <button onClick={()=>setInnerTab('donate')} style={{ background:'linear-gradient(135deg,#DC2626,#EF4444)', color:'white', border:'none', padding:'12px 28px', borderRadius:50, fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', gap:8 }}><Heart size={16} fill="white"/>Donate Now</button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}>
          {innerTab==='home' && (
            <div>
              <div style={{ position:'relative', height:'85vh', overflow:'hidden' }}>
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80" alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(185,28,28,0.85) 0%, rgba(0,0,0,0.3) 100%)' }}/>
                <div style={{ position:'absolute', top:'50%', left:'5%', transform:'translateY(-50%)', maxWidth:600 }}>
                  <div style={{ color:'rgba(255,255,255,0.85)', fontSize:'0.9rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:16 }}>Non-Profit Organization</div>
                  <h1 style={{ fontSize:'clamp(2.5rem,5.5vw,5rem)', fontWeight:900, color:'white', lineHeight:1.05, marginBottom:24 }}>Together We Can <span style={{ color:'#FCA5A5' }}>Change Lives</span></h1>
                  <p style={{ color:'rgba(255,255,255,0.85)', fontSize:'1.1rem', lineHeight:1.7, marginBottom:36 }}>Join {ngoDonorsCount.toLocaleString()}+ donors who have raised ${ngoTotalRaised.toLocaleString()} for causes that matter.</p>
                  <div style={{ display:'flex', gap:16 }}>
                    <button onClick={()=>setInnerTab('donate')} style={{ background:'white', color:'#DC2626', border:'none', padding:'16px 36px', borderRadius:50, fontWeight:800, fontSize:'1.05rem', cursor:'pointer', display:'flex', alignItems:'center', gap:8 }}><Heart size={18} fill="#DC2626"/>Donate Now</button>
                    <button onClick={()=>setInnerTab('campaigns')} style={{ background:'rgba(255,255,255,0.1)', color:'white', border:'1px solid rgba(255,255,255,0.4)', padding:'16px 36px', borderRadius:50, fontWeight:700, cursor:'pointer' }}>See Campaigns</button>
                  </div>
                </div>
              </div>
              <div style={{ padding:'70px 5%', background:'white' }}>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, maxWidth:1000, margin:'0 auto' }}>
                  {[{icon:<DollarSign size={28}/>,v:`$${ngoTotalRaised.toLocaleString()}`,l:'Total Raised',c:'#DC2626'},{icon:<Users size={28}/>,v:ngoDonorsCount.toLocaleString(),l:'Generous Donors',c:'#0EA5E9'},{icon:<Globe size={28}/>,v:'48',l:'Countries',c:'#10B981'},{icon:<Target size={28}/>,v:'120+',l:'Projects Done',c:'#F59E0B'}].map((s,i)=>(
                    <div key={i} style={{ textAlign:'center', padding:28, borderRadius:20, border:'1px solid #FEE2E2', background:'#FFF7ED' }}>
                      <div style={{ color:s.c, marginBottom:12 }}>{s.icon}</div>
                      <div style={{ fontSize:'2rem', fontWeight:900, color:'#1a1a1a' }}>{s.v}</div>
                      <div style={{ color:'#64748B', fontSize:'0.9rem', marginTop:6 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab==='campaigns' && (
            <div style={{ padding:'60px 5%' }}>
              <div style={{ textAlign:'center', marginBottom:48 }}>
                <h1 style={{ fontSize:'2.5rem', fontWeight:900, marginBottom:12 }}>Active Campaigns</h1>
                <p style={{ color:'#64748B' }}>Your donation makes a real difference</p>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:28 }}>
                {campaigns.map((c,i)=>{
                  const pct = Math.round(c.raised/c.goal*100);
                  return (
                    <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.08 }} style={{ background:'white', borderRadius:20, overflow:'hidden', boxShadow:'0 4px 16px rgba(0,0,0,0.05)', border:'1px solid #FEE2E2' }}>
                      <div style={{ position:'relative' }}>
                        <img src={c.img} alt={c.title} style={{ width:'100%', height:200, objectFit:'cover' }}/>
                        <span style={{ position:'absolute', top:14, left:14, background:'#DC2626', color:'white', padding:'4px 12px', borderRadius:50, fontSize:'0.75rem', fontWeight:700 }}>{c.cat}</span>
                        <span style={{ position:'absolute', top:14, right:14, background:'white', color:'#DC2626', padding:'4px 12px', borderRadius:50, fontSize:'0.75rem', fontWeight:700 }}>{c.days} days left</span>
                      </div>
                      <div style={{ padding:22 }}>
                        <h3 style={{ fontWeight:800, fontSize:'1.05rem', marginBottom:16 }}>{c.title}</h3>
                        <div style={{ height:8, background:'#FEE2E2', borderRadius:4, marginBottom:10 }}>
                          <motion.div initial={{ width:0 }} animate={{ width:`${pct}%` }} transition={{ duration:1, delay:i*0.1 }} style={{ height:'100%', background:'linear-gradient(90deg,#DC2626,#EF4444)', borderRadius:4 }}/>
                        </div>
                        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:18 }}>
                          <div><div style={{ fontWeight:900, color:'#DC2626' }}>${c.raised.toLocaleString()}</div><div style={{ color:'#94A3B8', fontSize:'0.8rem' }}>raised</div></div>
                          <div style={{ textAlign:'right' }}><div style={{ fontWeight:700 }}>{pct}%</div><div style={{ color:'#94A3B8', fontSize:'0.8rem' }}>of ${c.goal.toLocaleString()}</div></div>
                        </div>
                        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                          <div style={{ color:'#64748B', fontSize:'0.82rem', display:'flex', alignItems:'center', gap:4 }}><Users size={13}/>{c.donors.toLocaleString()} donors</div>
                          <button onClick={()=>{setSelCampaign(c);setInnerTab('donate');}} style={{ background:'linear-gradient(135deg,#DC2626,#EF4444)', color:'white', border:'none', padding:'10px 22px', borderRadius:10, fontWeight:700, cursor:'pointer', fontSize:'0.85rem', display:'flex', alignItems:'center', gap:6 }}><Heart size={13} fill="white"/>Donate</button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {innerTab==='donate' && (
            <div style={{ padding:'60px 5%', maxWidth:900, margin:'0 auto' }}>
              <h1 style={{ fontSize:'2.2rem', fontWeight:900, marginBottom:8 }}>Make a Donation</h1>
              <p style={{ color:'#64748B', marginBottom:36 }}>100% of your donation goes directly to the cause</p>
              {ngoThanks ? (
                <div style={{ textAlign:'center', padding:80, background:'white', borderRadius:24, border:'1px solid #FEE2E2' }}>
                  <div style={{ width:80, height:80, borderRadius:'50%', background:'linear-gradient(135deg,#DC2626,#EF4444)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 24px' }}><Heart size={36} fill="white" color="white"/></div>
                  <h3 style={{ fontSize:'2rem', fontWeight:900, color:'#DC2626', marginBottom:12 }}>Thank You! ❤️</h3>
                  <p style={{ color:'#64748B', marginBottom:8 }}>Your donation of ${customAmt || ngoDonation} has been received.</p>
                  <p style={{ color:'#94A3B8', fontSize:'0.9rem' }}>You've helped raise the total to ${ngoTotalRaised.toLocaleString()}</p>
                  <button onClick={()=>setNgoThanks(false)} style={{ marginTop:32, background:'linear-gradient(135deg,#DC2626,#EF4444)', color:'white', border:'none', padding:'14px 32px', borderRadius:50, fontWeight:700, cursor:'pointer' }}>Donate Again</button>
                </div>
              ) : (
                <div style={{ display:'grid', gridTemplateColumns:'3fr 2fr', gap:32 }}>
                  <div style={{ background:'white', padding:32, borderRadius:20, border:'1px solid #FEE2E2' }}>
                    <div style={{ marginBottom:24 }}>
                      <label style={{ fontWeight:700, fontSize:'0.85rem', color:'#475569', display:'block', marginBottom:12 }}>SELECT CAMPAIGN</label>
                      {campaigns.map((c,i)=>(
                        <div key={i} onClick={()=>setSelCampaign(c)} style={{ display:'flex', gap:12, alignItems:'center', padding:12, borderRadius:10, cursor:'pointer', marginBottom:8, background:selCampaign.id===c.id?'#FFF1F1':'#F8FAFC', border:selCampaign.id===c.id?'1px solid #FCA5A5':'1px solid #F1F5F9' }}>
                          <img src={c.img} alt={c.title} style={{ width:48, height:48, borderRadius:8, objectFit:'cover' }}/>
                          <div style={{ flex:1 }}>
                            <div style={{ fontWeight:700, fontSize:'0.88rem' }}>{c.title}</div>
                            <div style={{ color:'#DC2626', fontSize:'0.78rem', marginTop:2 }}>{Math.round(c.raised/c.goal*100)}% funded</div>
                          </div>
                          {selCampaign.id===c.id && <Check size={18} color="#DC2626"/>}
                        </div>
                      ))}
                    </div>
                    <div>
                      <label style={{ fontWeight:700, fontSize:'0.85rem', color:'#475569', display:'block', marginBottom:12 }}>SELECT AMOUNT</label>
                      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginBottom:12 }}>
                        {[10,25,50,100,250,500].map(amt=>(
                          <button key={amt} onClick={()=>{setNgoDonation(amt);setCustomAmt('');}} style={{ padding:'14px', background:ngoDonation===amt&&!customAmt?'linear-gradient(135deg,#DC2626,#EF4444)':'#F8FAFC', color:ngoDonation===amt&&!customAmt?'white':'#475569', border:ngoDonation===amt&&!customAmt?'none':'1px solid #E2E8F0', borderRadius:10, fontWeight:700, cursor:'pointer', fontSize:'0.95rem' }}>${amt}</button>
                        ))}
                      </div>
                      <input type="number" value={customAmt} onChange={e=>setCustomAmt(e.target.value)} placeholder="Custom amount ($)" style={{ width:'100%', padding:14, border:'1px solid #E2E8F0', borderRadius:10, fontSize:'1rem', boxSizing:'border-box', marginBottom:20 }}/>
                    </div>
                    <button onClick={handleDonate} style={{ width:'100%', background:'linear-gradient(135deg,#DC2626,#EF4444)', color:'white', border:'none', padding:18, borderRadius:12, fontWeight:900, fontSize:'1.1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
                      <Heart size={20} fill="white"/>Donate ${customAmt || ngoDonation}
                    </button>
                  </div>
                  <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #FEE2E2', height:'fit-content' }}>
                    <img src={selCampaign.img} alt={selCampaign.title} style={{ width:'100%', height:160, objectFit:'cover', borderRadius:12, marginBottom:16 }}/>
                    <h3 style={{ fontWeight:800, marginBottom:8 }}>{selCampaign.title}</h3>
                    <div style={{ height:6, background:'#FEE2E2', borderRadius:3, marginBottom:8 }}>
                      <div style={{ width:`${Math.round(selCampaign.raised/selCampaign.goal*100)}%`, height:'100%', background:'#DC2626', borderRadius:3 }}/>
                    </div>
                    <div style={{ display:'flex', justifyContent:'space-between', color:'#64748B', fontSize:'0.82rem', marginBottom:16 }}>
                      <span>${selCampaign.raised.toLocaleString()} raised</span>
                      <span>{selCampaign.days} days left</span>
                    </div>
                    <div style={{ padding:14, background:'#FFF7ED', borderRadius:10, border:'1px solid #FED7AA' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:6, color:'#B45309', fontSize:'0.82rem', fontWeight:600 }}>🔒 Secure & 100% Transparent</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {innerTab==='impact' && (
            <div style={{ padding:'60px 5%', background:'white' }}>
              <div style={{ textAlign:'center', marginBottom:60 }}>
                <h1 style={{ fontSize:'2.5rem', fontWeight:900, marginBottom:12 }}>Our Impact</h1>
                <p style={{ color:'#64748B' }}>See how your donations are changing the world</p>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28, maxWidth:1000, margin:'0 auto' }}>
                {[{e:'💧',t:'Clean Water',d:'Provided clean water to 50,000 families across 15 villages.'},{e:'📚',t:'Education',d:'Funded education for 8,000 children in underserved areas.'},{e:'🌱',t:'Environment',d:'Planted 450,000 trees to combat deforestation.'},{e:'🏥',t:'Healthcare',d:'Delivered medical aid to 30,000 disaster victims.'},{e:'🍽️',t:'Food Security',d:'Distributed 1.2 million meals to hunger-affected families.'},{e:'🏠',t:'Shelter',d:'Built 1,200 homes for displaced communities.'}].map((s,i)=>(
                  <div key={i} style={{ padding:28, background:'#FFF7ED', borderRadius:20, border:'1px solid #FEE2E2', textAlign:'center' }}>
                    <div style={{ fontSize:'2.5rem', marginBottom:14 }}>{s.e}</div>
                    <h3 style={{ fontWeight:800, marginBottom:10 }}>{s.t}</h3>
                    <p style={{ color:'#64748B', lineHeight:1.6, fontSize:'0.9rem' }}>{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <footer style={{ background:'#1a1a1a', padding:28, textAlign:'center', color:'#64748B' }}>
        <p>© 2026 GiveHope — Non-Profit Donation Platform</p>
      </footer>
    </div>
  );
}
