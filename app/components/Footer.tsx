export default function Footer() {
  return (
    <footer className="bg-[#040611] border-t border-blue-900 py-8 text-center text-gray-400">
      <h3 className="text-white text-xl font-bold">
        Tahani Domi
      </h3>

      <p className="mt-2">
        Computer Science Student | Full Stack Developer
      </p>

      <p className="mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Tahani Domi. All Rights Reserved.
      </p>
    </footer>
  );
}