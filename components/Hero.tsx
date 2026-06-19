'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen bg-black text-white flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >

        <p className="text-blue-400 mb-4 text-lg">
          Welcome to my portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Habib Birhanu
        </h1>

        <p className="text-gray-400 text-xl md:text-2xl mb-10 max-w-2xl">
          Full Stack Developer focused on modern web applications,
          banking systems, and enterprise platforms.
        </p>

        <div className="flex gap-6 justify-center">

          <a href="#projects">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-semibold transition">
              View Projects
            </button>
          </a>

          <a href="/resume.pdf" download>
            <button className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-full transition">
              Download CV
            </button>
          </a>

        </div>

      </motion.div>
    </section>
  )
}