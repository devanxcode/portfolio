import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import { portfolioData } from '../data/portfolioData';
import { APPLE_EASE } from '../utils/animation';

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: APPLE_EASE,
      },
    },
  };

  return (
    <section className="min-h-[88vh] flex flex-col justify-center relative pt-24 sm:pt-28 pb-16 px-6 sm:px-8 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        {/* Location & Status Badge */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {portfolioData.personal.location}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {portfolioData.personal.statusText}
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink-primary-light dark:text-ink-primary-dark leading-[1.08]"
        >
          Hi, I'm {portfolioData.personal.name}.
        </motion.h1>

        {/* Hero Headline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-xl sm:text-2xl font-normal text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed max-w-2xl"
        >
          {portfolioData.personal.headline}
        </motion.p>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="mt-3 text-base text-ink-muted-light dark:text-ink-muted-dark leading-relaxed"
        >
          {portfolioData.personal.subheadline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* GitHub CTA */}
          <a
            href="https://github.com/devanxcode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium bg-surface-dark dark:bg-surface-light text-ink-primary-dark dark:text-ink-primary-light hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          {/* Get in touch CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-primary-light dark:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated active:scale-[0.98] transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>Get in touch</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Quiet Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-6 sm:left-8 flex items-center gap-2 text-xs text-ink-muted-light dark:text-ink-muted-dark"
      >
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};
