import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col lg:flex-row min-h-[90vh] border-b border-bricket-grey/20 bg-bricket-white">
      
      {/* Left Column: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:pl-24 lg:pr-16 py-20 lg:py-32 z-10 relative">
        
        {/* BRAND WATERMARK */}
        <div className="absolute top-10 -left-20 w-[600px] h-[600px] opacity-[0.03] pointer-events-none -z-10">
          <Image src="/images/bricketx-logo.png" alt="Watermark" fill className="object-contain" />
        </div>

        {/* Eyebrow text */}
        <span className="animate-fade-in-up text-bricket-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-bricket-gold"></span>
          Global Holding Enterprise
        </span>
        
        {/* Headline */}
        <h1 className="animate-fade-in-up [animation-delay:200ms] text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.1] font-extrabold text-bricket-dark tracking-tight mb-8">
          Driving excellence across <span className="text-bricket-gold relative inline-block">
            every dimension.
            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-bricket-gold/30 rounded-full"></span>
          </span>
        </h1>
        
        {/* Paragraph */}
        <p className="animate-fade-in-up [animation-delay:400ms] text-lg sm:text-xl text-bricket-grey mb-12 max-w-xl leading-relaxed">
          BricketX is the premier holding company overseeing a diverse portfolio of industry-leading brands, including Mintrix Contracting and BricketX.pk. We provide the foundation for sustainable growth and global impact.
        </p>
        
        {/* Buttons */}
        <div className="animate-fade-in-up [animation-delay:600ms] flex flex-col sm:flex-row gap-4">
          <Link href="#portfolio" className="group bg-bricket-dark hover:bg-bricket-gold text-bricket-white px-8 py-4 rounded-md font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-bricket-gold/20">
            Explore Portfolio
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="border-2 border-bricket-grey/30 hover:border-bricket-dark text-bricket-dark px-8 py-4 rounded-md font-semibold text-center transition-all duration-300">
            Partner With Us
          </Link>
        </div>
      </div>

      {/* Right Column: Background Setup */}
      <div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto min-h-full bg-bricket-dark border-l border-bricket-grey/20">
        
        {/* Make sure you drop a photo named "hero-architecture.jpg" into your public/images/ folder! */}
        <Image 
          src="/images/hero-architecture.jpg" 
          alt="BricketX Operations" 
          fill 
          className="object-cover"
        />
        
        <div className="absolute inset-0 bg-bricket-dark/10 mix-blend-multiply pointer-events-none"></div>
        
        {/* Floating Data Accent Box */}
        <div className="absolute bottom-12 left-12 lg:-left-16 bg-bricket-white p-8 shadow-2xl border border-bricket-grey/10 max-w-xs hidden md:block z-20 rounded-xl animate-float">
           <div className="flex items-center gap-5 mb-5">
              <div className="w-14 h-14 bg-bricket-dark text-bricket-gold flex items-center justify-center rounded-lg font-bold text-2xl shadow-inner">
                4+
              </div>
              <div>
                <p className="text-sm font-bold text-bricket-dark uppercase tracking-wider">Subsidiaries</p>
                <p className="text-xs text-bricket-grey mt-1">Operating globally</p>
              </div>
           </div>
           <div className="w-full h-1.5 bg-bricket-grey/10 rounded-full overflow-hidden">
             <div className="w-3/4 h-full bg-bricket-gold rounded-full"></div>
           </div>
        </div>

      </div>
    </section>
  );
}