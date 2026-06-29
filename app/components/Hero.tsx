"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 relative z-10"
      >
        <Image
          src="/logo.png"
          alt="Tahani Domi"
          width={240}
          height={240}
          className="rounded-full shadow-[0_0_70px_rgba(59,130,246,0.7)] hover:scale-110 duration-500"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent relative z-10"
      >
        Tahani Domi
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mt-4 relative z-10"
      >
        Computer Science Student
      </motion.h2>

      {/* Skills */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-300 text-xl mt-6 text-center leading-9 relative z-10 max-w-3xl"
      >
        Web Developer | C++ | Java | JavaScript | HTML | CSS | React |
        Next.js
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-10 relative z-10"
      >
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 hover:scale-105 duration-300 px-8 py-4 rounded-xl text-xl font-semibold shadow-lg shadow-blue-600/40"
        >
          My Projects
        </a>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-20 text-5xl animate-bounce text-blue-400 relative z-10"
      >
        ↓
      </motion.div>
    </section>
  );
}