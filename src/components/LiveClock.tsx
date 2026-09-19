import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const LiveClock = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeString(`${new Intl.DateTimeFormat('en-US', options).format(now)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeString) return null;

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono hairline-border bg-surface-light dark:bg-surface-dark text-ink-secondary-light dark:text-ink-secondary-dark">
      <Clock className="w-3 h-3 text-accent" />
      <span>{timeString}</span>
    </span>
  );
};
