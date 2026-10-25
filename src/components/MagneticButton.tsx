"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"div"> {
  intensity?: number;
  springConfig?: any;
}

export default function MagneticButton({
  children,
  className,
  intensity = 0.5,
  springConfig = { stiffness: 150, damping: 15, mass: 0.1 },
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    if (!isHovered) {
      springX.set(0);
      springY.set(0);
    }
  }, [isHovered, springX, springY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * intensity;
    const y = (clientY - (top + height / 2)) * intensity;
    springX.set(x);
    springY.set(y);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("inline-flex relative z-10", className)}
      style={{ x: springX, y: springY }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
