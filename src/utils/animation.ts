import type { Transition, Variants } from 'framer-motion';

export const APPLE_EASE = [0.22, 1, 0.36, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.7,
  ease: APPLE_EASE,
};

export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: APPLE_EASE,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};
