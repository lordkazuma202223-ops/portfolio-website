"use client";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Home, Briefcase, Wrench, User, Mail } from "lucide-react";

interface NavigationProps {
  sections?: Array<{ id: string; label: string }>;
}

export default function Navigation({ sections: defaultSections }: NavigationProps) {
  const sections = defaultSections || [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "stats", label: "Stats" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
      <ExpandableTabs
        tabs={[
          { title: "Home", icon: Home },
          { type: "separator" },
          { title: "Projects", icon: Briefcase },
          { type: "separator" },
          { title: "Skills", icon: Wrench },
          { type: "separator" },
          { title: "About", icon: User },
          { type: "separator" },
          { title: "Contact", icon: Mail },
        ]}
        activeColor="text-purple-400"
        onChange={(index) => {
          const sectionMap = [0, 2, 4, 6, 8, 10];
          const activeIndex = sectionMap.find(i => i === index);
          if (activeIndex !== undefined && sections[activeIndex]) {
            document.getElementById(sections[activeIndex].id)?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </div>
  );
}
