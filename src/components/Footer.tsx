"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#fbfaf8] border-t border-stone-200/70 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-200/60">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-2 group">
              <Logo size={36} />
              <span className="font-serif text-2xl font-medium text-stone-900 group-hover:text-purple-700 transition-colors">
                Tantrajeevan Arogini
              </span>
            </Link>
            <div className="text-xs text-stone-500 font-sans uppercase tracking-wider mb-4">
              Tantrajeevan Arogini Pvt Ltd
            </div>
            <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed max-w-sm mb-6">
              Designing and developing smart, affordable, and scalable healthcare technologies that
              improve accessibility and quality of healthcare services.
            </p>
            <div className="text-xs text-stone-400">
              Committed to Digital Health Mission (India)
            </div>
          </div>

          {/* Direct Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-500">
              <li>
                <Link href="#main-objectives" className="hover:text-stone-900 transition-colors">
                  Main Objectives (6 Pillars)
                </Link>
              </li>
              <li>
                <Link href="#ancillary-objectives" className="hover:text-stone-900 transition-colors">
                  Ancillary Objectives (5 Goals)
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-stone-900 transition-colors">
                  About Tantrajeevan
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-stone-900 transition-colors">
                  Contact &amp; Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
                Official Inquiries
              </h4>
              <div className="flex items-center gap-2 mb-3">
                <a
                  href="mailto:contact@tantrajeevan.com"
                  aria-label="Email Tantrajeevan"
                  className="w-8 h-8 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 flex items-center justify-center transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="X (Twitter) Tantrajeevan"
                  className="w-8 h-8 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 flex items-center justify-center transition-colors shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn Tantrajeevan"
                  className="w-8 h-8 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 flex items-center justify-center transition-colors shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.3a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                  </svg>
                </a>
              </div>
              <a
                href="mailto:contact@tantrajeevan.com"
                className="text-xs text-stone-600 hover:text-stone-900 font-medium transition-colors"
              >
                contact@tantrajeevan.com
              </a>
            </div>

            {/* Back to top button */}
            <div className="mt-6 md:mt-0">
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-8 h-8 rounded-full border border-stone-200 hover:border-stone-400 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-3">
          <p>© 2026 TANTRAJEEVAN AROGINI PVT LTD. All rights reserved.</p>
          <p>Smart, affordable, and scalable healthcare technologies.</p>
        </div>
      </div>
    </footer>
  );
}
