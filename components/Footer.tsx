import React from 'react';
import { BUSINESS_NAME, ADDRESS, PHONE, PHONE_LINK, NAV_LINKS } from '../constants';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-slate-400 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="font-black text-2xl text-white mb-6 flex items-center gap-2">
              <div className="bg-brand-accent text-brand-dark px-2 py-0.5 rounded text-lg">SG</div>
              EXPRESS TOWING
            </div>
            <p className="mb-8 text-lg leading-relaxed max-w-md text-slate-500">
              Professional, reliable, and affordable towing services available 24/7. Serving Hampton Park and the entire South East Melbourne region with pride.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-brand-accent transition-colors font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-xs text-slate-600 uppercase mb-1">Emergency Phone</span>
                <a href={PHONE_LINK} className="text-xl font-bold text-brand-accent hover:text-white transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>
                <span className="block text-xs text-slate-600 uppercase mb-1">Address</span>
                <span className="text-slate-300">{ADDRESS}</span>
              </li>
              <li>
                <span className="block text-xs text-slate-600 uppercase mb-1">Hours</span>
                <span className="text-slate-300">Open 24 Hours, 7 Days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All Rights Reserved.</p>
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-white transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};