import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, BarChart2, Activity, RefreshCw, ArrowUp, ArrowDown } from 'lucide-react';

const portfolio = [
  { sym:'AAPL', name:'Apple Inc.', shares:15, buy:145.20, color:'#0EA5E9' },
  { sym:'GOOGL', name:'Alphabet Inc.', shares:5, buy:138.40, color:'#10B981' },
  { sym:'TSLA', name:'Tesla Inc.', shares:8, buy:242.10, color:'#F59E0B' },
  { sym:'MSFT', name:'Microsoft', shares:12, buy:380.50, color:'#8B5CF6' },
  { sym:'NVDA', name:'NVIDIA Corp.', shares:6, buy:875.00, color:'#EC4899' },
];

const news = [
  { head:'Fed signals rate cut in Q4 2026', time:'2h ago', tag:'Economy', up:true },
  { head:'NVIDIA beats earnings by 40%', time:'4h ago', tag:'Tech', up:true },
  { head:'Oil prices dip amid supply surplus', time:'6h ago', tag:'Commodities', up:false },
  { head:'Apple announces new AI features', time:'8h ago', tag:'Tech', up:true },
];

export default function FinanceDemo({ state }) {
  const { innerTab, setInnerTab, finCash, setFinCash, finHoldings, setFinHoldings, finStockPrice, finTrades, setFinTrades } = state;
  const [tradeQty, setTradeQty] = useState(1);
  const [tradeStock, setTradeStock] = useState('AAPL');
  const nav = ['dashboard', 'portfolio', 'trade', 'news'];

  const totalValue = portfolio.reduce((sum, s) => sum + (s.sym === 'AAPL' ? finStockPrice : s.buy * 1.08) * s.shares, 0);
  const totalCost = portfolio.reduce((sum, s) => sum + s.buy * s.shares, 0);
  const pnl = totalValue - totalCost;

  const handleBuy = () => {
    const cost = finStockPrice * tradeQty;
    if (cost > finCash) return alert('Insufficient funds');
    setFinCash(c => parseFloat((c - cost).toFixed(2)));
    setFinHoldings(h => h + tradeQty);
    setFinTrades(t => [{ type:'BUY', sym:tradeStock, qty:tradeQty, price:finStockPrice, time:new Date().toLocaleTimeString() }, ...t]);
  };

  const handleSell = () => {
    if (finHoldings < tradeQty) return alert('Insufficient holdings');
    const gain = finStockPrice * tradeQty;
    setFinCash(c => parseFloat((c + gain).toFixed(2)));
    setFinHoldings(h => h - tradeQty);
    setFinTrades(t => [{ type:'SELL', sym:tradeStock, qty:tradeQty, price:finStockPrice, time:new Date().toLocaleTimeString() }, ...t]);
  };

  return (
    <div style={{ fontFamily:'Inter,sans-serif', background:'#0D1117', color:'white', minHeight:'100vh' }}>
      <nav style={{ padding:'16px 5%', display:'flex', justifyContent:'space-between', alignItems:'center', background:'#161B22', borderBottom:'1px solid #30363D', position:'sticky', top:0, zIndex:50 }}>
        <div style={{ fontWeight:900, fontSize:'1.4rem', color:'#22C55E', display:'flex', alignItems:'center', gap:8 }}><BarChart2 size={22} color="#22C55E"/>WealthWise</div>
        <div style={{ display:'flex', gap:28, fontWeight:600 }}>
          {nav.map(t=><span key={t} onClick={()=>{setInnerTab(t);window.scrollTo(0,0);}} style={{ cursor:'pointer', color:innerTab===t?'#22C55E':'#8B949E', textTransform:'capitalize', borderBottom:innerTab===t?'2px solid #22C55E':'2px solid transparent', paddingBottom:4 }}>{t}</span>)}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <span style={{ color:'#8B949E', fontSize:'0.85rem' }}>AAPL</span>
          <span style={{ fontSize:'1.1rem', fontWeight:800, color:'#22C55E' }}>${finStockPrice.toFixed(2)}</span>
          <RefreshCw size={16} color="#8B949E"/>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.25 }}>
          {innerTab==='dashboard' && (
            <div style={{ padding:'36px 5%' }}>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20, marginBottom:32 }}>
                {[
                  { label:'Cash Balance', val:`$${finCash.toLocaleString()}`, icon:<DollarSign size={20}/>, color:'#22C55E', sub:'Available' },
                  { label:'Portfolio Value', val:`$${totalValue.toLocaleString('en',{minimumFractionDigits:0,maximumFractionDigits:0})}`, icon:<TrendingUp size={20}/>, color:'#0EA5E9', sub:'Total Assets' },
                  { label:'P&L', val:`${pnl>=0?'+':''}$${pnl.toFixed(0)}`, icon: pnl>=0?<ArrowUp size={20}/>:<ArrowDown size={20}/>, color:pnl>=0?'#22C55E':'#EF4444', sub:'All Time' },
                  { label:'AAPL Holdings', val:`${finHoldings} shares`, icon:<Activity size={20}/>, color:'#F59E0B', sub:`@ $${finStockPrice.toFixed(2)}` },
                ].map((s,i)=>(
                  <div key={i} style={{ background:'#161B22', border:'1px solid #30363D', borderRadius:16, padding:24 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:16 }}>
                      <span style={{ color:'#8B949E', fontSize:'0.85rem', fontWeight:600 }}>{s.label}</span>
                      <span style={{ color:s.color }}>{s.icon}</span>
                    </div>
                    <div style={{ fontSize:'1.8rem', fontWeight:900, color:s.color }}>{s.val}</div>
                    <div style={{ color:'#8B949E', fontSize:'0.8rem', marginTop:6 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:24 }}>
                <div style={{ background:'#161B22', border:'1px solid #30363D', borderRadius:20, padding:28 }}>
                  <h3 style={{ fontWeight:800, marginBottom:24 }}>Portfolio Breakdown</h3>
                  {portfolio.map((s,i)=>{
                    const cur = s.sym==='AAPL'?finStockPrice:s.buy*1.08;
                    const pct = ((cur-s.buy)/s.buy*100).toFixed(1);
                    return (
                      <div key={i} style={{ display:'flex', alignItems:'center', gap:16, marginBottom:20 }}>
                        <div style={{ width:40, height:40, borderRadius:10, background:`${s.color}20`, display:'flex', alignItems:'center', justifyContent:'center', color:s.color, fontWeight:800, fontSize:'0.8rem' }}>{s.sym.slice(0,2)}</div>
                        <div style={{ flex:1 }}>
                          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
                            <span style={{ fontWeight:700 }}>{s.sym}</span>
                            <span style={{ fontWeight:800, color:Number(pct)>=0?'#22C55E':'#EF4444' }}>{Number(pct)>=0?'+':''}{pct}%</span>
                          </div>
                          <div style={{ height:4, background:'#30363D', borderRadius:2 }}>
                            <div style={{ width:`${Math.min(100,Math.abs(Number(pct))*5+20)}%`, height:'100%', background:s.color, borderRadius:2 }}/>
                          </div>
                        </div>
                        <div style={{ textAlign:'right' }}>
                          <div style={{ fontWeight:800 }}>${(cur*s.shares).toFixed(0)}</div>
                          <div style={{ color:'#8B949E', fontSize:'0.8rem' }}>{s.shares} sh</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ background:'#161B22', border:'1px solid #30363D', borderRadius:20, padding:28 }}>
                  <h3 style={{ fontWeight:800, marginBottom:24 }}>Quick Trade</h3>
                  <div style={{ marginBottom:16 }}>
                    <label style={{ color:'#8B949E', fontSize:'0.8rem', fontWeight:600, display:'block', marginBottom:8 }}>STOCK</label>
                    <select value={tradeStock} onChange={e=>setTradeStock(e.target.value)} style={{ width:'100%', padding:12, background:'#0D1117', border:'1px solid #30363D', borderRadius:8, color:'white', fontSize:'0.95rem', cursor:'pointer' }}>
                      {portfolio.map(s=><option key={s.sym} value={s.sym}>{s.sym} — ${(s.sym==='AAPL'?finStockPrice:s.buy*1.08).toFixed(2)}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom:20 }}>
                    <label style={{ color:'#8B949E', fontSize:'0.8rem', fontWeight:600, display:'block', marginBottom:8 }}>QUANTITY</label>
                    <input type="number" min={1} max={100} value={tradeQty} onChange={e=>setTradeQty(Number(e.target.value))} style={{ width:'100%', padding:12, background:'#0D1117', border:'1px solid #30363D', borderRadius:8, color:'white', fontSize:'1rem', boxSizing:'border-box' }}/>
                  </div>
                  <div style={{ padding:12, background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.15)', borderRadius:8, marginBottom:16, fontSize:'0.9rem' }}>
                    <div style={{ display:'flex', justifyContent:'space-between' }}><span style={{ color:'#8B949E' }}>Est. Cost</span><span style={{ fontWeight:700 }}>${(finStockPrice*tradeQty).toFixed(2)}</span></div>
                  </div>
                  <div style={{ display:'flex', gap:10 }}>
                    <button onClick={handleBuy} style={{ flex:1, background:'#22C55E', color:'#0D1117', border:'none', padding:'14px', borderRadius:10, fontWeight:800, cursor:'pointer' }}>BUY</button>
                    <button onClick={handleSell} style={{ flex:1, background:'#EF4444', color:'white', border:'none', padding:'14px', borderRadius:10, fontWeight:800, cursor:'pointer' }}>SELL</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {innerTab==='portfolio' && (
            <div style={{ padding:'36px 5%' }}>
              <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:28 }}>My Portfolio</h1>
              <div style={{ background:'#161B22', border:'1px solid #30363D', borderRadius:20, overflow:'hidden' }}>
                <table style={{ width:'100%', borderCollapse:'collapse' }}>
                  <thead><tr style={{ background:'#0D1117' }}>
                    {['Symbol','Company','Shares','Avg Buy','Current','P&L','Value'].map(h=><th key={h} style={{ padding:'16px 24px', textAlign:'left', color:'#8B949E', fontWeight:700, fontSize:'0.8rem', textTransform:'uppercase' }}>{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {portfolio.map((s,i)=>{
                      const cur = s.sym==='AAPL'?finStockPrice:s.buy*1.08;
                      const pl = (cur-s.buy)*s.shares;
                      const pct = ((cur-s.buy)/s.buy*100).toFixed(1);
                      return (
                        <tr key={i} style={{ borderBottom:'1px solid #21262D' }}>
                          <td style={{ padding:'18px 24px' }}><span style={{ fontWeight:800, color:s.color, background:`${s.color}15`, padding:'4px 10px', borderRadius:6, fontSize:'0.9rem' }}>{s.sym}</span></td>
                          <td style={{ padding:'18px 24px', color:'#8B949E', fontSize:'0.9rem' }}>{s.name}</td>
                          <td style={{ padding:'18px 24px', fontWeight:700 }}>{s.shares}</td>
                          <td style={{ padding:'18px 24px', color:'#8B949E' }}>${s.buy.toFixed(2)}</td>
                          <td style={{ padding:'18px 24px', fontWeight:700 }}>${cur.toFixed(2)}</td>
                          <td style={{ padding:'18px 24px', fontWeight:800, color:pl>=0?'#22C55E':'#EF4444' }}>{pl>=0?'+':''}${pl.toFixed(0)} ({Number(pct)>=0?'+':''}{pct}%)</td>
                          <td style={{ padding:'18px 24px', fontWeight:800 }}>${(cur*s.shares).toFixed(0)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {innerTab==='trade' && (
            <div style={{ padding:'36px 5%', maxWidth:600, margin:'0 auto' }}>
              <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:8 }}>Trade Center</h1>
              <p style={{ color:'#8B949E', marginBottom:32 }}>Buy and sell stocks in real-time</p>
              <div style={{ background:'#161B22', border:'1px solid #30363D', borderRadius:20, padding:36, marginBottom:28 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:28, padding:'16px 20px', background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.15)', borderRadius:12 }}>
                  <div><div style={{ color:'#8B949E', fontSize:'0.8rem', marginBottom:4 }}>AAPL Live Price</div><div style={{ fontSize:'2.5rem', fontWeight:900, color:'#22C55E' }}>${finStockPrice.toFixed(2)}</div></div>
                  <Activity size={40} color="#22C55E" style={{ opacity:0.4 }}/>
                </div>
                <div style={{ marginBottom:20 }}>
                  <label style={{ color:'#8B949E', fontSize:'0.82rem', fontWeight:600, display:'block', marginBottom:8 }}>STOCK</label>
                  <select value={tradeStock} onChange={e=>setTradeStock(e.target.value)} style={{ width:'100%', padding:14, background:'#0D1117', border:'1px solid #30363D', borderRadius:10, color:'white', fontSize:'1rem', cursor:'pointer' }}>
                    {portfolio.map(s=><option key={s.sym} value={s.sym}>{s.sym} — {s.name}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom:24 }}>
                  <label style={{ color:'#8B949E', fontSize:'0.82rem', fontWeight:600, display:'block', marginBottom:8 }}>QUANTITY</label>
                  <input type="number" min={1} value={tradeQty} onChange={e=>setTradeQty(Number(e.target.value))} style={{ width:'100%', padding:14, background:'#0D1117', border:'1px solid #30363D', borderRadius:10, color:'white', fontSize:'1.1rem', boxSizing:'border-box' }}/>
                </div>
                <div style={{ padding:16, background:'#0D1117', borderRadius:10, marginBottom:24 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}><span style={{ color:'#8B949E' }}>Price per share</span><span>${finStockPrice.toFixed(2)}</span></div>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}><span style={{ color:'#8B949E' }}>Quantity</span><span>{tradeQty}</span></div>
                  <div style={{ display:'flex', justifyContent:'space-between', paddingTop:10, borderTop:'1px solid #30363D', fontWeight:800 }}><span>Total</span><span style={{ color:'#22C55E' }}>${(finStockPrice*tradeQty).toFixed(2)}</span></div>
                </div>
                <div style={{ display:'flex', gap:12 }}>
                  <button onClick={handleBuy} style={{ flex:1, background:'linear-gradient(135deg,#16A34A,#22C55E)', color:'white', border:'none', padding:'18px', borderRadius:12, fontWeight:900, fontSize:'1.1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}><TrendingUp size={20}/>BUY</button>
                  <button onClick={handleSell} style={{ flex:1, background:'linear-gradient(135deg,#DC2626,#EF4444)', color:'white', border:'none', padding:'18px', borderRadius:12, fontWeight:900, fontSize:'1.1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}><TrendingDown size={20}/>SELL</button>
                </div>
              </div>
              {finTrades.length>0 && (
                <div style={{ background:'#161B22', border:'1px solid #30363D', borderRadius:16, padding:24 }}>
                  <h3 style={{ fontWeight:800, marginBottom:16 }}>Recent Trades</h3>
                  {finTrades.slice(0,5).map((t,i)=>(
                    <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px solid #21262D' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                        <span style={{ padding:'3px 10px', borderRadius:50, fontSize:'0.75rem', fontWeight:700, background:t.type==='BUY'?'rgba(34,197,94,0.1)':'rgba(239,68,68,0.1)', color:t.type==='BUY'?'#22C55E':'#EF4444' }}>{t.type}</span>
                        <span style={{ fontWeight:700 }}>{t.sym}</span>
                        <span style={{ color:'#8B949E', fontSize:'0.85rem' }}>{t.qty} shares</span>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <div style={{ fontWeight:700 }}>${(t.price*t.qty).toFixed(2)}</div>
                        <div style={{ color:'#8B949E', fontSize:'0.75rem' }}>{t.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {innerTab==='news' && (
            <div style={{ padding:'36px 5%', maxWidth:800, margin:'0 auto' }}>
              <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:28 }}>Market News</h1>
              {news.map((n,i)=>(
                <div key={i} style={{ background:'#161B22', border:'1px solid #30363D', borderRadius:16, padding:24, marginBottom:16, display:'flex', alignItems:'flex-start', gap:20 }}>
                  <div style={{ width:40, height:40, borderRadius:10, background:n.up?'rgba(34,197,94,0.1)':'rgba(239,68,68,0.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:n.up?'#22C55E':'#EF4444' }}>
                    {n.up?<TrendingUp size={20}/>:<TrendingDown size={20}/>}
                  </div>
                  <div style={{ flex:1 }}>
                    <h3 style={{ fontWeight:700, fontSize:'1rem', marginBottom:8 }}>{n.head}</h3>
                    <div style={{ display:'flex', gap:12 }}>
                      <span style={{ color:'#8B949E', fontSize:'0.8rem' }}>{n.time}</span>
                      <span style={{ padding:'2px 8px', borderRadius:50, background:'rgba(255,255,255,0.05)', color:'#8B949E', fontSize:'0.75rem' }}>{n.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <footer style={{ background:'#161B22', padding:28, textAlign:'center', color:'#8B949E', borderTop:'1px solid #30363D' }}>
        <p>© 2026 WealthWise — Finance Analytics Dashboard</p>
      </footer>
    </div>
  );
}
