import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import MyProjectsSection from "./Components/MyProjectsSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

function App() {
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

  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (ref, section) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className="relative bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollY={scrollY}
        heroRef={heroRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <div ref={heroRef}>
        <HeroSection
          scrollToSection={scrollToSection}
          projectsRef={projectsRef}
        />
      </div>

      <div ref={aboutRef}>
        <AboutSection projects={projects} />
      </div>

      <div ref={projectsRef}>
        <MyProjectsSection projects={projects} />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;
