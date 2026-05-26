import AnimatedTextCycle from "@/components/AnimatedTextCycle";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-16 px-4 relative overflow-hidden flex items-center" aria-labelledby="about-heading">
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900/20 to-purple-900/20" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-b from-slate-100 via-slate-300 to-slate-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded-full mt-4" />
        </div>

        {/* Content Div with Image and Text */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <div className="w-5/12 md:w-2/5 flex-shrink-0">
            <div className="relative group">
              <div className="relative h-80 w-80 md:h-96 md:w-96 overflow-hidden rounded-full border-4 border-white/20 bg-gradient-to-br from-purple-900/40 via-slate-900/50 to-purple-800/40 backdrop-blur-sm">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <span className="text-7xl md:text-8xl" role="img" aria-label="Developer emoji">
                    👨‍💻
                  </span>
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-purple-400/30" aria-hidden="true" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 blur-2xl -z-10" aria-hidden="true" />
            </div>
          </div>

          {/* About Me Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Hi, I'm Win Min Myat. I transform ideas into beautiful, functional digital experiences that work flawlessly and delight users.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                As a{" "}
                <AnimatedTextCycle
                  words={[
                    "Full Stack Developer",
                    "Design Enthusiast",
                    "Code Craftsman",
                    "Tech Explorer",
                  ]}
                  interval={2000}
                  className="text-lg md:text-xl bg-gradient-to-r from-purple-400 via-purple-300 to-slate-300 bg-clip-text text-transparent"
                />
                , I build solutions with modern web technologies and a keen eye for design.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or diving deep into UI/UX design patterns. I believe in continuous learning and pushing boundaries to create something truly special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
