"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Cpu,
  Activity,
  ShieldCheck,
  TrendingDown,
  MapPin,
  Sparkles,
} from "lucide-react";

const mainObjectives = [
  {
    num: "01",
    title: "Smart, Affordable & Scalable Technologies",
    text: "To design and develop smart, affordable, and scalable healthcare technologies that improve accessibility and quality of healthcare services.",
    icon: <HeartPulse className="w-6 h-6 text-purple-600" />,
    badgeBg: "bg-purple-50 text-purple-700",
  },
  {
    num: "02",
    title: "IoT, AI & Data Analytics Integration",
    text: "To integrate IoT, AI, and data analytics into healthcare systems for real-time monitoring, diagnosis, and decision support.",
    icon: <Cpu className="w-6 h-6 text-amber-600" />,
    badgeBg: "bg-amber-50 text-amber-700",
  },
  {
    num: "03",
    title: "AI-Driven Predictive Models",
    text: "To create AI-driven diagnostic and predictive models for chronic disease management.",
    icon: <Activity className="w-6 h-6 text-rose-600" />,
    badgeBg: "bg-rose-50 text-rose-700",
  },
  {
    num: "04",
    title: "Secure Cloud-Based Health Data Platforms",
    text: "To implement secure cloud-based health data platforms, ensuring privacy, confidentiality, and compliance with healthcare standards.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    badgeBg: "bg-emerald-50 text-emerald-700",
  },
  {
    num: "05",
    title: "Remote Delivery & Healthcare Cost Reduction",
    text: "To reduce healthcare costs by enabling remote healthcare delivery and minimizing unnecessary hospital visits.",
    icon: <TrendingDown className="w-6 h-6 text-blue-600" />,
    badgeBg: "bg-blue-50 text-blue-700",
  },
  {
    num: "06",
    title: "Rural & Underserved Area Healthcare Access",
    text: "To improve healthcare access in rural and underserved areas through mobile and telehealth solutions.",
    icon: <MapPin className="w-6 h-6 text-teal-600" />,
    badgeBg: "bg-teal-50 text-teal-700",
  },
];

export default function Objectives() {
  return (
    <section id="main-objectives" className="py-24 bg-[#fbfaf8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Foundational Pillars</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-stone-900 font-normal tracking-tight mb-4">
            Main Objectives
          </h2>
          <p className="text-stone-500 text-sm sm:text-base font-light leading-relaxed">
            Our core mission is structured around six key objectives aimed at redefining healthcare
            delivery, accessibility, and clinical precision.
          </p>
        </div>

        {/* 6 Main Objectives Grid (Clean 2x3 layout) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainObjectives.map((obj, i) => (
            <motion.div
              key={obj.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header row: Number badge + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${obj.badgeBg}`}>
                    Objective {obj.num}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {obj.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-stone-900 font-medium mb-3 leading-snug">
                  {obj.title}
                </h3>

                {/* Exact Objective Statement */}
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  {obj.text}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>Tantrajeevan Priority</span>
                <span className="font-medium text-stone-700">Active Blueprint</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
