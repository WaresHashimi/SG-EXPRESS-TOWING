import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Coverage } from './components/Coverage';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';
import { PHONE_LINK } from './constants';

const FloatingCallButton = () => (
  <a
    href={PHONE_LINK}
    className="fixed bottom-6 right-6 md:hidden z-50 bg-brand-accent text-brand-dark p-4 rounded-full shadow-2xl animate-bounce hover:bg-amber-400 transition-colors ring-4 ring-brand-accent/30"
    aria-label="Call Now"
  >
    <Phone size={28} className="fill-current" />
  </a>
);

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-800 bg-brand-dark overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Coverage />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default App;