"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section id="contact" className="bg-black text-white py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-blue-400 mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Feel free to contact me for projects,
          collaborations, or opportunities.
        </p>

        <div className="space-y-4 mb-10">
          <p>
            📧 Email: habibbirhanu3@gmail.com
          </p>

          <p>
            📞 Phone: +251 936 959 963
          </p>
        </div>

        <button
          onClick={() => setShowLinks(!showLinks)}
          className="bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-full text-lg transition"
        >
          Contact Me
        </button>

        <AnimatePresence>
          {showLinks && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <a
                href="https://facebook.com/habib salah"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 px-6 py-3 rounded-full transition"
              >
                Facebook
              </a>

              <a
                href="https://www.linkedin.com/in/habib-birhanu-53b674294/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 px-6 py-3 rounded-full transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Bibosala"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 px-6 py-3 rounded-full transition"
              >
                GitHub
              </a>

              <a
                href="https://t.me/Bibosala"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 px-6 py-3 rounded-full transition"
              >
                Telegram
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}