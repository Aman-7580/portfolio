import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I'm <span className="text-blue-500">Aman Panwar</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
        Full Stack Web Developer 🚀
      </h2>
      <p className="max-w-2xl text-gray-400 mb-8 px-4">
        I design and build modern, responsive web applications with clean UI,
        powerful backends, and smooth user experiences.
      </p>
      <a
        href="#projects"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        View My Projects
      </a>
    </section>
  );
}

export default Hero;
