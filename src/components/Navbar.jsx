import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Services', href: '/services', isPage: true, hasDropdown: true },
  { label: 'Projects', href: '/projects', isPage: true },
  { label: 'About', href: '/about', isPage: true },
  { label: 'Pricing', href: '/pricing', isPage: true },
  { label: 'Contact', href: '/contact', isPage: true },
];

const serviceDropdown = [
  { label: 'IT Software', icon: '💻', href: '/services/it-software' },
  { label: 'Event Management', icon: '🎪', href: '/services/event-management' },
  { label: 'Digital Marketing', icon: '📈', href: '/services/digital-marketing' },
  { label: 'Real Estate', icon: '🏠', href: '/services/real-estate' },
];

const entertainmentDropdown = [
  { label: 'Comics', icon: '🎭', href: 'http://localhost:5173/', external: true },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectsPage = location.pathname === '/projects';

  const isActive = (href) => {
    const pagePaths = ['/services', '/projects', '/about', '/pricing', '/contact'];
    return pagePaths.includes(href) && location.pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? (isProjectsPage ? 'linear-gradient(90deg, #701A75 0%, #D946EF 100%)' : 'rgba(7, 19, 32, 0.92)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(30px)' : 'none',
          borderBottom: scrolled ? (isProjectsPage ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.06)') : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
            >
              <div style={{
                width: 40, height: 40,
                background: isProjectsPage 
                  ? 'linear-gradient(135deg, #EC4899, #701A75)'
                  : 'linear-gradient(135deg, #00C2FF, #163B80)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: isProjectsPage 
                  ? '0 0 20px rgba(236,72,153,0.4)'
                  : '0 0 20px rgba(0,194,255,0.4)',
              }}>
                <Zap size={20} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.05rem', color: 'white', lineHeight: 1.1 }}>
                  CSR Tech
                </div>
                <div style={{ fontSize: '0.65rem', color: isProjectsPage ? '#FF8BE6' : '#00C2FF', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Solutions
                </div>
              </div>
            </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, position: 'relative' }} className="hidden-mobile">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.label} ref={dropdownRef} style={{ position: 'relative' }}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 4,
                        padding: '8px 16px',
                        background: isActive(item.href) 
                          ? (isProjectsPage ? 'rgba(255,255,255,0.12)' : 'rgba(0,194,255,0.1)') 
                          : 'none',
                        border: isActive(item.href) 
                          ? (isProjectsPage ? '1px solid rgba(255,255,255,0.65)' : '1px solid rgba(0,194,255,0.25)') 
                          : '1px solid transparent',
                        cursor: 'pointer',
                        color: (dropdownOpen || isActive(item.href)) 
                          ? (isProjectsPage ? 'white' : '#00C2FF') 
                          : 'rgba(255,255,255,0.8)',
                        fontFamily: 'Inter', fontWeight: 500, fontSize: '0.92rem',
                        borderRadius: 8, transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = isProjectsPage ? '#FF8BE6' : '#00C2FF'; }}
                      onMouseLeave={(e) => { if (!dropdownOpen && !isActive(item.href)) e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
                    >
                      {item.label}
                      <ChevronDown size={14} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                            transform: 'translateX(-50%)',
                            width: 420, padding: 16,
                            background: isProjectsPage ? 'rgba(74, 15, 68, 0.98)' : 'rgba(10, 22, 40, 0.98)',
                            backdropFilter: 'blur(40px)',
                            border: isProjectsPage ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 20,
                            boxShadow: isProjectsPage 
                              ? '0 20px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(236,72,153,0.15)'
                              : '0 20px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,194,255,0.1)',
                          }}
                        >
                          {/* Services Grid */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                            {serviceDropdown.map((s) => (
                              <Link
                                key={s.label}
                                to={s.href}
                                onClick={() => setDropdownOpen(false)}
                                style={{
                                  display: 'flex', alignItems: 'center', gap: 10,
                                  padding: '10px 12px',
                                  borderRadius: 12, textDecoration: 'none',
                                  color: 'rgba(255,255,255,0.8)',
                                  fontSize: '0.88rem', fontWeight: 500,
                                  transition: 'all 0.2s',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = isProjectsPage ? 'rgba(236,72,153,0.15)' : 'rgba(0,194,255,0.08)';
                                  e.currentTarget.style.color = isProjectsPage ? '#FF8BE6' : '#00C2FF';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = 'transparent';
                                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                                }}
                              >
                                <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                                {s.label}
                              </Link>
                            ))}
                          </div>

                          {/* Entertainment Section */}
                          <div style={{
                            marginTop: 10,
                            paddingTop: 10,
                            borderTop: isProjectsPage ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.07)',
                          }}>
                            <div style={{
                              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em',
                              textTransform: 'uppercase', color: isProjectsPage ? '#FF8BE6' : '#00C2FF',
                              padding: '4px 12px 8px',
                            }}>🎬 Entertainment</div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                              {entertainmentDropdown.map((s) => (
                                <a
                                  key={s.label}
                                  href={s.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setDropdownOpen(false)}
                                  style={{
                                    display: 'flex', alignItems: 'center', gap: 10,
                                    padding: '10px 12px',
                                    borderRadius: 12, textDecoration: 'none',
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '0.88rem', fontWeight: 500,
                                    transition: 'all 0.2s',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = isProjectsPage ? 'rgba(236,72,153,0.15)' : 'rgba(0,194,255,0.08)';
                                    e.currentTarget.style.color = isProjectsPage ? '#FF8BE6' : '#00C2FF';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                                  }}
                                >
                                  <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                                  {s.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.isPage ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    style={{
                      padding: '8px 16px',
                      color: isActive(item.href) ? 'white' : 'rgba(255,255,255,0.8)',
                      fontFamily: 'Inter', fontWeight: 500, fontSize: '0.92rem',
                      textDecoration: 'none', borderRadius: 8,
                      transition: 'all 0.2s',
                      background: isActive(item.href) 
                        ? (isProjectsPage ? 'rgba(255,255,255,0.12)' : 'rgba(0,194,255,0.08)') 
                        : 'transparent',
                      border: isActive(item.href) 
                        ? (isProjectsPage ? '1px solid rgba(255,255,255,0.65)' : '1px solid rgba(0,194,255,0.2)') 
                        : '1px solid transparent',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = isProjectsPage ? '#FF8BE6' : '#00C2FF'; }}
                    onMouseLeave={(e) => { if (!isActive(item.href)) e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      padding: '8px 16px',
                      color: 'rgba(255,255,255,0.8)',
                      fontFamily: 'Inter', fontWeight: 500, fontSize: '0.92rem',
                      textDecoration: 'none', borderRadius: 8,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => e.target.style.color = isProjectsPage ? '#FF8BE6' : '#00C2FF'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
                  >
                    {item.label}
                  </a>
                )
              ))}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/#contact"
                  style={{
                    marginLeft: 8,
                    padding: '10px 24px',
                    background: isProjectsPage 
                      ? 'linear-gradient(135deg, #EC4899, #701A75)'
                      : 'linear-gradient(135deg, #00C2FF, #163B80)',
                    color: 'white', fontWeight: 600, fontSize: '0.88rem',
                    borderRadius: 50, textDecoration: 'none',
                    boxShadow: isProjectsPage 
                      ? '0 0 20px rgba(236,72,153,0.3)'
                      : '0 0 20px rgba(0,194,255,0.3)',
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontFamily: 'Inter',
                  }}
                >
                  Get Started <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, padding: 8, cursor: 'pointer', color: 'white',
              }}
              className="show-mobile"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '80%', maxWidth: 360,
              background: 'rgba(7, 19, 32, 0.98)', backdropFilter: 'blur(40px)',
              zIndex: 100, padding: '80px 24px 24px',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute', top: 20, right: 20,
                background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: 10,
                padding: 8, cursor: 'pointer', color: 'white',
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {navItems.map((item, i) => (
                item.isPage ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block',
                        padding: '14px 20px',
                        color: isActive(item.href) ? '#00C2FF' : 'rgba(255,255,255,0.85)',
                        fontWeight: 500, textDecoration: 'none', borderRadius: 12,
                        fontSize: '1rem', fontFamily: 'Inter',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    style={{
                      padding: '14px 20px',
                      color: 'rgba(255,255,255,0.85)', fontWeight: 500,
                      textDecoration: 'none', borderRadius: 12,
                      fontSize: '1rem', fontFamily: 'Inter',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    {item.label}
                  </motion.a>
                )
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/#contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    marginTop: 16, padding: '14px 24px',
                    background: 'linear-gradient(135deg, #00C2FF, #163B80)',
                    color: 'white', fontWeight: 600, textAlign: 'center',
                    borderRadius: 50, textDecoration: 'none',
                    fontFamily: 'Inter',
                  }}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
