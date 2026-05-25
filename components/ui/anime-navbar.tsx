"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  defaultActive?: string;
}

export default function AnimeNavBar({
  items,
  className,
  defaultActive = "Home",
}: NavBarProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultActive);

  return (
    <nav className={cn("fixed top-5 left-0 right-0 z-[9999] w-full pt-6 px-8", className)}>
      <div className="flex justify-center items-center gap-4">
        {items.map((item) => {
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => {
                setActiveTab(item.name);
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                isActive
                  ? "text-white/90 hover:text-white bg-white/90"
                  : "text-white/70 hover:text-white/70"
              )}
            >
              <span className={isActive ? "font-bold" : ""}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
