'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Origin() {
  const container = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    gsap.to('.origin__title', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.origin__header', start: 'top 80%', toggleActions: 'play none none reverse' },
    });

    if (!isMobile) {
      ScrollTrigger.create({
        trigger: '#origin-pages-wrap',
        start: 'top 70%',
        end: 'bottom 30%',
        onUpdate: (self) => {
          const path = document.getElementById('origin-connector');
          if (path) {
            path.style.strokeDashoffset = String(1200 - (self.progress * 1200));
          }
        },
      });
    }

    const pages = document.querySelectorAll('.origin__page');
    pages.forEach(page => {
      gsap.to(page, {
        opacity: 1, y: 0, duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: page,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.to('.origin__timeline', {
      opacity: 1, y: 0, duration: 0.6,
      scrollTrigger: { trigger: '.origin__timeline', start: 'top 85%', toggleActions: 'play none none reverse' },
    });

    gsap.to('.origin__closing', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.origin__closing', start: 'top 90%', toggleActions: 'play none none reverse' },
    });
  }, { scope: container });

  return (
    <section ref={container} id="origin" className="origin section--cream">
      <div className="origin__header container">
        <h2 className="origin__title">
          how I got here
          <svg className="origin__title-squiggle" viewBox="0 0 200 10" preserveAspectRatio="none">
            <path d="M2,6 Q20,2 40,7 T80,5 T120,7 T160,4 T198,6" fill="none" stroke="#F2A623" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </h2>
      </div>

      <div className="origin__pages-wrap container" id="origin-pages-wrap">
        <svg className="origin__connector" viewBox="0 0 40 800" preserveAspectRatio="none">
          <path id="origin-connector" 
            d="M20,0 C25,40 15,80 20,120 C25,160 10,200 20,240 C30,280 15,320 20,360 C25,400 10,440 20,480 C30,520 15,560 20,600 C25,640 15,680 20,720 C25,760 15,790 20,800"
            fill="none" stroke="#F2A623" strokeWidth="2.5" strokeLinecap="round"
            style={{ strokeDasharray: 1200, strokeDashoffset: 1200 }}/>
        </svg>

        <div className="origin__page">
          <div className="origin__page-inner">
            <div className="pushpin"></div>
            <h3 className="origin__page-heading">The curiosity spark</h3>
            <p className="origin__page-body">
              Started tinkering with code not because someone told me to, but because I wanted to understand how things worked. Broke things. Fixed things. Broke more things. That was the whole curriculum.
            </p>
          </div>
        </div>

        <div className="origin__page">
          <div className="origin__page-inner" style={{ '--tilt': '2deg' }}>
            <div className="tape" style={{ left: 'auto', right: '16px', transform: 'rotate(5deg)' }}></div>
            <h3 className="origin__page-heading">Building with purpose</h3>
            <p className="origin__page-body">
              Realized that writing code isn't just about making things run — it's about making things matter. Every line is a decision. Every project, a small bet on what the world needs.
            </p>
          </div>
        </div>

        <div className="origin__timeline">
          <div className="origin__timeline-item"><span className="origin__tl-date">Jan 2025</span><span className="origin__tl-text">joined Odiware as an intern</span></div>
          <div className="origin__timeline-item"><span className="origin__tl-date">+2 months</span><span className="origin__tl-text">already shipping fixes solo</span></div>
          <div className="origin__timeline-item"><span className="origin__tl-date">+4 months</span><span className="origin__tl-text">handling client work directly</span></div>
          <div className="origin__timeline-item"><span className="origin__tl-date">Aug 2025</span><span className="origin__tl-text">converted to full-time</span></div>
          <div className="origin__timeline-item"><span className="origin__tl-date">Sep 2025</span><span className="origin__tl-text">Completed end to end ERP build for an international HVAC/AC services client (ecom shop → quotation → sales → delivery → commissions → installer payments → dashboards → invoices)</span></div>
          <div className="origin__timeline-item"><span className="origin__tl-date">since</span><span className="origin__tl-text">scaled up to a government-integrated solar installation platform for a utility client</span></div>
        </div>

        <div className="origin__page">
          <div className="origin__page-inner" style={{ '--tilt': '-1deg' }}>
            <div className="pushpin" style={{ right: 'auto', left: '16px' }}></div>
            <h3 className="origin__page-heading">Shipping is the habit</h3>
            <p className="origin__page-body">
              Odoo modules, solar portals, CRM systems, creative tools — I stopped waiting for permission and started shipping. Ugly v1s that turned into solid products used by real people, every day.
            </p>
          </div>
        </div>

        <div className="origin__closing">
          <p className="origin__closing-text">
            "If I ever write a book on how I see building things, it will have infinite pages. And I'll still be figuring it out."
          </p>
        </div>
      </div>
    </section>
  );
}
