import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Clock,
  CheckCircle2,
  Info,
  Hexagon,
  Scale,
  Brain,
  Calculator,
  Layers,
  SlidersHorizontal,
  ArrowUpRight,
  LineChart,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { APPLE_EASE } from '../utils/animation';

export const TradingPage = () => {
  const [logoError, setLogoError] = useState(false);
  const { propFirm, strategy } = portfolioData.trading;

  const corePillars = [
    {
      icon: Shield,
      title: 'Strict Risk Architecture',
      desc: 'Capital preservation is priority zero. Trading strictly 0.5%–1% risk per setup ensures drawdowns stay far below prop firm limits.',
    },
    {
      icon: Brain,
      title: 'Emotional Detachment',
      desc: 'Treating trading as a purely probabilistic system. Wins and losses are statistical outcomes; the only metric of success is rule adherence.',
    },
    {
      icon: Clock,
      title: 'Selective Patience',
      desc: 'Sitting on hands when market structure is messy. Waiting hours or days for clean Malaysian SnR key levels rather than forcing random trades.',
    },
    {
      icon: Scale,
      title: 'Accountability & Journaling',
      desc: 'Every manual execution is logged, snapshotted, and audited. Reviewing mistakes without ego is how long-term consistency is built.',
    },
  ];


  const routineSteps = [
    {
      step: '01',
      title: 'HTF Structure & Key Levels (Daily / H4)',
      desc: 'Marking dominant market trends, fresh horizontal support and resistance zones, and major liquidity areas on clean naked charts before the session begins.',
    },
    {
      step: '02',
      title: 'LTF Entry Confirmation & Lot Sizing (H1 / M15)',
      desc: 'Waiting for price to react at the SnR level (SBR/RBS). Calculating exact standard lot size and risk capital using my Position Size Calculator before order entry.',
    },
    {
      step: '03',
      title: 'Post-Market Journaling & Audit',
      desc: 'Logging screenshots, entry rationale, emotional state, and rule compliance. Grading execution discipline rather than raw P&L.',
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
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-amber-600 dark:text-amber-400">
            <LineChart className="w-3.5 h-3.5" />
            <span>Discretionary Funded Trader</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark">
            <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
            <span>Malaysian SnR Strategy</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary-light dark:text-ink-primary-dark">
          Funded Trader • Malaysian SnR
        </h1>

        <p className="mt-4 text-base sm:text-lg text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
          Outside of software engineering, I am a manual discretionary price action trader operating evaluated capital with{' '}
          <strong className="text-ink-primary-light dark:text-ink-primary-dark font-medium">Funded Hive</strong>. My edge is built purely on{' '}
          <strong className="text-ink-primary-light dark:text-ink-primary-dark font-medium">Malaysian Support & Resistance (SnR)</strong> — analyzing naked charts, fresh horizontal levels, and strict risk control with zero automated bots or lagging indicators.
        </p>
      </motion.div>

      {/* Strategy Showcase: Malaysian SnR Deep Dive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: APPLE_EASE }}
        className="rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark p-6 sm:p-10 mb-12 sm:mb-16 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
              <Layers className="w-4 h-4" />
              <span>Core Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary-light dark:text-ink-primary-dark">
              {strategy.name} (Support & Resistance)
            </h2>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 self-start sm:self-auto">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Naked Price Action • No Bots</span>
          </div>
        </div>

        <p className="mt-6 text-sm sm:text-base text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
          {strategy.description}
        </p>

        {/* 4 Core Pillars of Malaysian SnR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {strategy.keyConcepts.map((concept, idx) => (
            <div
              key={concept.label}
              className="p-5 rounded-2xl hairline-border bg-surface-light-elevated/60 dark:bg-surface-dark-elevated/40 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-6 h-6 rounded-lg bg-accent/10 text-accent font-mono text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-ink-primary-light dark:text-ink-primary-dark">
                  {concept.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
                {concept.detail}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Custom Position Size Calculator Tool */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: APPLE_EASE }}
        className="rounded-3xl hairline-border bg-gradient-to-br from-surface-light to-surface-light-elevated dark:from-surface-dark dark:to-surface-dark-elevated p-6 sm:p-10 mb-12 sm:mb-16 shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
              <Calculator className="w-4 h-4" />
              <span>Risk Management Tool</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-ink-primary-light dark:text-ink-primary-dark mb-2">
              Built to Solve Real Risk: Position Size Calculator
            </h2>
            <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
              When managing evaluated prop firm capital, standard lots cannot be guessed. A miscalculated pip value on Gold or Forex pairs can trigger a daily drawdown violation. I coded and deployed my own web application to calculate exact lots, risk capital, and stop loss margins in seconds before placing trades.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0 w-full md:w-auto">
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold hairline-border bg-surface-light dark:bg-surface-dark text-ink-primary-light dark:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors"
            >
              <span>View in Projects</span>
            </Link>
            <a
              href="https://position-size-calculator-sigma.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold bg-surface-dark dark:bg-surface-light text-ink-primary-dark dark:text-ink-primary-light hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
            >
              <span>Launch Calculator</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Prop Firm Evaluation Spotlight: Funded Hive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: APPLE_EASE }}
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
                Proprietary evaluation & risk-managed trading account
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
            Trading evaluated capital with a prop firm requires adhering to non-negotiable performance constraints. Breaching the daily loss limit or trailing maximum drawdown immediately invalidates the account.
          </p>
          <p>
            This structure eliminates gambler mentalities and reinforces what matters: patience for pristine Malaysian SnR setups, calculating every position size precisely, and protecting capital above all else.
          </p>
        </div>
      </motion.div>

      {/* Section 2: Core Risk Pillars */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary-light dark:text-ink-primary-dark mb-3">
          The Four Risk Pillars
        </h2>
        <p className="text-sm sm:text-base text-ink-secondary-light dark:text-ink-secondary-dark mb-8">
          Strict rules governing every single market execution.
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
          Daily SnR Execution Routine
        </h2>
        <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark mb-8">
          A disciplined, step-by-step workflow to eliminate impulse trading.
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

      {/* Section 4: Transparent Disclaimer */}
      <div className="p-6 rounded-2xl hairline-border bg-surface-light-elevated/40 dark:bg-surface-dark-elevated/30 flex items-start gap-3 text-xs text-ink-muted-light dark:text-ink-muted-dark leading-relaxed">
        <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
        <div>
          <strong className="text-ink-secondary-light dark:text-ink-secondary-dark font-medium">
            Important Notice:{' '}
          </strong>
          {portfolioData.trading.disclaimer}
        </div>
      </div>
    </div>
  );
};
