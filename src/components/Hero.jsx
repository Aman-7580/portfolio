import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#050505] to-[#0a0a1a] text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold text-[#00FFFF] drop-shadow-[0_0_25px_#00FFFF]"
      >
        Aman <span className="text-white">Panwar</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-2xl md:text-3xl mt-4 text-[#00FFFF] tracking-wider"
      >
        Full Stack Web Developer 💻
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl px-4"
      >
        Turning ideas into <span className="text-[#00FFFF]">interactive web experiences</span>.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px #00FFFF" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-10 px-8 py-3 border-2 border-[#00FFFF] rounded-full text-[#00FFFF] font-semibold hover:bg-[#00FFFF] hover:text-black transition-all"
      >
        View My Projects
      </motion.a>
    </section>
  );
}
