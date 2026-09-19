import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Contact } from '../sections/Contact';
import { ArrowUpRight, FolderGit2, LineChart, Sparkles } from 'lucide-react';
import { APPLE_EASE } from '../utils/animation';

interface HomePageProps {
  onShowToast?: (msg: string) => void;
}

export const HomePage = ({ onShowToast }: HomePageProps) => {
  return (
    <main id="main-content">
      {/* 1. Hero */}
      <Hero onShowToast={onShowToast} />

      {/* 2. About */}
      <About />

      {/* 3. Skills */}
      <Skills />

      {/* 4. Dedicated Pages Showcase (Projects & Trading) */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Projects Page Link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: APPLE_EASE }}
          >
            <Link
              to="/projects"
              className="group p-7 sm:p-8 rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark flex flex-col justify-between hover:scale-[1.01] hover:border-black/[0.15] dark:hover:border-white/[0.15] transition-all duration-300 h-full shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-surface-light-elevated dark:bg-surface-dark-elevated text-accent group-hover:scale-110 transition-transform">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink-muted-light dark:text-ink-muted-dark group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-accent mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Build Log</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-ink-primary-light dark:text-ink-primary-dark mb-2">
                  My Projects
                </h3>
                <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
                  Web applications and software tools built with React, Node.js, Express, and MongoDB.
                </p>
              </div>

              <div className="pt-6 mt-6 hairline-border-t flex items-center justify-between text-xs font-semibold text-ink-primary-light dark:text-ink-primary-dark group-hover:text-accent transition-colors">
                <span>View Projects Page</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          </motion.div>

          {/* Card 2: Trading Page Link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: APPLE_EASE }}
          >
            <Link
              to="/trading"
              className="group p-7 sm:p-8 rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark flex flex-col justify-between hover:scale-[1.01] hover:border-black/[0.15] dark:hover:border-white/[0.15] transition-all duration-300 h-full shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-surface-light-elevated dark:bg-surface-dark-elevated text-amber-500 group-hover:scale-110 transition-transform">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink-muted-light dark:text-ink-muted-dark group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-amber-500 mb-2">
                  <span>Funded Trader • Malaysian SnR</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-ink-primary-light dark:text-ink-primary-dark mb-2">
                  Funded Account Trading
                </h3>
                <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
                  Discretionary price action on naked charts using Malaysian Support & Resistance with Funded Hive.
                </p>
              </div>

              <div className="pt-6 mt-6 hairline-border-t flex items-center justify-between text-xs font-semibold text-ink-primary-light dark:text-ink-primary-dark group-hover:text-accent transition-colors">
                <span>Explore Trading Journey</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. Contact */}
      <Contact onShowToast={onShowToast} />
    </main>
  );
};
