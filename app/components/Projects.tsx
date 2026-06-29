"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Restaurant Management System",
    description:
      "A complete restaurant website with digital menu, ordering system and responsive design.",
    image: "/projects/restaurant.png",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/tahanidomi4-hash",
    demo: "#",
  },
  {
    title: "Tournament Management System",
    description:
      "Website for organizing tournaments, registering teams and displaying results.",
    image: "/projects/tournament.png",
    tech: ["Next.js", "JavaScript", "Supabase"],
    github: "https://github.com/tahanidomi4-hash",
    demo: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern personal portfolio built using Next.js with responsive design and smooth animations.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "React", "Framer Motion"],
    github: "https://github.com/tahanidomi4-hash/tahani-portfolio",
    demo: "https://tahani-portfolio.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-blue-400 mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#0b1227] rounded-3xl overflow-hidden border border-blue-900 shadow-xl hover:shadow-blue-500/20 duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={400}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-900/40 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 px-5 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}