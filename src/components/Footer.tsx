import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/20 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-secondary to-brand-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">T</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-wide">
                TANTRAJEEVAN AROGINI
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              TANTRAJEEVAN AROGINI PVT LTD designs and develops smart, affordable, and scalable healthcare technologies that improve accessibility and quality of healthcare services.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="#objectives" className="hover:text-brand-secondary transition-colors">Main Objectives</Link></li>
              <li><Link href="#ancillary" className="hover:text-brand-secondary transition-colors">Ancillary Goals</Link></li>
              <li><Link href="#technology" className="hover:text-brand-secondary transition-colors">Technology</Link></li>
              <li><Link href="#contact" className="hover:text-brand-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-secondary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-secondary transition-colors">Twitter (X)</a></li>
              <li><a href="mailto:contact@tantrajeevan.com" className="hover:text-brand-secondary transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 TANTRAJEEVAN AROGINI PVT LTD. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
