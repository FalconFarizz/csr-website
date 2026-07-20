import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Users, Calendar, DollarSign, Heart, Pill, ClipboardList, Plus, Search, Trash2, Clock, AlertCircle, BarChart3, FileText, Settings, LogOut, Bell, Menu, Stethoscope, Ambulance, Syringe, Thermometer, UserPlus, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const initialPatients = [
  { id: 'P-1001', name: 'Alice Johnson', age: 34, gender: 'Female', dept: 'Cardiology', doctor: 'Dr. Smith', admitted: '2026-07-12', room: '302', status: 'Stable', bill: 12400, insurance: 'BlueCross' },
  { id: 'P-1002', name: 'Robert Williams', age: 52, gender: 'Male', dept: 'Neurology', doctor: 'Dr. Patel', admitted: '2026-07-10', room: '405', status: 'Critical', bill: 34200, insurance: 'Aetna' },
  { id: 'P-1003', name: 'Maria Garcia', age: 28, gender: 'Female', dept: 'Pediatrics', doctor: 'Dr. Lee', admitted: '2026-07-13', room: '201', status: 'Recovering', bill: 8600, insurance: 'Cigna' },
  { id: 'P-1004', name: 'James Brown', age: 67, gender: 'Male', dept: 'Orthopedics', doctor: 'Dr. Kumar', admitted: '2026-07-08', room: '508', status: 'Stable', bill: 21500, insurance: 'Medicare' },
  { id: 'P-1005', name: 'Emily Davis', age: 45, gender: 'Female', dept: 'General Surgery', doctor: 'Dr. Chen', admitted: '2026-07-14', room: '310', status: 'Critical', bill: 28000, insurance: 'UnitedHealth' },
  { id: 'P-1006', name: 'Michael Wilson', age: 71, gender: 'Male', dept: 'Cardiology', doctor: 'Dr. Smith', admitted: '2026-07-11', room: '306', status: 'Stable', bill: 18500, insurance: 'BlueCross' },
  { id: 'P-1007', name: 'Sarah Thompson', age: 39, gender: 'Female', dept: 'Neurology', doctor: 'Dr. Patel', admitted: '2026-07-15', room: '410', status: 'Recovering', bill: 9500, insurance: 'Aetna' },
  { id: 'P-1008', name: 'David Martinez', age: 55, gender: 'Male', dept: 'Pulmonology', doctor: 'Dr. Kim', admitted: '2026-07-09', room: '205', status: 'Stable', bill: 13200, insurance: 'Cigna' },
];

const initialAppointments = [
  { id: 'A-001', patient: 'Alice Johnson', doctor: 'Dr. Smith', dept: 'Cardiology', date: '2026-07-16', time: '09:00 AM', type: 'Checkup', status: 'Scheduled' },
  { id: 'A-002', patient: 'Robert Williams', doctor: 'Dr. Patel', dept: 'Neurology', date: '2026-07-16', time: '10:30 AM', type: 'MRI Review', status: 'Scheduled' },
  { id: 'A-003', patient: 'James Brown', doctor: 'Dr. Kumar', dept: 'Orthopedics', date: '2026-07-16', time: '11:00 AM', type: 'Follow-up', status: 'In Progress' },
  { id: 'A-004', patient: 'Emily Davis', doctor: 'Dr. Chen', dept: 'General Surgery', date: '2026-07-17', time: '08:30 AM', type: 'Pre-Surgery', status: 'Scheduled' },
  { id: 'A-005', patient: 'Michael Wilson', doctor: 'Dr. Smith', dept: 'Cardiology', date: '2026-07-17', time: '02:00 PM', type: 'ECG', status: 'Scheduled' },
  { id: 'A-006', patient: 'Sarah Thompson', doctor: 'Dr. Patel', dept: 'Neurology', date: '2026-07-18', time: '09:30 AM', type: 'CT Scan', status: 'Completed' },
];

