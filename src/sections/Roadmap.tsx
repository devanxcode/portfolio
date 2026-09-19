import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react';
import { APPLE_EASE } from '../utils/animation';

export const Roadmap = () => {
  const getStatusBadge = (status: 'completed' | 'in-progress' | 'planned') => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            Solidified
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent">
            <Clock className="w-3 h-3 text-accent animate-pulse" />
            In Progress
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-light-elevated dark:bg-surface-dark-elevated text-ink-muted-light dark:text-ink-muted-dark">
            <Calendar className="w-3 h-3" />
            Upcoming
          </span>
        );
    }
  };

  return (
    <section id="roadmap" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="Roadmap"
        title="The MERN Learning Journey"
        subtitle={portfolioData.roadmap.intro}
      />

      <div className="space-y-4">
        {portfolioData.roadmap.steps.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: APPLE_EASE }}
            className={`p-6 sm:p-7 rounded-2xl hairline-border bg-surface-light dark:bg-surface-dark transition-all duration-300 ${
              item.status === 'in-progress'
                ? 'ring-1 ring-accent/30 dark:ring-accent/40 shadow-sm'
                : ''
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-mono font-semibold hairline-border bg-surface-light-elevated dark:bg-surface-dark-elevated text-ink-secondary-light dark:text-ink-secondary-dark">
                  0{item.step}
                </span>
                <h3 className="text-lg font-bold text-ink-primary-light dark:text-ink-primary-dark">
                  {item.title}
                </h3>
              </div>

              <div>{getStatusBadge(item.status)}</div>
            </div>

            <p className="text-sm font-medium text-accent dark:text-accent mb-2">
              Focus: {item.tech}
            </p>

            <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Honest note on projects */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: APPLE_EASE }}
        className="mt-8 p-6 rounded-2xl hairline-border bg-surface-light-elevated/50 dark:bg-surface-dark-elevated/30 flex items-start gap-3.5 text-sm text-ink-secondary-light dark:text-ink-secondary-dark"
      >
        <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-ink-primary-light dark:text-ink-primary-dark font-medium">
            Building in public note:
          </strong>{' '}
          {portfolioData.roadmap.footerNote}
        </p>
      </motion.div>
    </section>
  );
};
