export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Contact background - spotlight effect */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-fuchsia-900/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-pink-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-12" />

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          Interested in working together? Let's build something amazing together.
        </p>
      </div>
    </section>
  );
}
