import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* Background Image */}
      <img
        src={hero}
        className="absolute inset-0 w-full h-full object-cover"
        alt="workspace"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">

        <div className="max-w-xl space-y-6">

          <h1 className="text-6xl font-bold text-gray-900">
            Yukti Thakur
          </h1>

          <p className="text-xl text-gray-700">
            Frontend Developer crafting responsive and scalable web interfaces using React & modern UI technologies.
          </p>

          <p className="text-gray-600">
            B.Tech Computer Science student focused on building real-world projects and seeking frontend internship opportunities.
          </p>

          {/* Button */}
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition duration-300"
          >
            View My Work
          </a>

        </div>
      </div>
    </section>
  );
}