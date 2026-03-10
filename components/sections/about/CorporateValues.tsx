import React from 'react';
import { coreValues } from '../../../data';

export default function CorporateValues() {
  return (
    <section className="w-full py-24 px-6 bg-[#fbf8f3]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-bricket-dark mb-4">The BricketX Mandate</h2>
          <p className="text-lg text-bricket-grey max-w-2xl mx-auto">
            Our fiduciary duty is defined by three uncompromising pillars of capital allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className="bg-bricket-white border border-bricket-grey/15 rounded-2xl p-8 md:p-10 hover:border-bricket-gold/40 hover:shadow-xl transition-all duration-500 animate-fade-in-up opacity-0 group"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-14 h-14 rounded-full bg-bricket-dark flex items-center justify-center text-bricket-gold mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-extrabold text-bricket-dark mb-4">{value.title}</h3>
              <p className="text-base text-bricket-grey leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}