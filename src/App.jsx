import './App.css'
import { useMemo, lazy, Suspense } from 'react';
import NavbarMain from './components/navbar/NavbarMain';
import HomeSection from './components/home/HomeSection';
import TextTickerDivider from './components/common/TextTickerDivider';
import ScrollProgress from './components/common/ScrollProgress';
import CursorBubbles from './components/common/CursorBubbles';
import GlobalBackground from './components/common/GlobalBackground';

// ✅ PERF: lazy-load heavy sections — reduces initial JS bundle parsed on mobile
const AboutSection = lazy(() => import('./components/about/AboutSection'));
const SkillsSection = lazy(() => import('./components/skills/SkillsSection'));
const EducationSection = lazy(() => import('./components/education/EducationSection'));
const ExperienceSection = lazy(() => import('./components/experience/ExperienceSection'));
const ContactSection = lazy(() => import('./components/contact/ContactSection'));

// Minimal fallback — avoids layout shift while section JS loads
const SectionFallback = () => <div className="min-h-screen bg-transparent" aria-hidden="true" />;

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
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <EducationSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <ScrollProgress />
    </>
  );
}

export default App
