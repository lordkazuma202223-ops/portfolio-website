"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LampContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const LampContainer = ({ children, className }: LampContainerProps) => {
  return (
    <div className={cn(
      "relative min-h-[24rem] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md",
      className
    )}>
      {/* Lamp beam - conic gradient for cone shape */}
      <motion.div
        initial={{ opacity: 0.3, width: "15rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 h-96 w-[30rem]"
        style={{
          background: "conic-gradient(from 180deg at top, #06b6d4 0deg, transparent 60deg)",
        }}
      />

      {/* Bottom blur to fade beam */}
      <div className="absolute inset-0 z-40 h-96 w-full bg-gradient-to-b from-transparent via-transparent to-slate-950 blur-3xl"></div>

      {/* Glow at light source */}
      <div className="absolute top-8 z-50 h-8 w-8 rounded-full bg-cyan-400 blur-xl opacity-80"></div>
      <motion.div
        initial={{ scale: 1, opacity: 0.6 }}
        whileInView={{ scale: 1.2, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="absolute top-8 z-50 h-12 w-12 rounded-full bg-cyan-300 blur-2xl"
      ></motion.div>

      {children}
    </div>
  );
};
