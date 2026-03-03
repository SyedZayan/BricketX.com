import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { teamMembers } from '../../data'; 

export default function Team() {
  return (
    <section className="w-full bg-bricket-white py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Header Section */}
        <div className="animate-fade-in-up mb-16 lg:mb-20 flex flex-col items-center">
          <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-bricket-gold"></span>
            Our Leadership
            <span className="w-8 h-[1px] bg-bricket-gold"></span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bricket-dark tracking-tight mb-6">
            Meet the executive <span className="text-bricket-gold italic font-light">team.</span>
          </h2>
          <p className="text-lg text-bricket-grey max-w-2xl mx-auto leading-relaxed">
            Our philosophy is simple — assemble a board of visionary, experienced leaders to foster a culture of excellence across our entire global portfolio.
          </p>
        </div>

        {/* Flex Layout ensures perfect horizontal centering regardless of screen size */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-24 mb-20 w-full">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center w-full max-w-[250px] animate-fade-in-up opacity-0 group"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              
              {/* Perfectly centered, full-color circular avatar */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] overflow-hidden mb-6 border-[6px] border-bricket-white bg-bricket-grey/5">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  // Removed grayscale. object-cover and object-center ensure the face stays in the middle.
                  className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
              
              {/* Typography perfectly aligned to center */}
              <h3 className="text-2xl font-extrabold text-bricket-dark mb-1">
                {member.name}
              </h3>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-bricket-grey">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Clean, outlined CTA Button matching your screenshot */}
        <Link 
          href="/careers" 
          className="group border border-bricket-grey/30 hover:border-bricket-dark hover:bg-bricket-dark hover:text-bricket-white text-bricket-dark px-8 py-3 rounded-xl font-medium flex items-center transition-all duration-300 animate-fade-in-up [animation-delay:600ms] opacity-0 shadow-sm"
          style={{ animationFillMode: 'forwards' }}
        >
          Join our growing team
          <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

      </div>
    </section>
  );
}