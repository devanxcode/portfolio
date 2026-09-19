import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose?: () => void;
}

export const Toast = ({ message, type = 'success' }: ToastProps) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4"
        >
          <div className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-lg text-xs font-medium text-ink-primary-light dark:text-ink-primary-dark">
            <span className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              {type === 'success' ? <Check className="w-2.5 h-2.5" /> : <Info className="w-2.5 h-2.5" />}
            </span>
            <span>{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
