import Image from "next/image";

export default function About() {
  const stats = [
    { number: "2+", label: "Years Learning" },
    { number: "10+", label: "Projects" },
    { number: "8+", label: "Technologies" },
    { number: "∞", label: "Passion" },
  ];

  return (
    <section
      id="about"
      className="bg-[#050816] text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-500 mb-20">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-30"></div>

              <Image
                src="/profile.jpg"
                alt="Tahani"
                width={330}
                height={330}
                className="relative rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,.6)] object-cover"
              />

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-4xl font-bold mb-6">
              Hello 👋
            </h3>

            <p className="text-gray-300 leading-9 text-lg mb-6">
              I'm <span className="text-blue-400 font-bold">Tahani Domi</span>,
              a Computer Science student at Al-Balqa Applied University.
            </p>

            <p className="text-gray-400 leading-9 text-lg mb-6">
              I enjoy building modern websites and web applications using
              HTML, CSS, JavaScript, React, Next.js and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-9 text-lg mb-12">
              My goal is to become a Full Stack Developer, build real-world
              systems and work remotely with international companies.
            </p>

            <div className="grid grid-cols-2 gap-5">

              {stats.map((item, index) => (

                <div
                  key={index}
                  className="bg-[#111c36] rounded-2xl p-8 text-center border border-blue-900 hover:border-blue-500 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl duration-300"
                >
                  <h3 className="text-5xl font-bold text-blue-500">
                    {item.number}
                  </h3>

                  <p className="text-gray-400 mt-4">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}