const departments = [
  { name: 'Cardiology', patients: 42, doctors: 8, available: 12, icon: <Heart size={18} />, color: '#EF4444' },
  { name: 'Neurology', patients: 28, doctors: 6, available: 8, icon: <Activity size={18} />, color: '#8B5CF6' },
  { name: 'Pediatrics', patients: 35, doctors: 7, available: 15, icon: <Stethoscope size={18} />, color: '#22C55E' },
  { name: 'Orthopedics', patients: 22, doctors: 5, available: 10, icon: <Activity size={18} />, color: '#F59E0B' },
  { name: 'Pulmonology', patients: 18, doctors: 4, available: 6, icon: <Thermometer size={18} />, color: '#06B6D4' },
  { name: 'Emergency', patients: 8, doctors: 12, available: 24, icon: <Ambulance size={18} />, color: '#EF4444' },
];

const medications = [
  { name: 'Amoxicillin 500mg', stock: 1200, unit: 'capsules', type: 'Antibiotic', reorder: 200 },
  { name: 'Atorvastatin 20mg', stock: 800, unit: 'tablets', type: 'Statin', reorder: 150 },
  { name: 'Metformin 850mg', stock: 950, unit: 'tablets', type: 'Diabetes', reorder: 200 },
  { name: 'Omeprazole 20mg', stock: 600, unit: 'capsules', type: 'PPI', reorder: 100 },
  { name: 'Salbutamol Inhaler', stock: 150, unit: 'inhalers', type: 'Respiratory', reorder: 50 },
  { name: 'Paracetamol 500mg', stock: 2000, unit: 'tablets', type: 'Analgesic', reorder: 500 },
];

const staff = [
  { name: 'Dr. Sarah Smith', role: 'Cardiologist', dept: 'Cardiology', patients: 12, experience: '15 yrs', status: 'Available', avatar: 'SS', color: '#EF4444' },
  { name: 'Dr. Raj Patel', role: 'Neurologist', dept: 'Neurology', patients: 8, experience: '12 yrs', status: 'Busy', avatar: 'RP', color: '#8B5CF6' },
  { name: 'Dr. Jennifer Lee', role: 'Pediatrician', dept: 'Pediatrics', patients: 10, experience: '10 yrs', status: 'Available', avatar: 'JL', color: '#22C55E' },
  { name: 'Dr. Arun Kumar', role: 'Orthopedic Surgeon', dept: 'Orthopedics', patients: 6, experience: '18 yrs', status: 'In Surgery', avatar: 'AK', color: '#F59E0B' },
  { name: 'Dr. Lisa Chen', role: 'General Surgeon', dept: 'Surgery', patients: 7, experience: '14 yrs', status: 'Available', avatar: 'LC', color: '#06B6D4' },
  { name: 'Dr. Min-ji Kim', role: 'Pulmonologist', dept: 'Pulmonology', patients: 5, experience: '11 yrs', status: 'Available', avatar: 'MK', color: '#3B82F6' },
  { name: 'Nurse Rachel Green', role: 'Head Nurse', dept: 'Emergency', patients: 15, experience: '9 yrs', status: 'Available', avatar: 'RG', color: '#14B8A6' },
  { name: 'Nurse Monica White', role: 'ICU Nurse', dept: 'ICU', patients: 4, experience: '7 yrs', status: 'Busy', avatar: 'MW', color: '#F97316' },
];

const revenueData = [
  { month: 'Jan', revenue: 420000, expenses: 380000 },
  { month: 'Feb', revenue: 445000, expenses: 395000 },
  { month: 'Mar', revenue: 468000, expenses: 410000 },
  { month: 'Apr', revenue: 492000, expenses: 425000 },
  { month: 'May', revenue: 515000, expenses: 440000 },
  { month: 'Jun', revenue: 538000, expenses: 455000 },
];

