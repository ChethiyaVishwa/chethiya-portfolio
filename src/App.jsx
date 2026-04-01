import './App.css'
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

function App() {
  return (
    <>
      <main className="font-body w-full">
        <GlobalBackground />
        <CursorBubbles />
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
