import React from 'react';
import { SERVICES, PHONE_LINK } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-brand-primary relative">

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest mb-3 text-sm">Our Services</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">Professional Towing For <br className="hidden sm:block"/>Every Situation</h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              From emergency breakdowns to scheduled machinery transport, our fleet is equipped to handle it all with precision and care.
            </p>
          </div>
          <a href={PHONE_LINK} className="hidden md:flex items-center gap-2 text-brand-accent font-bold hover:text-white transition-colors border-b border-brand-accent pb-1">
            View Full Service List <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-brand-secondary rounded-xl overflow-hidden border border-white/5 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
              {/* Image Container */}
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20 bg-brand-accent/90 backdrop-blur text-brand-dark p-2 rounded-lg shadow-lg">
                  <service.icon size={22} />
                </div>
              </div>
              
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                  {service.description}
                </p>
                <a 
                  href={PHONE_LINK} 
                  className="inline-flex items-center text-sm font-bold text-white group-hover:text-brand-accent transition-colors mt-auto"
                >
                  Book Now <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href={PHONE_LINK} className="inline-flex items-center gap-2 text-brand-accent font-bold hover:text-white transition-colors border-b border-brand-accent pb-1">
            Contact Us For More Info <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};