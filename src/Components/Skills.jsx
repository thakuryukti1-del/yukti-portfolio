import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import { SiTailwindcss, SiPython } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Python", icon: SiPython },
  { name: "Git & GitHub", icon: FaGitAlt }
];

export default function Skills() {
  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-12">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-3 hover:-translate-y-1 transition duration-300"
            >
              <Icon className="text-4xl text-slate-700" />
              <span className="text-sm font-medium text-gray-700">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}