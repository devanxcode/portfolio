import { motion } from 'framer-motion';
import { APPLE_EASE } from '../utils/animation';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) => {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: APPLE_EASE }}
      className={`mb-12 md:mb-16 ${isCentered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-medium tracking-wide uppercase rounded-full hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink-primary-light dark:text-ink-primary-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
