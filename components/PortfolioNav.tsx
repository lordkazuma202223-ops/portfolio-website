"use client";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import {
  Home as HomeIcon,
  Code,
  Briefcase,
  Mail,
  User,
} from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "stats", label: "Stats" },
  { id: "contact", label: "Contact" },
];

export default function PortfolioNav() {
  const tabs: any[] = [
    { title: "Home", icon: HomeIcon },
    { type: "separator" },
    { title: "About Me", icon: User },
    { type: "separator" },
    { title: "Projects", icon: Briefcase },
    { type: "separator" },
    { title: "Skills", icon: Code },
    { type: "separator" },
    { title: "Stats", icon: Mail },
    { type: "separator" },
    { title: "Contact", icon: Mail },
  ];

  const handleTabChange = (index: number | null) => {
    if (index !== null) {
      const element = document.getElementById(sections[index]?.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <ExpandableTabs
      tabs={tabs as any}
      activeColor="text-purple-400"
      className="border-white/10 dark:border-white/10"
      onChange={handleTabChange}
    />
  );
}
