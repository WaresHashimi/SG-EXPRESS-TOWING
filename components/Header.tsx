import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_NAME, PHONE, PHONE_LINK, NAV_LINKS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'glass border-slate-800 py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-brand-accent text-brand-dark p-1.5 rounded font-bold transform group-hover:rotate-3 transition-transform">
              SG
            </div>
            <div className="font-black text-xl md:text-2xl tracking-tighter text-white">
              EXPRESS <span className="text-brand-accent">TOWING</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-brand-accent transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
             <div className="hidden lg:flex flex-col items-end text-right mr-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">24/7 Emergency</span>
                <span className="text-white font-bold font-mono">{PHONE}</span>
             </div>
            <a 
              href={PHONE_LINK} 
              className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-dark font-bold py-2.5 px-4 sm:px-6 rounded-full transition-all transform active:scale-95 hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] min-h-[44px]"
            >
              <Phone size={18} className="fill-current" />
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">Call</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white hover:text-brand-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl transition-transform duration-300 lg:hidden flex flex-col pt-24 px-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-2xl font-bold text-white border-b border-white/10 pb-4 hover:text-brand-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="mt-auto mb-10 space-y-4">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 text-brand-accent mb-2">
                <MapPin size={20} />
                <span className="font-bold">Hampton Park Based</span>
            </div>
            <p className="text-slate-400 text-sm">Servicing Dandenong South & Surrounds</p>
          </div>
          
          <a 
            href={PHONE_LINK} 
            className="flex justify-center items-center gap-2 bg-brand-accent text-brand-dark font-bold py-4 rounded-xl text-lg w-full shadow-lg"
          >
            <Phone size={20} className="fill-current" />
            CALL {PHONE}
          </a>
        </div>
      </div>
    </>
  );
};