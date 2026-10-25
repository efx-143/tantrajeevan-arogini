"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-white/10 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-secondary to-brand-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">T</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-wide hidden sm:block">
            TANTRAJEEVAN AROGINI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#objectives" className="hover:text-white transition-colors">Objectives</Link>
          <Link href="#technology" className="hover:text-white transition-colors">Technology</Link>
          <Link href="#impact" className="hover:text-white transition-colors">Impact</Link>
          <Link href="#rd" className="hover:text-white transition-colors">R&D</Link>
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton intensity={0.1}>
            <Link 
              href="#contact" 
              className="px-5 py-2.5 rounded-full border border-brand-secondary/30 text-brand-secondary text-sm font-medium hover:bg-brand-secondary/10 transition-colors"
            >
              Contact Us
            </Link>
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
