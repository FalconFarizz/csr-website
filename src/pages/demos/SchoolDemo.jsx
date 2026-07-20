import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Video, Award, Clock, Users, CheckCircle, Play, BarChart2, Bell } from 'lucide-react';

const courses = [
  { id:1, title:'Advanced Mathematics', teacher:'Dr. Anand Kumar', progress:78, color:'#4F46E5', lessons:24, completed:18 },
  { id:2, title:'English Literature', teacher:'Ms. Priya Nair', progress:90, color:'#EC4899', lessons:20, completed:18 },
  { id:3, title:'Physics Lab', teacher:'Mr. Raj Singh', progress:55, color:'#0EA5E9', lessons:30, completed:16 },
  { id:4, title:'Computer Science', teacher:'Ms. Divya Sharma', progress:100, color:'#22C55E', lessons:18, completed:18 },
];

const schedule = [
  { time:'08:00 AM', subject:'Mathematics', room:'Room 101', teacher:'Dr. Anand Kumar', status:'Completed' },
  { time:'10:00 AM', subject:'English', room:'Room 203', teacher:'Ms. Priya Nair', status:'Completed' },
  { time:'01:00 PM', subject:'Physics', room:'Lab 3', teacher:'Mr. Raj Singh', status:'Ongoing' },
  { time:'03:00 PM', subject:'Computer Science', room:'CS Lab', teacher:'Ms. Divya Sharma', status:'Upcoming' },
  { time:'05:00 PM', subject:'PE & Sports', room:'Ground', teacher:'Coach Arjun', status:'Upcoming' },
];

