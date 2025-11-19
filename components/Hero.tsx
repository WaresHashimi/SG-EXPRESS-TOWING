import React from 'react';
import { Phone, Truck, ShieldCheck, Star } from 'lucide-react';
import { PHONE, PHONE_LINK, IMAGES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[85vh] min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.HERO_BG} 
          alt="SG Express Towing Truck Action" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/75 via-brand-dark/55 to-brand-dark/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 relative pt-24 sm:pt-20 text-center">
        
        <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent border border-brand-accent/20 px-3 py-1.5 sm:px-4 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 backdrop-blur-sm animate-fade-in">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-brand-accent"></span>
          </span>
          <span className="whitespace-nowrap">24/7 Emergency Service</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 sm:mb-6 text-white tracking-tight drop-shadow-2xl animate-slide-up px-2">
          STUCK ON THE ROAD? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-200">WE'RE ON THE WAY.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-2xl text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up drop-shadow-md px-4" style={{animationDelay: '0.1s'}}>
          Professional towing & roadside assistance for Dandenong South, Hampton Park, and surrounds. Fast, safe, and affordable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4" style={{animationDelay: '0.2s'}}>
          <a 
            href={PHONE_LINK}
            className="w-full sm:w-auto min-h-[52px] flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accentHover text-brand-dark text-lg sm:text-xl font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-lg transition-all transform active:scale-95 hover:scale-105 hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)]"
          >
            <Phone className="fill-current" size={20} />
            Call {PHONE}
          </a>
          <a 
            href="#contact"
            className="w-full sm:w-auto min-h-[52px] flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm border border-white/10 text-lg sm:text-xl font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-lg transition-all active:scale-95 hover:border-brand-accent/50"
          >
            <Truck size={20} />
            Get a Quote
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 opacity-80 animate-fade-in px-4" style={{animationDelay: '0.5s'}}>
           <div className="flex flex-col items-center gap-1">
              <div className="flex text-brand-accent"><Star className="fill-current" size={16} /><Star className="fill-current" size={16} /><Star className="fill-current" size={16} /><Star className="fill-current" size={16} /><Star className="fill-current" size={16} /></div>
              <span className="text-xs sm:text-sm font-medium text-slate-400">4.9 Star Rating</span>
           </div>
           <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="text-brand-accent" size={24} />
              <span className="text-xs sm:text-sm font-medium text-slate-400">Fully Insured</span>
           </div>
           <div className="flex flex-col items-center gap-1">
              <span className="text-brand-accent font-black text-lg sm:text-xl">15-30m</span>
              <span className="text-xs sm:text-sm font-medium text-slate-400">Avg. Arrival Time</span>
           </div>
        </div>
      </div>
    </section>
  );
};