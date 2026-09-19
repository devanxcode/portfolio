import { HashRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

export function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <HashRouter>
      <div className="min-h-screen bg-canvas-light dark:bg-canvas-dark text-ink-primary-light dark:text-ink-primary-dark transition-colors duration-300 relative selection:bg-accent/20">
        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Floating Island Navigation */}
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
