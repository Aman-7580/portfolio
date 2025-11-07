import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Aman<span className="text-blue-500">.</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {links.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden bg-gray-800 px-6 pb-6 space-y-4 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="block py-2 hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
