"use client";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";

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
          { title: "Home" },
          { type: "separator" },
          { title: "Projects" },
          { type: "separator" },
          { title: "Skills" },
          { type: "separator" },
          { title: "About" },
          { type: "separator" },
          { title: "Contact" },
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
