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
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure all word widths
  const wordWidths = useMemo(() => {
    if (!measureRef.current) return Array(words.length).fill(0);
    const wordsElements = measureRef.current.querySelectorAll('span');
    return Array.from(wordsElements).map((el) => el.getBoundingClientRect().width);
  }, [words]);

  // Get current word width with small buffer
  const currentWidth = useMemo(() => {
    return (wordWidths[currentIndex] || 0) + 10;
  }, [wordWidths, currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 100);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, words.length]);

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const textVariants = {
    hidden: { y: -20, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.35, ease: "easeOut" } },
    exit: { y: 20, opacity: 0, filter: "blur(8px)", transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <span className="relative inline-block">
      {/* Hidden measurement */}
      <span
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={className}>{word}</span>
        ))}
      </span>

      {/* Flexible width container */}
      <motion.span
        className="relative inline-block"
        animate={{ width: currentWidth }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block ${className}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
}
