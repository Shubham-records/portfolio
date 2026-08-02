'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Origin() {
  const container = useRef(null);
  const scrollWrap = useRef(null);
  const pathRef = useRef(null);
  const nodeRefs = useRef([]);

  const originData = [
    {
      title: "The curiosity spark",
      x: 650,
      y: 300,
      contentPosition: "above",
      content: (
        <p>Started tinkering with code not because someone told me to, but because I wanted to understand how things worked. Broke things. Fixed things. Broke more things. That was the whole curriculum.</p>
      )
    },
    {
      title: "Building with purpose",
      x: 1450,
      y: 70,
      contentPosition: "below",
      content: (
        <p>Realized that writing code isn't just about making things run — it's about making things matter. Every line is a decision. Every project, a small bet on what the world needs.</p>
      )
    },
    {
      title: "The Timeline",
      x: 2250,
      y: 300,
      contentPosition: "above",
      content: (
        <div className="origin-horizontal__timeline">
          <div className="origin-horizontal__tl-item"><span className="origin-horizontal__tl-date">Jan 2025</span><span className="origin-horizontal__tl-text">joined Odiware as an intern</span></div>
          <div className="origin-horizontal__tl-item"><span className="origin-horizontal__tl-date">+2 months</span><span className="origin-horizontal__tl-text">already shipping fixes solo</span></div>
          <div className="origin-horizontal__tl-item"><span className="origin-horizontal__tl-date">+4 months</span><span className="origin-horizontal__tl-text">handling client work directly</span></div>
          <div className="origin-horizontal__tl-item"><span className="origin-horizontal__tl-date">Aug 2025</span><span className="origin-horizontal__tl-text">converted to full-time</span></div>
          <div className="origin-horizontal__tl-item"><span className="origin-horizontal__tl-date">Sep 2025</span><span className="origin-horizontal__tl-text">Completed end to end ERP build for an international HVAC/AC services client</span></div>
          <div className="origin-horizontal__tl-item"><span className="origin-horizontal__tl-date">since</span><span className="origin-horizontal__tl-text">scaled up to a government-integrated solar installation platform</span></div>
        </div>
      )
    },
    {
      title: "Shipping is the habit",
      x: 3050,
      y: 70,
      contentPosition: "below",
      content: (
        <p>Odoo modules, solar portals, CRM systems, creative tools — I stopped waiting for permission and started shipping. Ugly v1s that turned into solid products used by real people, every day.</p>
      )
    },
    {
      title: "Endless Pages",
      x: 3850,
      y: 300,
      contentPosition: "above",
      content: (
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text-on-white)' }}>
          "If I ever write a book on how I see building things, it will have infinite pages. And I'll still be figuring it out."
        </p>
      )
    }
  ];

  useGSAP(() => {
    if (!scrollWrap.current || !pathRef.current || !container.current) return;

    const getScrollAmount = () => {
      let scrollWidth = scrollWrap.current.scrollWidth;
      return -(scrollWidth - window.innerWidth);
    };

    // Prepare SVG path drawing
    const pathLength = pathRef.current.getTotalLength();
    gsap.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
    
    // Hide nodes initially
    nodeRefs.current.forEach(el => {
      if (el) gsap.set(el, { scale: 0, opacity: 0, y: 40 });
    });

    const tween = gsap.to(scrollWrap.current, {
      x: getScrollAmount,
      ease: "none",
      onUpdate: () => {
        if (!pathRef.current || !scrollWrap.current) return;
        
        const currentX = Math.abs(gsap.getProperty(scrollWrap.current, "x"));
        const halfScreen = window.innerWidth * 0.5;
        
        // The line tip starts moving smoothly across the screen
        const tipX_Screen = Math.min(currentX, halfScreen);
        const svgScreenX = -currentX;
        const tipX_SVG = tipX_Screen - svgScreenX;
        
        // Map X coordinate to approximate drawn length (container width: 4200)
        const drawnLen = tipX_SVG * (pathLength / 4200);
        const clampedDrawnLen = Math.max(0, Math.min(pathLength, drawnLen));
        
        gsap.set(pathRef.current, { strokeDashoffset: pathLength - clampedDrawnLen });
        
        // Use exact path math to get the pixel-perfect tip coordinate for reveals
        const tipPoint = pathRef.current.getPointAtLength(clampedDrawnLen);
        
        // Reveal nodes when the drawn line tip reaches near their X coordinate
        nodeRefs.current.forEach((el, i) => {
          if (!el) return;
          const targetX = originData[i].x;
          const isRevealed = el.dataset.revealed === "true";
          
          if (tipPoint.x >= (targetX - 80) && !isRevealed) {
            el.dataset.revealed = "true";
            gsap.to(el, { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)", overwrite: "auto" });
          } else if (tipPoint.x < (targetX - 120) && isRevealed) {
            el.dataset.revealed = "false";
            gsap.to(el, { scale: 0, opacity: 0, y: 40, duration: 0.4, ease: "power2.in", overwrite: "auto" });
          }
        });
      }
    });

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: () => `+=${scrollWrap.current.scrollWidth - window.innerWidth}`,
      pin: true,
      anticipatePin: 1,
      animation: tween,
      scrub: 0.8,
      invalidateOnRefresh: true,
    });
  }, { scope: container });

  return (
    <section ref={container} id="origin" className="origin-horizontal section--white" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      
      <div style={{ position: 'absolute', top: '40px', left: '5%', zIndex: 10, pointerEvents: 'none' }}>
        <h2 className="origin-horizontal__title" style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(3rem, 6vw, 7rem)', lineHeight: 0.9, textTransform: 'uppercase', color: 'var(--text-on-white)', margin: 0 }}>
          How I got here
        </h2>
      </div>

      <div className="origin-horizontal__pin-wrap" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        
        <div ref={scrollWrap} className="origin-horizontal__scroll-wrap" style={{ display: 'flex', alignItems: 'center', width: 'fit-content', padding: '0 40vw 0 0', position: 'relative', height: '100%' }}>
          
          {/* Exact 4200x400 Absolute Container */}
          <div style={{ position: 'relative', width: '4200px', height: '400px', top: '15%' }}>
            
            {/* SVG Background Path perfectly aligned */}
            <svg width="4200" height="400" viewBox="0 0 4200 400" style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible', zIndex: 0, pointerEvents: 'none' }}>
              <path 
                ref={pathRef}
                d="M 0,180 C 150,180 350,300 650,300 C 950,300 1150,70 1450,70 C 1750,70 1950,300 2250,300 C 2550,300 2750,70 3050,70 C 3350,70 3550,300 3850,300 C 4000,300 4200,180 4200,180" 
                fill="none" 
                stroke="#1A1A1A" 
                strokeWidth="7" 
                strokeLinecap="round" 
              />
            </svg>

            {/* Nodes perfectly overlapping the absolute coordinates */}
            {originData.map((node, index) => (
              <div 
                key={index} 
                ref={el => nodeRefs.current[index] = el}
                className="origin-node" 
                data-revealed="false"
                style={{ 
                  position: 'absolute',
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  zIndex: 1,
                  transformOrigin: 'center center'
                }}
              >
                {/* Dot EXACTLY centered on (X, Y) */}
                <div className="origin-node__dot-wrapper" style={{ position: 'absolute', top: 0, left: 0, transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                  <div className="origin-node__dot" style={{ width: '46px', height: '46px', borderRadius: '50%', border: '5px solid #1A1A1A', backgroundColor: index === 3 ? 'var(--accent)' : 'var(--bg-white)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#1A1A1A' }}></div>
                  </div>
                </div>

                {/* Content Box Positioned Above or Below the Dot */}
                {node.contentPosition === 'above' ? (
                  <div style={{ position: 'absolute', bottom: '25px', left: 0, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '480px' }}>
                    
                    <div className="origin-node__content" style={{ padding: '0 20px 20px', textAlign: 'center', width: '100%' }}>
                      <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '2rem', marginBottom: '12px', color: 'var(--text-on-white)', textTransform: 'uppercase' }}>{node.title}</h3>
                      <div style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'var(--text-muted-white)', lineHeight: 1.6 }}>
                        {node.content}
                      </div>
                    </div>

                    {/* Arrow pointing DOWN to dot */}
                    <svg width="60" height="80" viewBox="0 0 60 80">
                      <path d="M 30,0 C 30,40 50,50 20,75" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 20,75 L 35,70 M 20,75 L 25,60" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
                    </svg>

                  </div>
                ) : (
                  <div style={{ position: 'absolute', top: '25px', left: 0, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '480px' }}>
                    
                    {/* Arrow pointing UP to dot */}
                    <svg width="60" height="80" viewBox="0 0 60 80" style={{ transform: 'rotate(180deg)' }}>
                      <path d="M 30,0 C 30,40 50,50 20,75" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 20,75 L 35,70 M 20,75 L 25,60" fill="none" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
                    </svg>

                    <div className="origin-node__content" style={{ padding: '20px 20px 0', textAlign: 'center', width: '100%' }}>
                      <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '2rem', marginBottom: '12px', color: 'var(--text-on-white)', textTransform: 'uppercase' }}>{node.title}</h3>
                      <div style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem', color: 'var(--text-muted-white)', lineHeight: 1.6 }}>
                        {node.content}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
