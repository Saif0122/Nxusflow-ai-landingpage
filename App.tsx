
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AIChatDemo } from './components/AIChatDemo';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar scrolled={scrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="features" className="py-24 bg-gray-950/50">
          <Features />
        </section>

        <section id="demo" className="py-24 px-4">
          <AIChatDemo />
        </section>

        <section id="testimonials" className="py-24 bg-gray-950/50">
          <Testimonials />
        </section>

        <section id="pricing" className="py-24">
          <Pricing />
        </section>

        <section id="faq" className="py-24 bg-gray-950/50">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
