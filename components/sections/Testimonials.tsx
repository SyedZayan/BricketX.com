import React from 'react';
import { testimonials } from '../../data';

// Helper component for the 5-star rating
const StarRating = () => (
  <div className="flex gap-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-bricket-gold fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="w-full bg-bricket-white py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-bricket-grey/10 border border-bricket-grey/20 mb-6">
          <svg className="w-4 h-4 text-bricket-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="text-xs font-bold text-bricket-dark uppercase tracking-widest">
            Client Feedback
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-bricket-dark tracking-tight mb-16 text-center max-w-2xl">
          Client testimonials that speak for themselves
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 border border-bricket-grey/15 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <StarRating />
              
              {/* Quote text with the highlighted/underlined portion from the screenshot */}
              <p className="text-bricket-dark/80 leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}
                <span className="font-semibold text-bricket-dark border-b border-bricket-dark">
                  {testimonial.highlight}
                </span>
                {testimonial.quoteEnd}"
              </p>

              {/* Dotted Separator */}
              <hr className="border-t border-dashed border-bricket-grey/30 mb-6" />

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-bricket-dark flex items-center justify-center shrink-0">
                  <span className="text-bricket-white font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <span className="font-bold text-bricket-dark text-sm">
                    {testimonial.author}
                  </span>
                  <span className="text-xs text-bricket-grey mt-0.5">
                    {testimonial.role}
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}