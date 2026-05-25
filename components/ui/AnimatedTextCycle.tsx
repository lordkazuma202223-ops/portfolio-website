"use client";

import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function AnimatedTextCycle({
  words,
  interval = 5000,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [width, setWidth] = useState<string | number>("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  // Measure all words upfront to prevent layout thrashing
  const wordWidths = useMemo(() => {
    if (!measureRef.current) return [];
    const elements = Array.from(measureRef.current.children);
    return elements.map((el) => el.getBoundingClientRect().width);
  }, [words]);

  // Set up measurement and initial width
  useEffect(() => {
    if (measureRef.current && wordWidths[currentIndex] !== undefined) {
      setWidth(wordWidths[currentIndex]);
    }
  }, [wordWidths, currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 100); // Small delay to start exit animation
    }, interval);
    return () => clearInterval(timer);
  }, [interval, words.length]);

  // Reset animation state after transition
  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 600); // Match animation duration + buffer
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  // Container animation for whole word
  const containerVariants = {
    hidden: { y: -20, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.35, ease: "easeOut" } },
    exit: { y: 20, opacity: 0, filter: "blur(8px)", transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      {/* Hidden measurement div with all words rendered */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={`font-bold ${className}`}>
            {word}
          </span>
        ))}
      </div>

      {/* Visible animated word */}
      <motion.span
        className="relative inline-block"
        animate={{
          width: wordWidths[currentIndex] || "auto",
          transition: {
            type: "tween",
            duration: 0.35,
            ease: "easeInOut",
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block font-bold ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
}
