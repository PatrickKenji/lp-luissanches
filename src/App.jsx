import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureBar from './components/FeatureBar';
import TrainingMethodSection from './components/TrainingMethodSection';
import ProgramsSection from './components/ProgramsSection';
import WhySection from './components/WhySection';
import MembershipSection from './components/MembershipSection';
import TestimonialsSection from './components/TestimonialsSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import SocialProofSection from './components/SocialProofSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeatureBar />
        <TrainingMethodSection />
        <ProgramsSection />
        <WhySection />
        <TestimonialsSection />
        <BeforeAfterSection />
        <MembershipSection />
        <SocialProofSection />
      </main>
      <Footer />
      </div>
  );
}

export default App;