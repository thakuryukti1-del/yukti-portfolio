import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      <img
        src={hero}
        className="absolute inset-0 w-full h-full object-cover"
        alt="workspace"
      />

      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">

        <div className="max-w-xl space-y-6">

          <h1 className="text-6xl font-bold text-gray-900">
            Yukti Thakur
          </h1>

          <p className="text-xl text-gray-700">
            Frontend Developer | React • Tailwind • JavaScript
          </p>

          <p className="text-gray-600">
            Building clean, responsive and user-focused web applications.
          </p>

          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-lg hover:shadow-lg transition"
          >
            View My Work
          </a>

        </div>
      </div>
    </section>
  );
}
