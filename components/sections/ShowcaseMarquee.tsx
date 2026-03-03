import React from 'react';
import Image from 'next/image';
import { showcaseRowOne, showcaseRowTwo } from '../../data';

// Upgraded Reusable Card Component
const ShowcaseCard = ({ item }: { item: { title: string, image: string } }) => (
  // Wider, cinematic aspect ratio (16:9-ish) with sharper corners (rounded-xl instead of 2xl)
  <div className="w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] lg:w-[500px] lg:h-[280px] relative rounded-xl overflow-hidden shadow-lg border border-bricket-grey/15 group shrink-0 bg-bricket-dark cursor-pointer">
    
    <Image 
      src={item.image} 
      alt={item.title}
      fill
      // Super slow, luxurious zoom effect
      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
      sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
    />
    
    {/* Always-on moody gradient that deepens at the bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-bricket-dark/90 via-bricket-dark/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
    
    {/* Interactive Content Block */}
    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
      {/* Container slides up slightly on hover */}
      <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        
        {/* Gold Accent Line - Slides in from the left */}
        <div className="w-8 h-1 bg-bricket-gold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0"></div>
        
        <h3 className="text-bricket-white font-extrabold text-xl sm:text-2xl tracking-tight drop-shadow-lg">
          {item.title}
        </h3>
      </div>
    </div>
  </div>
);

export default function ShowcaseMarquee() {
  return (
    <section className="w-full bg-[#fbf8f3] py-24 lg:py-32 overflow-hidden flex flex-col items-center border-b border-bricket-grey/10">
      
      {/* Editorial Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20 animate-fade-in-up">
        <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center justify-center gap-4">
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
          Global Operations
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bricket-dark tracking-tight mb-8">
          A unified ecosystem spanning <span className="text-bricket-gold italic font-light">multiple sectors.</span>
        </h2>
        <p className="text-lg md:text-xl text-bricket-grey max-w-2xl mx-auto leading-relaxed">
          Explore the breadth of our capabilities. From large-scale physical infrastructure to localized digital transformation, the BricketX portfolio delivers unparalleled results.
        </p>
      </div>

      {/* Masked Container for the fade effect on the left/right edges */}
      <div 
        className="w-full relative group/marquee" // Added group to pause BOTH rows on hover if desired
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        
        {/* ROW 1: Right to Left */}
        {/* Notice we rely on the .animate-scroll:hover classes we added to globals.css previously to pause on hover */}
        <div className="flex w-max animate-scroll mb-6 sm:mb-8 hover:[animation-play-state:paused]">
          <div className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
            {showcaseRowOne.map((item, idx) => (
              <ShowcaseCard key={`row1-set1-${idx}`} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
            {showcaseRowOne.map((item, idx) => (
              <ShowcaseCard key={`row1-set2-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* ROW 2: Left to Right */}
        <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused]">
          <div className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
            {showcaseRowTwo.map((item, idx) => (
              <ShowcaseCard key={`row2-set1-${idx}`} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
            {showcaseRowTwo.map((item, idx) => (
              <ShowcaseCard key={`row2-set2-${idx}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}