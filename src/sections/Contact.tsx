import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, InstagramIcon } from '../components/icons/BrandIcons';
import { APPLE_EASE } from '../utils/animation';

interface IconComponentProps {
  iconName: 'github' | 'mail' | 'instagram';
  className?: string;
  size?: number;
}

const ContactIcon = ({ iconName, className, size = 20 }: IconComponentProps) => {
  switch (iconName) {
    case 'github':
      return <GithubIcon size={size} className={className} />;
    case 'instagram':
      return <InstagramIcon size={size} className={className} />;
    case 'mail':
    default:
      return <Mail size={size} className={className} />;
  }
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="Connect"
        title="Get in touch."
        subtitle="Whether you'd like to discuss code, collaborate on a project, or just say hello — my inbox is always open."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioData.socials.map((item, idx) => {
          const isEmail = item.url.startsWith('mailto:');

          return (
            <motion.a
              key={item.label}
              href={item.url}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: APPLE_EASE }}
              className="group p-7 rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark flex flex-col justify-between hover:scale-[1.02] hover:shadow-sm transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-surface-light-elevated dark:bg-surface-dark-elevated text-accent group-hover:scale-110 transition-transform">
                    <ContactIcon iconName={item.iconName} size={20} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-muted-light dark:text-ink-muted-dark group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-lg font-bold text-ink-primary-light dark:text-ink-primary-dark mb-1">
                  {item.label}
                </h3>
                <p className="text-xs font-mono text-accent dark:text-accent mb-3">
                  {item.username}
                </p>
                <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 hairline-border-t">
                <span className="text-xs font-medium text-ink-primary-light dark:text-ink-primary-dark group-hover:text-accent transition-colors flex items-center gap-1">
                  Open {item.label}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
