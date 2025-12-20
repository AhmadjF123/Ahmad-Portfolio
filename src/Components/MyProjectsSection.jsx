import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function MyProjectsSection() {
  const projects = [
    {
      name: "Perfect Property",
      description:
        "A real estate portfolio website showcasing property listings with a responsive and clean design built using HTML and CSS.",
      tech: "HTML, CSS",
      image: "/perfectProperty.png",
      demo: "https://perfect-property.vercel.app",
      code: "https://github.com/AhmadjF123/Perfect-Property",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      name: "Foodzy",
      description:
        "A food journal application that helps users track their meals and eating habits by allowing them to log photos of their meals, monitor their mood, and maintain a visual diary of their eating patterns.",
      tech: "HTML, CSS, Bootstrap",
      image: "/foodzy.png",
      demo: "https://foodzy-sand.vercel.app/",
      code: "https://github.com/AhmadjF123/Foodzy",
      gradient: "from-green-600 to-teal-600",
    },
    {
      name: "Tasweeq",
      description:
        "An elegant and responsive online store that offers a wide range of digital products, designed with a clean interface and smooth user experience.",
      tech: "HTML, CSS, JavaScript",
      image: "/tasweeq.png",
      demo: "https://tasweeq.vercel.app/",
      code: "https://github.com/AhmadjF123/Tasweeq",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      name: "Sustainable Transportation",
      description:
        "An elegant and responsive online store that offers a wide range of digital products, designed with a clean interface and smooth user experience.",
      tech: "React, Tailwind CSS",
      image: "/sustainable-transportation.png",
      demo: "https://sustainable-transportation-psi.vercel.app",
      code: "https://github.com/AhmadjF123/sustainable-transportation",
      gradient: "from-emerald-600 to-lime-600",
    },
    {
      name: "Exclusive",
      description:
        "An elegant and responsive online store that offers a wide range of digital products, designed with a clean interface and smooth user experience.",
      tech: "React, Tailwind CSS",
      image: "/exclusive.png",
      demo: "https://exclusivee-phi.vercel.app/",
      code: "https://github.com/AhmadjF123/exclusivee",
      gradient: "from-orange-600 to-red-600",
    },
    {
      name: "Weather App",
      description:
        "An interactive weather application where the user types the name of a city and it shows the current weather along with temperature, humidity, and wind speed using the OpenWeatherMap API.",
      tech: "React, API Integration",
      image: "/weather_app.png",
      demo: "https://weather-app-kohl-xi-77.vercel.app",
      code: "https://github.com/AhmadjF123/Weather-App",
      gradient: "from-sky-600 to-blue-600",
    },
    {
      name: "Stream Vibe",
      description:
        "StreamVibe is a streaming website for watching movies and shows, anytime, anywhere. using the TMDB API.",
      tech: "React, TMDB API",
      image: "/stream-vibe.png",
      demo: "https://stream-vibe-olive.vercel.app/",
      code: "https://github.com/AhmadjF123/Stream-Vibe",
      gradient: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my journey from HTML/CSS to
            modern React applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium mb-3">
                  {project.tech}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-center font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Live Demo <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold text-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyProjectsSection;
