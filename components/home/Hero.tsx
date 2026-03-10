import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col lg:flex-row min-h-[90vh] border-b border-bricket-gold/20 bg-bricket-dark">
      
      {/* =========================================
          LEFT COLUMN: The Institutional Pitch (DARK)
      ========================================= */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:pl-24 lg:pr-16 py-20 lg:py-32 z-10 relative">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-bricket-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Security & Compliance Badges */}
        <div className="animate-fade-in-up flex flex-wrap items-center gap-3 mb-8 relative z-10">
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-green-400 bg-green-400/10 px-3 py-1.5 rounded-md border border-green-400/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Platform Active
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-bricket-grey bg-bricket-white/5 px-3 py-1.5 rounded-md border border-bricket-white/10">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
            EV SSL Secured
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="animate-fade-in-up [animation-delay:150ms] text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-extrabold text-bricket-white tracking-tight mb-8 relative z-10">
          Private capital. <br />
          Tangible <span className="text-bricket-gold italic font-light relative inline-block">
            assets.
            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-bricket-gold/30 rounded-full"></span>
          </span>
        </h1>
        
        {/* Core Philosophy */}
        <p className="animate-fade-in-up [animation-delay:300ms] text-lg sm:text-xl text-bricket-grey mb-12 max-w-xl leading-relaxed pl-4 border-l-2 border-bricket-gold/50 relative z-10">
          BricketX is a premium real-asset platform providing institutional and private investors unhindered access to high-yield real estate, global commodities, and digital infrastructure.
        </p>
        
        {/* High-Conversion CTAs */}
        <div className="animate-fade-in-up [animation-delay:450ms] flex flex-col sm:flex-row gap-4 relative z-10">
          <Link href="/opportunities" className="group bg-bricket-gold hover:bg-bricket-white text-bricket-dark px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_-5px_rgba(195,153,103,0.3)]">
            View Opportunities
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="border border-bricket-white/20 hover:bg-bricket-white/5 text-bricket-white px-8 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all duration-300">
            Institutional Onboarding
          </Link>
        </div>
      </div>

      {/* =========================================
          RIGHT COLUMN: The Proof & Data
      ========================================= */}
      <div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto min-h-full bg-bricket-dark">
        
        {/* High-Res Background Image */}
        <Image 
          src="/images/hero-architecture.jpg" 
          alt="BricketX Real Estate Development" 
          fill 
          className="object-cover opacity-60 mix-blend-lighten"
          priority
        />
        
        {/* Dark Gradient Overlay for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-bricket-dark via-transparent to-transparent hidden lg:block"></div>
        
        {/* THE HOOK: Floating Glassmorphism Data Card */}
        <div className="absolute bottom-12 left-6 lg:-left-20 bg-bricket-dark/60 backdrop-blur-xl p-8 shadow-2xl border border-bricket-white/10 w-[calc(100%-48px)] max-w-sm z-20 rounded-2xl animate-fade-in-up [animation-delay:600ms]">
           
           <div className="flex justify-between items-start mb-6 border-b border-bricket-white/10 pb-4">
              <div>
                <p className="text-[10px] font-bold text-bricket-grey uppercase tracking-wider mb-1">Featured Development</p>
                <p className="text-lg font-extrabold text-bricket-white">Mintrix Palm Villas</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                +18.5% IRR
              </div>
           </div>

           <div className="space-y-5">
              <div>
                <div className="flex justify-between text-[10px] font-bold text-bricket-grey uppercase tracking-wider mb-2">
                  <span>Capital Deployed</span>
                  <span className="text-bricket-white">$45.5M</span>
                </div>
                <div className="w-full h-1.5 bg-bricket-white/10 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-bricket-gold shadow-[0_0_10px_rgba(195,153,103,0.8)]"></div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-bricket-white/5 border border-bricket-white/10 flex items-center justify-center text-bricket-gold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-bricket-grey uppercase tracking-wider">Location</p>
                    <p className="text-xs font-bold text-bricket-white">Dubai, UAE</p>
                  </div>
                </div>
                
                <Link href="/opportunities" className="text-xs font-bold text-bricket-gold hover:text-bricket-white transition-colors flex items-center gap-1">
                  View Data <span className="text-lg leading-none">→</span>
                </Link>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}