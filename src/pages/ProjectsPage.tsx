import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, FolderGit2, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import { portfolioData } from '../data/portfolioData';
import { APPLE_EASE } from '../utils/animation';

export const ProjectsPage = () => {
  const { projects } = portfolioData;

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-20 px-4 sm:px-8 max-w-6xl mx-auto">
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
        className="max-w-3xl mb-12 sm:mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Build Log</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary-light dark:text-ink-primary-dark">
          My Projects
        </h1>

        <p className="mt-4 text-base sm:text-lg text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
          Functional applications and developer tools built with TypeScript, React, and modern web architectures.
        </p>
      </motion.div>

      {/* Case 1: No projects published */}
      {projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: APPLE_EASE }}
          className="rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-sm"
        >
          <div className="w-16 h-16 rounded-2xl mx-auto mb-6 bg-surface-light-elevated dark:bg-surface-dark-elevated text-accent flex items-center justify-center">
            <FolderGit2 className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Active Development in Progress
          </div>

          <h2 className="text-2xl font-bold text-ink-primary-light dark:text-ink-primary-dark mb-3">
            Projects coming soon
          </h2>

          <p className="text-sm sm:text-base text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed max-w-xl mx-auto mb-8">
            I am currently focusing on building real, functional applications using React, Node.js, Express, and MongoDB. Projects appear here with live deployments and GitHub code once they reach release quality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/devanxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-surface-dark dark:bg-surface-light text-ink-primary-dark dark:text-ink-primary-light hover:opacity-90 transition-opacity shadow-sm"
            >
              <GithubIcon size={14} />
              <span>Track commits on GitHub</span>
            </a>

            <Link
              to="/#skills"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-primary-light dark:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors"
            >
              <span>Explore Tech Skills</span>
            </Link>
          </div>
        </motion.div>
      ) : (
        /* Case 2: Render live project cards */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id || idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: APPLE_EASE }}
              className="p-7 sm:p-8 rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark flex flex-col justify-between hover:scale-[1.01] hover:border-black/[0.15] dark:hover:border-white/[0.15] transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-ink-primary-light dark:text-ink-primary-dark">
                    {project.title}
                  </h2>

                  {project.status === 'completed' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      Live Project
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full shrink-0">
                      <Clock className="w-3 h-3 animate-pulse" />
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-xl hairline-border bg-surface-light-elevated dark:bg-surface-dark-elevated text-ink-secondary-light dark:text-ink-secondary-dark font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 hairline-border-t flex flex-wrap items-center justify-between gap-3 text-xs">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark transition-colors py-1"
                  >
                    <GithubIcon size={15} />
                    <span>View Repository</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-surface-dark dark:bg-surface-light text-ink-primary-dark dark:text-ink-primary-light hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                  >
                    <span>Open Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
