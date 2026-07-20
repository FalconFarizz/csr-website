import { motion } from 'framer-motion';
import { Zap, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Twitter = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Youtube = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" fill="currentColor" />
  </svg>
);

const Instagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const footerLinks = {
  Services: [
    { label: 'IT Software', href: '/services#it' },
    { label: 'Event Management', href: '/services#event' },
    { label: 'Digital Marketing', href: '/services#marketing' },
    { label: 'All Services', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
  { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  { icon: <Github size={18} />, href: '#', label: 'GitHub' },
  { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
  { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer style={{
      background: '#040e1a',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* CTA Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0B1F45, #163B80)',
        borderBottom: '1px solid rgba(0,194,255,0.15)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-50%', right: '-5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,194,255,0.15), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '60px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24, position: 'relative',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Plus Jakarta Sans', fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'white',
              letterSpacing: '-0.02em', marginBottom: 8,
            }}>
              Ready to Transform Your Business?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem' }}>
              Join 250+ companies that trust CSR Tech Solutions to power their digital future.
            </p>
          </div>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #00C2FF, #00D084)',
              color: 'white', fontFamily: 'Inter', fontWeight: 700,
              fontSize: '1rem', borderRadius: 50, textDecoration: 'none',
              boxShadow: '0 8px 40px rgba(0,194,255,0.4)',
              flexShrink: 0,
            }}
          >
            Get Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px 40px' }}>
        <div className="footer-main" style={{
          display: 'grid', gridTemplateColumns: '280px 1fr',
          gap: 80, marginBottom: 64,
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{
                width: 42, height: 42,
                background: 'linear-gradient(135deg, #00C2FF, #163B80)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0,194,255,0.3)',
              }}>
                <Zap size={20} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.05rem', color: 'white' }}>
                  CSR Tech Solutions
                </div>
                <div style={{ fontSize: '0.7rem', color: '#00C2FF', fontWeight: 600, letterSpacing: '0.1em' }}>
                  Innovate • Build • Scale
                </div>
              </div>
            </div>

            <p style={{
              color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem',
              lineHeight: 1.75, marginBottom: 28,
            }}>
              CSR Tech Solutions is a professional service company specializing in IT Software Development, Event Management, and Digital Management — helping businesses in Thoothukudi and beyond grow with technology, events and digital strategies.
            </p>

            {/* Newsletter */}
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ marginBottom: 32 }}
            >
              <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', marginBottom: 12 }}>
                Stay Updated
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1, padding: '10px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10, color: 'white',
                    fontFamily: 'Inter', fontSize: '0.85rem', outline: 'none',
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '10px 16px',
                    background: 'linear-gradient(135deg, #00C2FF, #163B80)',
                    border: 'none', borderRadius: 10, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', color: 'white',
                  }}
                >
                  <Mail size={16} />
                </motion.button>
              </div>
            </form>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={s.label}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,194,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(0,194,255,0.3)'; e.currentTarget.style.color = '#00C2FF'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="links-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40,
          }}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 style={{
                  fontFamily: 'Plus Jakarta Sans', fontWeight: 700,
                  fontSize: '0.85rem', color: 'white',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  marginBottom: 20,
                }}>
                  {category}
                </h4>
                <ul style={{ listStyle: 'none' }}>
                  {links.map((link) => (
                    <li key={link.label} style={{ marginBottom: 10 }}>
                      <Link
                        to={link.href}
                        style={{
                          color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem',
                          textDecoration: 'none', transition: 'color 0.2s',
                          fontFamily: 'Inter',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#00C2FF'}
                        onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
        }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} CSR Tech Solutions. All rights reserved.
            Crafted with ❤️ by world-class engineers.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.color = '#00C2FF'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-main { grid-template-columns: 1fr !important; gap: 40px !important; }
          .links-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 550px) {
          .links-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
