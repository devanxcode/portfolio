import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, FolderGit2, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/icons/BrandIcons';
import { portfolioData } from '../data/portfolioData';
import { APPLE_EASE } from '../utils/animation';

export const ProjectsPage = () => {
  const { projects } = portfolioData;

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-8 max-w-6xl mx-auto">
      {/* Back to Home Link */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: APPLE_EASE }}
        className="mb-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary-light dark:text-ink-secondary-dark hover:text-ink-primary-light dark:hover:text-ink-primary-dark transition-colors py-1"
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
        className="max-w-3xl mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Build Log</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary-light dark:text-ink-primary-dark">
          My Projects
        </h1>

        <p className="mt-4 text-base sm:text-lg text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
          A dedicated showcase of web applications and tools I am building while learning the MERN stack and Python.
        </p>
      </motion.div>

      {/* Case 1: No projects published yet (Honest Apple-like empty state) */}
      {projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: APPLE_EASE }}
          className="rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-sm"
        >
          {/* Icon Badge */}
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
            I am currently focusing on building real, functional applications using React, Node.js, Express, and MongoDB. To keep this portfolio 100% honest, projects will appear here with live deployments and GitHub code once they reach release quality.
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
              to="/#roadmap"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium hairline-border bg-surface-light dark:bg-surface-dark text-ink-primary-light dark:text-ink-primary-dark hover:bg-surface-light-elevated dark:hover:bg-surface-dark-elevated transition-colors"
            >
              <span>View Learning Roadmap</span>
            </Link>
          </div>
        </motion.div>
      ) : (
        /* Case 2: When projects are populated in portfolioData.projects */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id || idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: APPLE_EASE }}
              className="p-7 rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark flex flex-col justify-between hover:scale-[1.01] transition-transform shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-ink-primary-light dark:text-ink-primary-dark">
                    {project.title}
                  </h3>

                  {project.status === 'completed' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
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
                      className="px-2.5 py-1 text-xs rounded-lg hairline-border bg-surface-light-elevated dark:bg-surface-dark-elevated text-ink-secondary-light dark:text-ink-secondary-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="pt-5 hairline-border-t flex items-center justify-between text-xs">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-ink-primary-light dark:text-ink-primary-dark hover:text-accent transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                  >
                    <span>Live Demo</span>
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
