'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BestWork() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to('.bestwork__title', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.bestwork__header', start: 'top 80%', toggleActions: 'play none none reverse' },
    });

    gsap.to('.bestwork__trail-wrap', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.bestwork__trail-wrap', start: 'top 85%', toggleActions: 'play none none reverse' },
    });

    ScrollTrigger.create({
      trigger: '#best-work',
      start: 'top 40%',
      end: 'bottom 60%',
      onUpdate: (self) => {
        const fill = document.getElementById('bestwork-trail-fill');
        if (fill) {
          fill.style.strokeDashoffset = String(1000 - (self.progress * 1000));
        }

        const flag = document.getElementById('bestwork-flag');
        const trailBg = document.getElementById('bestwork-trail-bg');
        if (flag && trailBg) {
          try {
            const totalLength = trailBg.getTotalLength();
            const point = trailBg.getPointAtLength(self.progress * totalLength);
            flag.setAttribute('transform', `translate(${point.x},${point.y})`);
          } catch(e) {}
        }
      },
    });

    const cards = document.querySelectorAll('.bestwork__card');
    cards.forEach(card => {
      gsap.to(card, {
        opacity: 1, y: 0, duration: 0.7,
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

      <div className="bestwork__content container">
        <div className="bestwork__trail-wrap">
          <svg className="bestwork__trail" viewBox="0 0 600 200" preserveAspectRatio="none">
            <path id="bestwork-trail-bg"
              d="M30,160 C80,140 120,180 180,120 C220,80 260,140 320,100 C380,60 420,130 480,90 C520,60 560,100 570,80"
              fill="none" stroke="rgba(26,26,26,0.12)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8,6"/>
            <path id="bestwork-trail-fill"
              d="M30,160 C80,140 120,180 180,120 C220,80 260,140 320,100 C380,60 420,130 480,90 C520,60 560,100 570,80"
              fill="none" stroke="#F2A623" strokeWidth="3" strokeLinecap="round"
              style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}/>
            
            <circle cx="180" cy="120" r="6" fill="#F2A623" opacity="0.3"/>
            <circle cx="480" cy="90" r="6" fill="#F2A623" opacity="0.3"/>
            
            <g id="bestwork-flag" transform="translate(30,160)">
              <path d="M0,0 L0,-24 L18,-20 L16,-14 L20,-10 L0,-6" fill="#F2A623" stroke="#F2A623" strokeWidth="1"/>
              <line x1="0" y1="0" x2="0" y2="-24" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
              <text x="3" y="-12" fontFamily="var(--font-hand)" fontSize="6" fill="#fff" fontWeight="700">here</text>
            </g>
          </svg>

          <span className="bestwork__marker" style={{ left: '28%', top: '50%' }}>EZTRACK</span>
          <span className="bestwork__marker" style={{ left: '78%', top: '35%' }}>HypeCia</span>
        </div>

        <div className="bestwork__cards">
          <div className="bestwork__card" style={{ opacity: 1, transform: 'translateY(0)' }}>
            <div className="bestwork__card-inner" style={{ '--rot': '-2deg' }}>
              <div className="pushpin" style={{ top: '-6px', right: '20px' }}></div>
              <h3 className="bestwork__card-title">EZTRACK</h3>
              <p className="bestwork__card-desc">
                <strong>Problem:</strong> Most small businesses nearby still track memberships and invoices on paper — no dashboard, no automated follow-up on dues, no visibility into stock.
              </p>
              <p className="bestwork__card-desc">
                <strong>My role:</strong> Solo — architecture, backend, frontend, and deployment all mine. Used AI for audit and iteration only after the core flow, logic, and UI were built.
              </p>
              <p className="bestwork__card-desc">
                <strong>What I built:</strong> A role-based (owner/staff) SaaS for gyms — member and supplement sales, dashboards, analytics, due-date alerts, low-stock alerts.
              </p>
              <p className="bestwork__card-desc">
                <strong>Constraint/trade-off:</strong> Needed to keep hosting costs near zero for a small-business customer, so I run it on Cloudflare Pages + Render's free tier with a Google Apps Script cron job keeping the backend warm — a deliberate trade of a slightly hacky keep-alive workaround for near-zero running cost. Mid-build, I migrated the stack from Flask/React/SQLAlchemy to FastAPI + Next.js (for SEO) + Supabase — more rework, but the right call for where the product needed to go.
              </p>
              <p className="bestwork__card-desc">
                <strong>Before/after:</strong> Before: paper registers and manual dues follow-up. After: a live dashboard with automated due and stock alerts.
              </p>
              <div className="bestwork__card-meta">
                <span className="bestwork__card-stat">Status: Live, first customer: Revolution Multi Gym.</span>
                <a href="https://eztrack.pages.dev" target="_blank" rel="noopener noreferrer" className="bestwork__card-link">
                  view live →
                </a>
              </div>
            </div>
          </div>

          <div className="bestwork__card" style={{ opacity: 1, transform: 'translateY(0)' }}>
            <div className="bestwork__card-inner" style={{ '--rot': '2deg' }}>
              <div className="tape" style={{ left: '14px', transform: 'rotate(-6deg)' }}></div>
              <h3 className="bestwork__card-title">hypeciaconnect.com</h3>
              <p className="bestwork__card-desc">
                <strong>Problem:</strong> Hypecia needed to pitch infrastructure and AI security services to tier-1 telecom operators, but their technical catalog spans everything from telecom networks to MEP engineering — scattered and hard to present credibly.
              </p>
              <p className="bestwork__card-desc">
                <strong>My role:</strong> Built the site end-to-end (landed the project through referral).
              </p>
              <p className="bestwork__card-desc">
                <strong>What I built:</strong> A corporate site that organizes the full service catalog clearly and leads with proof rather than feature lists — a flagship 157-site Airtel deployment plus partner testimonials — built specifically to drive consultation bookings, not just look credible.
              </p>
              <p className="bestwork__card-desc">
                <strong>Constraint/trade-off:</strong> Chose to foreground the Airtel case study and testimonials above the fold rather than a full service menu, betting that trust-first beats information-first for a B2B audience with limited attention.
              </p>
              <div className="bestwork__card-meta">
                <a href="https://hypeciaconnect.com" target="_blank" rel="noopener noreferrer" className="bestwork__card-link">
                  view live →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
