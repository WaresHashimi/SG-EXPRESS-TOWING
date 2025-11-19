import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-brand-primary border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center gap-1 bg-brand-accent/10 px-4 py-2 rounded-full text-brand-accent mb-6 border border-brand-accent/20">
            <Star className="fill-current" size={16} />
            <Star className="fill-current" size={16} />
            <Star className="fill-current" size={16} />
            <Star className="fill-current" size={16} />
            <Star className="fill-current" size={16} />
            <span className="ml-2 font-bold text-sm uppercase tracking-wide">Top Rated Service</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl px-4">We pride ourselves on our 4.9-star rating. Here is what our customers in Hampton Park have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-brand-secondary p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl relative border border-white/5 hover:border-brand-accent/20 transition-colors group">
              <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 text-brand-dark text-4xl sm:text-6xl opacity-50 group-hover:text-brand-accent/10 transition-colors" />
              
              <div className="flex text-brand-accent mb-4 sm:mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-current sm:w-[18px] sm:h-[18px]" />
                ))}
              </div>

              <p className="text-slate-300 text-base sm:text-lg italic mb-6 sm:mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                </div>
                <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-sm text-brand-accent/80">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};