import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Activity, Wifi, Thermometer, Zap, Cpu, Bell, Gauge } from 'lucide-react';

const configs = {
  4: { title: 'TableNest', color: '#4F46E5', tagline: 'Restaurant Management System', desc: 'Full POS and restaurant management with order tracking, table management and analytics.' },
  10: { title: 'LogiTrack', color: '#E11D48', tagline: 'Fleet Logistics Tracker', desc: 'Real-time fleet tracking with route optimization, driver management and fuel analytics.' },
  24: { title: 'SmartHub', color: '#0891B2', tagline: 'Smart Home Hub', desc: 'Centralized IoT dashboard controlling lighting, security, and climate across properties.' },
  30: { title: 'CityGlow', color: '#3B82F6', tagline: 'Smart City Lighting', desc: 'Networked street lighting system that adapts to traffic and pedestrian flow.' },
  35: { title: 'FactorySense', color: '#EC4899', tagline: 'Industrial Sensor Net', desc: 'Vibration and temperature monitoring system predicting factory machine failures.' },
  40: { title: 'GridWise', color: '#E11D48', tagline: 'Smart Grid Analytics', desc: 'Real-time dashboard for monitoring power distribution and renewable energy inputs.' },
  45: { title: 'ColdGuard', color: '#DB2777', tagline: 'Cold Chain Tracking', desc: 'Temperature tracking for pharmaceutical logistics ensuring vaccine safety.' },
  50: { title: 'FitSync', color: '#4F46E5', tagline: 'Smart Wearable Sync', desc: 'Companion app and cloud sync for next-gen biometrics fitness trackers.' },
  55: { title: 'AgriSmart', color: '#7C3AED', tagline: 'Smart Irrigation System', desc: 'Automated farm irrigation system responding to live soil moisture and weather data.' },
};

const metrics = [
  { label: 'Active Devices', value: '12,847', change: '+12%', icon: <Cpu size={20} /> },
  { label: 'Uptime', value: '99.98%', change: '+0.2%', icon: <Activity size={20} /> },
  { label: 'Alerts Today', value: '3', change: '-8', icon: <Bell size={20} /> },
  { label: 'Power Saved', value: '34.2%', change: '+5%', icon: <Zap size={20} /> },
];

const deviceData = [
  { name: 'Temp Sensor A-12', location: 'Warehouse 3', value: '22.4°C', status: 'Online', battery: 87 },
  { name: 'Vibration Node B-7', location: 'Factory Floor', value: '0.12mm/s', status: 'Online', battery: 94 },
  { name: 'Pressure Gauge C-9', location: 'Pipeline 2', value: '4.2 bar', status: 'Warning', battery: 23 },
  { name: 'Humidity Sensor D-4', location: 'Cold Storage', value: '68% RH', status: 'Online', battery: 76 },
  { name: 'Light Sensor E-2', location: 'Parking Lot', value: '320 lux', status: 'Offline', battery: 5 },
  { name: 'Flow Meter F-11', location: 'Main Supply', value: '8.3 L/min', status: 'Online', battery: 82 },
];

