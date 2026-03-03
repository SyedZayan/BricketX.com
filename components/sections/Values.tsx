import React from 'react';
import { companyValues } from '../../data';

export default function Values() {
  return (
    <section className="w-full bg-[#fbf8f3] py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-bricket-dark tracking-tight mb-16 text-center">
          Our values are simple.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {companyValues.map((value, index) => (
            <div key={index} className="bg-bricket-white p-8 lg:p-10 rounded-2xl shadow-sm border border-bricket-grey/15 flex flex-col items-start hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-bricket-grey/10 flex items-center justify-center text-bricket-gold mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {value.iconPaths.map((path, i) => (
                    <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
                  ))}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-bricket-dark mb-3">{value.title}</h3>
              <p className="text-bricket-grey leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}