import React from 'react';
import { Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { ADDRESS, PHONE, PHONE_LINK } from '../constants';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for contacting SG Express Towing. For immediate service, please call us directly at " + PHONE);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-brand-primary relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h4 className="text-brand-accent font-bold uppercase tracking-widest mb-3 text-sm">Contact Us</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">Ready To Assist You</h2>
            <p className="text-slate-400 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
              For the fastest service, give us a call. We are available 24/7 to take your booking or answer any questions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-secondary rounded-2xl border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-brand-accent/50 transition-colors shadow-lg">
                  <Phone className="text-brand-accent group-hover:scale-110 transition-transform" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-1">Call Us 24/7</h3>
                  <p className="text-slate-500 mb-2">Priority Emergency Line</p>
                  <a href={PHONE_LINK} className="text-xl sm:text-2xl md:text-3xl font-black text-brand-accent hover:text-white transition-colors break-all">
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-secondary rounded-2xl border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-brand-accent/50 transition-colors shadow-lg">
                  <MapPin className="text-brand-accent group-hover:scale-110 transition-transform" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-1">Our Depot</h3>
                  <p className="text-slate-500 mb-2">Base of Operations</p>
                  <p className="text-slate-300 font-medium text-lg">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-brand-secondary rounded-2xl border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-brand-accent/50 transition-colors shadow-lg">
                  <Clock className="text-brand-accent group-hover:scale-110 transition-transform" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-1">Opening Hours</h3>
                  <p className="text-slate-500 mb-2">Always Open</p>
                  <p className="text-slate-300 font-medium text-lg">24 Hours / 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-secondary p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="text-brand-accent" />
                <h3 className="text-2xl font-bold text-white">Get a Free Quote</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-400 ml-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3.5 rounded-xl bg-brand-dark border border-slate-800 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-slate-600" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-400 ml-1">Phone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3.5 rounded-xl bg-brand-dark border border-slate-800 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-slate-600" placeholder="Your Number" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-slate-400 ml-1">Service Needed</label>
                <select id="service" className="w-full px-4 py-3.5 rounded-xl bg-brand-dark border border-slate-800 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all">
                  <option>Car Towing</option>
                  <option>Accident Towing</option>
                  <option>Machinery Transport</option>
                  <option>Roadside Assist</option>
                  <option>Long Distance</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-bold text-slate-400 ml-1">Pickup Location</label>
                <input type="text" id="location" className="w-full px-4 py-3.5 rounded-xl bg-brand-dark border border-slate-800 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-slate-600" placeholder="e.g. Hampton Park" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3.5 rounded-xl bg-brand-dark border border-slate-800 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-slate-600" placeholder="Tell us about your vehicle and where you need it towed..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-accent hover:bg-amber-600 text-brand-dark font-bold py-3.5 sm:py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-2 text-base sm:text-lg shadow-lg mt-4 min-h-[52px]">
                Send Request <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};