export default function IoTDemo({ projectId, state }) {
  const { innerTab, setInnerTab } = state;
  const c = configs[projectId] || { title: `IoT ${projectId}`, color: '#2563EB', tagline: 'IoT Platform', desc: 'Connected device management and monitoring platform.' };
  const navItems = ['dashboard', 'devices', 'analytics', 'settings'];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0A0A0F', color: 'white', minHeight: '100vh' }}>
      <nav style={{ padding: '16px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#12121A', borderBottom: '1px solid #1E1E2A', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ fontWeight: 900, fontSize: '1.4rem', color: c.color, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Wifi size={22} color={c.color} /> {c.title}
        </div>
        <div style={{ display: 'flex', gap: 24, fontWeight: 600 }}>
          {navItems.map(tab => (
            <span key={tab} onClick={() => { setInnerTab(tab); window.scrollTo(0,0); }}
              style={{ cursor: 'pointer', color: innerTab === tab ? c.color : '#64748B', textTransform: 'capitalize' }}>
              {tab}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
          <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>All Systems Normal</span>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div key={innerTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
          {innerTab === 'dashboard' && (
            <div style={{ padding: '40px 5%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                <div>
                  <h1 style={{ fontSize: '2.2rem', fontWeight: 900 }}>{c.title} Dashboard</h1>
                  <p style={{ color: '#64748B', marginTop: 8 }}>{c.desc}</p>
                </div>
                <button style={{ background: c.color, border: 'none', color: 'white', padding: '10px 24px', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}>Add Device</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 40 }}>
                {metrics.map((m, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                    style={{ background: '#12121A', border: '1px solid #1E1E2A', borderRadius: 16, padding: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                      <span style={{ color: '#64748B', fontSize: '0.9rem', fontWeight: 600 }}>{m.label}</span>
                      <span style={{ color: c.color }}>{m.icon}</span>
                    </div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 900 }}>{m.value}</div>
                    <span style={{ color: m.change.startsWith('+') ? '#22C55E' : '#EF4444', fontSize: '0.9rem', fontWeight: 700 }}>{m.change} vs yesterday</span>
                  </motion.div>
                ))}
              </div>
              <div style={{ background: '#12121A', border: '1px solid #1E1E2A', borderRadius: 20, padding: 30 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 24 }}>Connected Devices</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                  {deviceData.slice(0, 6).map((d, i) => (
                    <div key={i} style={{ background: '#0A0A0F', borderRadius: 12, padding: 20, border: '1px solid #1E1E2A' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                        <strong>{d.name}</strong>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: d.status === 'Online' ? '#22C55E' : d.status === 'Warning' ? '#F59E0B' : '#EF4444', display: 'inline-block' }} />
                      </div>
                      <div style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: 8 }}>{d.location}</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: c.color }}>{d.value}</div>
                      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ flex: 1, height: 4, background: '#1E1E2A', borderRadius: 4 }}>
                          <div style={{ width: `${d.battery}%`, height: 4, background: d.battery > 50 ? '#22C55E' : '#F59E0B', borderRadius: 4 }} />
                        </div>
                        <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{d.battery}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {innerTab === 'devices' && (
            <div style={{ padding: '40px 5%' }}>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: 30 }}>Device Management</h1>
              <div style={{ background: '#12121A', border: '1px solid #1E1E2A', borderRadius: 20, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #1E1E2A' }}>
                      <th style={{ padding: '16px 24px', textAlign: 'left', color: '#64748B', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Device</th>
                      <th style={{ padding: '16px 24px', textAlign: 'left', color: '#64748B', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Location</th>
                      <th style={{ padding: '16px 24px', textAlign: 'left', color: '#64748B', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Reading</th>
                      <th style={{ padding: '16px 24px', textAlign: 'left', color: '#64748B', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Status</th>
                      <th style={{ padding: '16px 24px', textAlign: 'left', color: '#64748B', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Battery</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deviceData.map((d, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #1E1E2A' }}>
                        <td style={{ padding: '16px 24px', fontWeight: 700 }}>{d.name}</td>
                        <td style={{ padding: '16px 24px', color: '#94A3B8' }}>{d.location}</td>
                        <td style={{ padding: '16px 24px', fontWeight: 800, color: c.color }}>{d.value}</td>
                        <td style={{ padding: '16px 24px' }}>
                          <span style={{ padding: '4px 12px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700, background: d.status === 'Online' ? '#052E16' : d.status === 'Warning' ? '#451A03' : '#450A0A', color: d.status === 'Online' ? '#22C55E' : d.status === 'Warning' ? '#F59E0B' : '#EF4444' }}>{d.status}</span>
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 60, height: 4, background: '#1E1E2A', borderRadius: 4 }}>
                              <div style={{ width: `${d.battery}%`, height: 4, background: d.battery > 50 ? '#22C55E' : '#F59E0B', borderRadius: 4 }} />
                            </div>
                            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{d.battery}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {innerTab === 'analytics' && (
            <div style={{ padding: '40px 5%', textAlign: 'center' }}>
              <div style={{ maxWidth: 500, margin: '60px auto', padding: 60, background: '#12121A', borderRadius: 24, border: '1px solid #1E1E2A' }}>
                <Gauge size={64} color={c.color} style={{ marginBottom: 20 }} />
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 12 }}>Analytics Dashboard</h2>
                <p style={{ color: '#64748B', marginBottom: 30 }}>Real-time performance metrics and historical data analysis.</p>
                <button style={{ background: c.color, border: 'none', color: 'white', padding: '12px 28px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Generate Report</button>
              </div>
            </div>
          )}

          {innerTab === 'settings' && (
            <div style={{ padding: '40px 5%', textAlign: 'center' }}>
              <div style={{ maxWidth: 500, margin: '60px auto', padding: 60, background: '#12121A', borderRadius: 24, border: '1px solid #1E1E2A' }}>
                <Monitor size={64} color={c.color} style={{ marginBottom: 20 }} />
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 12 }}>System Settings</h2>
                <p style={{ color: '#64748B', marginBottom: 30 }}>Configure alerts, notifications, and device thresholds.</p>
                <button style={{ background: c.color, border: 'none', color: 'white', padding: '12px 28px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Open Settings</button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <footer style={{ background: '#12121A', padding: 30, textAlign: 'center', color: '#64748B', borderTop: '1px solid #1E1E2A' }}>
        <p>© 2026 {c.title} — Industrial IoT Platform</p>
      </footer>
    </div>
  );
}