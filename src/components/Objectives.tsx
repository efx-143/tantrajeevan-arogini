"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeartPulse, Stethoscope, Smartphone, Lock, Cloud, Brain, Activity } from "lucide-react";

const mainObjectives = [
  {
    title: "Accessibility & Quality",
    desc: "Smart, affordable, and scalable healthcare technologies that improve accessibility and quality of services.",
    icon: <HeartPulse className="w-6 h-6 text-brand-secondary" />
  },
  {
    title: "IoT & AI Integration",
    desc: "Real-time monitoring, diagnosis, and decision support via IoT, AI, and data analytics.",
    icon: <Brain className="w-6 h-6 text-brand-primary" />
  },
  {
    title: "Predictive Models",
    desc: "AI-driven diagnostic and predictive models for effective chronic disease management.",
    icon: <Activity className="w-6 h-6 text-brand-accent" />
  },
  {
    title: "Secure Cloud Platform",
    desc: "Ensuring privacy, confidentiality, and compliance with secure cloud-based health data platforms.",
    icon: <Cloud className="w-6 h-6 text-brand-tertiary" />
  },
  {
    title: "Remote Delivery",
    desc: "Reducing healthcare costs by minimizing unnecessary hospital visits through remote delivery.",
    icon: <Smartphone className="w-6 h-6 text-brand-secondary" />
  },
  {
    title: "Rural Telehealth",
    desc: "Improving healthcare access in rural and underserved areas via mobile and telehealth solutions.",
    icon: <Stethoscope className="w-6 h-6 text-brand-primary" />
  }
];

export default function Objectives() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="objectives" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pioneering the Future of <br className="hidden md:block" />
            <span className="text-gradient-subtle">Digital Health.</span>
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Our main objectives drive us to create an ecosystem where advanced technology 
            meets human-centric healthcare, making premium medical services accessible to all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainObjectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:bg-white/[0.02] transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {obj.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{obj.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div style={{ y }} className="absolute -right-[20%] top-[20%] w-[800px] h-[800px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
