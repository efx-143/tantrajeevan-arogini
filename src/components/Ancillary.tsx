"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ancillaryObjectives = [
  "Continuously upgrade products using emerging technologies such as machine learning, blockchain for health records, and telemedicine platforms.",
  "Support preventive healthcare by enabling early screening and lifestyle monitoring.",
  "Contribute towards national goals such as the Digital Health Mission (India).",
  "Build a strong R&D and product development team in biomedical engineering and data science.",
  "Offer training and upskilling programs for healthcare professionals in digital health tools."
];

export default function Ancillary() {
  return (
    <section className="py-24 bg-brand-secondary/30 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Beyond the Core: <br />
            <span className="text-brand-secondary">Our Ancillary Vision</span>
          </h2>
          <p className="text-slate-300 mb-10 leading-relaxed font-light">
            We are committed to continuous growth, education, and contributing to the broader healthcare ecosystem through advanced research and national initiatives.
          </p>
          
          <ul className="space-y-6">
            {ancillaryObjectives.map((obj, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">{obj}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden glass-panel flex flex-col justify-center items-center p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="text-6xl font-bold text-white mb-4 tracking-tighter">
              R&D <span className="text-brand-primary">+</span>
            </div>
            <div className="text-xl text-brand-tertiary font-medium mb-6 uppercase tracking-widest">
              Biomedical & Data Science
            </div>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">
              Building a strong foundation for the next generation of healthcare professionals and digital health tools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
