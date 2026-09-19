import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Clock,
  Compass,
  CheckCircle2,
  Info,
  Hexagon,
  Scale,
  Brain,
  Code2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { APPLE_EASE } from '../utils/animation';

export const TradingPage = () => {
  const [logoError, setLogoError] = useState(false);
  const { propFirm } = portfolioData.trading;

  const corePillars = [
    {
      icon: Shield,
      title: 'Strict Risk Architecture',
      desc: 'Capital preservation is priority zero. Trading with fixed risk parameters (strictly 0.5%–1% per setup) ensures drawdowns stay far below prop firm limits.',
    },
    {
      icon: Brain,
      title: 'Emotional Detachment',
      desc: 'Treating trading as a purely probabilistic system. Wins and losses are simply statistical outcomes; the only measure of success is rule adherence.',
    },
    {
      icon: Clock,
      title: 'Patience & Quality Over Quantity',
      desc: 'Sitting on hands when market conditions are messy. Waiting hours or days for clean market structure rather than forcing trades out of boredom.',
    },
    {
      icon: Scale,
      title: 'Accountability & Journaling',
      desc: 'Every execution is logged, reviewed, and audited. Reviewing mistakes without ego is how compounding consistency happens over months and years.',
    },
  ];

  const parallels = [
    {
      title: 'Debugging Code ↔ Trade Review',
      desc: 'Finding a root cause behind a software defect requires the exact same objective mindset as reviewing trade logs to understand why an execution failed.',
    },
    {
      title: 'Rule-Based Logic ↔ Algorithmic Thinking',
      desc: 'Writing clean, declarative code with clear conditional branches mirrors executing market orders only when strict, predefined criteria are met.',
    },
    {
      title: 'Resilience Under Uncertainty',
      desc: 'Neither code deployments nor financial markets offer 100% certainty. Both demand staying calm, diagnosing problems rationally, and executing solutions steadily.',
    },
  ];

  const routineSteps = [
    {
      step: '01',
      title: 'Pre-Market Preparation',
      desc: 'Reviewing economic calendar events, liquidity schedules, and higher timeframe structure before market open.',
    },
    {
      step: '02',
      title: 'Session Execution',
      desc: 'Waiting patiently for valid setup criteria. Calculating exact position size based on stop-loss distance prior to order entry.',
    },
    {
      step: '03',
      title: 'Post-Market Journaling',
      desc: 'Documenting screenshots, emotional state, and rule compliance. Grading the process rather than the P&L.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4 sm:px-8 max-w-5xl mx-auto">
      {/* Back to Home Link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: APPLE_EASE }}
        className="mb-6 sm:mb-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark transition-colors py-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: APPLE_EASE }}
        className="max-w-3xl mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark">
          <Compass className="w-3.5 h-3.5 text-accent" />
          <span>Secondary Pursuit</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary-light dark:text-ink-primary-dark">
          Markets & Prop Trading
        </h1>

        <p className="mt-4 text-base sm:text-lg text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
          Outside of software engineering, I actively trade evaluated capital with a proprietary trading firm. It is my testing ground for emotional discipline, risk control, and structured execution.
        </p>
      </motion.div>

      {/* Section 1: Funded Hive Spotlight Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: APPLE_EASE }}
        className="rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark p-6 sm:p-10 mb-12 sm:mb-16 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-4">
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
                <h2 className="text-xl sm:text-2xl font-bold text-ink-primary-light dark:text-ink-primary-dark">
                  {propFirm.name}
                </h2>
                <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  {propFirm.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary-light dark:text-ink-secondary-dark">
                Proprietary trading firm evaluation & capital management
              </p>
            </div>
          </div>

          <a
            href={propFirm.inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold bg-surface-dark dark:bg-surface-light text-ink-primary-dark dark:text-ink-primary-light hover:opacity-90 active:scale-[0.98] transition-all shadow-sm shrink-0"
          >
            <span>Visit Funded Hive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="mt-6 space-y-4 text-sm sm:text-base text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
          <p>
            Trading with a prop firm requires passing rigorous multi-stage performance evaluations where risk management is strictly enforced. Violating daily loss limits or maximum drawdown instantly terminates an account.
          </p>
          <p>
            This model completely eliminates the illusion of easy profits. It forces an unwavering focus on capital preservation, disciplined lot sizing, and consistent execution over short-term gratification.
          </p>
        </div>
      </motion.div>

      {/* Section 2: Core Risk & Execution Pillars */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary-light dark:text-ink-primary-dark mb-3">
          The Four Risk Pillars
        </h2>
        <p className="text-sm sm:text-base text-ink-secondary-light dark:text-ink-secondary-dark mb-8">
          Principles that govern every single market decision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * idx, ease: APPLE_EASE }}
                className="p-6 rounded-2xl hairline-border bg-surface-light dark:bg-surface-dark hover:border-black/[0.15] dark:hover:border-white/[0.15] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-surface-light-elevated dark:bg-surface-dark-elevated text-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-ink-primary-light dark:text-ink-primary-dark">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Section 3: Daily Routine */}
      <div className="mb-12 sm:mb-16 rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary-light dark:text-ink-primary-dark mb-2">
          Daily Execution Process
        </h2>
        <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark mb-8">
          A systematic routine to maintain consistency and eliminate emotional impulse.
        </p>

        <div className="space-y-4">
          {routineSteps.map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl hairline-border bg-surface-light-elevated/50 dark:bg-surface-dark-elevated/40 flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-mono font-bold hairline-border bg-surface-light dark:bg-surface-dark text-accent shrink-0">
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-primary-light dark:text-ink-primary-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Parallels Between Code and Markets */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-2 text-accent">
          <Code2 className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-wider font-semibold">Crossover Mindset</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary-light dark:text-ink-primary-dark mb-3">
          How Trading Strengthens My Engineering
        </h2>
        <p className="text-sm sm:text-base text-ink-secondary-light dark:text-ink-secondary-dark mb-8">
          The mental models developed in financial markets directly improve how I write and debug software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {parallels.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx, ease: APPLE_EASE }}
              className="p-6 rounded-2xl hairline-border bg-surface-light dark:bg-surface-dark flex flex-col justify-between"
            >
              <div>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mb-3" />
                <h3 className="text-base font-semibold text-ink-primary-light dark:text-ink-primary-dark mb-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 5: Transparent Disclaimer */}
      <div className="p-6 rounded-2xl hairline-border bg-surface-light-elevated/40 dark:bg-surface-dark-elevated/30 flex items-start gap-3 text-xs text-ink-muted-light dark:text-ink-muted-dark leading-relaxed">
        <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
        <div>
          <strong className="text-ink-secondary-light dark:text-ink-secondary-dark font-medium">
            Important Notice:{' '}
          </strong>
          This page represents personal market interest, study, and participation in prop firm evaluation programs. It is not financial advice, investment advisory, or trade recommendations. Capital in trading is at risk.
        </div>
      </div>
    </div>
  );
};
