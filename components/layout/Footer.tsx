import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-bricket-dark pt-16 pb-8 lg:pt-24 lg:pb-12 px-6 border-t border-bricket-gold/20 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-gradient-to-bl from-bricket-gold/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* 1. THE INTEGRATED GLOBAL CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10 pb-12 lg:pb-20 mb-12 lg:mb-20 border-b border-bricket-white/10">
          <div className="max-w-2xl w-full">
            <span className="text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 lg:mb-4 block">
              Join the Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-bricket-white tracking-tight leading-[1.1]">
              Ready to shape the <span className="text-bricket-gold italic font-light">future</span> of industry?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
            <Link 
              href="/careers" 
              className="w-full sm:w-auto bg-transparent border-2 border-bricket-white/20 hover:border-bricket-white text-bricket-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center"
            >
              Explore Careers
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-bricket-gold hover:bg-bricket-white text-bricket-dark px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-bricket-gold/10 text-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* 2. MAIN FOOTER GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-6 lg:gap-8 mb-16 lg:mb-20">
          
          {/* Brand & Newsletter Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            
            <Link href="/" className="mb-6 lg:mb-8 hover:opacity-80 transition-opacity inline-block">
              <Image 
                src="/images/bricketx-logo.png" 
                alt="BricketX Logo" 
                width={180} 
                height={54} 
                className="h-8 lg:h-10 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            
            <p className="text-bricket-grey/70 text-sm lg:text-base leading-relaxed mb-8 lg:mb-10 max-w-md">
              The premier holding company driving excellence, innovation, and sustainable growth across a diverse portfolio of industry-leading global brands.
            </p>
            
            {/* Corporate Updates Subscription */}
            <div className="w-full max-w-md">
              <span className="text-xs font-bold text-bricket-white uppercase tracking-widest block mb-4">
                Corporate Updates
              </span>
              <form className="flex w-full relative">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-bricket-white/5 border border-bricket-white/10 rounded-lg pl-4 pr-14 py-3.5 text-sm text-bricket-white placeholder:text-bricket-grey/50 focus:outline-none focus:border-bricket-gold transition-colors"
                  required
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-bricket-gold hover:bg-bricket-white text-bricket-dark rounded-md flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>
          </div>

          {/* Spacer for large screens */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Columns - Highly optimized for Mobile Grid */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col gap-4 lg:gap-5">
            <h4 className="text-xs font-bold text-bricket-white uppercase tracking-widest mb-1 lg:mb-2">Portfolio</h4>
            <Link href="#mintrix-contracting" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Mintrix Contracting</Link>
            <Link href="#mintrix-maintenance" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Mintrix Maintenance</Link>
            <Link href="#mintrix-world" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Mintrix World</Link>
            <Link href="#mintrix-mining" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Mintrix Mining</Link>
            <Link href="#bricketx-pk" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">BricketX.pk</Link>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-4 lg:gap-5">
            <h4 className="text-xs font-bold text-bricket-white uppercase tracking-widest mb-1 lg:mb-2">Company</h4>
            <Link href="/about" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">About Us</Link>
            <Link href="#leadership" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Leadership</Link>
            <Link href="/careers" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Careers</Link>
            <Link href="#press" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Press & Media</Link>
            <Link href="/contact" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Contact</Link>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-4 lg:gap-5">
            <h4 className="text-xs font-bold text-bricket-white uppercase tracking-widest mb-1 lg:mb-2">Legal</h4>
            <Link href="#privacy" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Terms of Service</Link>
            <Link href="#cookies" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Cookie Settings</Link>
            <Link href="#compliance" className="text-sm lg:text-base text-bricket-grey/70 hover:text-bricket-gold transition-colors">Compliance</Link>
          </div>

        </div>

        {/* 3. BOTTOM SECTION (Mobile Optimized) */}
        <div className="pt-8 border-t border-bricket-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Top row on mobile: Status Pill and Socials side-by-side */}
          <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-6 order-1 md:order-2">
            
            {/* Sleek Operational Pill */}
            <div className="flex items-center gap-3 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-bricket-white/5 border border-bricket-white/10">
              <span className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 lg:h-2.5 lg:w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] lg:text-xs font-medium text-bricket-grey uppercase tracking-wider">All Systems Normal</span>
            </div>

            {/* Elegant Social Icons */}
            <div className="flex gap-2 lg:gap-3">
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-bricket-white/20 flex items-center justify-center text-bricket-white hover:bg-bricket-gold hover:border-bricket-gold hover:text-bricket-dark transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-bricket-white/20 flex items-center justify-center text-bricket-white hover:bg-bricket-gold hover:border-bricket-gold hover:text-bricket-dark transition-all duration-300">
                <span className="sr-only">Twitter / X</span>
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Copyright text at the very bottom on mobile */}
          <p className="text-xs lg:text-sm text-bricket-grey/50 order-2 md:order-1 text-center md:text-left w-full md:w-auto mt-4 md:mt-0">
            © {currentYear} BricketX Enterprise Group. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}