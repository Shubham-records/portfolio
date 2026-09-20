'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    number: '01',
    title: 'auto-blogging-automation',
    tag: 'Final year project · solo build',
    descriptions: [
      { label: 'Problem', text: 'Consistent SEO content takes hours of manual research and writing per post — most people either skip it or outsource it.' },
      { label: 'What I built', text: 'An end-to-end pipeline that scrapes Reddit communities for real user pain points, researches SEO keywords, generates matching images via Gemini Flash, and writes SEO-formatted WordPress content in a custom voice via prompt engineering — then auto-injects images with alt tags using a keyword-based search-and-replace system.' },
      { label: 'Constraint/trade-off', text: 'Chose to publish as drafts by default rather than full auto-publish — kept a manual review step to protect quality and voice consistency over full automation.' },
      { label: 'Before/after', text: 'Before: hours of manual research and writing per post. After: a scheduled draft ready for a final read-through.' },
    ],
    stack: ['Python', 'Reddit API', 'Gemini API', 'WordPress API'],
    footer: 'Result: Full marks, final semester — presented the full pipeline live.',
  },
  {
    number: '02',
    title: 'odoo-api-debug-console',
    tag: 'Odoo Apps · internal dev tool, solo build',
    descriptions: [
      { label: 'Problem', text: "Client APIs weren't IP-whitelisted for local testing — the alternative was hand-building 10-12 separate Postman-style forms, one per endpoint." },
      { label: 'What I built', text: 'One reusable Odoo module: click a button, get the raw response — no per-API form-building.' },
      { label: 'Constraint/trade-off', text: 'Traded configurability (editable request bodies per API) for speed — a fixed function per endpoint was faster to ship and cover every API I actually needed than a fully flexible form builder would have been.' },
      { label: 'Before/after', text: 'Before: no way to test non-whitelisted APIs without a manual setup per endpoint. After: instant in-app response check, reused across every client project since.' },
    ],
    stack: ['Odoo', 'Python', 'XML'],
  },
  {
    number: '03',
    title: 'Odiware client work — 5 ERP builds',
    tag: 'Full stack developer · production systems, team + solo work',
    descriptions: [
      { label: 'Problem', text: 'Each client came with a different operational bottleneck — from long manual data migrations to fragmented sales/delivery workflows to compliance-heavy government processes.' },
      { label: 'My role', text: 'Built or co-built each of these as part of the Odiware team, with direct ownership of specific modules on each project.' },
      { label: 'Constraint', text: 'All five were live client systems with real deadlines, existing data to preserve, and (for the government-linked project) compliance and API constraints outside my control.' },
    ],
    list: [
      'Construction management module',
      'Legacy Odoo 14 data migration',
      'Teacher–student exam and notes-sharing platform',
      'Apartment/HVAC service ERP (quotation → sales → delivery → commissions → invoicing)',
      'Government-integrated solar installation platform for a utility client',
    ],
  },
];

export default function Projects() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.to('.projects__title', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.projects__header', start: 'top 80%', toggleActions: 'play none none reverse' },
    });

    const items = document.querySelectorAll('.projects__item');
    items.forEach(item => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
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

      <div className="projects__list container">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={index}
              className={`projects__item ${isEven ? 'projects__item--left' : 'projects__item--right'}`}
              style={{ opacity: 0, transform: 'translateY(60px)' }}
            >
              <div className="projects__item-number">{project.number}</div>
              <div className="projects__item-body">
                <h3 className="projects__item-title">{project.title}</h3>
                <p className="projects__item-tag">{project.tag}</p>
                {project.descriptions.map(({ label, text }, i) => (
                  <p key={i} className="projects__item-desc">
                    <strong>{label}:</strong> {text}
                  </p>
                ))}
                {project.list && (
                  <ul className="projects__item-list">
                    {project.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {project.stack && (
                  <div className="projects__item-stack">
                    {project.stack.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                )}
                {project.footer && (
                  <p className="projects__item-footer">{project.footer}</p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
