export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center bg-stone-50">
      <div className="bg-white max-w-xl mx-auto rounded-2xl shadow-sm p-10 space-y-6">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900">
          Let’s Connect
        </h2>

        {/* Subtext */}
        <p className="text-gray-600">
          I'm currently seeking frontend or MERN stack internship opportunities and would love to connect.
        </p>

        {/* Contact Links */}
        <div className="space-y-3 text-gray-700">

          <a
            href="tel:+919654350611"
            className="block hover:text-slate-800 transition"
          >
            📞 +91 9654350611
          </a>

          <a
            href="mailto:thakuryukti1@gmail.com"
            className="block hover:text-slate-800 transition"
          >
            ✉️ thakuryukti1@gmail.com
          </a>

          <a
            href="https://github.com/thakuryukti1-del"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-slate-800 transition"
          >
            💻 GitHub
          </a>

          <a
            href="https://linkedin.com/in/yukti-thakur-3593a8293"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-slate-800 transition"
          >
            🔗 LinkedIn
          </a>

        </div>

        {/* Resume Button */}
        <a
          href="/Yukti_Thakur_Frontend_Developer.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition duration-300"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
}