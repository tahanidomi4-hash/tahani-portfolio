"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiTypescript,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-blue-400 mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              className="bg-[#0b1227] border border-blue-900 rounded-3xl p-8 text-center shadow-xl hover:shadow-blue-500/30 duration-300"
            >
              <div className={`text-6xl mb-5 ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="font-bold text-lg">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}