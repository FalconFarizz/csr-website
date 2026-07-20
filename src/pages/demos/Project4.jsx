import { Utensils } from 'lucide-react';

export default function Project4({ state }) {
  const { restaurantCart, setRestaurantCart, restaurantSearch, setRestaurantSearch, restaurantCategory, setRestaurantCategory } = state;
  const menu = [
    { name: 'Truffle Burger', price: 18, category: 'Burgers', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80' },
    { name: 'Spicy Margherita', price: 15, category: 'Pizzas', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80' },
    { name: 'Wagyu Steak', price: 45, category: 'Mains', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Pepperoni Pizza', price: 17, category: 'Pizzas', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80' },
    { name: 'Craft IPA', price: 7, category: 'Drinks', img: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Double Cheeseburger', price: 16, category: 'Burgers', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80' },
  ];
  const filtered = menu.filter(m => (restaurantCategory === 'All' || m.category === restaurantCategory) && m.name.toLowerCase().includes(restaurantSearch.toLowerCase()));
  return (
    <div style={{ background: '#09090B', color: '#FAFAFA', minHeight: '100vh', fontFamily: 'Inter, sans-serif', display: 'flex' }}>
      <div style={{ width: 72, background: '#18181B', borderRight: '1px solid #27272A', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0' }}>
        <div style={{ width: 48, height: 48, background: '#F97316', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Utensils size={24} color="white" /></div>
      </div>
      <div style={{ flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
          <div><h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Amber POS</h1><p style={{ color: '#A1A1AA' }}>Order Management System</p></div>
          <input type="text" placeholder="Search menu..." value={restaurantSearch} onChange={e => setRestaurantSearch(e.target.value)} style={{ padding: '12px 20px', background: '#18181B', border: '1px solid #27272A', borderRadius: 12, color: 'white', width: 280 }} />
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
          {['All', 'Burgers', 'Pizzas', 'Mains', 'Drinks'].map(cat => (
            <button key={cat} onClick={() => setRestaurantCategory(cat)} style={{ background: restaurantCategory === cat ? '#F97316' : '#18181B', color: restaurantCategory === cat ? 'white' : '#A1A1AA', border: '1px solid #27272A', padding: '10px 24px', borderRadius: 50, fontWeight: 700, cursor: 'pointer' }}>{cat}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
          {filtered.map(item => (
            <div key={item.name} onClick={() => setRestaurantCart([...restaurantCart, item])} style={{ background: '#18181B', border: '1px solid #27272A', borderRadius: 16, overflow: 'hidden', cursor: 'pointer' }}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
              <div style={{ padding: 16 }}>
                <h4 style={{ fontWeight: 800 }}>{item.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                  <span style={{ background: '#27272A', color: '#A1A1AA', padding: '4px 10px', borderRadius: 50, fontSize: '0.85rem' }}>{item.category}</span>
                  <strong style={{ color: '#F97316' }}>${item.price}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: 360, background: '#18181B', borderLeft: '1px solid #27272A', padding: '32px 24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 24 }}>Current Order</h2>
        {restaurantCart.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: 12, background: '#27272A', borderRadius: 10, marginBottom: 8 }}>
            <span>{item.name}</span><strong style={{ color: '#F97316' }}>${item.price}</strong>
          </div>
        ))}
        {restaurantCart.length > 0 && (
          <div style={{ borderTop: '1px solid #27272A', marginTop: 16, paddingTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 900 }}>
              <span>Total</span><span style={{ color: '#F97316' }}>${(restaurantCart.reduce((a,c)=>a+c.price,0) * 1.08).toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}