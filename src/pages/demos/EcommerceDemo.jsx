import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Heart, Plus, Check, CreditCard, Truck, RefreshCw, Shield } from 'lucide-react';

const configs = {
  5: { title: 'VELURA', color: '#DB2777', tagline: 'Premium Online Shopping', desc: 'AI-powered e-commerce store with personalized recommendations and one-click checkout.' },
  19: { title: 'GiveHope', color: '#EC4899', tagline: 'Donation Platform', desc: 'Donation-driven charity platform with campaign pages, donor portal and impact reporting.' },
  20: { title: 'RentWheel', color: '#4F46E5', tagline: 'Car Rental Marketplace', desc: 'Online car rental with fleet management, GPS tracking, insurance integration and reviews.' },
  21: { title: 'EventPro', color: '#F59E0B', tagline: 'Event Ticketing System', desc: 'End-to-end event ticketing with QR codes, seat selection, refunds and organizer analytics.' },
  26: { title: 'GreenBasket', color: '#22C55E', tagline: 'Organic Food Delivery', desc: 'Direct-to-consumer organic grocery platform with subscription boxes and local routing.' },
  31: { title: 'TalentHub', color: '#8B5CF6', tagline: 'Freelance Marketplace', desc: 'Platform connecting businesses with vetted top-tier freelance tech talent.' },
  36: { title: 'SubBox', color: '#A21CAF', tagline: 'Subscription Box Hub', desc: 'Customizable subscription platform for monthly curated lifestyle products.' },
  41: { title: 'WholeSell', color: '#EC4899', tagline: 'B2B Wholesale Portal', desc: 'Bulk ordering portal with dynamic pricing tiers, credit lines, and SAP integration.' },
  46: { title: 'ArtisanHub', color: '#E11D48', tagline: 'Artisan Crafts Store', desc: 'Global marketplace connecting local artisans with international buyers.' },
  51: { title: 'ArtMint', color: '#DB2777', tagline: 'Digital Art Marketplace', desc: 'High-end platform for trading authenticated digital art pieces and collectibles.' },
  56: { title: 'FurniCasa', color: '#4F46E5', tagline: 'B2C Furniture Store', desc: 'Modern headless commerce experience for a premium Scandinavian furniture brand.' },
};

