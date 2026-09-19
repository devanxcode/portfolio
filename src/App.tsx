import { useState, useEffect, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TradingPage } from './pages/TradingPage';

export function App() {
  const { isDark, toggleTheme } = useTheme();
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

  return (
    <HashRouter>
      <div className="min-h-screen bg-canvas-light dark:bg-canvas-dark text-ink-primary-light dark:text-ink-primary-dark transition-colors duration-300 relative selection:bg-accent/20">
        {/* Hairline Scroll Progress Bar */}
        <ScrollProgress />

        {/* Floating Island Navigation (Minimal, Clean, No Ctrl+K) */}
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

        {/* Toast Notification */}
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage onShowToast={showToast} />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/trading" element={<TradingPage />} />
          <Route path="*" element={<HomePage onShowToast={showToast} />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
