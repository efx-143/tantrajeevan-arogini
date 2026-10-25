"use client";

import { motion } from "framer-motion";
import {
  Layers,
  HeartHandshake,
  Flag,
  Microscope,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ancillaryObjectives = [
  {
    num: "01",
    tag: "EMERGING TECH",
    title: "Continuous Product Upgrades with Emerging Tech",
    text: "To continuously upgrade products using emerging technologies such as machine learning, blockchain for health records, and telemedicine platforms.",
    icon: <Layers className="w-6 h-6 text-purple-600" />,
    badgeBg: "bg-purple-50 text-purple-700",
  },
  {
    num: "02",
    tag: "PREVENTIVE HEALTH",
    title: "Preventive Care, Screening & Lifestyle Tracking",
    text: "To support preventive healthcare by enabling early screening and lifestyle monitoring.",
    icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    badgeBg: "bg-rose-50 text-rose-700",
  },
  {
    num: "03",
    tag: "NATIONAL IMPACT",
    title: "Contribution to Digital Health Mission (India)",
    text: "To contribute towards national goals such as the Digital Health Mission (India).",
    icon: <Flag className="w-6 h-6 text-amber-600" />,
    badgeBg: "bg-amber-50 text-amber-700",
  },
  {
    num: "04",
    tag: "R&D & INNOVATION",
    title: "Biomedical Engineering & Data Science Team",
    text: "To build a strong R&D and product development team in biomedical engineering and data science.",
    icon: <Microscope className="w-6 h-6 text-emerald-600" />,
    badgeBg: "bg-emerald-50 text-emerald-700",
  },
  {
    num: "05",
    tag: "CAPACITY BUILDING",
    title: "Upskilling Healthcare Professionals in Digital Tools",
    text: "To offer training and upskilling programs for healthcare professionals in digital health tools.",
    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
    badgeBg: "bg-blue-50 text-blue-700",
  },
];

export default function Ancillary() {
  return (
    <section
      id="ancillary-objectives"
      className="py-24 bg-[#faf8f5] relative overflow-hidden border-t border-stone-200/60"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond the Core</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal tracking-tight mb-4">
            Ancillary Objectives
          </h2>
          <p className="text-stone-500 text-sm sm:text-base font-light leading-relaxed">
            Supporting our primary pillars through continuous innovation, preventive care
            frameworks, national health mission alignment, biomedical R&amp;D, and clinician education.
          </p>
        </div>

        {/* 5 Ancillary Objectives Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ancillaryObjectives.map((obj, i) => (
            <motion.div
              key={obj.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${obj.badgeBg}`}>
                    Ancillary {obj.num}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {obj.icon}
                  </div>
                </div>

                <div className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-1.5">
                  // {obj.tag}
                </div>

                <h3 className="font-serif text-xl text-stone-900 font-medium mb-3 leading-snug">
                  {obj.title}
                </h3>

                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  {obj.text}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>Strategic Roadmap</span>
                <span className="font-medium text-stone-700">Committed</span>
              </div>
            </motion.div>
          ))}

          {/* 6th Complementary Mission Card to complete the 3x2 grid gracefully */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-3xl p-8 shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-stone-200 inline-block mb-6">
                Our Driving Vision
              </span>
              <h3 className="font-serif text-2xl font-medium mb-3 leading-snug">
                Engineering Healthcare for All
              </h3>
              <p className="text-stone-300 text-sm font-light leading-relaxed">
                Tantrajeevan Arogini is committed to creating an integrated ecosystem where
                cutting-edge engineering and data science serve human health with empathy and
                integrity.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <Link
                href="#contact"
                className="text-xs font-medium text-purple-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>Partner with our mission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