const products = [
  { name: 'Wireless Headphones', price: 129, rating: 4.8, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Smart Watch Pro', price: 249, rating: 4.9, img: 'https://images.unsplash.com/photo-1546868871-af0de0ae72ae?auto=format&fit=crop&w=600&q=80' },
  { name: 'Premium Backpack', price: 89, rating: 4.7, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80' },
  { name: 'Minimalist Sneakers', price: 159, rating: 4.6, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80' },
  { name: 'Leather Wallet', price: 59, rating: 4.5, img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80' },
  { name: 'Sunglasses', price: 199, rating: 4.9, img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80' },
];

export default function EcommerceDemo({ projectId, state }) {
  const { innerTab, setInnerTab } = state;
  const c = configs[projectId] || { title: `Shop ${projectId}`, color: '#2563EB', tagline: 'Online Store', desc: 'Premium online shopping experience with seamless checkout.' };
  const navItems = ['home', 'products', 'cart', 'about'];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#FAFAFA', minHeight: '100vh', color: '#0F172A' }}>
      <nav style={{ padding: '16px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ fontWeight: 900, fontSize: '1.4rem', color: c.color, display: 'flex', alignItems: 'center', gap: 8 }}>
          <ShoppingCart size={24} color={c.color} /> {c.title}
        </div>
        <div style={{ display: 'flex', gap: 28, fontWeight: 600 }}>
          {navItems.map(tab => (
            <span key={tab} onClick={() => { setInnerTab(tab); window.scrollTo(0,0); }}
              style={{ cursor: 'pointer', color: innerTab === tab ? c.color : '#64748B', textTransform: 'capitalize', borderBottom: innerTab === tab ? `2px solid ${c.color}` : '2px solid transparent', paddingBottom: 4 }}>
              {tab}
            </span>
          ))}
        </div>
        <button style={{ background: c.color, color: 'white', border: 'none', padding: '10px 24px', borderRadius: 50, fontWeight: 700, cursor: 'pointer' }}>
          <ShoppingCart size={18} style={{ marginRight: 6 }} /> Cart (0)
        </button>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
          {innerTab === 'home' && (
            <div style={{ padding: '80px 5%', background: `linear-gradient(135deg, white 0%, ${c.color}08 100%)` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 60, maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ color: c.color, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 2 }}>{c.tagline}</span>
                  <h1 style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, margin: '20px 0', lineHeight: 1.1 }}>Welcome to <span style={{ color: c.color }}>{c.title}</span></h1>
                  <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: 500, marginBottom: 40 }}>{c.desc}</p>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <button onClick={() => setInnerTab('products')} style={{ background: c.color, color: 'white', padding: '16px 36px', borderRadius: 12, border: 'none', fontWeight: 800, fontSize: '1.05rem', cursor: 'pointer' }}>Shop Now</button>
                    <button style={{ background: 'white', color: '#0F172A', border: '1px solid #E2E8F0', padding: '16px 36px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Learn More</button>
                  </div>
                </div>
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {products.slice(0, 4).map((p, i) => (
                    <div key={i} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9' }}>
                      <img src={p.img} alt={p.name} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                      <div style={{ padding: 12 }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{p.name}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                          <strong style={{ color: c.color }}>${p.price}</strong>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8rem', color: '#F59E0B' }}><Star size={14} fill="#F59E0B" />{p.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab === 'products' && (
            <div style={{ padding: '60px 5%' }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: 8 }}>Featured Products</h1>
              <p style={{ color: '#64748B', marginBottom: 40, fontSize: '1.1rem' }}>Discover our curated collection of premium items.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 30 }}>
                {products.map((p, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                    style={{ background: 'white', borderRadius: 20, overflow: 'hidden', border: '1px solid #F1F5F9', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 12, right: 12, background: 'white', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <Heart size={18} color="#94A3B8" />
                    </div>
                    <img src={p.img} alt={p.name} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                    <div style={{ padding: 20 }}>
                      <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: 8 }}>{p.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#F59E0B' }}>
                          {Array(5).fill(0).map((_, i) => <Star key={i} size={14} fill={i < Math.floor(p.rating) ? '#F59E0B' : 'none'} />)}
                        </div>
                        <span style={{ color: '#64748B', fontSize: '0.9rem' }}>({p.rating})</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ fontSize: '1.5rem', color: c.color }}>${p.price}</strong>
                        <button style={{ background: c.color, color: 'white', border: 'none', padding: '10px 18px', borderRadius: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Plus size={16} /> Add
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {innerTab === 'cart' && (
            <div style={{ padding: '60px 5%', textAlign: 'center' }}>
              <div style={{ maxWidth: 600, margin: '0 auto', padding: 60, background: 'white', borderRadius: 24, border: '1px solid #E2E8F0' }}>
                <ShoppingCart size={64} color="#CBD5E1" style={{ marginBottom: 20 }} />
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>Your cart is empty</h2>
                <p style={{ color: '#64748B', marginBottom: 30, fontSize: '1.1rem' }}>Looks like you haven't added anything yet.</p>
                <button onClick={() => setInnerTab('products')} style={{ background: c.color, color: 'white', border: 'none', padding: '14px 32px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Start Shopping</button>
              </div>
            </div>
          )}

          {innerTab === 'about' && (
            <div style={{ padding: '60px 5%', background: 'white' }}>
              <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: 20 }}>About {c.title}</h1>
                <p style={{ color: '#64748B', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: 60 }}>{c.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
                  {[
                    { icon: <Truck size={32} />, title: 'Free Shipping', desc: 'Free delivery on all orders over $50' },
                    { icon: <RefreshCw size={32} />, title: 'Easy Returns', desc: '30-day hassle-free return policy' },
                    { icon: <Shield size={32} />, title: 'Secure Payment', desc: '256-bit SSL encrypted checkout' },
                  ].map((f, i) => (
                    <div key={i} style={{ padding: 30, background: '#F8FAFC', borderRadius: 20, textAlign: 'center' }}>
                      <div style={{ color: c.color, marginBottom: 16 }}>{f.icon}</div>
                      <h3 style={{ fontWeight: 800, marginBottom: 8 }}>{f.title}</h3>
                      <p style={{ color: '#64748B', fontSize: '0.95rem' }}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <footer style={{ background: '#0F172A', padding: 40, textAlign: 'center', color: '#64748B' }}>
        <p>© 2026 {c.title}. All rights reserved.</p>
      </footer>
    </div>
  );
}