import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ArrowUpRight, X } from 'lucide-react';
import { GithubIcon, InstagramIcon } from './icons/BrandIcons';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
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
  { label: 'Projects', href: '/projects', isRoute: true, count: '03' },
  { label: 'Trading', href: '/trading', isRoute: true, count: '04' },
  { label: 'Contact', href: '/#contact', count: '05' },
];

export const Navbar = ({ isDark, onToggleTheme }: NavbarProps) => {
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
      {/* Floating Island Dock (Desktop & Mobile Optimized) */}
      <header className="fixed top-3.5 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-4 py-2 sm:py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white/85 dark:bg-[#121212]/85 backdrop-blur-2xl shadow-[0_4px_24px_-2px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_-2px_rgba(0,0,0,0.4)] min-h-[46px]"
          aria-label="Navigation Dock"
        >
          {/* Brand Monogram & Handle */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2 pl-1 pr-2 py-1 text-xs font-semibold tracking-tight text-ink-primary-light dark:text-ink-primary-dark hover:opacity-80 transition-opacity"
            aria-label="Devanand - Home"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="font-mono text-xs sm:text-xs font-medium tracking-tight text-ink-primary-light dark:text-ink-primary-dark">
              devanxcode
            </span>
          </Link>

          {/* Desktop Nav Links with Sliding Pill */}
          <div
            className="hidden md:flex items-center gap-1"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {NAV_LINKS.map((link, idx) => {
              const isRouteActive = link.isRoute && location.pathname === link.href;

              return link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isRouteActive
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

          {/* Action buttons: Theme Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={onToggleTheme}
              type="button"
              className="p-2 sm:p-1.5 rounded-full text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors focus:outline-none"
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

            {/* Mobile Menu Morph Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden relative w-9 h-9 rounded-full flex flex-col items-center justify-center gap-1.5 focus:outline-none hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="w-4 h-[2px] bg-ink-primary-light dark:bg-ink-primary-dark rounded-full origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className="w-4 h-[2px] bg-ink-primary-light dark:bg-ink-primary-dark rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="w-4 h-[2px] bg-ink-primary-light dark:bg-ink-primary-dark rounded-full origin-center"
              />
            </motion.button>
          </div>
        </motion.nav>
      </header>

      {/* Optimized Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 md:hidden bg-canvas-light/98 dark:bg-canvas-dark/98 backdrop-blur-3xl flex flex-col justify-between pt-6 pb-8 px-6 overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="font-mono text-sm font-semibold tracking-tight text-ink-primary-light dark:text-ink-primary-dark">
                  devanxcode
                </span>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                type="button"
                className="p-2.5 rounded-full hairline-border bg-surface-light dark:bg-surface-dark text-ink-primary-light dark:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col py-6 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted-light dark:text-ink-muted-dark mb-3 px-2">
                Explore
              </span>

              {NAV_LINKS.map((link, idx) => {
                const isRouteActive = link.isRoute && location.pathname === link.href;

                return link.isRoute ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between py-3.5 px-3 rounded-2xl transition-colors active:scale-[0.99] ${
                        isRouteActive
                          ? 'bg-accent/10 text-accent font-bold'
                          : 'text-ink-primary-light dark:text-ink-primary-dark hover:bg-black/[0.04] dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono font-medium text-accent">
                          {link.count}
                        </span>
                        <span className="text-2xl font-bold tracking-tight">
                          {link.label}
                        </span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all" />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between py-3.5 px-3 rounded-2xl text-ink-primary-light dark:text-ink-primary-dark hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors active:scale-[0.99]"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono font-medium text-ink-muted-light dark:text-ink-muted-dark group-hover:text-accent transition-colors">
                          {link.count}
                        </span>
                        <span className="text-2xl font-bold tracking-tight">
                          {link.label}
                        </span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all" />
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Quick Action Cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08]"
            >
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <a
                  href="https://github.com/devanxcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl hairline-border bg-surface-light dark:bg-surface-dark text-ink-primary-light dark:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors text-xs font-medium"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>

                <a
                  href="mailto:dexanxcode@gmail.com"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl hairline-border bg-surface-light dark:bg-surface-dark text-ink-primary-light dark:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors text-xs font-medium"
                >
                  <span className="font-mono text-xs text-accent">@</span>
                  <span>Email</span>
                </a>

                <a
                  href="https://instagram.com/devanxnd.fx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl hairline-border bg-surface-light dark:bg-surface-dark text-ink-primary-light dark:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors text-xs font-medium"
                >
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-ink-muted-light dark:text-ink-muted-dark px-1">
                <span>{portfolioData.personal.name}</span>
                <span className="font-mono text-[11px]">{portfolioData.personal.location}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
