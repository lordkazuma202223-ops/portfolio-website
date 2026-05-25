"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollSection {
  id: string;
  label: string;
}

interface ScrollNavProps {
  sections: ScrollSection[];
  className?: string;
}

export function ScrollNav({ sections, className }: ScrollNavProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const newActiveSection = sections.findIndex((section) => {
        const element = document.getElementById(section.id);
        if (!element) return false;
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
      });
      setActiveSection(newActiveSection >= 0 ? newActiveSection : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={cn(
        "fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6",
        className
      )}
    >
      <AnimatePresence>
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ scale: 0, opacity: 0, x: 20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: 20 }}
            transition={{ 
              delay: index * 0.08,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="group relative"
          >
            {/* Outer glow for active section */}
            {activeSection === index && (
              <motion.div
                className="absolute inset-0 rounded-full bg-purple-400/30"
                initial={{ scale: 1 }}
                animate={{ scale: 1.5 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}

            {/* Dot */}
            <motion.button
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "relative w-5 h-5 rounded-full transition-all duration-300 shadow-lg",
                activeSection === index
                  ? "bg-purple-400 scale-125"
                  : "bg-gray-700 hover:bg-purple-500 group-hover:scale-110"
              )}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={section.label}
            >
              {/* Inner dot for active section */}
              {activeSection === index && (
                <motion.div
                  className="absolute inset-1 rounded-full bg-white"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Pulsing rings for active section */}
              {activeSection === index && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-purple-300"
                    initial={{ scale: 1.2, opacity: 0.6 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-purple-200"
                    initial={{ scale: 1.4, opacity: 0.4 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.75
                    }}
                  />
                </>
              )}
            </motion.button>

            {/* Tooltip */}
            <motion.div
              className="absolute right-8 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <span className="whitespace-nowrap rounded-lg bg-gray-900/95 px-4 py-2 text-sm font-semibold text-gray-100 shadow-2xl backdrop-blur-md border border-purple-500/30">
                {section.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Progress bar */}
      <div className="absolute right-[9px] top-0 bottom-0 w-[2px] bg-gray-700 overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600"
          style={{
            height: `${(activeSection / (sections.length - 1)) * 100}%`
          }}
          initial={{ height: 0 }}
          transition={{ 
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
      </div>
    </div>
  );
}
