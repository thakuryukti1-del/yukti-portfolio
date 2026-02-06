const projects = [
  {
    title: "GitHub User Finder",
    desc: "Search GitHub profiles using REST API and display dynamic user data."
  },
  {
    title: "Task Reminder App",
    desc: "CRUD task manager with React Hooks & form validation."
  },
  {
    title: "Blood Bank Management System",
    desc: "Responsive system for donor registration and demand tracking."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">

      <h2 className="text-3xl text-center font-semibold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-medium mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
