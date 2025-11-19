import React from 'react';
import { CheckCircle2, Phone, Clock, MapPin } from 'lucide-react';
import { PHONE_LINK, IMAGES, ADDRESS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative">
             {/* Decorative Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-accent/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-brand-secondary">
              <img 
                src={IMAGES.ABOUT_TRUCK} 
                alt="SG Express Tow Truck Front View" 
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
              
              {/* Floating Stat Card - Repositioned to not cover truck face */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-brand-accent font-bold uppercase text-[10px] mb-1">Customer Satisfaction</p>
                        <p className="text-white font-bold text-lg">4.9/5 Average Rating</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-brand-accent font-bold uppercase tracking-widest mb-3 text-sm">About SG Express</h4>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 sm:mb-8 leading-tight">
              Local Experts You Can Rely On
            </h2>
            
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Based in <strong className="text-white">South East Melbourne</strong>, SG Express Towing Service is a premier, owner-operated towing company serving Hampton Park and the greater South East Melbourne area.
            </p>
            
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              We understand that requiring a tow is often stressful. That's why we prioritize <strong>speed, safety, and communication</strong>. When you call us, you speak directly to a driver, not a call center.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { text: "24/7 Emergency Response", icon: Clock },
                { text: "Fully Licensed & Insured", icon: CheckCircle2 },
                { text: "Servicing Dandenong South", icon: MapPin },
                { text: "Competitive Fixed Rates", icon: CheckCircle2 }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-brand-secondary/50 p-4 rounded-lg border border-white/5">
                  <item.icon className="text-brand-accent flex-shrink-0" size={20} />
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <a 
              href={PHONE_LINK} 
              className="inline-flex items-center gap-3 bg-white text-brand-dark hover:bg-brand-accent hover:text-white font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 min-h-[52px] text-base sm:text-lg"
            >
              <Phone size={20} />
              Speak To A Driver
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};