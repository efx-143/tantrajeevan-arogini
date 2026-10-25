"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fbfaf8]/90 backdrop-blur-md border-b border-stone-200/60 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size={38} />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-stone-900 group-hover:text-purple-700 transition-colors leading-tight">
              Tantrajeevan Arogini
            </span>
            <span className="text-[10px] text-stone-500 font-sans tracking-wider uppercase">
              Healthcare Technology
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600 font-medium">
          <Link
            href="#main-objectives"
            className="hover:text-stone-900 transition-colors"
          >
            Main Objectives
          </Link>
          <Link
            href="#ancillary-objectives"
            className="hover:text-stone-900 transition-colors"
          >
            Ancillary Objectives
          </Link>
          <Link
            href="#about"
            className="hover:text-stone-900 transition-colors"
          >
            About &amp; Mission
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
          <Link
            href="#contact"
            className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbfaf8] border-b border-stone-200 px-6 py-6 flex flex-col gap-4 text-sm font-medium text-stone-700">
          <Link
            href="#main-objectives"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-purple-700"
          >
            Main Objectives
          </Link>
          <Link
            href="#ancillary-objectives"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-purple-700"
          >
            Ancillary Objectives
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-purple-700"
          >
            About &amp; Mission
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 bg-stone-900 text-white rounded-full font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
