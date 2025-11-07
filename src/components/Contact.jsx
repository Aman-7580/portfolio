import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="max-w-xl mx-auto text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a question, want to collaborate, or just want to say hi?  
          I’d love to hear from you!
        </motion.p>

        <motion.div
          className="flex justify-center gap-8 mb-12 text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="mailto:yourname@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Aman-7580"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-panwar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.p
          className="text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          © {new Date().getFullYear()} Aman Panwar — All Rights Reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
