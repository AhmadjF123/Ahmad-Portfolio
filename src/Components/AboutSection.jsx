import React from 'react';
import { FaReact, FaJava, FaHtml5, FaPython, FaPhp } from 'react-icons/fa';


function AboutSection({projects}) {
  const skills = [
    { name: "HTML & CSS", level: 85, icon: <FaHtml5 className="text-orange-500" />, color: "bg-orange-500" },
    { name: "JavaScript", level: 75, icon: <FaHtml5 className="text-yellow-400" />, color: "bg-yellow-400" },
    { name: "React", level: 65, icon: <FaReact className="text-blue-400" />, color: "bg-blue-400" },
    { name: "Java", level: 40, icon: <FaJava className="text-red-500" />, color: "bg-red-500" },
    { name: "Python", level: 35, icon: <FaPython className="text-green-500" />, color: "bg-green-500" },
    { name: "PHP", level: 30, icon: <FaPhp className="text-indigo-500" />, color: "bg-indigo-500" },
  ];

  return (
    <section className="relative py-20 lg:py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm Ahmad J Farroukh, a <span className="text-blue-400 font-semibold">Computer Engineer</span> and passionate developer specializing in building exceptional web applications.
            </p>
            <p className="text-lg leading-relaxed">
              I build web applications using <span className="text-blue-400 font-semibold">React</span> and <span className="text-blue-400 font-semibold">JavaScript</span>, and I enjoy learning new technologies and improving my skills continuously. My journey in web development has been driven by curiosity and a desire to create meaningful digital experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-400 mb-1">{projects.length}+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-400 mb-1">{skills.length}+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;