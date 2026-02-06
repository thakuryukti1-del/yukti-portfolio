const skills = [
  "JavaScript",
  "React.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Python",
  "REST APIs",
  "Git & GitHub",
  "Responsive Design",
  "React Hooks"
];

export default function Skills() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white rounded-lg shadow-sm border"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
