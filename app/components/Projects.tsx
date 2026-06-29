import Image from "next/image";

const projects = [
  {
    title: "Restaurant Management System",
    description:
      "A complete restaurant website with digital menu, online ordering system and responsive modern design.",
    image: "/projects/restaurant.png",
    tech: "Next.js • React • Tailwind CSS",
    github: "#",
    demo: "#",
  },
  {
    title: "Tournament Management System",
    description:
      "A modern platform for managing tournaments, registering teams, scheduling matches and displaying results.",
    image: "/projects/tournament.png",
    tech: "Next.js • JavaScript • Supabase",
    github: "#",
    demo: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "A professional portfolio website showcasing my skills, projects and experience.",
    image: "/projects/portfolio.png",
    tech: "React • Next.js • Tailwind CSS",
    github: "#",
    demo: "#",
  },
  {
    title: "Tahani Books",
    description:
      "A modern Arabic books platform with beautiful UI, dark mode and responsive design.",
    image: "/projects/books.png",
    tech: "HTML • CSS • JavaScript",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#050816] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-500 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-[#111c36] rounded-2xl overflow-hidden border border-blue-900 hover:-translate-y-3 hover:shadow-blue-500/40 hover:shadow-2xl duration-500"
            >

              <div className="relative overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                  <a
                    href={project.demo}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
                  >
                    View Project
                  </a>

                </div>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <p className="text-blue-400 mb-6">
                  {project.tech}
                </p>

                <div className="flex gap-3">

                  <a
                    href={project.demo}
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}