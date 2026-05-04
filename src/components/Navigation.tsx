import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo } from '../data/personal';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── Main navbar bar ── */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl shadow-md border-b border-border/50'
            : 'bg-background/40 backdrop-blur-md border-b border-border/10'
        }`}
      >
        {/* Scroll progress indicator */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? 'h-14' : 'h-16'}`}>

            {/* ── Logo ── */}
            <Link
              to="/"
              className="group flex items-center gap-2 min-w-0"
              aria-label="Home"
            >
              <div className="w-9 h-9 flex-shrink-0 rounded-xl overflow-hidden border border-border group-hover:border-primary/50 transition-colors duration-300 shadow-sm">
                <img
                  src="/personal-logo.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-heading font-bold text-lg lg:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                {personalInfo.name}
              </span>
            </Link>

            {/* ── Desktop nav links (xl+) ── */}
            <div className="hidden xl:flex items-center justify-center flex-1">
              <div className="flex items-center gap-0.5 p-1 bg-secondary/50 border border-border/50 rounded-full backdrop-blur-sm shadow-sm">
                {navItems.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`relative inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                        active
                          ? 'text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                      }`}
                    >
                      {active && (
                        <span className="absolute inset-0 bg-primary rounded-full -z-10 shadow" />
                      )}
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ── Right‑side actions ── */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-secondary border border-border text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
                aria-label="Toggle theme"
              >
                {isDark
                  ? <Sun className="w-4 h-4 text-yellow-500" />
                  : <Moon className="w-4 h-4 text-primary" />}
              </button>

              {/* Hamburger — visible below xl */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ── Mobile drawer overlay ── */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ease-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`relative flex flex-col h-full pt-20 pb-10 px-6 sm:px-10 overflow-y-auto transition-transform duration-500 ease-out ${
            isOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <nav className="flex flex-col gap-1 mt-4">
            {navItems.map((item, index) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{ transitionDelay: isOpen ? `${index * 40}ms` : '0ms' }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xl font-heading font-bold transition-all duration-400 ${
                    isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  } ${
                    active
                      ? 'bg-primary/10 text-primary border-l-4 border-primary'
                      : 'text-foreground hover:bg-secondary hover:text-primary border-l-4 border-transparent hover:border-border'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
