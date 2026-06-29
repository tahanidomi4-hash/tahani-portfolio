import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#040611] border-t border-blue-900 py-10 text-center text-gray-400">

      <h3 className="text-white text-2xl font-bold">
        Tahani Domi
      </h3>

      <p className="mt-2">
        Computer Science Student | Full Stack Developer
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6 text-3xl">

        <a
          href="https://github.com/tahanidomi4-hash"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/tahani-domi-947117389/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>

      </div>

      <p className="mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Tahani Domi. All Rights Reserved.
      </p>

    </footer>
  );
}