"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#050816] flex items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-5xl font-extrabold text-center text-blue-400 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#0b1227] rounded-3xl border border-blue-900 p-10 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Who Am I?
            </h3>

            <p className="text-gray-300 leading-9 text-lg">
              I am <span className="text-blue-400 font-bold">Tahani Domi</span>,
              a Computer Science student at Al-Balqa Applied University.

              I enjoy building modern websites using React, Next.js,
              JavaScript and TypeScript while continuously improving my
              programming and problem-solving skills.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#0b1227] rounded-3xl border border-blue-900 p-10 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Quick Info
            </h3>

            <div className="space-y-5 text-lg">

              <div className="flex justify-between">
                <span className="text-gray-400">University</span>
                <span className="text-white">
                  Al-Balqa Applied University
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Major</span>
                <span className="text-white">
                  Computer Science
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Location</span>
                <span className="text-white">
                  Jordan
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Focus</span>
                <span className="text-blue-400">
                  Full Stack Development
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}