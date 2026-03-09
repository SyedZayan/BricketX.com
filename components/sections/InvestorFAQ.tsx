'use client';

import React, { useState } from 'react';

// Categorized structure so you can easily add 100+ questions without cluttering the UI
const faqCategories = [
  { id: 'general', name: 'General Investment' },
  { id: 'security', name: 'Security & Compliance' },
  { id: 'returns', name: 'Returns & Payouts' },
];

const faqs = [
  // General
  { category: 'general', q: "What is a Real Asset Investment?", a: "Real asset investments are backed by tangible, physical assets such as real estate, land development, natural resources, and commodities. This provides intrinsic value and acts as a strong hedge against inflation." },
  { category: 'general', q: "Who is eligible to invest with BricketX?", a: "BricketX caters to institutional investors, family offices, and accredited high-net-worth individuals. Please refer to our Investor Portal for specific jurisdictional requirements." },
  // Security
  { category: 'security', q: "How is my capital protected?", a: "Capital is deployed directly into physical assets and development projects. Furthermore, our digital infrastructure utilizes 256-bit encryption, Cloudflare DDoS protection, and EV SSL certificates to ensure your data and transactions are militarily secure." },
  { category: 'security', q: "Is BricketX compliant with international regulations?", a: "Yes. We operate strictly within the legal frameworks of the jurisdictions we invest in, adhering to AML (Anti-Money Laundering) and KYC (Know Your Customer) global standards." },
  // Returns
  { category: 'returns', q: "How are returns calculated and distributed?", a: "Returns are calculated based on the specific asset class (e.g., rental yield, commodity trading margins, or development ROI). Distributions are securely credited to your Investor Dashboard on a quarterly or bi-annual basis, depending on the fund." },
  { category: 'returns', q: "Can I monitor my investment performance in real-time?", a: "Absolutely. Upon becoming an investor, you receive access to our Secure Investor Portal, where you can view live asset performance, download profit reports, and track market updates." },
];

export default function InvestorFaq() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="w-full bg-[#fbf8f3] py-24 lg:py-32 px-6 border-t border-bricket-grey/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[2px] bg-bricket-gold"></span>
            Investor Support
            <span className="w-8 h-[2px] bg-bricket-gold"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-bricket-dark tracking-tight mb-6">
            Frequently asked <span className="text-bricket-gold italic font-light">questions.</span>
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up [animation-delay:150ms]">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-bricket-dark text-bricket-white shadow-md' 
                  : 'bg-bricket-white border border-bricket-grey/20 text-bricket-grey hover:border-bricket-dark'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="w-full flex flex-col animate-fade-in-up [animation-delay:300ms]">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-bricket-grey/20 group">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-bricket-gold/50 rounded-lg"
                >
                  <span className={`text-lg md:text-xl font-bold tracking-tight pr-8 transition-colors duration-300 ${isOpen ? 'text-bricket-gold' : 'text-bricket-dark group-hover:text-bricket-gold'}`}>
                    {faq.q}
                  </span>
                  <div className={`relative flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <span className={`absolute w-full h-0.5 transition-colors duration-300 ${isOpen ? 'bg-bricket-gold' : 'bg-bricket-dark group-hover:bg-bricket-gold'}`}></span>
                    <span className={`absolute h-full w-0.5 transition-all duration-300 ${isOpen ? 'bg-transparent rotate-90 scale-0' : 'bg-bricket-dark group-hover:bg-bricket-gold scale-100'}`}></span>
                  </div>
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-base text-bricket-grey/90 leading-relaxed max-w-3xl pr-4 md:pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}