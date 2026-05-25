"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavItem {
  name: string;
  url: string;
}

interface MinimalNavProps {
  items: NavItem[];
  className?: string;
}

export default function MinimalNav({
  items,
  className,
}: MinimalNavProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={cn("fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-6", className)}>
      {/* Desktop Nav */}
      <div className="hidden sm:flex justify-center">
        <div className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-full",
          "border-2 border-white/30 bg-white/10 backdrop-blur-sm shadow-lg"
        )}>
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link key={item.name} href={item.url}>
                <motion.div
                  className={cn(
                    "text-sm font-semibold px-3 py-1.5 rounded-full whitespace-nowrap",
                    "relative transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent hover:font-bold"
                  )}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  whileHover={{
                    scale: isActive ? 1.05 : 1.03,
                  }}
                >
                  {item.name}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/10 opacity-0"
                    animate={{
                      opacity: isActive ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex justify-center">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm shadow-lg text-white"
          whileTap={{ scale: 0.95 }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden mt-4 flex justify-center"
          >
            <div className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm shadow-lg">
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      className={cn(
                        "text-sm font-semibold px-6 py-2 rounded-full whitespace-nowrap",
                        "relative transition-all duration-300",
                        isActive
                          ? "bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                          : "bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent hover:font-bold"
                      )}
                      whileHover={{
                        scale: 1.05,
                      }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
