import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0a0a1a]/80 backdrop-blur-lg border-b border-[#00FFFF]/30"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-[#00FFFF] drop-shadow-[0_0_15px_#00FFFF]">
          Aman<span className="text-white">.</span>
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-10 text-gray-300">
          <li>
            <a
              href="#home"
              className="hover:text-[#00FFFF] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00FFFF]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#00FFFF] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00FFFF]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-[#00FFFF] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00FFFF]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#00FFFF] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00FFFF]"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 border-2 border-[#00FFFF] rounded-full text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300 shadow-[0_0_15px_#00FFFF]"
        >
          Let’s Connect
        </a>
      </div>
    </motion.nav>
  );
}
