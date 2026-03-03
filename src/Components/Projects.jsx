const projects = [
  {
    title: "GitHub User Finder",
    desc: "A React-based application that fetches and displays GitHub profiles using REST API with dynamic UI rendering and error handling.",
    tech: ["React", "REST API", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Reminder App",
    desc: "A CRUD task manager built with React Hooks featuring form validation and persistent state management.",
    tech: ["React", "Hooks", "Local Storage"],
    github: "#",
    live: "#"
  },
  {
    title: "Blood Bank Management System",
    desc: "Responsive web system for managing donor registration and blood demand tracking with structured UI components.",
    tech: ["React", "Tailwind", "REST API"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <h2 className="text-3xl text-center font-semibold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[#f6f5f2] p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="text-xs bg-white px-2 py-1 rounded-md border"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-6 text-sm font-medium">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}