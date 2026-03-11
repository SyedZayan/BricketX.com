import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links data
const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/bricketxinvestments",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bricketxinvestments",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.204 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/bricketx-investments/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.125 0 2.062 2.062 0 01-2.062 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    }
  ];


  return (
    <footer className="w-full bg-bricket-dark pt-20 pb-10 px-6 border-t border-bricket-gold/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* TOP: Global CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 mb-16 border-b border-bricket-white/10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-bricket-white tracking-tight">
              Ready to secure your <span className="text-bricket-gold italic">financial future?</span>
            </h2>
          </div>
          <div className="flex shrink-0">
            <Link href="/contact" className="bg-bricket-gold hover:bg-bricket-white text-bricket-dark px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg text-center w-full md:w-auto">
              Become an Investor
            </Link>
          </div>
        </div>

        {/* MIDDLE: Links & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-6 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/logo/BrickX Logo.png" 
                alt="BricketX Logo" 
                width={160} 
                height={48} 
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-bricket-grey/70 text-sm leading-relaxed mb-8 max-w-sm">
              BricketX is a premier real-asset investment platform providing secure, high-yield opportunities in global real estate, mineral resources, and commodities.
            </p>

            {/* SOCIAL ICONS - Fixed brand color #c39967 */}
            
            {/* SOCIAL ICONS - Premium Button Look */}
            <div className="flex items-center gap-4 mb-10">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-[#c39967]/30 bg-[#c39967]/5 transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#c39967] hover:border-[#c39967] hover:shadow-[0_4px_12px_rgba(195,153,103,0.3)]"
                >
                  <span className="text-[#c39967] group-hover:text-bricket-dark transition-colors duration-300">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>

            {/* Security Badges */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs font-bold text-green-400 uppercase tracking-widest bg-green-400/10 px-4 py-2 rounded-md border border-green-400/20 w-max">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                EV SSL Certificate Verified
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-bricket-grey uppercase tracking-widest bg-bricket-white/5 px-4 py-2 rounded-md border border-bricket-white/10 w-max">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Cloudflare DDoS Protected
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-bricket-white uppercase tracking-widest mb-2 border-b border-bricket-gold/30 pb-2">Platform</h4>
            <Link href="/opportunities" className="text-sm text-bricket-grey/70 hover:text-bricket-gold transition-colors">Investment Opportunities</Link>
            <Link href="/insights" className="text-sm text-bricket-grey/70 hover:text-bricket-gold transition-colors">Market Insights</Link>
            <Link href="/projects" className="text-sm text-bricket-grey/70 hover:text-bricket-gold transition-colors">Our Projects</Link>
            <Link href="/portal" className="text-sm text-bricket-gold font-semibold hover:text-bricket-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Investor Login
            </Link>
          </div>

          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-bricket-white uppercase tracking-widest mb-2 border-b border-bricket-gold/30 pb-2">Company</h4>
            <Link href="/about" className="text-sm text-bricket-grey/70 hover:text-bricket-gold transition-colors">About Us</Link>
            <Link href="/contact" className="text-sm text-bricket-grey/70 hover:text-bricket-gold transition-colors">Contact Support</Link>
          </div>

          <div className="md:col-span-4 lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-bricket-white uppercase tracking-widest mb-2 border-b border-bricket-gold/30 pb-2">Legal & Privacy</h4>
            <Link href="/privacy" className="text-sm text-bricket-grey/70 hover:text-bricket-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-bricket-grey/70 hover:text-bricket-gold transition-colors">Terms of Service</Link>
            <Link href="/gdpr" className="text-sm text-bricket-grey/70 hover:text-bricket-gold transition-colors">GDPR Compliance</Link>
          </div>
        </div>

        {/* BOTTOM: Legal Disclaimer */}
        <div className="pt-8 border-t border-bricket-white/10 flex flex-col items-center gap-6">
          <p className="text-[10px] sm:text-xs text-bricket-grey/40 text-center max-w-4xl leading-relaxed">
            <strong>Disclaimer:</strong> Real asset investments, including real estate and commodities, carry inherent risks. Past performance is not indicative of future results. The information provided on this website does not constitute financial, legal, or tax advice. All investments are subject to strict compliance, AML, and KYC regulations. 256-bit SSL encryption is utilized across the BricketX platform to ensure secure transmission of investor data.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-xs text-bricket-grey/60 font-medium">
            <p>© {currentYear} BricketX. All rights reserved.</p>
            <div className="flex items-center gap-2 bg-bricket-white/5 px-3 py-1.5 rounded-full border border-bricket-white/10">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Secure Investor Dashboard Online
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}