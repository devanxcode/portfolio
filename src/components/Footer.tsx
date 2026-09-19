import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="hairline-border-t py-12 px-6 sm:px-8 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-ink-muted-light dark:text-ink-muted-dark">
        <div>
          <p>
            © {portfolioData.footer.copyrightYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs">
            {portfolioData.footer.builtWith}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hairline-border hover:text-ink-primary-light dark:hover:text-ink-primary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent text-xs"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
