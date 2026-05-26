import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Gooey Text Morphing",
    description: "Interactive text morphing with liquid SVG filters and smooth blur transitions",
    tags: ["React", "SVG Filters", "TypeScript"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Animated Text Cycle",
    description: "Dynamic word cycling with spring animations and blur effects",
    tags: ["Framer Motion", "React", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Portfolio v2",
    description: "Modern portfolio featuring cutting-edge animations and gradients",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "Dashboard Pro",
    description: "Real-time analytics dashboard with data visualization",
    tags: ["React", "D3.js", "Node.js"],
    gradient: "from-cyan-500 to-purple-500",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping platform with payment integration",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    title: "AI Chat Interface",
    description: "Intelligent chatbot with natural language processing",
    tags: ["Python", "OpenAI", "WebSocket"],
    gradient: "from-pink-500 to-purple-500",
  },
];

const carouselImages = {
  alt: "Project showcase",
  step1img1: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1740&auto=format&fit=crop",
  step1img2: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1740&auto=format&fit=crop",
  step2img1: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1661&auto=format&fit=crop",
  step2img2: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1674&auto=format&fit=crop",
  step3img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop",
  step4img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1742&auto=format&fit=crop",
};

const carouselSteps = [
  {
    id: "1",
    name: "Project 1",
    title: "Football Live Streaming Platform",
    description: "Built an ad-free live football streaming platform using SportSRC API with Next.js and Tailwind CSS. Features real-time match updates, score tracking, and responsive design.",
    skills: ["Next.js", "Tailwind CSS", "SportSRC API", "TypeScript"],
  },
  {
    id: "2",
    name: "Project 2",
    title: "Contentful News Bot",
    description: "Automated news aggregation system targeting Myanmar diaspora in Singapore. Integrates with Contentful CMS, Telegram API, and RSS feeds for seamless content delivery.",
    skills: ["Contentful", "Telegram API", "Python", "RSS Feeds", "Automated Workflows"],
  },
  {
    id: "3",
    name: "Project 3",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio showcasing technical projects. Built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations and dark mode support.",
    skills: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Dark Mode"],
  },
  {
    id: "4",
    name: "Project 4",
    title: "AI-Powered Applications",
    description: "Leveraging modern AI tools and APIs to build intelligent applications. Focus on user-friendly interfaces and seamless integration with cutting-edge technology.",
    skills: ["AI/ML", "API Integration", "User Interface", "Modern Tech Stack"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-16 px-4 relative overflow-hidden flex flex-col" aria-labelledby="projects-heading">
      {/* Projects background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900/20 to-purple-900/20" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-b from-slate-100 via-slate-300 to-slate-600 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded-full mt-4" />
        </div>

        {/* Feature Carousel */}
        <div className="mb-20">
          <FeatureCarousel
            image={carouselImages}
            steps={carouselSteps}
            interval={6000}
          />
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/10"
              role="listitem"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 transition-opacity group-hover:opacity-40`} aria-hidden="true" />

              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>
                <p className="mb-6 text-gray-300 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-sm"
                      role="listitem"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
