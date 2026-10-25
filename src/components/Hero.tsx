"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, HeartPulse } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-subtle-grid">
      {/* Soft Ambient Pastel Glows matching Mindly aesthetic */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[460px] bg-gradient-to-tr from-purple-200/40 via-amber-100/35 to-rose-100/30 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Company Name Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-stone-200/80 text-stone-700 text-xs font-medium mb-8 shadow-sm backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>TANTRAJEEVAN AROGINI PVT LTD</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl text-stone-900 font-normal tracking-tight leading-[1.12] mb-6"
        >
          Smart, Affordable &amp; <br className="hidden sm:block" />
          <span className="italic font-normal">Scalable Healthcare Technologies</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Improving the accessibility and quality of healthcare services by integrating IoT,
          AI, and data analytics into clinical systems for real-time monitoring, predictive
          diagnosis, and secure decision support.
        </motion.p>

        {/* Direct Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#main-objectives"
            className="bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
          >
            <span>Explore Main Objectives</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="#ancillary-objectives"
            className="bg-white hover:bg-stone-50 text-stone-700 font-medium text-sm px-6 py-3.5 rounded-full border border-stone-200/80 transition-all shadow-sm"
          >
            Ancillary Vision
          </Link>
        </motion.div>

        {/* 3 Overview Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-5 text-left max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-stone-200/70 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-stone-900 font-medium mb-2">
              Accessible &amp; Scalable
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Democratizing medical technology so that high-quality diagnosis is affordable and
              available everywhere.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-purple-200 shadow-md shadow-purple-900/5 relative">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-stone-900 font-medium mb-2">
              IoT &amp; Predictive AI
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Real-time monitoring and machine learning models for proactive chronic disease
              management.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-stone-200/70 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-stone-900 font-medium mb-2">
              Secure Cloud &amp; Telehealth
            </h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">
              Confidential, standards-compliant health data platforms reaching underserved rural
              populations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
