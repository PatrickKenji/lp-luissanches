import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureBar from './components/FeatureBar';
import './App.css';

// Lazy load componentes abaixo do fold para reduzir JavaScript inicial
const AboutSection = lazy(() => import('./components/AboutSection'));
const TrainingMethodSection = lazy(() => import('./components/TrainingMethodSection'));
const ProgramsSection = lazy(() => import('./components/ProgramsSection'));
const WhySection = lazy(() => import('./components/WhySection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const BeforeAfterSection = lazy(() => import('./components/BeforeAfterSection'));
const MembershipSection = lazy(() => import('./components/MembershipSection'));
const SocialProofSection = lazy(() => import('./components/SocialProofSection'));
const Footer = lazy(() => import('./components/Footer'));

// Fallback minimalista para Suspense
const SectionSkeleton = () => (
  <div style={{ minHeight: '400px', background: 'transparent' }} aria-hidden="true" />
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeatureBar />
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TrainingMethodSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ProgramsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <WhySection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <BeforeAfterSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <MembershipSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <SocialProofSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      </div>
  );
}

export default App;