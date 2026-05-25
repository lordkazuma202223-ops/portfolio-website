export function Footer() {
  return (
    <footer className="border-t border-white/10 relative overflow-hidden py-12 text-center">
      {/* Footer background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <p className="text-sm text-gray-400">
          Crafted with{" "}
          <span className="text-purple-400">Next.js</span>
          {", "}
          <span className="text-pink-400">Tailwind CSS</span>
          {", and "}
          <span className="text-cyan-400">Framer Motion</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          © 2026 Win Min Myat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
