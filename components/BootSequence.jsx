'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function BootSequence() {
  const overlayRef = useRef(null);
  const sigPathRef = useRef(null);
  const nameTextRef = useRef(null);
  const progressFillRef = useRef(null);
  const [isHidden, setIsHidden] = useState(true);

  useGSAP(() => {
    const BOOT_KEY = 'portfolio_booted';
    
    if (typeof window !== 'undefined' && sessionStorage.getItem(BOOT_KEY)) {
      setIsHidden(true);
      window.dispatchEvent(new CustomEvent('boot-complete'));
      return;
    }

    setIsHidden(false);
    document.body.style.overflow = 'hidden';

    let aborted = false;
    const DURATION = 3.5; 

    const tl = gsap.timeline({
      onComplete: () => {
        if (!aborted) setTimeout(exitIntro, 600);
      }
    });

    if (sigPathRef.current) {
      tl.to(sigPathRef.current, {
        strokeDashoffset: 0,
        duration: DURATION,
        ease: 'power2.inOut',
      });
    }
    
    if (nameTextRef.current) {
      tl.to(nameTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, DURATION * 0.7);
    }

    const startTime = performance.now();
    function animateProgress() {
      if (aborted) return;
      const elapsed = performance.now() - startTime;
      const pct = Math.min((elapsed / (DURATION * 1000)) * 100, 100);
      if (progressFillRef.current) {
        progressFillRef.current.style.width = pct + '%';
      }
      if (pct < 100) requestAnimationFrame(animateProgress);
    }
    requestAnimationFrame(animateProgress);

    function exitIntro() {
      if (aborted) return;
      aborted = true;
      sessionStorage.setItem(BOOT_KEY, '1');
      if (overlayRef.current) {
        overlayRef.current.classList.add('is-tearing');
      }
      setTimeout(() => {
        setIsHidden(true);
        document.body.style.overflow = '';
        window.dispatchEvent(new CustomEvent('boot-complete'));
      }, 800);
    }

    const handleSkip = () => {
      if (!aborted) {
        tl.kill();
        exitIntro();
      }
    };

    const handleKeydown = (e) => {
      if (e.code === 'Space' || e.code === 'Escape') handleSkip();
    };

    const btn = document.getElementById('intro-skip');
    if (btn) btn.addEventListener('click', handleSkip);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      if (btn) btn.removeEventListener('click', handleSkip);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div ref={overlayRef} className="boot-overlay" aria-hidden="true">
      <div className="boot-overlay__inner">
        <svg className="boot-overlay__sig" viewBox="0 0 400 80" fill="none">
          <path ref={sigPathRef}
            d="M20,50 C28,20 38,18 45,40 C50,55 42,62 38,58 C32,52 42,25 55,30 C62,33 58,55 70,48 
               C78,42 82,35 88,38 C94,42 90,55 100,48 C108,42 112,32 120,38 
               M140,50 C145,25 155,22 160,38 C163,50 155,58 150,54 
               M175,55 C180,35 188,30 192,42 C195,52 186,58 182,54 C178,48 188,28 200,35 C208,40 204,55 215,48 
               C222,42 228,32 235,38 
               M260,50 C265,22 275,18 280,38 C283,48 276,58 270,54 
               M295,55 C300,38 308,32 312,42 C314,52 306,58 302,54 
               M325,35 C325,38 325,58 325,58 M320,38 C325,35 332,35 332,38"
            stroke="#F2A623"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 1500, strokeDashoffset: 1500 }}
          />
        </svg>

        <div ref={nameTextRef} className="boot-overlay__name" style={{ opacity: 0, transform: 'translateY(10px)' }}>
          Shubham Kumar Pal
        </div>

        <div className="boot-overlay__progress">
          <div ref={progressFillRef} className="boot-overlay__progress-fill"></div>
        </div>

        <button id="intro-skip" className="boot-overlay__skip">
          [press space to skip]
        </button>
      </div>
    </div>
  );
}
