import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

function HeroSection({ scrollToSection, projectsRef }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
            Available for Hire
          </div>
          <p className="text-xl text-gray-400">Hello, I am</p>
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ahmad J Farroukh
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-300">
            Computer Engineer | React & JavaScript Developer
          </p>
          <p className="text-lg text-gray-400 max-w-xl">
            Crafting exceptional web experiences with modern technologies. Passionate about clean code, user experience, and continuous learning.
          </p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <a
              href="/AhmadJibrilFarroukhCV.pdf"
              className="group cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection(projectsRef, 'projects')}
              className="px-8 py-4 cursor-pointer bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              View Projects
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
              <img
                src="/personal.jpg"
                alt="Ahmad Farroukh"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
              <FaCode className="text-3xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;