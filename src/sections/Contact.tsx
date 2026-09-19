import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowUpRight, Send } from 'lucide-react';
import { GithubIcon, InstagramIcon } from '../components/icons/BrandIcons';
import { APPLE_EASE } from '../utils/animation';

interface ContactProps {
  onShowToast?: (msg: string) => void;
}

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

export const Contact = ({ onShowToast }: ContactProps) => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const subject = encodeURIComponent(`Message from ${name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name || 'Anonymous'}\nEmail: ${senderEmail || 'Not provided'}\n\nMessage:\n${message}`
    );

    window.open(`mailto:dexanxcode@gmail.com?subject=${subject}&body=${body}`, '_blank');
    if (onShowToast) {
      onShowToast('Opening your default mail client...');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="Connect"
        title="Get in touch."
        subtitle="Whether you'd like to discuss code, share feedback, or just say hello — my inbox is always open."
      />

      {/* 3 Main Social Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

      {/* Interactive Quick Message Composer Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.6, ease: APPLE_EASE }}
        className="rounded-3xl hairline-border bg-surface-light dark:bg-surface-dark p-8 sm:p-10 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-ink-primary-light dark:text-ink-primary-dark">
              Send a Direct Message
            </h3>
            <p className="text-sm text-ink-secondary-light dark:text-ink-secondary-dark mt-1">
              Have a question or collaboration proposal? Draft it directly below.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-ink-secondary-light dark:text-ink-secondary-dark mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Johnson"
                className="w-full px-4 py-3 rounded-xl hairline-border bg-surface-light-elevated dark:bg-surface-dark-elevated text-sm text-ink-primary-light dark:text-ink-primary-dark placeholder:text-ink-muted-light dark:placeholder:text-ink-muted-dark focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-ink-secondary-light dark:text-ink-secondary-dark mb-1.5">
                Your Email Address
              </label>
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full px-4 py-3 rounded-xl hairline-border bg-surface-light-elevated dark:bg-surface-dark-elevated text-sm text-ink-primary-light dark:text-ink-primary-dark placeholder:text-ink-muted-light dark:placeholder:text-ink-muted-dark focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-ink-secondary-light dark:text-ink-secondary-dark mb-1.5">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Devanand, I came across your portfolio and wanted to reach out regarding..."
              className="w-full px-4 py-3 rounded-xl hairline-border bg-surface-light-elevated dark:bg-surface-dark-elevated text-sm text-ink-primary-light dark:text-ink-primary-dark placeholder:text-ink-muted-light dark:placeholder:text-ink-muted-dark focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-surface-dark dark:bg-surface-light text-ink-primary-dark dark:text-ink-primary-light hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
