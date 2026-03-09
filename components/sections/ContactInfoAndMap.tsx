import React from 'react';
import { contactMethods } from '../../data';

export default function ContactInfoAndMap() {
  return (
    <section className="w-full pb-20 pt-10 px-6 bg-[#fbf8f3]">
      <div className="max-w-7xl mx-auto flex flex-col items-center animate-fade-in-up [animation-delay:300ms]">
        
        {/* 4-Column Contact Info Grid (Upgraded styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className="bg-bricket-white rounded-2xl p-8 border border-bricket-grey/15 shadow-sm hover:border-bricket-gold/30 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-bricket-dark/5 border border-bricket-grey/10 flex items-center justify-center text-bricket-dark mb-6 group-hover:bg-bricket-dark group-hover:text-bricket-gold transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {method.iconPaths.map((path, i) => (
                    <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
                  ))}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-bricket-dark mb-2">
                {method.title}
              </h3>
              <p className="text-bricket-grey text-sm">
                {method.line1}
              </p>
              <p className="text-bricket-grey text-sm font-medium">
                {method.line2}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width Map (Upgraded styling) */}
        <div className="w-full h-[400px] lg:h-[500px] bg-bricket-grey/10 rounded-3xl overflow-hidden shadow-md border border-bricket-grey/20 relative">
           <iframe 
             src="https://maps.google.com/maps?q=Emirates%20Towers%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed" 
             className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
             allowFullScreen={false} 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>

      </div>
    </section>
  );
}