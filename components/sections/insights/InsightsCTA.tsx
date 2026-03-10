import React from 'react';
import Link from 'next/link';

export default function InsightsCTA() {
  return (
    <section className="w-full bg-bricket-dark py-20 px-6 mt-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-bricket-white mb-6">
          Capitalize on these market trends.
        </h2>
        <p className="text-lg text-bricket-grey mb-10 leading-relaxed">
          Our funds are actively deployed in these precise markets. Secure your position in our next capital raise.
        </p>
        <Link href="/opportunities" className="bg-bricket-gold hover:bg-bricket-white text-bricket-dark px-10 py-5 rounded-xl font-extrabold transition-all duration-300 shadow-lg shadow-bricket-gold/10 text-lg">
          View Open Opportunities
        </Link>
      </div>
    </section>
  );
}