import './App.css'
import NavbarMain from './components/navbar/NavbarMain';
import HomeSection from './components/home/HomeSection';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import EducationSection from './components/education/EducationSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ContactSection from './components/contact/ContactSection';

function App() {
  return (
  <main className="font-body w-full">
    <NavbarMain />
    <HomeSection />
    <AboutSection />
    <SkillsSection />
    <EducationSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  );
}

export default App
