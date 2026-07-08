'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {
  const container = useRef(null);
  const sigPathRef = useRef(null);
  const sigSvgRef = useRef(null);

  useGSAP(() => {
    gsap.to('.contact__title', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.contact', start: 'top 70%', toggleActions: 'play none none reverse' },
    });

    gsap.to('.contact__arrow-doodle', {
      opacity: 1, duration: 0.5,
      scrollTrigger: { trigger: '.contact', start: 'top 65%', toggleActions: 'play none none reverse' },
      delay: 0.3,
    });

    ScrollTrigger.create({
      trigger: '.contact__signature-wrap',
      start: 'top 80%',
      onEnter: () => {
        if (sigSvgRef.current) gsap.to(sigSvgRef.current, { opacity: 1, duration: 0.3 });
        if (sigPathRef.current) gsap.to(sigPathRef.current, { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' });
      },
      onLeaveBack: () => {
        if (sigSvgRef.current) gsap.to(sigSvgRef.current, { opacity: 0, duration: 0.3 });
        if (sigPathRef.current) gsap.to(sigPathRef.current, { strokeDashoffset: 1500, duration: 1, ease: 'power2.inOut' });
      }
    });

    gsap.to('.contact__cta-wrap', {
      opacity: 1, y: 0, duration: 0.6,
      scrollTrigger: { trigger: '.contact__cta-wrap', start: 'top 85%', toggleActions: 'play none none reverse' },
    });

    gsap.to('.contact__socials', {
      opacity: 1, y: 0, duration: 0.5,
      scrollTrigger: { trigger: '.contact__socials', start: 'top 90%', toggleActions: 'play none none reverse' },
    });

    gsap.to('.contact__closing', {
      opacity: 1, duration: 0.5,
      scrollTrigger: { trigger: '.contact__closing', start: 'top 95%', toggleActions: 'play none none reverse' },
    });
  }, { scope: container });

  return (
    <section ref={container} id="contact" className="contact section--black">
      <div className="contact__content container">
        <h2 className="contact__title">
          let's build something
        </h2>

        <svg className="contact__arrow-doodle" viewBox="0 0 80 60" fill="none">
          <path d="M5,50 C20,45 40,30 55,15 M55,15 L48,20 M55,15 L52,24" 
            stroke="#F2A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <div className="contact__signature-wrap">
          <svg ref={sigSvgRef} className="contact__signature" viewBox="0 0 400 80" fill="none">
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
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDasharray: 1500, strokeDashoffset: 1500 }}
            />
          </svg>
        </div>

        <div className="contact__cta-wrap">
          <svg className="contact__envelope" viewBox="0 0 36 28" fill="none">
            <path d="M2,4 L18,16 L34,4 M2,4 C2,2 4,2 4,2 L32,2 C34,2 34,4 34,4 L34,24 C34,26 32,26 32,26 L4,26 C2,26 2,24 2,24 Z" 
              stroke="#F2A623" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>

          <a href="mailto:subhampal342@gmail.com" className="contact__cta-btn">
            say hi before overthinking it
          </a>
        </div>

        <div className="contact__socials">
          <a href="https://github.com/Shubham-records" target="_blank" rel="noopener noreferrer" className="contact__social-link">
            GitHub /Shubham-records
          </a>
          <a href="https://linkedin.com/in/shubham-kumar-pal-b30a45194" target="_blank" rel="noopener noreferrer" className="contact__social-link">
            LinkedIn /shubham-kumar-pal-b30a45194
          </a>
        </div>

        <p className="contact__closing">
          no forms, no friction — just an inbox
        </p>
      </div>
    </section>
  );
}
