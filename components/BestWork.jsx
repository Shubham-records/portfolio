'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const works = [
  {
    title: 'EZTRACK',
    image: '/eztrack-hero.png',
    link: 'https://eztrack.pages.dev',
  },
  {
    title: 'HypeCia Connect',
    image: '/hypecia-hero.png',
    link: 'https://hypeciaconnect.com',
  },
];

export default function BestWork() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to('.bestwork__title', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.bestwork__header', start: 'top 80%', toggleActions: 'play none none reverse' },
    });

    const cards = document.querySelectorAll('.bestwork__card');
    cards.forEach(card => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, { scope: container });

  return (
    <section ref={container} id="best-work" className="bestwork section--white">
      <div className="bestwork__header container">
        <h2 className="bestwork__title">
          the ones I'm proudest of
          <svg className="bestwork__title-squiggle" viewBox="0 0 280 10" preserveAspectRatio="none">
            <path d="M2,6 Q30,1 60,7 T120,5 T180,7 T240,4 L278,6" fill="none" stroke="#F2A623" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </h2>
      </div>

      <div className="bestwork__cards container">
        {works.map(({ title, image, link }, index) => (
          <div key={index} className="bestwork__card" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <div className="bestwork__card-image-wrap">
              <img src={image} alt={title} className="bestwork__card-image" />
              <div className="bestwork__card-actions">
                <a href={link} target="_blank" rel="noopener noreferrer" className="bestwork__card-action-btn" aria-label={`View ${title}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
            <h3 className="bestwork__card-title">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
