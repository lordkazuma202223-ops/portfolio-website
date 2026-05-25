import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { GooeyText } from "@/components/GooeyTextMorphing";

interface HeroSectionProps {
  badge?: string;
  title1?: string;
  title2?: string;
  description?: string;
}

export function HeroSection({
  badge = "",
  title1 = "Hello, I'm Win Min Myat",
  title2 = "",
  description = "",
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <HeroGeometric badge={badge} title1={title1} title2={title2} description={description}>
        <GooeyText
          texts={[
            "Creative Developer",
            "UI/UX Designer",
            "Problem Solver",
            "Innovation Builder",
          ]}
          className="text-3xl md:text-5xl font-bold tracking-tight"
          textClassName="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent"
          morphTime={2}
          cooldownTime={0.5}
        />
      </HeroGeometric>
    </section>
  );
}
