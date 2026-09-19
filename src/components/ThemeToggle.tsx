import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { APPLE_EASE } from '../utils/animation';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2 rounded-full hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.35, ease: APPLE_EASE }}
        className="w-4 h-4 flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-accent" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
};
