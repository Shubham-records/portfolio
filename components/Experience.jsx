'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';

export default function Experience() {
  const container = useRef(null);
  const track = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.experience__title', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.experience__header', start: 'top 80%', toggleActions: 'play none none reverse' },
    });
    
    // Only apply horizontal scroll if we're on client side and track exists
    if (track.current && isClient) {
      let scrollWidth = track.current.scrollWidth;
      let clientWidth = document.documentElement.clientWidth;
      
      if (scrollWidth > clientWidth) {
        gsap.to(track.current, {
          x: () => -(track.current.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            pin: true,
            scrub: 1,
            start: 'center center',
            end: () => "+=" + (track.current.scrollWidth - document.documentElement.clientWidth),
            invalidateOnRefresh: true, 
          }
        });
      }
    }

  }, { scope: container, dependencies: [isClient] });

  return (
    <section ref={container} id="experience" className="experience section--white" style={{ overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 0' }}>
      <div className="experience__header container" style={{ textAlign: 'center', marginBottom: '100px' }}>
        <p className="experience__tag" style={{ color: '#3b82f6', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          <span style={{ color: '#3b82f6', marginRight: '6px' }}>✦</span> EXPERIENCE
        </p>
        <h2 className="experience__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-hand)', fontWeight: 700, opacity: 0, transform: 'translateY(20px)' }}>
          the journey so far
        </h2>
        <p className="experience__subtitle" style={{ color: 'var(--text-muted-black)', marginTop: '16px', fontSize: '1.1rem', maxWidth: '600px', margin: '16px auto 0' }}>
          From building production Odoo ERP systems to shipping independent SaaS products — owning features from client requirement to live release.
        </p>
      </div>

      <div className="experience__track-wrap" style={{ width: '100%', position: 'relative' }}>
        <div ref={track} className="experience__track" style={{ display: 'flex', width: 'fit-content', padding: '0 4rem', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          
          {/* Card 1 */}
          <div className="experience__card-container" style={{ position: 'relative' }}>
            <div className="experience__date-badge" style={{ position: 'absolute', top: '-70px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', border: '1px solid rgba(74, 222, 128, 0.2)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
              Aug 2025 - Present
            </div>
            <div className="experience__connector" style={{ position: 'absolute', top: '-38px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '38px', background: '#4ade80' }}>
              <div style={{ position: 'absolute', top: 0, left: '-4px', width: '10px', height: '10px', borderRadius: '50%', background: '#4ade80' }}></div>
            </div>
            
            <div className="experience__card" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '4px', padding: '32px', width: '450px', flexShrink: 0, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)', color: '#1a1a1a' }}>
              <div className="experience__card-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="experience__logo" style={{ width: '48px', height: '48px', background: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eaeaea' }}>
                  <img src="https://ui-avatars.com/api/?name=Odiware&background=fff&color=000&bold=true" alt="Odiware" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-hand)' }}>Full Stack Developer</h3>
                  <p style={{ color: '#555', fontSize: '0.95rem' }}>Odiware</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#666', fontSize: '0.85rem' }}>
                  <MapPin size={14} /> India
                </div>
              </div>
              <ul className="experience__card-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.6, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#999' }}>•</span>
                  Design and build production <strong>Odoo ERP modules</strong> end to end using Python, XML, JavaScript, and PostgreSQL for enterprise and government-linked clients.
                </li>
                <li style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.6, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#999' }}>•</span>
                  Completed end-to-end ERP build for an international HVAC/AC upgrade services client covering e-commerce, quotation, sales, project management, and PDF invoice generation.
                </li>
                <li style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.6, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#999' }}>•</span>
                  Built a government API integrated solar installation platform for a utility sector client, handling the full project workflow from application to installation tracking.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience__line" style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }}></div>

          {/* Card 2 */}
          <div className="experience__card-container" style={{ position: 'relative', transform: 'translateY(50px)' }}>
            <div className="experience__date-badge" style={{ position: 'absolute', top: '-70px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', border: '1px solid rgba(96, 165, 250, 0.2)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
              Jan 2025 - Jul 2025
            </div>
            <div className="experience__connector" style={{ position: 'absolute', top: '-38px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '38px', background: '#60a5fa' }}>
              <div style={{ position: 'absolute', top: 0, left: '-4px', width: '10px', height: '10px', borderRadius: '50%', background: '#60a5fa' }}></div>
            </div>
            
            <div className="experience__card" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '4px', padding: '32px', width: '450px', flexShrink: 0, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)', color: '#1a1a1a' }}>
              <div className="experience__card-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="experience__logo" style={{ width: '48px', height: '48px', background: '#000', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eaeaea' }}>
                  <img src="https://ui-avatars.com/api/?name=Odiware&background=000&color=0df&bold=true" alt="Odiware" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '4px', fontFamily: 'var(--font-hand)' }}>Full Stack Developer Intern</h3>
                  <p style={{ color: '#555', fontSize: '0.95rem' }}>Odiware</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#666', fontSize: '0.85rem' }}>
                  <MapPin size={14} /> India
                </div>
              </div>
              <ul className="experience__card-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.6, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#999' }}>•</span>
                  Began contributing independent fixes within the first 2 months and took on direct client facing work by month 4, ahead of typical intern ramp-up.
                </li>
                <li style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.6, paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#999' }}>•</span>
                  Built ERP module development and automation across real client scenarios under senior guidance; converted to full time based on performance.
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{ width: '4rem', flexShrink: 0 }}></div>
        </div>

        {/* Decorative background line that goes through all timeline items */}
        <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)', zIndex: 1, pointerEvents: 'none' }}></div>
      </div>
    </section>
  );
}
