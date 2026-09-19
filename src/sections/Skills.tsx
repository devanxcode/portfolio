import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { APPLE_EASE } from '../utils/animation';

type FilterType = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Languages' | 'Learning';

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filterOptions: FilterType[] = ['All', 'Frontend', 'Backend', 'Database', 'Languages', 'Learning'];

  const filteredGroups = portfolioData.skills
    .map((group) => {
      if (activeFilter === 'All') return group;
      if (activeFilter === 'Learning') {
        const learningSkills = group.skills.filter((s) => s.isLearning);
        return learningSkills.length > 0 ? { ...group, skills: learningSkills } : null;
      }
      return group.category === activeFilter ? group : null;
    })
    .filter(Boolean) as typeof portfolioData.skills;

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="Technologies"
        title="Skills & Tooling"
        subtitle="Technologies I build with daily, along with areas where I am actively expanding my capabilities."
      />

      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setActiveFilter(opt)}
            className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 ${
              activeFilter === opt
                ? 'bg-surface-dark dark:bg-surface-light text-ink-primary-dark dark:text-ink-primary-light shadow-sm'
                : 'hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated'
            }`}
          >
            {opt === 'Learning' && (
              <Sparkles className="w-3 h-3 inline-block mr-1.5 text-accent" />
            )}
            {opt}
          </button>
        ))}
      </div>

      {/* Skills Grid with AnimatePresence */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              layout
              key={group.category}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: groupIdx * 0.05, ease: APPLE_EASE }}
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
                    {skill.isLearning ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent">
                        <BookOpen className="w-2.5 h-2.5" />
                        Learning
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        Solidified
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
