import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050510] text-center py-6 border-t border-[#00FFFF]/30 text-gray-400">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-sm"
      >
        © {new Date().getFullYear()} <span className="text-[#00FFFF]">Aman Panwar</span>.  
        Turning ideas into interactive web experiences 💫
      </motion.p>
    </footer>
  );
}
