interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "React / Next.js", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Framer Motion", icon: "✨" },
  { name: "Node.js", icon: "💚" },
  { name: "UI/UX Design", icon: "🎯" },
  { name: "Git & DevOps", icon: "🔧" },
  { name: "Performance", icon: "⚡" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden" aria-labelledby="skills-heading">
      {/* Skills background - geometric pattern */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20" />
        {/* Hexagonal pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l26 15v30L30 60 4 45V15z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/10"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity group-hover:opacity-10" aria-hidden="true" />

              <div className="relative p-6 text-center">
                <div className="text-4xl mb-2 transform transition-transform group-hover:scale-110" aria-hidden="true">
                  {skill.icon}
                </div>
                <span className="text-lg font-semibold text-purple-200 group-hover:text-purple-100 transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