export default function Project7({ state }) {
  const { innerTab, setInnerTab } = state;
  const [patients, setPatients] = useState(initialPatients);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [searchPatient, setSearchPatient] = useState('');
  const [searchAppointment, setSearchAppointment] = useState('');
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', age: '', gender: 'Male', dept: 'Cardiology', doctor: 'Dr. Smith', room: '' });
  const [showAddAppointment, setShowAddAppointment] = useState(false);
  const [newAppointment, setNewAppointment] = useState({ patient: '', doctor: 'Dr. Smith', dept: 'Cardiology', date: '', time: '', type: 'Checkup' });
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  const notify = (msg) => { setNotificationMsg(msg); setShowNotification(true); setTimeout(() => setShowNotification(false), 3000); };

  const c = { title: 'MedCare', color: '#EC4899', accent: '#BE185D' };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={20} /> },
    { id: 'patients', label: 'Patients', icon: <Users size={20} /> },
    { id: 'appointments', label: 'Appointments', icon: <Calendar size={20} /> },
    { id: 'pharmacy', label: 'Pharmacy', icon: <Pill size={20} /> },
    { id: 'staff', label: 'Staff', icon: <Stethoscope size={20} /> },
    { id: 'billing', label: 'Billing', icon: <DollarSign size={20} /> },
    { id: 'reports', label: 'Reports', icon: <FileText size={20} /> },
  ];

  const totalBeds = 450;
  const occupiedBeds = patients.length;
  const availableBeds = totalBeds - occupiedBeds;
  const totalRevenue = revenueData.reduce((a, d) => a + d.revenue, 0);
  const totalExpenses = revenueData.reduce((a, d) => a + d.expenses, 0);
  const criticalCount = patients.filter(p => p.status === 'Critical').length;
  const inProgressAppts = appointments.filter(a => a.status === 'In Progress').length;

  const handleAddPatient = (e) => {
    e.preventDefault();
    if (!newPatient.name || !newPatient.age) return;
    const patient = {
      id: `P-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newPatient.name,
      age: parseInt(newPatient.age),
      gender: newPatient.gender,
      dept: newPatient.dept,
      doctor: newPatient.doctor,
      admitted: new Date().toISOString().split('T')[0],
      room: newPatient.room || Math.floor(200 + Math.random() * 400).toString(),
      status: 'Stable',
      bill: Math.floor(5000 + Math.random() * 20000),
      insurance: 'Pending',
    };
    setPatients([patient, ...patients]);
    setNewPatient({ name: '', age: '', gender: 'Male', dept: 'Cardiology', doctor: 'Dr. Smith', room: '' });
    setShowAddPatient(false);
    notify(`Patient ${patient.name} admitted successfully!`);
  };

  const handleAddAppointment = (e) => {
    e.preventDefault();
    if (!newAppointment.patient || !newAppointment.date || !newAppointment.time) return;
    const appt = {
      id: `A-${Math.floor(100 + Math.random() * 900)}`,
      patient: newAppointment.patient,
      doctor: newAppointment.doctor,
      dept: newAppointment.dept,
      date: newAppointment.date,
      time: newAppointment.time,
      type: newAppointment.type,
      status: 'Scheduled',
    };
    setAppointments([appt, ...appointments]);
    setNewAppointment({ patient: '', doctor: 'Dr. Smith', dept: 'Cardiology', date: '', time: '', type: 'Checkup' });
    setShowAddAppointment(false);
    notify(`Appointment scheduled for ${appt.patient}!`);
  };

  const dischargePatient = (id) => {
    setPatients(patients.filter(p => p.id !== id));
    notify('Patient discharged successfully!');
  };

  const completeAppointment = (id) => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, status: 'Completed' } : a));
    notify('Appointment marked as completed!');
  };

  const cancelAppointment = (id) => {
    setAppointments(appointments.filter(a => a.id !== id));
    notify('Appointment cancelled!');
  };

  const getStatusColor = (status) => {
    const map = { 'Stable': '#22C55E', 'Critical': '#EF4444', 'Recovering': '#F59E0B', 'Scheduled': '#3B82F6', 'In Progress': '#F59E0B', 'Completed': '#22C55E', 'Available': '#22C55E', 'Busy': '#EF4444', 'In Surgery': '#F59E0B' };
    return map[status] || '#64748B';
  };

  const renderNotification = () => (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
      style={{ position: 'fixed', top: 20, right: 20, zIndex: 999999, background: '#0F172A', color: 'white', padding: '16px 24px', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 20px 60px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <CheckCircle size={20} color={c.color} /> {notificationMsg}
    </motion.div>
  );

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F0F4F8', minHeight: '100vh', color: '#0F172A', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: 260, background: '#0F172A', color: 'white', minHeight: '100vh', padding: '24px 16px', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, padding: '0 8px' }}>
          <div style={{ width: 40, height: 40, background: `linear-gradient(135deg, ${c.color}, ${c.accent})`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem' }}>M</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>{c.title}</div>
            <div style={{ color: '#64748B', fontSize: '0.8rem' }}>Hospital System</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {sidebarItems.map(item => (
            <div key={item.id} onClick={() => { setSelectedTab(item.id); setInnerTab('home'); }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 12, cursor: 'pointer', background: selectedTab === item.id ? `${c.color}20` : 'transparent', color: selectedTab === item.id ? c.color : '#94A3B8', fontWeight: selectedTab === item.id ? 700 : 500, transition: 'all 0.2s' }}>
              {item.icon} {item.label}
              {item.id === 'appointments' && inProgressAppts > 0 && <span style={{ marginLeft: 'auto', background: '#EF4444', color: 'white', fontSize: '0.7rem', padding: '2px 8px', borderRadius: 50, fontWeight: 700 }}>{inProgressAppts}</span>}
              {item.id === 'patients' && criticalCount > 0 && <span style={{ marginLeft: 'auto', background: '#EF4444', color: 'white', fontSize: '0.7rem', padding: '2px 8px', borderRadius: 50, fontWeight: 700 }}>{criticalCount}</span>}
            </div>
          ))}
        </div>
        <div style={{ padding: '16px 8px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 12, cursor: 'pointer', color: '#64748B' }}>
            <Settings size={20} /> Settings
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 12, cursor: 'pointer', color: '#64748B' }}>
            <LogOut size={20} /> Logout
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px 5%', maxWidth: 1400, margin: '0 auto', width: '100%', overflowY: 'auto' }}>
        <AnimatePresence>
          {showNotification && renderNotification()}
        </AnimatePresence>

        {/* Dashboard */}
        {selectedTab === 'dashboard' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
              <div>
                <h1 style={{ fontSize: '2rem', fontWeight: 900 }}>Hospital Dashboard</h1>
                <p style={{ color: '#64748B', marginTop: 4 }}>Welcome back, Admin. Here's your hospital overview.</p>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ padding: '10px 18px', background: 'white', borderRadius: 12, border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                  <Bell size={18} color="#64748B" />
                </div>
                <div style={{ padding: '10px 24px', background: c.color, color: 'white', borderRadius: 12, border: 'none', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Plus size={18} /> Quick Admit
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 30 }}>
              {[
                { label: 'Total Patients', value: patients.length, icon: <Users size={24} />, change: '+8%', color: '#3B82F6', bg: '#EFF6FF' },
                { label: 'Available Beds', value: availableBeds, icon: <Activity size={24} />, change: `out of ${totalBeds}`, color: '#22C55E', bg: '#F0FDF4' },
                { label: 'Critical Cases', value: criticalCount, icon: <AlertCircle size={24} />, change: '-2 from yesterday', color: '#EF4444', bg: '#FEF2F2' },
                { label: 'Monthly Revenue', value: `$${(totalRevenue / 1000000).toFixed(1)}M`, icon: <DollarSign size={24} />, change: '+12%', color: '#8B5CF6', bg: '#F5F3FF' },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <div style={{ width: 48, height: 48, background: s.bg, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}>{s.icon}</div>
                    <span style={{ fontSize: '0.85rem', color: s.change.startsWith('-') ? '#EF4444' : '#22C55E', fontWeight: 700 }}>{s.change}</span>
                  </div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900 }}>{s.value}</div>
                  <div style={{ color: '#64748B', fontSize: '0.9rem', marginTop: 4 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Charts & Departments */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24, marginBottom: 30 }}>
              {/* Revenue Chart */}
              <div style={{ background: 'white', borderRadius: 20, padding: 30, border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: 24 }}>Revenue Overview</h3>
                <div style={{ display: 'flex', gap: 30, marginBottom: 30 }}>
                  <div><span style={{ color: '#64748B', fontSize: '0.9rem' }}>Revenue</span><div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#22C55E' }}>${(totalRevenue / 1000).toFixed(0)}K</div></div>
                  <div><span style={{ color: '#64748B', fontSize: '0.9rem' }}>Expenses</span><div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#EF4444' }}>${(totalExpenses / 1000).toFixed(0)}K</div></div>
                  <div><span style={{ color: '#64748B', fontSize: '0.9rem' }}>Profit</span><div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#3B82F6' }}>${((totalRevenue - totalExpenses) / 1000).toFixed(0)}K</div></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 160 }}>
                  {revenueData.map((d, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <div style={{ width: '70%', height: (d.revenue / 600000) * 160, background: '#22C55E', borderRadius: '4px 4px 0 0', opacity: 0.8 }} />
                        <div style={{ width: '70%', height: (d.expenses / 600000) * 160, background: '#EF4444', borderRadius: '4px 4px 0 0', opacity: 0.6 }} />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>{d.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Status */}
              <div style={{ background: 'white', borderRadius: 20, padding: 30, border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: 24 }}>Department Overview</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {departments.map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', background: '#F8FAFC', borderRadius: 12 }}>
                      <div style={{ color: d.color }}>{d.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{d.name}</div>
                        <div style={{ display: 'flex', gap: 16, fontSize: '0.8rem', color: '#64748B', marginTop: 2 }}>
                          <span>{d.patients} patients</span>
                          <span>{d.available} beds free</span>
                        </div>
                      </div>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: d.available > 10 ? '#22C55E' : d.available > 5 ? '#F59E0B' : '#EF4444' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Patients */}
            <div style={{ background: 'white', borderRadius: 20, padding: 30, border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem' }}>Recent Admissions</h3>
                <span onClick={() => setSelectedTab('patients')} style={{ color: c.color, fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>View All →</span>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Patient</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Department</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Doctor</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Status</th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.slice(0, 5).map((p, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F8FAFC' }}>
                        <td style={{ padding: '14px 16px', fontWeight: 700 }}>{p.name}</td>
                        <td style={{ padding: '14px 16px', color: '#64748B' }}>{p.dept}</td>
                        <td style={{ padding: '14px 16px', color: '#64748B' }}>{p.doctor}</td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ padding: '4px 12px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700, background: `${getStatusColor(p.status)}15`, color: getStatusColor(p.status) }}>{p.status}</span>
                        </td>
                        <td style={{ padding: '14px 16px', fontWeight: 700 }}>Bed {p.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Patients */}
        {selectedTab === 'patients' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
              <div>
                <h1 style={{ fontSize: '2rem', fontWeight: 900 }}>Patient Management</h1>
                <p style={{ color: '#64748B', marginTop: 4 }}>{patients.length} total patients admitted</p>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ position: 'relative' }}>
                  <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                  <input type="text" placeholder="Search patients..." value={searchPatient} onChange={e => setSearchPatient(e.target.value)}
                    style={{ padding: '12px 16px 12px 44px', background: 'white', border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem', width: 260 }} />
                </div>
                <button onClick={() => setShowAddPatient(true)} style={{ background: c.color, color: 'white', border: 'none', padding: '12px 24px', borderRadius: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <UserPlus size={18} /> Admit Patient
                </button>
              </div>
            </div>

            {showAddPatient && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                style={{ background: 'white', borderRadius: 20, padding: 30, border: '1px solid #E2E8F0', marginBottom: 30, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: 24 }}>New Patient Admission</h3>
                <form onSubmit={handleAddPatient} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
                  <input type="text" placeholder="Full Name" value={newPatient.name} onChange={e => setNewPatient({...newPatient, name: e.target.value})} required
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem' }} />
                  <input type="number" placeholder="Age" value={newPatient.age} onChange={e => setNewPatient({...newPatient, age: e.target.value})} required
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem' }} />
                  <select value={newPatient.gender} onChange={e => setNewPatient({...newPatient, gender: e.target.value})}
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem', background: 'white' }}>
                    <option>Male</option><option>Female</option>
                  </select>
                  <select value={newPatient.dept} onChange={e => setNewPatient({...newPatient, dept: e.target.value})}
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem', background: 'white' }}>
                    {departments.map((d, i) => <option key={i}>{d.name}</option>)}
                  </select>
                  <select value={newPatient.doctor} onChange={e => setNewPatient({...newPatient, doctor: e.target.value})}
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem', background: 'white' }}>
                    {staff.filter(s => s.role.includes('Dr.')).map((s, i) => <option key={i}>{s.name}</option>)}
                  </select>
                  <input type="text" placeholder="Room/Bed" value={newPatient.room} onChange={e => setNewPatient({...newPatient, room: e.target.value})}
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem' }} />
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button type="submit" style={{ background: c.color, color: 'white', border: 'none', padding: '14px 28px', borderRadius: 12, fontWeight: 800, cursor: 'pointer' }}>Admit</button>
                    <button type="button" onClick={() => setShowAddPatient(false)} style={{ background: '#F1F5F9', color: '#64748B', border: 'none', padding: '14px 28px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                  </div>
                </form>
              </motion.div>
            )}

            <div style={{ background: 'white', borderRadius: 20, border: '1px solid #E2E8F0', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC' }}>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>ID</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Patient Name</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Age/Gender</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Department</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Doctor</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Status</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Bill</th>
                    <th style={{ padding: '16px 20px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {patients.filter(p => p.name.toLowerCase().includes(searchPatient.toLowerCase())).map((p, i) => (
                    <motion.tr key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                      style={{ borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }}
                      onClick={() => setSelectedPatient(selectedPatient === p.id ? null : p.id)}>
                      <td style={{ padding: '16px 20px', fontWeight: 700, color: c.color }}>{p.id}</td>
                      <td style={{ padding: '16px 20px', fontWeight: 700 }}>{p.name}</td>
                      <td style={{ padding: '16px 20px', color: '#64748B' }}>{p.age} / {p.gender}</td>
                      <td style={{ padding: '16px 20px', color: '#64748B' }}>{p.dept}</td>
                      <td style={{ padding: '16px 20px', color: '#64748B' }}>{p.doctor}</td>
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{ padding: '4px 12px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700, background: `${getStatusColor(p.status)}15`, color: getStatusColor(p.status) }}>{p.status}</span>
                      </td>
                      <td style={{ padding: '16px 20px', fontWeight: 700 }}>${p.bill.toLocaleString()}</td>
                      <td style={{ padding: '16px 20px' }}>
                        <button onClick={(e) => { e.stopPropagation(); dischargePatient(p.id); }}
                          style={{ background: '#FEE2E2', border: 'none', color: '#EF4444', padding: '6px 14px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>
                          Discharge
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Appointments */}
        {selectedTab === 'appointments' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
              <div>
                <h1 style={{ fontSize: '2rem', fontWeight: 900 }}>Appointments</h1>
                <p style={{ color: '#64748B', marginTop: 4 }}>Schedule and manage patient appointments</p>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ position: 'relative' }}>
                  <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                  <input type="text" placeholder="Search..." value={searchAppointment} onChange={e => setSearchAppointment(e.target.value)}
                    style={{ padding: '12px 16px 12px 44px', background: 'white', border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem', width: 260 }} />
                </div>
                <button onClick={() => setShowAddAppointment(true)} style={{ background: c.color, color: 'white', border: 'none', padding: '12px 24px', borderRadius: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Plus size={18} /> New Appointment
                </button>
              </div>
            </div>

            {showAddAppointment && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                style={{ background: 'white', borderRadius: 20, padding: 30, border: '1px solid #E2E8F0', marginBottom: 30 }}>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: 24 }}>Schedule Appointment</h3>
                <form onSubmit={handleAddAppointment} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
                  <input type="text" placeholder="Patient Name" value={newAppointment.patient} onChange={e => setNewAppointment({...newAppointment, patient: e.target.value})} required
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem' }} />
                  <select value={newAppointment.doctor} onChange={e => setNewAppointment({...newAppointment, doctor: e.target.value})}
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem', background: 'white' }}>
                    {staff.filter(s => s.role.includes('Dr.')).map((s, i) => <option key={i}>{s.name}</option>)}
                  </select>
                  <select value={newAppointment.dept} onChange={e => setNewAppointment({...newAppointment, dept: e.target.value})}
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem', background: 'white' }}>
                    {departments.map((d, i) => <option key={i}>{d.name}</option>)}
                  </select>
                  <input type="date" value={newAppointment.date} onChange={e => setNewAppointment({...newAppointment, date: e.target.value})} required
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem' }} />
                  <input type="time" value={newAppointment.time} onChange={e => setNewAppointment({...newAppointment, time: e.target.value})} required
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem' }} />
                  <select value={newAppointment.type} onChange={e => setNewAppointment({...newAppointment, type: e.target.value})}
                    style={{ padding: 14, border: '1px solid #E2E8F0', borderRadius: 12, fontSize: '0.95rem', background: 'white' }}>
                    <option>Checkup</option><option>Follow-up</option><option>Surgery</option><option>MRI Review</option><option>ECG</option><option>CT Scan</option>
                  </select>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button type="submit" style={{ background: c.color, color: 'white', border: 'none', padding: '14px 28px', borderRadius: 12, fontWeight: 800, cursor: 'pointer' }}>Schedule</button>
                    <button type="button" onClick={() => setShowAddAppointment(false)} style={{ background: '#F1F5F9', color: '#64748B', border: 'none', padding: '14px 28px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                  </div>
                </form>
              </motion.div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 30 }}>
              <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: c.color }}>{appointments.filter(a => a.status === 'Scheduled').length}</div>
                <div style={{ color: '#64748B', marginTop: 4 }}>Scheduled</div>
              </div>
              <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#22C55E' }}>{appointments.filter(a => a.status === 'Completed').length}</div>
                <div style={{ color: '#64748B', marginTop: 4 }}>Completed Today</div>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 20, border: '1px solid #E2E8F0', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#F8FAFC' }}>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>ID</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Patient</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Doctor</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Date/Time</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Type</th>
                    <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Status</th>
                    <th style={{ padding: '16px 20px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.filter(a => a.patient.toLowerCase().includes(searchAppointment.toLowerCase())).map((a, i) => (
                    <tr key={a.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '16px 20px', fontWeight: 700, color: c.color }}>{a.id}</td>
                      <td style={{ padding: '16px 20px', fontWeight: 700 }}>{a.patient}</td>
                      <td style={{ padding: '16px 20px', color: '#64748B' }}>{a.doctor}</td>
                      <td style={{ padding: '16px 20px', color: '#64748B' }}>{a.date} <br/><span style={{ fontSize: '0.85rem' }}>{a.time}</span></td>
                      <td style={{ padding: '16px 20px' }}><span style={{ padding: '4px 10px', background: '#F1F5F9', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600 }}>{a.type}</span></td>
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{ padding: '4px 12px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700, background: `${getStatusColor(a.status)}15`, color: getStatusColor(a.status) }}>{a.status}</span>
                      </td>
                      <td style={{ padding: '16px 20px' }}>
                        <div style={{ display: 'flex', gap: 8 }}>
                          {a.status !== 'Completed' && (
                            <button onClick={() => completeAppointment(a.id)} style={{ background: '#DCFCE7', border: 'none', color: '#15803D', padding: '6px 12px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>✓</button>
                          )}
                          <button onClick={() => cancelAppointment(a.id)} style={{ background: '#FEE2E2', border: 'none', color: '#EF4444', padding: '6px 12px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>✕</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Pharmacy */}
        {selectedTab === 'pharmacy' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 8 }}>Pharmacy Inventory</h1>
            <p style={{ color: '#64748B', marginBottom: 30 }}>Track medication stock and manage supplies</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {medications.map((m, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 16, padding: 24, border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{m.name}</div>
                    <div style={{ display: 'flex', gap: 16, marginTop: 8, color: '#64748B', fontSize: '0.9rem' }}>
                      <span>{m.type}</span>
                      <span>{m.stock.toLocaleString()} {m.unit}</span>
                    </div>
                    <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 120, height: 6, background: '#F1F5F9', borderRadius: 4 }}>
                        <div style={{ width: `${Math.min((m.stock / 2500) * 100, 100)}%`, height: 6, background: m.stock > m.reorder * 2 ? '#22C55E' : m.stock > m.reorder ? '#F59E0B' : '#EF4444', borderRadius: 4 }} />
                      </div>
                      <span style={{ fontSize: '0.85rem', color: m.stock > m.reorder * 2 ? '#22C55E' : m.stock > m.reorder ? '#F59E0B' : '#EF4444', fontWeight: 700 }}>
                        {m.stock > m.reorder * 2 ? 'Sufficient' : m.stock > m.reorder ? 'Low' : 'Reorder'}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: c.color }}>{(m.stock / 1000).toFixed(1)}K</div>
                    <div style={{ fontSize: '0.85rem', color: '#64748B' }}>in stock</div>
                    {m.stock <= m.reorder && (
                      <button style={{ marginTop: 8, background: '#FEF3C7', border: 'none', color: '#B45309', padding: '6px 14px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>Reorder</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Staff */}
        {selectedTab === 'staff' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 8 }}>Medical Staff</h1>
            <p style={{ color: '#64748B', marginBottom: 30 }}>{staff.length} healthcare professionals on duty</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {staff.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0', textAlign: 'center' }}>
                  <div style={{ width: 60, height: 60, background: `${s.color}20`, color: s.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.3rem', margin: '0 auto 16px' }}>{s.avatar}</div>
                  <h3 style={{ fontWeight: 800, marginBottom: 4 }}>{s.name}</h3>
                  <div style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: 4 }}>{s.role}</div>
                  <div style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: 12 }}>{s.dept} · {s.experience}</div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 12 }}>
                    <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{s.patients} patients</span>
                  </div>
                  <span style={{ padding: '4px 14px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700, background: `${getStatusColor(s.status)}15`, color: getStatusColor(s.status) }}>{s.status}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Billing */}
        {selectedTab === 'billing' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 8 }}>Billing Overview</h1>
            <p style={{ color: '#64748B', marginBottom: 30 }}>Track patient bills and insurance claims</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 30 }}>
              <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: c.color }}>${patients.reduce((a, p) => a + p.bill, 0).toLocaleString()}</div>
                <div style={{ color: '#64748B', marginTop: 4 }}>Total Outstanding Bills</div>
              </div>
              <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#22C55E' }}>${patients.filter(p => p.insurance !== 'Pending').reduce((a, p) => a + p.bill, 0).toLocaleString()}</div>
                <div style={{ color: '#64748B', marginTop: 4 }}>Insurance Covered</div>
              </div>
              <div style={{ background: 'white', borderRadius: 20, padding: 24, border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#8B5CF6' }}>{patients.filter(p => p.insurance !== 'Pending').length}</div>
                <div style={{ color: '#64748B', marginTop: 4 }}>Insured Patients</div>
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: 20, border: '1px solid #E2E8F0', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead><tr style={{ background: '#F8FAFC' }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Patient</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Department</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Insurance</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Bill Amount</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.85rem', color: '#64748B', textTransform: 'uppercase' }}>Status</th>
                </tr></thead>
                <tbody>
                  {patients.map((p, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '16px 20px', fontWeight: 700 }}>{p.name}</td>
                      <td style={{ padding: '16px 20px', color: '#64748B' }}>{p.dept}</td>
                      <td style={{ padding: '16px 20px', color: '#64748B' }}>{p.insurance}</td>
                      <td style={{ padding: '16px 20px', fontWeight: 800, color: c.color }}>${p.bill.toLocaleString()}</td>
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{ padding: '4px 12px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 700, background: p.insurance !== 'Pending' ? '#DCFCE7' : '#FEF3C7', color: p.insurance !== 'Pending' ? '#15803D' : '#B45309' }}>
                          {p.insurance !== 'Pending' ? 'Covered' : 'Pending'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Reports */}
        {selectedTab === 'reports' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: 8 }}>Reports & Analytics</h1>
            <p style={{ color: '#64748B', marginBottom: 30 }}>Monthly performance and operational reports</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 30 }}>
              {[
                { title: 'Patient Report', desc: 'Monthly admission and discharge statistics', icon: <Users size={24} />, color: '#3B82F6' },
                { title: 'Financial Report', desc: 'Revenue, expenses and profitability analysis', icon: <DollarSign size={24} />, color: '#22C55E' },
                { title: 'Operations Report', desc: 'Bed occupancy, staff allocation and efficiency', icon: <BarChart3 size={24} />, color: '#8B5CF6' },
              ].map((r, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 20, padding: 30, border: '1px solid #E2E8F0', cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = r.color}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E2E8F0'}>
                  <div style={{ width: 48, height: 48, background: `${r.color}15`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: r.color, marginBottom: 16 }}>{r.icon}</div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 8 }}>{r.title}</h3>
                  <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.6 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}