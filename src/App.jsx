import React from 'react';
import HeroSection from './components/HeroSection';
import Exprience from './components/Exprience.jsx';
import AchievementsSection from './components/AchievementsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import Footer from './components/Footer.jsx';
import FeedbackSection from './components/FeedbackSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';


const App = () => {
  return (
    <>
      {/* This container is fixed at 12 inches width */}
     
          <HeroSection />
          <Exprience />
      <SkillsSection/>
          <ProjectsSection />
          <AchievementsSection />
          <FeedbackSection />
          <Footer />
    </>
  );
};

export default App;
