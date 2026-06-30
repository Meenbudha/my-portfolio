import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.id]: true }));
      }),
      { threshold: 0.12 }
    );
    Object.values(sectionRefs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      Object.entries(sectionRefs.current).forEach(([id, el]) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Entrance progress: 0 when top is at bottom of viewport, 1 when top is 30% from the bottom
        const enterStart = windowHeight;
        const enterEnd = windowHeight * 0.3;
        let enterProgress = (enterStart - rect.top) / (enterStart - enterEnd);
        enterProgress = Math.max(0, Math.min(1, enterProgress));
        
        // Exit progress: 1 when bottom is 20% from the top, 0 when bottom is at top
        const exitStart = windowHeight * 0.2;
        const exitEnd = 0;
        let exitProgress = (rect.bottom - exitEnd) / (exitStart - exitEnd);
        exitProgress = Math.max(0, Math.min(1, exitProgress));
        
        const progress = Math.min(enterProgress, exitProgress);
        
        el.style.opacity = progress;
        const translateY = (1 - enterProgress) * 40;
        const scale = 0.95 + progress * 0.05;
        el.style.transform = `translateY(${translateY}px) scale(${scale})`;
        el.style.transition = 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.2s cubic-bezier(0.25, 1, 0.5, 1)';
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    requestAnimationFrame(() => {
      requestAnimationFrame(handleScroll);
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reg = (id) => (el) => { sectionRefs.current[id] = el; };
  const fadeClass = (id) => "opacity-0 will-change-[transform,opacity]";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <StatsBar />
      <Skills visible={visible} fadeClass={fadeClass} reg={reg} />
      <CodingProfiles fadeClass={fadeClass} reg={reg} />
      <Projects fadeClass={fadeClass} reg={reg} />
      <Education fadeClass={fadeClass} reg={reg} />
      <Contact fadeClass={fadeClass} reg={reg} />
    </div>
  );
};

export default App;