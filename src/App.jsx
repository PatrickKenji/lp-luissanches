import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureBar from './components/FeatureBar';
import ProgramsSection from './components/ProgramsSection';
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
        <ProgramsSection />
        <MembershipSection />
        <TestimonialsSection />
        <BeforeAfterSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;