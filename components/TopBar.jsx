'use client';

import { useEffect, useState } from 'react';

const taglines = [
  "Built this site myself. No Figma, just vibes and Tailwind.",
  "console.log('please don't check my commit messages')",
  "Deployed more times today than I've had chai.",
  "This site has better uptime than my sleep schedule.",
  "Currently solving: your business problem. Previously solved: five of them.",
  "Yes, I tested this in production. No, I'm not sorry.",
  "Built with more coffee than documentation.",
];

export default function TopBar() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState('[░░░░░░░░] 0% compiled');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setIsFading(false);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const TOTAL_BLOCKS = 8;
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(Math.round((scrollTop / docHeight) * 100), 100) : 0;
      const filled = Math.round((pct / 100) * TOTAL_BLOCKS);
      const empty = TOTAL_BLOCKS - filled;
      const bar = '█'.repeat(filled) + '░'.repeat(empty);
      setProgress(`[${bar}] ${pct}% compiled`);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <header className="top-bar">
      <div className="top-bar__name">
        <span>Shubham Kumar Pal</span>
      </div>
      <div className="top-bar__tagline">
        <span className={`tagline-text ${isFading ? 'is-fading' : ''}`}>
          {taglines[currentTagline]}
        </span>
      </div>
      <div className="top-bar__progress-area">
        <span className="top-bar__progress-bar">{progress}</span>
      </div>
    </header>
  );
}
