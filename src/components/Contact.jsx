import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 14, color: 'white',
    fontFamily: 'Inter', fontSize: '0.92rem',
    outline: 'none', transition: 'all 0.3s',
    boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, #071320 0%, #0B1F45 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(0,194,255,0.08), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 80 }}
        >
          <span style={{
            display: 'inline-block', padding: '6px 20px',
            background: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)',
            borderRadius: 50, color: '#00C2FF', fontSize: '0.8rem',
            fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20,
          }}>
            Get In Touch
          </span>
          <h2 style={{
            fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white',
            letterSpacing: '-0.03em', marginBottom: 20,
          }}>
            Ready to Build
            <span style={{
              background: 'linear-gradient(90deg, #00C2FF, #00D084)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}> Something Amazing?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>
            Let's talk about your project. We'll provide a free consultation
            and technical proposal within 24 hours.
          </p>
        </motion.div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Quick Contact Cards */}
            {[
              { icon: <Mail size={20} />, label: 'Email Us', value: 'clintonsamualraj@gmail.com', color: '#00C2FF' },
              { icon: <Phone size={20} />, label: 'Call Us', value: '7305172130', color: '#00D084' },
              { icon: <MapPin size={20} />, label: 'Visit Us', value: '74/A Main Road, Sawyerpuram, Thoothukudi - 628251', color: '#FFB800' },
            ].map((contact, i) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                style={{
                  display: 'flex', gap: 16, padding: '20px 24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 18, marginBottom: 14,
                  transition: 'all 0.3s', minWidth: 0,
                }}
                whileHover={{
                  background: `rgba(${contact.color === '#00C2FF' ? '0,194,255' : contact.color === '#00D084' ? '0,208,132' : '255,184,0'},0.06)`,
                  borderColor: `${contact.color}30`,
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${contact.color}18`,
                  border: `1px solid ${contact.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: contact.color, flexShrink: 0,
                }}>
                  {contact.icon}
                </div>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', marginBottom: 4, fontWeight: 600 }}>
                    {contact.label}
                  </div>
                  <div style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                    {contact.value}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/18001234567"
              target="_blank"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '16px 24px', marginTop: 8,
                background: 'rgba(37,211,102,0.1)',
                border: '1px solid rgba(37,211,102,0.3)',
                borderRadius: 18, textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(37,211,102,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <MessageCircle size={20} color="#25D366" />
              </div>
              <div>
                <div style={{ color: '#25D366', fontWeight: 700, fontSize: '0.95rem' }}>
                  WhatsApp Us
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
                  Typically replies within minutes
                </div>
              </div>
              <ArrowRight size={16} color="#25D366" style={{ marginLeft: 'auto' }} />
            </motion.a>

            {/* Office hours */}
            <div style={{
              marginTop: 24, padding: '20px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16,
            }}>
              <h4 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontWeight: 600, marginBottom: 12, letterSpacing: '0.06em' }}>
                OFFICE HOURS
              </h4>
              {[
                { day: 'Mon – Fri', hours: '9:00 AM – 6:00 PM EST' },
                { day: 'Sat – Sun', hours: 'Emergency support only' },
              ].map((o) => (
                <div key={o.day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{o.day}</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 500 }}>{o.hours}</span>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00D084', animation: 'pulse 2s infinite' }} />
                <span style={{ color: '#00D084', fontSize: '0.82rem', fontWeight: 600 }}>Team is online right now</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              padding: '48px',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 28,
              boxShadow: '0 20px 80px rgba(0,0,0,0.3)',
            }}
          >
            <h3 style={{
              fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
              fontSize: '1.5rem', color: 'white', marginBottom: 8,
            }}>
              Start a Conversation
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: 32 }}>
              Free consultation · Response within 24 hours
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '40px', textAlign: 'center',
                  background: 'rgba(0,208,132,0.08)',
                  border: '1px solid rgba(0,208,132,0.3)',
                  borderRadius: 20,
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                <h4 style={{ color: '#00D084', fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>
                  Message Sent!
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 600, marginBottom: 8, letterSpacing: '0.06em' }}>
                      FULL NAME *
                    </label>
                    <input
                      name="name" required value={formData.name} onChange={handleChange}
                      placeholder="John Smith"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0,194,255,0.4)'; e.target.style.background = 'rgba(0,194,255,0.05)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 600, marginBottom: 8, letterSpacing: '0.06em' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      placeholder="john@company.com"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(0,194,255,0.4)'; e.target.style.background = 'rgba(0,194,255,0.05)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 600, marginBottom: 8, letterSpacing: '0.06em' }}>
                    COMPANY NAME
                  </label>
                  <input
                    name="company" value={formData.company} onChange={handleChange}
                    placeholder="Your Company Inc."
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(0,194,255,0.4)'; e.target.style.background = 'rgba(0,194,255,0.05)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 600, marginBottom: 8, letterSpacing: '0.06em' }}>
                    SERVICE NEEDED
                  </label>
                  <select
                    name="service" value={formData.service} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(0,194,255,0.4)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <option value="" style={{ background: '#0B1F45' }}>Select a service...</option>
                    <option value="software" style={{ background: '#0B1F45' }}>Software Development</option>
                    <option value="web" style={{ background: '#0B1F45' }}>Web Development</option>
                    <option value="mobile" style={{ background: '#0B1F45' }}>Mobile Apps</option>
                    <option value="ai" style={{ background: '#0B1F45' }}>AI / ML Development</option>
                    <option value="cloud" style={{ background: '#0B1F45' }}>Cloud & DevOps</option>
                    <option value="design" style={{ background: '#0B1F45' }}>UI/UX Design</option>
                    <option value="consulting" style={{ background: '#0B1F45' }}>IT Consulting</option>
                    <option value="other" style={{ background: '#0B1F45' }}>Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 600, marginBottom: 8, letterSpacing: '0.06em' }}>
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    name="message" required value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your project, goals, timeline, and budget..."
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(0,194,255,0.4)'; e.target.style.background = 'rgba(0,194,255,0.05)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.background = 'rgba(255,255,255,0.04)'; }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, #00C2FF, #163B80)',
                    color: 'white', fontFamily: 'Inter', fontWeight: 700,
                    fontSize: '1rem', borderRadius: 14, border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    boxShadow: '0 8px 30px rgba(0,194,255,0.3)',
                    transition: 'all 0.3s',
                  }}
                >
                  Send Message <Send size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
