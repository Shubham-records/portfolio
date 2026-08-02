'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Projects() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to('.projects__title', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.projects__header', start: 'top 80%', toggleActions: 'play none none reverse' },
    });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
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
    <section ref={container} id="projects" className="projects section--white">
      <div className="projects__header container">
        <h2 className="projects__title">
          things I've built
          <svg className="projects__title-squiggle" viewBox="0 0 220 10" preserveAspectRatio="none">
            <path d="M2,6 Q25,2 50,7 T100,5 T150,7 T200,4 L218,6" fill="none" stroke="#F2A623" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </h2>
      </div>

      <div className="projects__deck container">
        <article className="project-card" style={{ '--rot': '-2deg' }}>
          <div className="project-card__inner">
            <div className="pushpin" style={{ top: '-6px', right: '24px' }}></div>
            <div className="project-card__torn-edge"></div>
            <h3 className="project-card__title">auto-blogging-automation</h3>
            <p className="project-card__tag">Final year project · solo build</p>
            <p className="project-card__desc">
              <strong>Problem:</strong> Consistent SEO content takes hours of manual research and writing per post — most people either skip it or outsource it.
            </p>
            <p className="project-card__desc">
              <strong>What I built:</strong> An end-to-end pipeline that scrapes Reddit communities for real user pain points, researches SEO keywords, generates matching images via Gemini Flash, and writes SEO-formatted WordPress content in a custom voice via prompt engineering — then auto-injects images with alt tags using a keyword-based search-and-replace system.
            </p>
            <p className="project-card__desc">
              <strong>Constraint/trade-off:</strong> Chose to publish as drafts by default rather than full auto-publish — kept a manual review step to protect quality and voice consistency over full automation.
            </p>
            <p className="project-card__desc">
              <strong>Before/after:</strong> Before: hours of manual research and writing per post. After: a scheduled draft ready for a final read-through.
            </p>
            <div className="project-card__stack">
              <span style={{ '--rot': '-1deg' }}>Python</span>
              <span style={{ '--rot': '3deg' }}>Reddit API</span>
              <span style={{ '--rot': '-2deg' }}>Gemini API</span>
              <span style={{ '--rot': '1deg' }}>WordPress API</span>
            </div>
            <p className="project-card__footer">Result: Full marks, final semester — presented the full pipeline live.</p>
          </div>
        </article>

        <article className="project-card" style={{ '--rot': '3deg' }}>
          <div className="project-card__inner">
            <div className="tape" style={{ left: '16px', transform: 'rotate(-5deg)' }}></div>
            <div className="project-card__torn-edge"></div>
            <h3 className="project-card__title">odoo-api-debug-console</h3>
            <p className="project-card__tag">Odoo Apps · internal dev tool, solo build</p>
            <p className="project-card__desc">
              <strong>Problem:</strong> Client APIs weren't IP-whitelisted for local testing — the alternative was hand-building 10-12 separate Postman-style forms, one per endpoint.
            </p>
            <p className="project-card__desc">
              <strong>What I built:</strong> One reusable Odoo module: click a button, get the raw response — no per-API form-building.
            </p>
            <p className="project-card__desc">
              <strong>Constraint/trade-off:</strong> Traded configurability (editable request bodies per API) for speed — a fixed function per endpoint was faster to ship and cover every API I actually needed than a fully flexible form builder would have been.
            </p>
            <p className="project-card__desc">
              <strong>Before/after:</strong> Before: no way to test non-whitelisted APIs without a manual setup per endpoint. After: instant in-app response check, reused across every client project since.
            </p>
            <div className="project-card__stack">
              <span style={{ '--rot': '2deg' }}>Odoo</span>
              <span style={{ '--rot': '-3deg' }}>Python</span>
              <span style={{ '--rot': '1deg' }}>XML</span>
            </div>
          </div>
        </article>

        <article className="project-card" style={{ '--rot': '-1deg' }}>
          <div className="project-card__inner">
            <div className="pushpin" style={{ top: '-6px', left: '20px', right: 'auto' }}></div>
            <div className="project-card__torn-edge"></div>
            <h3 className="project-card__title">Odiware client work — 5 ERP builds</h3>
            <p className="project-card__tag">Full stack developer · production systems, team + solo work</p>
            <p className="project-card__desc">
              <strong>Problem:</strong> Each client came with a different operational bottleneck — from long manual data migrations to fragmented sales/delivery workflows to compliance-heavy government processes.
            </p>
            <p className="project-card__desc">
              <strong>My role:</strong> Built or co-built each of these as part of the Odiware team, with direct ownership of specific modules on each project.
            </p>
            <p className="project-card__desc">
              <strong>Constraint:</strong> All five were live client systems with real deadlines, existing data to preserve, and (for the government-linked project) compliance and API constraints outside my control.
            </p>
            <p className="project-card__desc"><strong>What I built, one line each:</strong></p>
            <ul className="project-card__list">
              <li>Construction management module</li>
              <li>Legacy Odoo 14 data migration</li>
              <li>Teacher–student exam and notes-sharing platform</li>
              <li>Apartment/HVAC service ERP (quotation → sales → delivery → commissions → invoicing)</li>
              <li>Government-integrated solar installation platform for a utility client</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
