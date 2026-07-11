const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Modern responsive portfolio website using Next.js.',
    image: '/Projects/portfolio.PNG',
  },
  {
    title: 'Compliance Management System',
    desc: 'Enterprise compliance and workflow management platform.',
    image: '/Projects/compliance.png',
  },
  {
    title: 'Banking Ticket System',
    desc: 'Incident management system for banking operations.',
    image: '/Projects/bims.PNG',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0f0f0f] text-white py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="text-blue-400 mb-4">
          Projects
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
            >

<img
  src={project.image}
  alt={project.title}
  className="w-full h-56 object-cover"
/>


              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.desc}
                </p>

                <div className="flex gap-4 mt-8">

                  <button className="bg-blue-500 px-6 py-3 rounded-full">
                    Live Demo
                  </button>

                  <button className="border border-gray-700 px-6 py-3 rounded-full">
                    GitHub
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}