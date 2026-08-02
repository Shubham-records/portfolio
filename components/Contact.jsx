'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const container = useRef(null);
  const sigSvgRef = useRef(null);

  useGSAP(() => {
    // Massive text animation
    gsap.from('.contact__massive-bg', {
      opacity: 0, x: -50, duration: 0.8,
      scrollTrigger: { trigger: '.contact__top', start: 'top 70%', toggleActions: 'play none none reverse' },
    });
    gsap.from('.contact__massive-fg', {
      opacity: 0, y: 50, duration: 0.8, delay: 0.2,
      scrollTrigger: { trigger: '.contact__top', start: 'top 70%', toggleActions: 'play none none reverse' },
    });

    // Right side links animation
    gsap.from('.contact__cta-wrap', {
      opacity: 0, x: 50, duration: 0.8, delay: 0.3,
      scrollTrigger: { trigger: '.contact__top', start: 'top 70%', toggleActions: 'play none none reverse' },
    });

    gsap.from('.contact__social-link', {
      opacity: 0, y: 20, duration: 0.4, stagger: 0.1, delay: 0.5,
      scrollTrigger: { trigger: '.contact__top', start: 'top 70%', toggleActions: 'play none none reverse' },
    });

    // Bottom left text animation
    gsap.from('.contact__pitch', {
      opacity: 0, y: 30, duration: 0.6, delay: 0.4,
      scrollTrigger: { trigger: '.contact__top', start: 'top 60%', toggleActions: 'play none none reverse' },
    });

    // Footer text animation
    gsap.from('.contact__footer-text p', {
      opacity: 0, y: 20, duration: 0.6, stagger: 0.2,
      scrollTrigger: { trigger: '.contact__footer', start: 'top 85%', toggleActions: 'play none none reverse' },
    });

    // Signature path animation
    const pathElements = container.current?.querySelectorAll('.contact__sig-word');
    if (pathElements && pathElements.length > 0) {
      pathElements.forEach((path) => {
        try {
          const length = path.getTotalLength() || 1000;
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        } catch (e) {
          gsap.set(path, { strokeDasharray: 1000, strokeDashoffset: 1000 });
        }
      });

      const sigTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.contact__footer',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      sigTl.to(pathElements, {
        strokeDashoffset: 0,
        duration: 1.6,
        stagger: 0.4,
        ease: 'power2.inOut',
      });
    }

    if (sigSvgRef.current) {
      gsap.fromTo(sigSvgRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact__footer',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }
  }, { scope: container });

  return (
    <div ref={container} id="contact" className="contact-wrapper">
      <section className="contact contact__top section--white">
        <div className="container contact__top-inner">
          <div className="contact__grid">
            
            <div className="contact__left">
              <h2 className="contact__massive-text">
                <span className="contact__massive-bg">contact</span>
                <span className="contact__massive-fg">Me</span>
              </h2>
              <p className="contact__pitch">
                Ready to make a move? Drop an email to<br/>
                discuss collaborations, or just to say hi.
              </p>
            </div>

            <div className="contact__right">
              <div className="contact__cta-wrap">
                <a href="mailto:subhampal342@gmail.com" className="contact__cta-link">
                  <span className="contact__cta-arrow">→</span> say hi before overthinking it
                </a>
                <p className="contact__cta-sub">
                  (OPENS YOUR MAIL APP — NO FORMS, NO FRICTION)
                </p>
              </div>

              <div className="contact__socials">
                <a href="https://github.com/Shubham-records" target="_blank" rel="noopener noreferrer" className="contact__social-link">-GITHUB</a>
                <a href="https://linkedin.com/in/shubham-kumar-pal-b30a45194" target="_blank" rel="noopener noreferrer" className="contact__social-link">-LINKEDIN</a>
                <a href="mailto:subhampal342@gmail.com" className="contact__social-link">-MAIL</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="contact__footer section--white">
        <div className="container contact__footer-inner">
          <div className="contact__footer-text">
            <p>Bye, have a great day at your job.</p>
            <p>Hoping you get more creative portfolios to look at.</p>
          </div>
          
          <div className="contact__footer-sign">
            <svg ref={sigSvgRef} className="contact__signature" viewBox="0 0 500 90" fill="none">
              <path className="contact__sig-word"
                d="M 20 70 C 30 30, 40 20, 50 20 C 60 20, 50 40, 40 50 C 30 60, 40 70, 50 70 C 60 70, 65 60, 65 50 C 70 10, 65 10, 70 20 L 70 70 C 70 45, 85 45, 85 55 L 85 70 C 90 70, 95 65, 95 60 C 95 70, 105 70, 105 60 L 105 70 C 110 70, 115 65, 115 60 C 120 10, 115 10, 120 20 L 120 70 C 120 45, 135 45, 135 60 C 135 70, 125 70, 120 70 C 130 60, 140 60, 140 60 C 145 10, 140 10, 145 20 L 145 70 C 145 45, 160 45, 160 55 L 160 70 C 165 70, 170 65, 170 60 C 170 45, 185 45, 185 55 C 185 65, 170 65, 170 55 L 185 55 L 185 70 C 190 70, 195 65, 195 60 C 195 45, 205 45, 205 55 L 205 70 C 205 45, 215 45, 215 55 L 215 70 C 215 45, 225 45, 225 55 L 225 70 C 230 70, 235 65, 235 60"
              />
              <path className="contact__sig-word"
                d="M 255 20 L 255 70 L 255 45 C 265 20, 270 20, 270 20 C 265 35, 260 40, 255 45 C 265 70, 270 70, 270 70 C 275 70, 280 65, 280 60 C 280 70, 290 70, 290 60 L 290 70 C 295 70, 300 65, 300 60 C 300 45, 310 45, 310 55 L 310 70 C 310 45, 320 45, 320 55 L 320 70 C 320 45, 330 45, 330 55 L 330 70 C 335 70, 340 65, 340 60 C 340 45, 355 45, 355 55 C 355 65, 340 65, 340 55 L 355 55 L 355 70 C 360 70, 365 65, 365 60 L 365 45 C 375 45, 380 55, 380 55 L 380 70 C 385 70, 390 65, 390 60"
              />
              <path className="contact__sig-word"
                d="M 410 70 L 410 20 C 430 20, 430 45, 410 45 L 410 70 C 415 70, 420 65, 420 60 C 420 45, 435 45, 435 55 C 435 65, 420 65, 420 55 L 435 55 L 435 70 C 440 70, 445 65, 445 60 C 450 10, 445 10, 450 20 L 450 70 C 455 70, 460 65, 460 60"
              />
              <path className="contact__sig-word"
                d="M 25 78 Q 240 88 475 74"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
