import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({
  activeSection,
  scrollToSection,
  menuOpen,
  setMenuOpen,
  scrollY,
  heroRef,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-blue-500/10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Ahmad J Farroukh
        </div>

        <div className="hidden lg:flex gap-8">
          {["home", "about", "projects", "contact"].map((section) => (
            <button
              key={section}
              className={`relative cursor-pointer px-4 py-2 capitalize font-medium transition-all ${
                activeSection === section
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() =>
                scrollToSection(
                  section === "home"
                    ? heroRef
                    : section === "about"
                    ? aboutRef
                    : section === "projects"
                    ? projectsRef
                    : contactRef,
                  section
                )
              }
            >
              {section}
              {activeSection === section && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" />
              )}
            </button>
          ))}
        </div>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800">
          {["home", "about", "projects", "contact"].map((section) => (
            <button
              key={section}
              className={`block w-full text-left px-6 py-4 capitalize text-gray-300 hover:bg-slate-800 hover:text-blue-400 transition-all`}
              onClick={() =>
                scrollToSection(
                  section === "home"
                    ? heroRef
                    : section === "about"
                    ? aboutRef
                    : section === "projects"
                    ? projectsRef
                    : contactRef,
                  section
                )
              }
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
