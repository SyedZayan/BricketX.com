import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              <Image src="/images/bricketx-logo.png" alt="BricketX Logo" width={160} height={48} className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-bricket-grey/70 text-sm leading-relaxed mb-8 max-w-sm">
              BricketX is a premier real-asset investment platform providing secure, high-yield opportunities in global real estate, mineral resources, and commodities.
            </p>
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

          {/* New Sitemap Links */}
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
            <Link href="/cookies" className="text-sm text-bricket-grey/70 hover:text-bricket-gold transition-colors">Cookie Policy</Link>
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