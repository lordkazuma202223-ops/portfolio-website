interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

export function StatsSection() {
  return (
    <section id="stats" className="py-32 px-4 relative overflow-hidden" aria-labelledby="stats-heading">
      {/* Stats background - wave pattern */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30" />
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            opacity="0.3"
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1440,138.7C1536,171,1632,181,1728,197.3C1824,192,1920,160,2016,138.7C2112,117,2208,107,2304,122.7C2400,139,2496,181,2592,186.7C2688,192,2784,160,2880,138.7C2976,171,3072,203,3168,213.3C3264,192,3360,160,3456,138.7C3552,171,3648,203,3744,186.7C3840,192,3936,160,4032,138.7C4224,117,4320,107,4416,122.7C4608,139,4704,181,4800,186.7C4896,192,4992,160,5088,138.7C5088,171,5184,203,5280,213.3C5376,192,5472,160,5568,138.7C5664,171,5760,203,5856,197.3C5936,192,6048,160,6144,138.7C6240,171,6320,203,6432,181,7280,192,6528,160,6640,138.7C6720,171,6800,203,6880,197.3C6912,192,7008,160,7104,138.7C7104,171,7200,203,7296,213.3C7200,171,7296,203,7392,197.3C7392,192,7488,160,7584,138.7C7680,171,7776,203,7872,213.3C7872,192,7968,160,8064,138.7C8064,171,8160,203,8256,213.3C8160,192,8352,160,8448,138.7C8352,171,8448,203,8544,213.3C8544,192,8640,160,8736,138.7C8736,149,8832,139,8928,154.7C9024,171,9120,181,9216,197.3C9216,192,9312,160,9408,138.7C9408,181,9504,203,9600,197.3C9600,181,9680,160,9768,138.7L9880,192L9880,320L0,320Z"
          />
        </svg>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3" role="list">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" aria-hidden="true" />

              <div className="relative p-8">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="mt-2 text-lg text-gray-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
