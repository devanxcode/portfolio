import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Code2, Compass, Sparkles } from 'lucide-react';
import { APPLE_EASE } from '../utils/animation';

const valueIcons = [Code2, Sparkles, Compass];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="About Me"
        title="Curiosity, consistency, and clean code."
        subtitle="A grounded look at who I am and how I approach software development."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: APPLE_EASE }}
          className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed font-normal"
        >
          {portfolioData.about.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Core Principles Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: APPLE_EASE }}
          className="lg:col-span-5 space-y-4"
        >
          {portfolioData.about.coreValues.map((val, idx) => {
            const Icon = valueIcons[idx] || Code2;
            return (
              <div
                key={val.title}
                className="p-5 rounded-2xl hairline-border bg-surface-light dark:bg-surface-dark hover:border-borderline-light dark:hover:border-borderline-dark transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-surface-light-elevated dark:bg-surface-dark-elevated text-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-ink-primary-light dark:text-ink-primary-dark">
                    {val.title}
                  </h3>
                </div>
                <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
