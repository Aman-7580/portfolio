import React from "react";

function Projects() {
  const projects = [
    {
      title: "Highway Delite – Experience Booking App",
      description:
        "A full-stack web app built for the Full Stack Developer Internship Challenge. Users can explore and book highway experiences with a seamless interface.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "Express"],
      link: "https://github.com/Aman-7580/highway-delite-bookit",
      live: "https://highway-delite-bookit.vercel.app/",
    },
    {
      title: "Movie Recommendation System",
      description:
        "A Flask-based web app that recommends movies using the TMDB API. Includes admin dashboard, user authentication, and dynamic movie management.",
      tech: ["Python 3.10", "Flask", "HTML", "CSS", "TMDB API"],
      link: "https://github.com/Aman-7580/movie-recommendation-app",
    },
    {
      title: "Smart City Portal",
      description:
        "A React and Flask-based portal designed for managing smart city services with authentication and data visualization.",
      tech: ["React", "Flask", "MySQL"],
      link: "https://github.com/Aman-7580/smart-city-portal",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-12 text-blue-400">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex justify-center gap-2 mb-4 flex-wrap">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-400 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                GitHub →
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition"
                >
                  Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
