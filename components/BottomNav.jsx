'use client';

import { useEffect, useState } from 'react';

export default function BottomNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const showNav = () => setIsVisible(true);
    
    if (typeof window !== 'undefined' && sessionStorage.getItem('portfolio_booted')) {
      showNav();
    } else {
      const timer = setTimeout(showNav, 5000);
      window.addEventListener('boot-complete', showNav);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('boot-complete', showNav);
      };
    }
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'origin', 'projects', 'best-work', 'contact'];
    const updateActiveLink = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let activeId = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          activeId = id;
        }
      }
      setActiveSection(activeId);
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
    return () => window.removeEventListener('scroll', updateActiveLink);
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target && window.lenis) {
      window.lenis.scrollTo(target, { offset: -48 });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`bottom-nav ${isVisible ? 'is-visible' : ''}`} aria-label="Section navigation">
      <div className="bottom-nav__inner">
        {[
          { id: 'home', label: 'Home' },
          { id: 'origin', label: 'Origin' },
          { id: 'projects', label: 'Projects' },
          { id: 'best-work', label: 'Best Work' },
          { id: 'contact', label: 'Contact' }
        ].map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className={`bottom-nav__link ${activeSection === id ? 'is-active' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
