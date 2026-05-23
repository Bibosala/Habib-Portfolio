export default function About() {
  return (
    <section id="about" className="bg-[#0f0f0f] text-white py-28 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="relative flex justify-center items-center">

  {/* Glow background */}
  <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

  {/* Circle frame */}
  <div className="relative w-75 h-75 rounded-full border-4 border-blue-500 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.7)]">

    <img
      src="/profile.jpg"
      alt="Habib Profile"
className="w-full h-full object-cover scale-100 object-top"    />

  </div>

</div>

        <div>
          <p className="text-blue-400 mb-4">About Me</p>

          <h2 className="text-5xl font-bold mb-8">
            Passionate Full Stack Developer
          </h2>

          <p className="text-gray-400 leading-8 text-lg">
            I build modern responsive applications using Next.js,
            React, Node.js, SQL, and enterprise technologies.
            I am passionate about banking technology,
            software engineering, and solving real-world problems.
          </p>
        </div>

      </div>
    </section>
  )
}