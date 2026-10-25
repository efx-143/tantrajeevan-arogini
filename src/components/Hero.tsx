"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Link from "next/link";
import { ArrowRight, Activity, Cpu, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-secondary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
            Empowering Digital Health Mission
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Smart, Affordable & <br />
            <span className="text-gradient">Scalable Healthcare.</span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed font-light">
            Integrating IoT, AI, and data analytics into healthcare systems for real-time monitoring, predictive diagnosis, and secure decision support.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <MagneticButton intensity={0.2}>
              <Link href="#solutions" className="group relative px-8 py-4 bg-foreground text-background font-medium rounded-full overflow-hidden flex items-center gap-2">
                <span className="relative z-10">Discover Solutions</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-brand-tertiary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out duration-300" />
              </Link>
            </MagneticButton>
            
            <Link href="#about" className="px-6 py-4 text-slate-300 hover:text-white font-medium transition-colors">
              Our Vision
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Visual abstract representation */}
        <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end hidden md:flex">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[500px] aspect-square"
          >
            {/* Central abstract element */}
            <div className="absolute inset-0 border-[1px] border-brand-secondary/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-[10%] border-[1px] border-brand-primary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-[20%] border-[1px] border-brand-tertiary/30 rounded-full border-dashed animate-[spin_50s_linear_infinite]" />
            
            {/* Floating feature cards */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] left-0 glass-panel p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="p-3 bg-brand-secondary/20 rounded-xl text-brand-secondary">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Real-time</p>
                <p className="text-sm text-foreground font-semibold">Monitoring</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[40%] right-[-5%] glass-panel p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="p-3 bg-brand-primary/20 rounded-xl text-brand-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">AI-driven</p>
                <p className="text-sm text-foreground font-semibold">Diagnostics</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[15%] left-[20%] glass-panel p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="p-3 bg-brand-accent/20 rounded-xl text-brand-accent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Secure & Compliant</p>
                <p className="text-sm text-foreground font-semibold">Cloud Platform</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
