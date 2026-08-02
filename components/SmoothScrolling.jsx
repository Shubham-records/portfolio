'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrolling({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    window.lenis = lenis;

    const refreshST = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshST);
    window.addEventListener('boot-complete', () => {
      setTimeout(refreshST, 100);
      setTimeout(refreshST, 400);
    });
    window.addEventListener('resize', refreshST);

    return () => {
      window.removeEventListener('load', refreshST);
      window.removeEventListener('resize', refreshST);
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
}
