import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function ContactSection() {
  return (
    <section className="relative py-20 lg:py-32 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">ahmad.j.farroukh@gmail.com</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+963 985 954 034</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-slate-800 hover:bg-blue-500 rounded-full text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AhmadjF123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-slate-800 hover:bg-purple-500 rounded-full text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:ahmad.j.farroukh@gmail.com"
              className="w-14 h-14 flex items-center justify-center bg-slate-800 hover:bg-pink-500 rounded-full text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
