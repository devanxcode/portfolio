import { useState, useEffect, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

export function App() {
  const { isDark, toggleTheme } = useTheme();
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
  }, []);

  // Auto-dismiss toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Global keyboard shortcut for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-canvas-light dark:bg-canvas-dark text-ink-primary-light dark:text-ink-primary-dark transition-colors duration-300 relative selection:bg-accent/20">
        {/* Hairline Scroll Progress Bar */}
        <ScrollProgress />

        {/* Floating Island Navigation with ⌘K trigger */}
        <Navbar
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onOpenCommandPalette={() => setIsPaletteOpen(true)}
        />

        {/* Command Palette Modal */}
        <CommandPalette
          isOpen={isPaletteOpen}
          onClose={() => setIsPaletteOpen(false)}
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onShowToast={showToast}
        />

        {/* Toast Notification */}
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage onShowToast={showToast} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<HomePage onShowToast={showToast} />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
