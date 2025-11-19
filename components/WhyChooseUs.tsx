import React from 'react';
import { FEATURES } from '../constants';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-brand-dark text-white relative overflow-hidden">
       {/* Decorative bg elements */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 transform translate-x-1/4 blur-3xl"></div>
       
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest mb-3 text-sm">Why Choose Us</h4>
            <h2 className="text-3xl md:text-5xl font-black mb-6">The Gold Standard in Towing</h2>
            <p className="text-slate-400 text-lg">We don't just tow cars; we provide peace of mind. Here is why hundreds of locals trust SG Express.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <div key={index} className="group bg-brand-secondary/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:bg-brand-secondary hover:border-brand-accent/30 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-brand-primary rounded-xl flex items-center justify-center mb-6 text-brand-accent shadow-inner border border-white/5 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};