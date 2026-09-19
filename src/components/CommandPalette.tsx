import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Compass,
  Code2,
  Calendar,
  FolderGit2,
  LineChart,
  Mail,
  Copy,
  Sun,
  Moon,
  ExternalLink,
  CornerDownLeft,
} from 'lucide-react';
import { GithubIcon, InstagramIcon } from './icons/BrandIcons';
import { portfolioData } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onShowToast: (msg: string) => void;
}

interface PaletteItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Actions' | 'Social';
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette = ({
  isOpen,
  onClose,
  isDark,
  onToggleTheme,
  onShowToast,
}: CommandPaletteProps) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const items: PaletteItem[] = [
    // Navigation
    {
      id: 'nav-home',
      label: 'Home / Hero',
      category: 'Navigation',
      icon: Compass,
      action: () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'nav-about',
      label: 'About Me',
      category: 'Navigation',
      icon: Compass,
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      },
    },
    {
      id: 'nav-skills',
      label: 'Skills & Tech Stack',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      },
    },
    {
      id: 'nav-roadmap',
      label: 'Learning Roadmap',
      category: 'Navigation',
      icon: Calendar,
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      },
    },
    {
      id: 'nav-projects',
      label: 'My Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => navigate('/projects'),
    },
    {
      id: 'nav-trading',
      label: 'Markets & Funded Hive',
      category: 'Navigation',
      icon: LineChart,
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('trading')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      },
    },
    {
      id: 'nav-contact',
      label: 'Contact Channels',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        navigate('/');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      },
    },

    // Actions
    {
      id: 'action-theme',
      label: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      category: 'Actions',
      icon: isDark ? Sun : Moon,
      shortcut: 'T',
      action: () => {
        onToggleTheme();
        onShowToast(isDark ? 'Switched to Light Mode' : 'Switched to Dark Mode');
      },
    },
    {
      id: 'action-copy-email',
      label: 'Copy Email Address',
      category: 'Actions',
      icon: Copy,
      shortcut: 'C',
      action: () => {
        navigator.clipboard.writeText('dexanxcode@gmail.com');
        onShowToast('Email copied to clipboard!');
      },
    },

    // Social Links
    {
      id: 'social-github',
      label: 'Open GitHub Profile',
      category: 'Social',
      icon: GithubIcon,
      action: () => window.open('https://github.com/devanxcode', '_blank'),
    },
    {
      id: 'social-instagram',
      label: 'Open Instagram Profile',
      category: 'Social',
      icon: InstagramIcon,
      action: () => window.open('https://instagram.com/devanxnd.fx', '_blank'),
    },
    {
      id: 'social-propfirm',
      label: 'Visit Funded Hive Prop Firm',
      category: 'Social',
      icon: ExternalLink,
      action: () => window.open(portfolioData.trading.propFirm.inviteUrl, '_blank'),
    },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-md"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl rounded-2xl hairline-border bg-surface-light dark:bg-[#151515] shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/[0.08] dark:border-white/[0.1]">
              <Search className="w-4 h-4 text-ink-muted-light dark:text-ink-muted-dark shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search sections..."
                className="w-full bg-transparent text-sm text-ink-primary-light dark:text-ink-primary-dark placeholder:text-ink-muted-light dark:placeholder:text-ink-muted-dark focus:outline-none"
              />
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-ink-muted-light dark:text-ink-muted-dark hairline-border rounded bg-surface-light-elevated dark:bg-surface-dark-elevated">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-10 text-center text-xs text-ink-muted-light dark:text-ink-muted-dark">
                  No commands found matching "{query}"
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        item.action();
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-colors text-left ${
                        isSelected
                          ? 'bg-accent text-white'
                          : 'text-ink-primary-light dark:text-ink-primary-dark hover:bg-black/[0.04] dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-accent'}`} />
                        <span className="font-medium">{item.label}</span>
                        <span
                          className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-black/[0.05] dark:bg-white/[0.06] text-ink-muted-light dark:text-ink-muted-dark'
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.shortcut && (
                          <kbd
                            className={`px-1.5 py-0.5 rounded font-mono text-[10px] ${
                              isSelected ? 'bg-white/20 text-white' : 'hairline-border text-ink-muted-light dark:text-ink-muted-dark'
                            }`}
                          >
                            {item.shortcut}
                          </kbd>
                        )}
                        {isSelected && <CornerDownLeft className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer helper */}
            <div className="px-4 py-2 bg-surface-light-elevated/50 dark:bg-surface-dark-elevated/40 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] text-ink-muted-light dark:text-ink-muted-dark">
              <span>Navigate with <kbd className="font-mono">↑</kbd> <kbd className="font-mono">↓</kbd></span>
              <span>Select with <kbd className="font-mono">Enter</kbd></span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
