import React from 'react';
import { contactMethods } from '../../data';

export default function ContactSection() {
  return (
    <section className="w-full bg-[#fbf8f3] py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-bricket-grey/10 border border-bricket-grey/20 mb-6">
          <svg className="w-4 h-4 text-bricket-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-bold text-bricket-dark uppercase tracking-widest">
            Contact Info
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-bricket-dark tracking-tight mb-16 text-center">
          Reach Out to Us
        </h1>

        {/* 4-Column Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-bricket-grey/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-bricket-dark/5 flex items-center justify-center text-bricket-dark mb-6 group-hover:bg-bricket-gold group-hover:text-white transition-colors duration-300">
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

        {/* Form and Map Split Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side: Contact Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-bricket-grey/10 shadow-sm flex flex-col">
            <h2 className="text-3xl font-bold text-bricket-dark mb-8 max-w-sm">
              Feel free to get in touch or visit our location.
            </h2>

            <form className="flex flex-col gap-8 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input type="text" placeholder="Full name*" required className="w-full pb-3 border-b border-bricket-grey/30 focus:border-bricket-gold focus:outline-none bg-transparent transition-colors placeholder:text-bricket-grey" />
                <input type="email" placeholder="Email address*" required className="w-full pb-3 border-b border-bricket-grey/30 focus:border-bricket-gold focus:outline-none bg-transparent transition-colors placeholder:text-bricket-grey" />
                <input type="tel" placeholder="Phone number*" required className="w-full pb-3 border-b border-bricket-grey/30 focus:border-bricket-gold focus:outline-none bg-transparent transition-colors placeholder:text-bricket-grey" />
                <select className="w-full pb-3 border-b border-bricket-grey/30 focus:border-bricket-gold focus:outline-none bg-transparent transition-colors text-bricket-grey appearance-none cursor-pointer" defaultValue="" required>
                  <option value="" disabled>Choose an option</option>
                  <option value="mintrix-contracting">Mintrix Contracting</option>
                  <option value="mintrix-maintenance">Mintrix Maintenance</option>
                  <option value="bricketx-pk">BricketX.pk</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <textarea placeholder="Type message*" rows={4} required className="w-full pb-3 border-b border-bricket-grey/30 focus:border-bricket-gold focus:outline-none bg-transparent transition-colors placeholder:text-bricket-grey resize-none"></textarea>

              <div className="mt-auto pt-4">
                <button type="submit" className="inline-flex items-center gap-3 bg-bricket-dark hover:bg-bricket-gold text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                  Submit Now
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Map */}
          <div className="w-full min-h-[400px] lg:h-auto bg-bricket-grey/10 rounded-3xl overflow-hidden shadow-sm border border-bricket-grey/10 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231671.21855663674!2d66.97486673620359!3d24.860734300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}