const skills = [
  'Next.js',
  'React',
  'Node.js',
  'TypeScript',
  'SQL',
  'Oracle',
  'Tailwind CSS',
  'GitHub',
  'REST APIs',
  'Banking Systems',
]

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <p className="text-blue-400 mb-4">
          Skills
        </p>

        <h2 className="text-5xl font-bold mb-14">
          Technologies I Use
        </h2>

        <div className="flex flex-wrap gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-900 border border-gray-800 hover:border-blue-500 px-8 py-4 rounded-2xl transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}