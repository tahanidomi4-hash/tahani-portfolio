import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, level: 90, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, level: 85, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "text-white" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, color: "text-sky-400" },
  { name: "C++", icon: <SiCplusplus />, level: 90, color: "text-blue-400" },
  { name: "Java", icon: <FaJava />, level: 85, color: "text-red-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#050816] text-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-500 mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-[#111c36] rounded-2xl p-6 border border-blue-900 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 duration-300"
            >

              <div className="flex justify-between items-center mb-4">

                <div className="flex items-center gap-4">

                  <div className={`text-4xl ${skill.color}`}>
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-bold">
                    {skill.name}
                  </h3>

                </div>

                <span className="text-blue-400 font-bold">
                  {skill.level}%
                </span>

              </div>

              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}