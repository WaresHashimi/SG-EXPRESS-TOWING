import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm sm:text-base">Everything you need to know about our towing service.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-brand-secondary rounded-xl border transition-all duration-300 ${openIndex === index ? 'border-brand-accent/50' : 'border-white/5'}`}
            >
              <button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center focus:outline-none min-h-[60px]"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-base sm:text-lg pr-2 ${openIndex === index ? 'text-brand-accent' : 'text-white'}`}>{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-brand-accent flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <div className="border-t border-white/5 pt-4">
                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};