"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Sparkles, Building2, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#fbfaf8] relative overflow-hidden border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200/80 shadow-sm relative overflow-hidden">
          {/* Subtle ambient blur */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium mb-4">
                <Building2 className="w-3.5 h-3.5 text-stone-500" />
                <span>About Tantrajeevan Arogini</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight mb-6">
                Bridging the Divide in Healthcare Delivery
              </h2>

              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                TANTRAJEEVAN AROGINI PVT LTD was founded on a singular principle: advanced medical
                technologies must be accessible, affordable, and clinically dependable for everyone,
                from metropolitan hospital networks to primary health centers in remote rural areas.
              </p>

              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed mb-8">
                By uniting biomedical engineering, data science, and edge AI, we turn real-time
                monitoring into actionable clinical decisions while upholding the highest standards of
                patient confidentiality and national digital health compliance.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-sm"
                >
                  Contact Our Team
                </Link>
                <a
                  href="mailto:contact@tantrajeevan.com"
                  className="text-stone-600 hover:text-stone-900 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>contact@tantrajeevan.com</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-[#faf8f5] rounded-2xl p-6 border border-stone-200/60 text-center flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-1">
                  06
                </div>
                <div className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Main Objectives
                </div>
                <p className="text-[11px] text-stone-500 font-light">
                  Direct healthcare impact
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-2xl p-6 border border-stone-200/60 text-center flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-purple-700 mb-1">
                  05
                </div>
                <div className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Ancillary Goals
                </div>
                <p className="text-[11px] text-stone-500 font-light">
                  Continuous innovation &amp; R&amp;D
                </p>
              </div>

              <div className="bg-[#faf8f5] rounded-2xl p-6 border border-stone-200/60 text-center flex flex-col items-center justify-center col-span-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 mx-auto">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
                  Digital Health Mission (India)
                </div>
                <p className="text-[11px] text-stone-500 font-light mt-1">
                  Committed to secure, compliant citizen health data interoperability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
