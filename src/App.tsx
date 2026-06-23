import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Industries from './components/Industries';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DiscountPopup from './components/DiscountPopup';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange/20 selection:text-brand-orange text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Industries />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <DiscountPopup />
    </div>
  );
}
