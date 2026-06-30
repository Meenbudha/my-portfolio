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

  const reg = (id) => (el) => { sectionRefs.current[id] = el; };
  const fadeClass = (id) =>
    `transition-all duration-700 ${visible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

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