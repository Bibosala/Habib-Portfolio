'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold tracking-wide">
          Habib.
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        <div className="flex gap-4 text-xl">
          <FaGithub className="cursor-pointer hover:text-blue-400" />
          <FaLinkedin className="cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </nav>
  )
}