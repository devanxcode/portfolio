import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Shield, CheckCircle, Clock, ExternalLink, Info, Hexagon } from 'lucide-react';
import { APPLE_EASE } from '../utils/animation';

const iconList = [Shield, CheckCircle, Clock];

export const Trading = () => {
  const [logoError, setLogoError] = useState(false);
  const { propFirm, keyTakeaways, disclaimer } = portfolioData.trading;

  return (
    <section id="trading" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-10">
      <SectionHeading
        badge={portfolioData.trading.badge}
        title={portfolioData.trading.title}
        subtitle={portfolioData.trading.intro}
      />

      <div className="rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark p-8 sm:p-10 space-y-10">
        {/* Prop Firm Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, ease: APPLE_EASE }}
          className="p-6 sm:p-8 rounded-2xl hairline-border bg-surface-light-elevated/70 dark:bg-surface-dark-elevated/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            {/* Logo or Hexagon Fallback */}
            <div className="w-14 h-14 rounded-2xl bg-surface-light dark:bg-surface-dark hairline-border flex items-center justify-center p-2.5 shrink-0 overflow-hidden">
              {!logoError ? (
                <img
                  src={propFirm.logoUrl}
                  alt={propFirm.name}
                  className="max-w-full max-h-full object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Hexagon className="w-8 h-8 text-amber-500" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-ink-primary-light dark:text-ink-primary-dark">
                  {propFirm.name}
                </h3>
                <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  {propFirm.badge}
                </span>
              </div>
              <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
                {propFirm.description}
              </p>
            </div>
          </div>

          <a
            href={propFirm.inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-primary-light dark:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors duration-200 shrink-0 shadow-sm"
          >
            <span>View Prop Firm</span>
            <ExternalLink className="w-3.5 h-3.5 text-accent" />
          </a>
        </motion.div>

        {/* 3 Core Habits (Risk, Execution, Patience) */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-ink-muted-light dark:text-ink-muted-dark mb-4">
            Habits Developed Through Capital Management
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {keyTakeaways.map((item, index) => {
              const Icon = iconList[index] || Shield;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: APPLE_EASE }}
                  className="p-5 rounded-2xl hairline-border bg-surface-light-elevated/40 dark:bg-surface-dark-elevated/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-accent">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-mono text-ink-muted-light dark:text-ink-muted-dark">
                        0{index + 1}
                      </span>
                    </div>
                    <h5 className="text-sm font-semibold text-ink-primary-light dark:text-ink-primary-dark mb-1.5">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-xs text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footnote / Disclaimer */}
        <div className="pt-6 hairline-border-t flex items-start gap-2 text-xs text-ink-muted-light dark:text-ink-muted-dark leading-relaxed">
          <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>{disclaimer}</span>
        </div>
      </div>
    </section>
  );
};