export default function SchoolDemo({ state }) {
  const { innerTab, setInnerTab, lmsHomeworkStatus, setLmsHomeworkStatus, homeworkName, setHomeworkName } = state;
  const nav = ['dashboard', 'courses', 'schedule', 'homework'];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F0F4FF', minHeight: '100vh', color: '#0F172A' }}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar */}
        <div style={{ width: 240, background: '#1E1B4B', color: 'white', padding: '28px 20px', display: 'flex', flexDirection: 'column', gap: 4, position: 'fixed', top: 0, bottom: 0, zIndex: 40 }}>
          <div style={{ fontWeight: 900, fontSize: '1.4rem', color: '#818CF8', marginBottom: 32 }}>EduVerse</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8, paddingLeft: 12 }}>MAIN MENU</div>
          {[{id:'dashboard',icon:<BarChart2 size={18}/>,lbl:'Dashboard'},{id:'courses',icon:<BookOpen size={18}/>,lbl:'My Courses'},{id:'schedule',icon:<Clock size={18}/>,lbl:'Schedule'},{id:'homework',icon:<CheckCircle size={18}/>,lbl:'Homework'}].map(item => (
            <div key={item.id} onClick={() => { setInnerTab(item.id); window.scrollTo(0,0); }}
              style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 16px', borderRadius:10, cursor:'pointer', background: innerTab===item.id ? 'rgba(129,140,248,0.2)' : 'transparent', color: innerTab===item.id ? '#818CF8' : 'rgba(255,255,255,0.55)', fontWeight:600, transition:'all 0.2s' }}>
              {item.icon} {item.lbl}
            </div>
          ))}
          <div style={{ marginTop:'auto', padding:'16px', background:'rgba(129,140,248,0.1)', borderRadius:12, border:'1px solid rgba(129,140,248,0.2)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:36, height:36, borderRadius:'50%', background:'linear-gradient(135deg,#818CF8,#4F46E5)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:'0.9rem' }}>AR</div>
              <div>
                <div style={{ fontWeight:700, fontSize:'0.9rem' }}>Arjun Rajan</div>
                <div style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.75rem' }}>Grade 11-B</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ marginLeft: 240, flex: 1, padding: '32px 40px' }}>
          <AnimatePresence mode="wait">
            <motion.div key={innerTab} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} transition={{ duration:0.25 }}>
              {innerTab === 'dashboard' && (
                <div>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32 }}>
                    <div>
                      <h1 style={{ fontSize:'2rem', fontWeight:900 }}>Good Morning, Arjun! 👋</h1>
                      <p style={{ color:'#64748B', marginTop:6 }}>Monday, July 20 — You have 5 classes today</p>
                    </div>
                    <div style={{ display:'flex', gap:12 }}>
                      <button style={{ background:'white', border:'1px solid #E2E8F0', color:'#0F172A', padding:'10px 16px', borderRadius:10, cursor:'pointer', display:'flex', alignItems:'center', gap:8 }}><Bell size={16}/> Alerts</button>
                    </div>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20, marginBottom:32 }}>
                    {[{icon:<BookOpen size={22}/>,v:'4',l:'Active Courses',c:'#4F46E5'},{icon:<CheckCircle size={22}/>,v:'87%',l:'Attendance',c:'#22C55E'},{icon:<Award size={22}/>,v:'A+',l:'Avg. Grade',c:'#F59E0B'},{icon:<Clock size={22}/>,v:'3',l:'Pending Tasks',c:'#EC4899'}].map((s,i)=>(
                      <div key={i} style={{ background:'white', padding:24, borderRadius:16, border:'1px solid #E2E8F0' }}>
                        <div style={{ color:s.c, marginBottom:12 }}>{s.icon}</div>
                        <div style={{ fontSize:'2rem', fontWeight:900, color:'#0F172A' }}>{s.v}</div>
                        <div style={{ color:'#64748B', fontSize:'0.85rem', marginTop:4 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
                    <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #E2E8F0' }}>
                      <h3 style={{ fontWeight:800, fontSize:'1.1rem', marginBottom:20 }}>Course Progress</h3>
                      {courses.map((c,i)=>(
                        <div key={i} style={{ marginBottom:20 }}>
                          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                            <span style={{ fontWeight:600, fontSize:'0.9rem' }}>{c.title}</span>
                            <span style={{ fontWeight:700, color:c.color, fontSize:'0.85rem' }}>{c.progress}%</span>
                          </div>
                          <div style={{ height:8, background:'#F1F5F9', borderRadius:4 }}>
                            <motion.div initial={{ width:0 }} animate={{ width:`${c.progress}%` }} transition={{ duration:0.8, delay:i*0.1 }} style={{ height:'100%', background:c.color, borderRadius:4 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #E2E8F0' }}>
                      <h3 style={{ fontWeight:800, fontSize:'1.1rem', marginBottom:20 }}>Today's Schedule</h3>
                      {schedule.slice(0,4).map((s,i)=>(
                        <div key={i} style={{ display:'flex', gap:16, marginBottom:16, alignItems:'center' }}>
                          <div style={{ fontSize:'0.78rem', color:'#94A3B8', fontWeight:600, width:68, flexShrink:0 }}>{s.time}</div>
                          <div style={{ flex:1 }}>
                            <div style={{ fontWeight:700, fontSize:'0.92rem' }}>{s.subject}</div>
                            <div style={{ color:'#94A3B8', fontSize:'0.78rem' }}>{s.room}</div>
                          </div>
                          <span style={{ padding:'4px 10px', borderRadius:50, fontSize:'0.75rem', fontWeight:700, background: s.status==='Completed'?'#DCFCE7':s.status==='Ongoing'?'#DBEAFE':'#FEF3C7', color: s.status==='Completed'?'#15803D':s.status==='Ongoing'?'#1D4ED8':'#B45309' }}>{s.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {innerTab === 'courses' && (
                <div>
                  <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:8 }}>My Courses</h1>
                  <p style={{ color:'#64748B', marginBottom:32 }}>4 active courses this semester</p>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:24 }}>
                    {courses.map((c,i) => (
                      <motion.div key={i} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.08 }} style={{ background:'white', borderRadius:20, overflow:'hidden', border:'1px solid #E2E8F0' }}>
                        <div style={{ height:8, background:`linear-gradient(90deg, ${c.color}, ${c.color}99)` }} />
                        <div style={{ padding:28 }}>
                          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
                            <div style={{ width:48, height:48, borderRadius:14, background:`${c.color}15`, display:'flex', alignItems:'center', justifyContent:'center', color:c.color }}><BookOpen size={22}/></div>
                            <span style={{ background:`${c.color}15`, color:c.color, padding:'4px 10px', borderRadius:50, fontSize:'0.78rem', fontWeight:700 }}>{c.completed}/{c.lessons} done</span>
                          </div>
                          <h3 style={{ fontWeight:800, fontSize:'1.1rem', marginBottom:6 }}>{c.title}</h3>
                          <p style={{ color:'#64748B', fontSize:'0.85rem', marginBottom:20 }}>{c.teacher}</p>
                          <div style={{ height:6, background:'#F1F5F9', borderRadius:3, marginBottom:8 }}>
                            <div style={{ width:`${c.progress}%`, height:'100%', background:c.color, borderRadius:3 }} />
                          </div>
                          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:20 }}>
                            <span style={{ color:'#94A3B8', fontSize:'0.8rem' }}>Progress</span>
                            <span style={{ fontWeight:700, color:c.color, fontSize:'0.8rem' }}>{c.progress}%</span>
                          </div>
                          <button style={{ width:'100%', background:c.color, color:'white', border:'none', padding:12, borderRadius:10, fontWeight:700, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}><Play size={16} fill="white"/> Continue</button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {innerTab === 'schedule' && (
                <div>
                  <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:8 }}>Class Schedule</h1>
                  <p style={{ color:'#64748B', marginBottom:32 }}>Monday, July 20, 2026</p>
                  <div style={{ background:'white', borderRadius:20, border:'1px solid #E2E8F0', overflow:'hidden' }}>
                    <div style={{ padding:'20px 28px', background:'#F8FAFC', borderBottom:'1px solid #E2E8F0', display:'grid', gridTemplateColumns:'100px 1fr 140px 1fr 120px', gap:16, fontWeight:700, fontSize:'0.82rem', color:'#64748B', textTransform:'uppercase', letterSpacing:'0.06em' }}>
                      <span>Time</span><span>Subject</span><span>Room</span><span>Teacher</span><span>Status</span>
                    </div>
                    {schedule.map((s,i) => (
                      <motion.div key={i} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:i*0.06 }}
                        style={{ padding:'22px 28px', borderBottom:'1px solid #F1F5F9', display:'grid', gridTemplateColumns:'100px 1fr 140px 1fr 120px', gap:16, alignItems:'center', background: s.status==='Ongoing' ? '#EFF6FF' : 'white' }}>
                        <span style={{ fontWeight:700, color:'#4F46E5', fontSize:'0.9rem' }}>{s.time}</span>
                        <span style={{ fontWeight:800 }}>{s.subject}</span>
                        <span style={{ color:'#64748B' }}>{s.room}</span>
                        <span style={{ color:'#64748B', fontSize:'0.9rem' }}>{s.teacher}</span>
                        <span style={{ padding:'5px 12px', borderRadius:50, fontSize:'0.78rem', fontWeight:700, display:'inline-block', background: s.status==='Completed'?'#DCFCE7':s.status==='Ongoing'?'#DBEAFE':'#F1F5F9', color: s.status==='Completed'?'#15803D':s.status==='Ongoing'?'#1D4ED8':'#64748B' }}>{s.status}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {innerTab === 'homework' && (
                <div>
                  <h1 style={{ fontSize:'2rem', fontWeight:900, marginBottom:8 }}>Homework & Assignments</h1>
                  <p style={{ color:'#64748B', marginBottom:32 }}>Track and submit your assignments</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
                    <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #E2E8F0' }}>
                      <h3 style={{ fontWeight:800, marginBottom:24 }}>Submit Assignment</h3>
                      <div style={{ marginBottom:16 }}>
                        <label style={{ fontWeight:600, fontSize:'0.85rem', color:'#475569', display:'block', marginBottom:8 }}>Assignment Title</label>
                        <input value={homeworkName} onChange={e=>setHomeworkName(e.target.value)} placeholder="e.g. Math Chapter 7 Exercises" style={{ width:'100%', padding:14, border:'1px solid #E2E8F0', borderRadius:10, fontSize:'1rem', boxSizing:'border-box' }} />
                      </div>
                      <div style={{ marginBottom:24 }}>
                        <label style={{ fontWeight:600, fontSize:'0.85rem', color:'#475569', display:'block', marginBottom:8 }}>Status</label>
                        <select value={lmsHomeworkStatus} onChange={e=>setLmsHomeworkStatus(e.target.value)} style={{ width:'100%', padding:14, border:'1px solid #E2E8F0', borderRadius:10, fontSize:'1rem', cursor:'pointer' }}>
                          <option>Not Submitted</option>
                          <option>In Progress</option>
                          <option>Submitted</option>
                          <option>Late Submission</option>
                        </select>
                      </div>
                      <button style={{ width:'100%', background:'linear-gradient(135deg,#4F46E5,#7C3AED)', color:'white', border:'none', padding:14, borderRadius:12, fontWeight:800, cursor:'pointer' }}>Submit Assignment</button>
                    </div>
                    <div style={{ background:'white', padding:28, borderRadius:20, border:'1px solid #E2E8F0' }}>
                      <h3 style={{ fontWeight:800, marginBottom:24 }}>Pending Assignments</h3>
                      {[{subj:'Mathematics',task:'Chapter 7: Calculus Problems',due:'Today',priority:'High'},{subj:'Physics',task:'Lab Report: Wave Motion',due:'Tomorrow',priority:'Medium'},{subj:'English',task:'Essay: Modern Literature',due:'Jul 23',priority:'Low'}].map((hw,i)=>(
                        <div key={i} style={{ padding:16, background:'#F8FAFC', borderRadius:12, marginBottom:12, border:'1px solid #E2E8F0' }}>
                          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                            <span style={{ fontWeight:700, fontSize:'0.9rem' }}>{hw.subj}</span>
                            <span style={{ padding:'3px 10px', borderRadius:50, fontSize:'0.75rem', fontWeight:700, background: hw.priority==='High'?'#FEE2E2':hw.priority==='Medium'?'#FEF3C7':'#DCFCE7', color: hw.priority==='High'?'#DC2626':hw.priority==='Medium'?'#D97706':'#16A34A' }}>{hw.priority}</span>
                          </div>
                          <div style={{ color:'#475569', fontSize:'0.85rem', marginBottom:4 }}>{hw.task}</div>
                          <div style={{ color:'#94A3B8', fontSize:'0.78rem', display:'flex', alignItems:'center', gap:6 }}><Clock size={12}/> Due: {hw.due}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
