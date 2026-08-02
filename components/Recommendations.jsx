'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Recommendations() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.recommendations__title', {
      opacity: 1, y: 0, duration: 0.7,
      scrollTrigger: { trigger: '.recommendations__header', start: 'top 80%', toggleActions: 'play none none reverse' },
    });

    const cards = gsap.utils.toArray('.recommendations__card');
    cards.forEach((card, i) => {
      gsap.to(card, {
        opacity: 1, y: 0, duration: 0.7,
        delay: i * 0.1,
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
    <section ref={container} id="recommendations" className="recommendations section--white" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0 0' }}>
      {/* Background split */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '65%', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'rgba(59, 130, 246, 0.1)', zIndex: 0 }}></div>

      <div style={{ position: 'relative', zIndex: 1, paddingBottom: '100px' }}>
        <div className="recommendations__header container" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p className="recommendations__tag" style={{ color: '#3b82f6', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <span style={{ color: '#3b82f6', marginRight: '6px' }}>✦</span> RECOMMENDATIONS
          </p>
          <h2 className="recommendations__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-hand)', fontWeight: 700, color: 'var(--text-on-black)', opacity: 0, transform: 'translateY(20px)' }}>
            what people say about me
          </h2>
          <p className="recommendations__subtitle" style={{ color: 'var(--text-muted-black)', marginTop: '16px', fontSize: '1.1rem', maxWidth: '600px', margin: '16px auto 0' }}>
            A few words from people I've designed with, shipped alongside, and problem-solved next to.
          </p>
        </div>

        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', padding: '0 2rem' }}>
          
          {/* Card 1: Manager */}
          <div className="recommendations__card" style={{ display: 'flex', flex: '1 1 500px', maxWidth: '700px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '4px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', opacity: 0, transform: 'translateY(30px)' }}>
            <div style={{ padding: '24px', width: '220px', borderRight: '1px dashed rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', background: '#fcfcfc', flexShrink: 0 }}>
              {/* Paperclip */}
              <svg style={{ position: 'absolute', top: '-25px', left: '15px', width: '30px', height: '80px', filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.15))', transform: 'rotate(-5deg)' }} viewBox="0 0 24 64" fill="none" stroke="#ddd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 50V14c0-4.4-3.6-8-8-8s-8 3.6-8 8v34c0 6.6 5.4 12 12 12s12-5.4 12-12V18" stroke="#a3a3a3" strokeWidth="4"/>
                 <path d="M12 50V14c0-4.4-3.6-8-8-8s-8 3.6-8 8v34c0 6.6 5.4 12 12 12s12-5.4 12-12V18" stroke="#f1f1f1" strokeWidth="2"/>
              </svg>
              
              <div style={{ width: '120px', height: '120px', background: '#eee', borderRadius: '4px', marginTop: '20px', overflow: 'hidden' }}>
                 <img src="https://i.pravatar.cc/150?img=11" alt="Manager" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-hand)', fontSize: '1.2rem', marginTop: '16px', color: 'var(--text-on-white)', textAlign: 'center' }}>Amit Desai</h4>
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '0.9rem', color: '#999', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>Manager,<br/>Odiware</p>
            </div>
            <div style={{ padding: '40px 32px', flex: 1, display: 'flex', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.25rem', color: 'var(--text-on-white)', lineHeight: 1.8 }}>
                "Shubham is an exceptional developer who truly understands business needs. His ability to own entire features from concept to production made him an invaluable asset to Odiware. His work on the HVAC ERP system alone saved our clients countless hours. He doesn't just write code; he builds solutions."
              </p>
            </div>
          </div>

          {/* Card 2: Tech Lead */}
          <div className="recommendations__card" style={{ display: 'flex', flex: '1 1 500px', maxWidth: '700px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '4px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', opacity: 0, transform: 'translateY(30px)' }}>
            <div style={{ padding: '24px', width: '220px', borderRight: '1px dashed rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', background: '#fcfcfc', flexShrink: 0 }}>
              {/* Paperclip */}
              <svg style={{ position: 'absolute', top: '-25px', left: '15px', width: '30px', height: '80px', filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.15))', transform: 'rotate(-5deg)' }} viewBox="0 0 24 64" fill="none" stroke="#ddd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 50V14c0-4.4-3.6-8-8-8s-8 3.6-8 8v34c0 6.6 5.4 12 12 12s12-5.4 12-12V18" stroke="#a3a3a3" strokeWidth="4"/>
                 <path d="M12 50V14c0-4.4-3.6-8-8-8s-8 3.6-8 8v34c0 6.6 5.4 12 12 12s12-5.4 12-12V18" stroke="#f1f1f1" strokeWidth="2"/>
              </svg>

              <div style={{ width: '120px', height: '120px', background: '#eee', borderRadius: '4px', marginTop: '20px', overflow: 'hidden' }}>
                 <img src="https://i.pravatar.cc/150?img=68" alt="Tech Lead" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-hand)', fontSize: '1.2rem', marginTop: '16px', color: 'var(--text-on-white)', textAlign: 'center' }}>Priya Singh</h4>
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '0.9rem', color: '#999', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>Tech Lead,<br/>Odiware</p>
            </div>
            <div style={{ padding: '40px 32px', flex: 1, display: 'flex', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.25rem', color: 'var(--text-on-white)', lineHeight: 1.8 }}>
                "Working alongside Shubham has been fantastic. He quickly adapted to our tech stack and consistently delivered high-quality, maintainable code. Whether he was tackling complex integrations or optimizing the frontend, his problem-solving skills and structured approach always stood out."
              </p>
            </div>
          </div>

          {/* Card 3: Client */}
          <div className="recommendations__card" style={{ display: 'flex', flex: '1 1 500px', maxWidth: '700px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '4px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', opacity: 0, transform: 'translateY(30px)' }}>
            <div style={{ padding: '24px', width: '220px', borderRight: '1px dashed rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', background: '#fcfcfc', flexShrink: 0 }}>
              {/* Paperclip */}
              <svg style={{ position: 'absolute', top: '-25px', left: '15px', width: '30px', height: '80px', filter: 'drop-shadow(2px 4px 4px rgba(0,0,0,0.15))', transform: 'rotate(-5deg)' }} viewBox="0 0 24 64" fill="none" stroke="#ddd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 50V14c0-4.4-3.6-8-8-8s-8 3.6-8 8v34c0 6.6 5.4 12 12 12s12-5.4 12-12V18" stroke="#a3a3a3" strokeWidth="4"/>
                 <path d="M12 50V14c0-4.4-3.6-8-8-8s-8 3.6-8 8v34c0 6.6 5.4 12 12 12s12-5.4 12-12V18" stroke="#f1f1f1" strokeWidth="2"/>
              </svg>

              <div style={{ width: '120px', height: '120px', background: '#eee', borderRadius: '4px', marginTop: '20px', overflow: 'hidden' }}>
                 <img src="https://i.pravatar.cc/150?img=33" alt="Client" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-hand)', fontSize: '1.2rem', marginTop: '16px', color: 'var(--text-on-white)', textAlign: 'center' }}>Michael Vance</h4>
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '0.9rem', color: '#999', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.4 }}>Director,<br/>HVAC Services</p>
            </div>
            <div style={{ padding: '40px 32px', flex: 1, display: 'flex', alignItems: 'center' }}>
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.25rem', color: 'var(--text-on-white)', lineHeight: 1.8 }}>
                "Shubham built an end-to-end platform that completely transformed how we manage our sales and installations. The system he developed is fast, intuitive, and handles our complex commission structures flawlessly. He was responsive to our requirements and delivered beyond our expectations."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
