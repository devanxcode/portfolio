import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ArrowUpRight, Search } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCommandPalette?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
  count: string;
}

const NAV_LINKS: NavItem[] = [
  { label: 'About', href: '/#about', count: '01' },
  { label: 'Skills', href: '/#skills', count: '02' },
  { label: 'Roadmap', href: '/#roadmap', count: '03' },
  { label: 'Projects', href: '/projects', isRoute: true, count: '04' },
  { label: 'Trading', href: '/#trading', count: '05' },
  { label: 'Contact', href: '/#contact', count: '06' },
];

export const Navbar = ({ isDark, onToggleTheme, onOpenCommandPalette }: NavbarProps) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Scroll to anchor on route change if hash present
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      {/* Floating Island Dock (Desktop & Mobile) */}
      <header className="fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-3 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-[#121212]/80 backdrop-blur-2xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.4)]"
          aria-label="Navigation Dock"
        >
          {/* Monogram / Handle */}
          <Link
            to="/"
            className="group flex items-center gap-2 pl-2 pr-2.5 py-1 text-xs font-semibold tracking-tight text-ink-primary-light dark:text-ink-primary-dark hover:opacity-80 transition-opacity"
            aria-label="Devanand - Home"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-tight text-ink-primary-light dark:text-ink-primary-dark">
              devanxcode
            </span>
          </Link>

          {/* Desktop Nav Links with Sliding Pill */}
          <div
            className="hidden md:flex items-center gap-1"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {NAV_LINKS.map((link, idx) => {
              const isProjectsActive = link.isRoute && location.pathname === '/projects';

              return link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isProjectsActive
                      ? 'text-accent font-semibold'
                      : 'text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark'
                  }`}
                >
                  {hoveredIdx === idx && (
                    <motion.span
                      layoutId="nav-sliding-pill"
                      className="absolute inset-0 rounded-full bg-black/[0.05] dark:bg-white/[0.08] -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className="relative px-3.5 py-1.5 text-xs font-medium text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark transition-colors"
                >
                  {hoveredIdx === idx && (
                    <motion.span
                      layoutId="nav-sliding-pill"
                      className="absolute inset-0 rounded-full bg-black/[0.05] dark:bg-white/[0.08] -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="h-3.5 w-[1px] bg-black/[0.08] dark:bg-white/[0.1] hidden sm:block" />

          {/* Action buttons on the right: Command Palette + Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5">
            {/* Command Palette Trigger */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                type="button"
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                title="Search or press Cmd+K / Ctrl+K"
              >
                <Search className="w-3 h-3 text-accent" />
                <span className="hidden sm:inline">⌘K</span>
              </button>
            )}

            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={onToggleTheme}
              type="button"
              className="p-1.5 rounded-full text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-4 h-4 flex items-center justify-center"
              >
                {isDark ? (
                  <Moon className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Hamburger Morph */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden relative w-7 h-7 rounded-full flex flex-col items-center justify-center gap-1 focus:outline-none hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="w-3.5 h-[1.5px] bg-ink-primary-light dark:bg-ink-primary-dark rounded-full origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className="w-3.5 h-[1.5px] bg-ink-primary-light dark:bg-ink-primary-dark rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="w-3.5 h-[1.5px] bg-ink-primary-light dark:bg-ink-primary-dark rounded-full origin-center"
              />
            </motion.button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay Sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-canvas-light/95 dark:bg-canvas-dark/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-10 px-8"
          >
            {/* Nav Items */}
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted-light dark:text-ink-muted-dark mb-3">
                Navigation
              </span>

              {NAV_LINKS.map((link) => {
                const isProjectsActive = link.isRoute && location.pathname === '/projects';

                return link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between py-3 border-b border-black/[0.05] dark:border-white/[0.06] text-2xl font-semibold tracking-tight text-ink-primary-light dark:text-ink-primary-dark active:opacity-70"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-xs font-mono ${isProjectsActive ? 'text-accent' : 'text-ink-muted-light dark:text-ink-muted-dark'}`}>
                        {link.count}
                      </span>
                      <span className={isProjectsActive ? 'text-accent' : ''}>{link.label}</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-ink-muted-light dark:text-ink-muted-dark opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between py-3 border-b border-black/[0.05] dark:border-white/[0.06] text-2xl font-semibold tracking-tight text-ink-primary-light dark:text-ink-primary-dark active:opacity-70"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-ink-muted-light dark:text-ink-muted-dark group-hover:text-accent transition-colors">
                        {link.count}
                      </span>
                      <span>{link.label}</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-ink-muted-light dark:text-ink-muted-dark opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </a>
                );
              })}
            </div>

            {/* Bottom Quick Links in Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs text-ink-secondary-light dark:text-ink-secondary-dark"
            >
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/devanxcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink-primary-light dark:text-ink-primary-dark hover:text-accent transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="mailto:dexanxcode@gmail.com"
                  className="font-medium text-ink-primary-light dark:text-ink-primary-dark hover:text-accent transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://instagram.com/devanxnd.fx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink-primary-light dark:text-ink-primary-dark hover:text-accent transition-colors"
                >
                  Instagram
                </a>
              </div>

              <span className="font-mono text-[11px] text-ink-muted-light dark:text-ink-muted-dark">
                {portfolioData.personal.location}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
