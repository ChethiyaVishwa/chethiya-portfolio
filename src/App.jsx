import './App.css'
import { useMemo } from 'react';
import NavbarMain from './components/navbar/NavbarMain';
import HomeSection from './components/home/HomeSection';
import TextTickerDivider from './components/common/TextTickerDivider';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import EducationSection from './components/education/EducationSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ContactSection from './components/contact/ContactSection';
import ScrollProgress from './components/common/ScrollProgress';
import CursorBubbles from './components/common/CursorBubbles';
import GlobalBackground from './components/common/GlobalBackground';

// Detect touch/mobile device — cursor effects are pointless and costly on touch screens
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);

function App() {
  // Memoize so it doesn't recompute on every render
  const isTouch = useMemo(() => isTouchDevice(), []);

  return (
    <>
      <main className="font-body w-full">
        <GlobalBackground />
        {/* Disable cursor bubbles entirely on touch devices — no mouse = pure wasted RAF loop */}
        {!isTouch && <CursorBubbles />}
        <NavbarMain />
        <HomeSection />
        <TextTickerDivider />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <ScrollProgress />
    </>
  );
}

export default App
