import React from 'react';
import { firmMilestones } from '../../../data';

export default function FirmMilestones() {
  return (
    <section className="w-full py-24 px-6 bg-bricket-white border-t border-bricket-grey/10">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-bricket-dark mb-4">Evolution of Capital</h2>
          <p className="text-lg text-bricket-grey">A decade of strategic global expansion and asset acquisition.</p>
        </div>

        <div className="relative border-l-2 border-bricket-grey/20 ml-4 md:ml-0">
          {firmMilestones.map((milestone, index) => (
            <div 
              key={index} 
              className="mb-12 md:mb-16 ml-8 md:ml-12 relative animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-bricket-white border-4 border-bricket-dark rounded-full shadow-[0_0_0_4px_rgba(195,153,103,0.2)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                <span className="text-3xl md:text-4xl font-extrabold text-bricket-gold">{milestone.year}</span>
                <h3 className="text-xl md:text-2xl font-bold text-bricket-dark">{milestone.title}</h3>
              </div>
              <p className="text-base md:text-lg text-bricket-grey leading-relaxed max-w-2xl">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}