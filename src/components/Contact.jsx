import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050510] text-white py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-center mb-14 text-[#00FFFF] drop-shadow-[0_0_25px_#00FFFF]"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
    
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0d0d1a] p-8 rounded-2xl border border-[#00FFFF]/30 shadow-[0_0_25px_#00FFFF]/30 hover:border-[#00FFFF]/60 transition-all duration-300"
        >
          <div className="mb-5">
            <label className="block mb-2 text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Aman Panwar"
              className="w-full p-3 rounded-md bg-transparent border border-[#00FFFF]/30 focus:border-[#00FFFF] outline-none text-white"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="amanpanwar1302@gmail.com"
              className="w-full p-3 rounded-md bg-transparent border border-[#00FFFF]/30 focus:border-[#00FFFF] outline-none text-white"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              rows="4"
              placeholder="Full Stack Web Developer — transforming ideas into code...."
              className="w-full p-3 rounded-md bg-transparent border border-[#00FFFF]/30 focus:border-[#00FFFF] outline-none text-white"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FFFF" }}
            className="w-full py-3 rounded-md bg-[#00FFFF] text-[#050510] font-bold uppercase tracking-wide transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>

    
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-6 text-center"
        >
          <p className="text-gray-400 text-lg">
            Let’s build something futuristic together! 🚀
          </p>

          <div className="flex gap-6 text-3xl text-[#00FFFF]">
            <a
              href="mailto:amanpanwar1302@gmail.com"
              className="hover:text-white transition-all"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Aman-7580"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-panwar-941b1323a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
