import React from "react";

const projects = [
  {
    name: "Perfect Property",
    description:
      "(My first project using HTML and CSS, it is not responsive) A real estate portfolio website showcasing property listings with a responsive and clean design built using HTML and CSS.",
    image: "/perfectProperty.png",
    demo: "https://perfect-property.vercel.app",
    code: "https://github.com/AhmadjF123/Perfect-Property",
  },
  {
    name: "Foodzy",
    description:
      "(Build with HTML ,CSS ,Bootstrap) A food journal application that helps users track their meals and eating habits by allowing them to log photos of their meals, monitor their mood, and maintain a visual diary of their eating patterns.",
    image: "/foodzy.png",
    demo: "https://foodzy-sand.vercel.app/",
    code: "https://github.com/AhmadjF123/Foodzy",
  },
  {
    name: "Tasweeq",
    description:
      "(Build with, HTML,CSS,Javascript) An elegant and responsive online store that offers a wide range of digital products, designed with a clean interface and smooth user experience.",
    image: "/tasweeq.png",
    demo: "https://tasweeq.vercel.app/",
    code: "https://github.com/AhmadjF123/Tasweeq",
  },

  {
    name: "Sustainable Transportation",
    description:
      "(Build with react and tailwindCSS) An elegant and responsive online store that offers a wide range of digital products, designed with a clean interface and smooth user experience.",
    image: "/sustainable-transportation.png",
    demo: "https://sustainable-transportation-psi.vercel.app",
    code: "https://github.com/AhmadjF123/sustainable-transportation",
  },

  {
    name: "Exclusive",
    description:
      "(Build with react and tailwindCSS) An elegant and responsive online store that offers a wide range of digital products, designed with a clean interface and smooth user experience.",
    image: "/exclusive.png",
    demo: "https://exclusivee-phi.vercel.app/",
    code: "https://github.com/AhmadjF123/exclusivee",
  },

  {
    name: "Weather-App",
    description:
      "An interactive weather application where the user types the name of a city and it shows the current weather along with temperature, humidity, and wind speed using the OpenWeatherMap API.",
    image: "/weather_app.png",
    demo: "https://weather-app-kohl-xi-77.vercel.app",
    code: "https://github.com/AhmadjF123/Weather-App",
  },

  // {
  //   name: "Stream Vibe",
  //   description:
  //     "StreamVibe is a streaming website for watching movies and shows, anytime, anywhere. using the TMDB API.",
  //   image: "/stream-vibe.png",
  //   demo: "https://stream-vibe-olive.vercel.app/",
  //   code: "https://github.com/AhmadjF123/Stream-Vibe",
  // },
];

function MyProjects() {
  return (
    <section className="bg-gray-900 min-h-screen px-5 md:px-20 py-20 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
                >
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
