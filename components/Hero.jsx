'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const playHeroAnim = () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate the massive title
      tl.to('.editorial-hero__title-char', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power4.out',
      });

      // Animate the roles on the left
      tl.to('.editorial-hero__role', {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.4');

      // Animate the image reveal
      tl.to('.editorial-hero__image-wrap', {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: 'power4.inOut',
      }, '-=0.8');

      // Animate the image scale inside the wrap
      tl.to('.editorial-hero__image', {
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
      }, '-=1.2');

      // Marquee fade in
      tl.to('.editorial-hero__marquee-wrap', {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.5');
    };

    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('portfolio_booted')) {
        playHeroAnim();
      } else {
        window.addEventListener('boot-complete', () => setTimeout(playHeroAnim, 200), { once: true });
      }
    }
  }, { scope: container });

  const titleText = "SHUBHAM KUMAR PAL";

  return (
    <section ref={container} id="home" className="editorial-hero section--white">
      <div className="container" style={{ position: 'relative', paddingBottom: '60px' }}>
        
        {/* Huge Editorial Title */}
        <h1 className="editorial-hero__title" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
          {titleText.split('').map((char, index) => (
            <span 
              key={index} 
              className="editorial-hero__title-char" 
              style={{ 
                opacity: 0, 
                transform: 'translateY(100px)', 
                display: 'inline-block',
                whiteSpace: char === ' ' ? 'pre' : 'normal'
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* 2-Column Grid */}
        <div className="editorial-hero__grid">
          
          {/* Left Column: Roles */}
          <div className="editorial-hero__roles">
            <h2 className="editorial-hero__role">System Architecture</h2>
            <h2 className="editorial-hero__role">Backend Engineering</h2>
            <h2 className="editorial-hero__role">Business Solutions</h2>
            <h2 className="editorial-hero__role">Full Stack Development</h2>
            </div>

          {/* Right Column: Portrait */}
          <div className="editorial-hero__image-container">
            <div className="editorial-hero__image-wrap" style={{ clipPath: 'inset(100% 0% 0% 0%)' }}>
              <img 
                src="/mine.jpeg" 
                alt="Shubham Kumar Pal" 
                className="editorial-hero__image"
                style={{ display: 'block', scale: 1.2, transformOrigin: 'center' }}
              />
            </div>
          </div>

        </div>

      </div>

      {/* Scrolling Marquee */}
      <div className="editorial-hero__marquee-wrap" style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <div className="editorial-hero__marquee">
          <div className="editorial-hero__marquee-content">
            PYTHON ✦ JAVASCRIPT ✦ ODOO ✦ FASTAPI ✦ FLASK ✦ NEXT.JS ✦ REACT ✦ HTML5 ✦ CSS3 ✦ TAILWIND CSS ✦ POSTGRESQL ✦ SUPABASE ✦ MONGODB ✦ SQLALCHEMY ✦ GIT ✦ FIGMA ✦&nbsp;
          </div>
        </div>
      </div>
    </section>
  );
}
