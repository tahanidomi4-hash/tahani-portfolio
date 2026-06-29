export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-blue-500 mb-10">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg mb-12">
          Feel free to contact me for freelance work, internships or
          full-time opportunities.
        </p>

        <div className="space-y-6">

          <div className="bg-[#101b32] rounded-xl p-6">
            <h3 className="text-blue-400 text-xl font-bold">
              📧 Email
            </h3>

            <p className="mt-2">
              tahani@example.com
            </p>
          </div>

          <div className="bg-[#101b32] rounded-xl p-6">
            <h3 className="text-blue-400 text-xl font-bold">
              💼 LinkedIn
            </h3>

            <p className="mt-2">
              linkedin.com/in/tahani-domi
            </p>
          </div>

          <div className="bg-[#101b32] rounded-xl p-6">
            <h3 className="text-blue-400 text-xl font-bold">
              💻 GitHub
            </h3>

            <p className="mt-2">
              github.com/tahanidomi4-hash
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}