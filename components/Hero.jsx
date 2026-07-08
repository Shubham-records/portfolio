'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (glow && window.innerWidth > 768) {
      const handleMouseMove = (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        glow.style.opacity = '0.25';
      };
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useGSAP(() => {
    const playHeroAnim = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.hero__sticky-note', { opacity: 1, duration: 0.5 });

      tl.to('.hero__word', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
      }, 0.3);

      tl.to('#hero-underline-1', {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      }, '-=0.2');

      tl.to('#hero-underline-2', {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      }, '-=0.4');

      tl.to('#hero-sub', { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
      tl.to('.hero__badges', { opacity: 1, duration: 0.5 }, '-=0.2');
      tl.to('.hero__doodle-arrow', { opacity: 1, duration: 0.4, stagger: 0.15 }, '-=0.3');
      
      tl.to('#hero-scroll-cue', {
        opacity: 1,
        duration: 0.4,
        onComplete: () => {
          document.getElementById('hero-scroll-cue')?.classList.add('is-visible');
        }
      }, '-=0.1');
    };

    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('portfolio_booted')) {
        playHeroAnim();
      } else {
        window.addEventListener('boot-complete', () => setTimeout(playHeroAnim, 200), { once: true });
      }
    }
  }, { scope: container });

  return (
    <section ref={container} id="home" className="hero section--black">
      <div ref={glowRef} id="hero-glow" className="hero__glow"></div>

      <div className="hero__content container">
        <div className="hero__sticky-note">
          <div className="tape"></div>
          <span>shipping since 2025</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__word">I</span>{' '}
          <span className="hero__word">don't</span>{' '}
          <span className="hero__word">just</span>{' '}
          <span className="hero__word">write</span>{' '}
          <span className="hero__word">code</span>{' '}
          <br/>
          <span className="hero__word">I</span>{' '}
          <span className="hero__word">turn</span>{' '}
          <span className="hero__word">business</span>{' '}
          <span className="hero__word">problems</span>{' '}
          <span className="hero__word">into</span>{' '}
          <span className="hero__word hero__word--underlined">
            running
            <svg className="hero__squiggle" viewBox="0 0 120 12" preserveAspectRatio="none">
              <path d="M2,8 C10,2 20,12 30,6 C40,1 50,11 60,5 C70,0 80,10 90,6 C100,2 110,10 118,5" 
                fill="none" stroke="#F2A623" strokeWidth="3" strokeLinecap="round" id="hero-underline-1"/>
            </svg>
          </span>{' '}
          <span className="hero__word hero__word--underlined">
            systems.
            <svg className="hero__squiggle hero__squiggle--2" viewBox="0 0 130 12" preserveAspectRatio="none">
              <path d="M2,6 C12,1 22,11 32,5 C42,0 52,10 62,4 C72,0 82,11 92,6 C102,1 112,10 122,4 L128,6" 
                fill="none" stroke="#F2A623" strokeWidth="3" strokeLinecap="round" id="hero-underline-2"/>
            </svg>
          </span>
        </h1>

        <p className="hero__sub" id="hero-sub">
          Odoo · FastAPI · Next.js · Python — from ERP workflows to SaaS that people actually pay to use.
        </p>

        <div className="hero__badges" id="hero-badges">
          <span className="hero__badge-chip" style={{ '--rot': '-3deg' }}>Odoo</span>
          <span className="hero__badge-chip" style={{ '--rot': '2deg' }}>Python</span>
          <span className="hero__badge-chip" style={{ '--rot': '-1deg' }}>Next.js</span>
          <span className="hero__badge-chip" style={{ '--rot': '4deg' }}>FastAPI</span>
        </div>

        <svg className="hero__doodle-arrow hero__doodle-arrow--1" viewBox="0 0 60 40" fill="none">
          <path d="M5,30 C15,28 25,15 45,10 M45,10 L38,8 M45,10 L42,16" stroke="#F2A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        </svg>
        <svg className="hero__doodle-arrow hero__doodle-arrow--2" viewBox="0 0 50 50" fill="none">
          <path d="M5,5 C20,8 35,20 40,40 M40,40 L36,33 M40,40 L33,38" stroke="#F2A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
        </svg>

        <div className="hero__scroll-cue" id="hero-scroll-cue">
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
            <path d="M12,2 L12,32 M12,32 C10,28 6,26 4,24 M12,32 C14,28 18,26 20,24" 
              stroke="#F2A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>
          <span className="hero__scroll-label">scroll down</span>
        </div>
      </div>
    </section>
  );
}
