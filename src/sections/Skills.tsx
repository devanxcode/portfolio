import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { BookOpen } from 'lucide-react';
import { APPLE_EASE } from '../utils/animation';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="Technologies"
        title="Skills & Tooling"
        subtitle="Technologies I build with daily, along with areas where I am actively expanding my capabilities."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.skills.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: groupIdx * 0.1, ease: APPLE_EASE }}
            className="p-7 rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark flex flex-col justify-between hover:shadow-sm transition-shadow"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold tracking-tight text-ink-primary-light dark:text-ink-primary-dark">
                  {group.category}
                </h3>
                <span className="text-xs text-ink-muted-light dark:text-ink-muted-dark font-mono">
                  0{groupIdx + 1}
                </span>
              </div>

              {/* Category Description */}
              <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark mb-6 leading-relaxed">
                {group.description}
              </p>
            </div>

            {/* Chips Grid */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl hairline-border bg-surface-light-elevated dark:bg-surface-dark-elevated text-sm text-ink-primary-light dark:text-ink-primary-dark transition-all duration-200 hover:scale-[1.02]"
                >
                  <span className="font-medium">{skill.name}</span>
                  {skill.isLearning && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent">
                      <BookOpen className="w-2.5 h-2.5" />
                      Learning
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
