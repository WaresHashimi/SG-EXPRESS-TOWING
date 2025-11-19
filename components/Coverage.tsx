import React from 'react';
import { SUBURBS } from '../constants';
import { MapPin } from 'lucide-react';

export const Coverage: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-r from-brand-accent to-amber-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">Areas We Service</h3>
        <p className="mb-8 sm:mb-10 text-amber-100 max-w-2xl mx-auto text-base sm:text-lg font-medium px-4">
          Our fleet is strategically positioned in Hampton Park to ensure rapid response times to all surrounding suburbs.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {SUBURBS.map((suburb) => (
            <div key={suburb} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-white/20 hover:bg-white/30 transition-colors cursor-default shadow-sm text-sm sm:text-base">
              <MapPin size={14} className="text-white sm:w-4 sm:h-4" />
              <span className="font-bold">{suburb}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 bg-brand-dark/20 backdrop-blur-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-brand-dark/10 text-brand-dark text-sm sm:text-base">
            <span className="font-bold">+ Nearby Areas</span>
          </div>
        </div>
      </div>
    </section>
  );
};