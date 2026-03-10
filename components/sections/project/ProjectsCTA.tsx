import React from 'react';
import Link from 'next/link';

export default function ProjectsCTA() {
  return (
    <section className="w-full bg-bricket-dark py-20 px-6 mt-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-bricket-white mb-6">
          Ready to invest in our next major development?
        </h2>
        <p className="text-lg text-bricket-grey mb-10 leading-relaxed max-w-2xl">
          The projects above represent our history. To see where we are deploying capital today, review our currently open funds and syndicates.
        </p>
        <Link href="/opportunities" className="bg-bricket-gold hover:bg-bricket-white text-bricket-dark px-10 py-5 rounded-xl font-extrabold transition-all duration-300 shadow-lg shadow-bricket-gold/10 text-lg flex items-center gap-3">
          Explore Current Opportunities
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </div>
    </section>
  );
}