'use client'; // Required for interactivity

import React, { useState } from 'react';
import Image from 'next/image';
import { timelineEvents } from '../../data';

export default function Timeline() {
  // Set the default active index to the middle or most recent year
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="w-full bg-[#fbf8f3] py-20 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-bricket-dark tracking-tight mb-24 text-center">
          How we got here
        </h2>

        {/* Timeline Container */}
        <div className="relative w-full flex justify-center items-center">
          
          {/* Horizontal Connecting Line */}
          <div className="absolute top-[50%] left-0 w-full h-[1px] bg-bricket-grey/30 -z-10"></div>

          {/* Scrolling/Flex Row for Timeline Items */}
          <div className="flex items-center justify-start md:justify-center gap-4 md:gap-8 overflow-x-auto pb-12 w-full snap-x snap-mandatory px-6 md:px-0 hide-scrollbar">
            
            {timelineEvents.map((event, index) => {
              const isActive = index === activeIndex;

              return (
                <div 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="flex flex-col items-center cursor-pointer snap-center group shrink-0 w-[200px] md:w-[240px]"
                >
                  {/* Image Container (Animates size based on active state) */}
                  <div className={`relative rounded-full overflow-hidden mb-8 transition-all duration-500 ease-out border-4 ${
                    isActive 
                      ? 'w-40 h-40 md:w-56 md:h-56 border-bricket-gold shadow-xl' 
                      : 'w-24 h-24 md:w-32 md:h-32 border-bricket-white opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100'
                  }`}>
                    <Image 
                      src={event.image} 
                      alt={event.year} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 200px, 300px"
                    />
                  </div>

                  {/* The Timeline Dot */}
                  <div className={`w-4 h-4 rounded-full transition-colors duration-300 mb-6 ${
                    isActive ? 'bg-bricket-dark scale-125' : 'bg-bricket-grey/40 group-hover:bg-bricket-gold'
                  }`}></div>

                  {/* Text Content */}
                  <div className={`text-center transition-all duration-300 ${isActive ? 'opacity-100 transform translate-y-0' : 'opacity-50 transform translate-y-2'}`}>
                    <h3 className="text-2xl font-extrabold text-bricket-dark mb-2">
                      {event.year}
                    </h3>
                    <p className="text-sm text-bricket-grey px-4 leading-relaxed">
                      {isActive ? event.description : event.title}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}