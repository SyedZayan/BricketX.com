import React from 'react';
import Link from 'next/link';

export default function OpportunitiesCTA() {
  return (
    <section className="w-full bg-bricket-dark py-20 px-6 mt-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-bricket-white mb-6">
          Require a bespoke capital allocation strategy?
        </h2>
        <p className="text-lg text-bricket-grey mb-10 leading-relaxed">
          Our wealth management directors are available to discuss tailored fund structures, multi-asset portfolios, and specific jurisdictional requirements for institutional capital.
        </p>
        <Link href="/contact" className="bg-bricket-gold hover:bg-bricket-white text-bricket-dark px-10 py-5 rounded-xl font-extrabold transition-all duration-300 shadow-lg shadow-bricket-gold/10 text-lg flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          Speak to an Investment Director
        </Link>
      </div>
    </section>
  );
}