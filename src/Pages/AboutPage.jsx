import React, { useEffect, useState } from "react";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";

function AboutPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const skills = [
    { name: "React", level: 65, icon: <FaReact className="text-blue-400" /> },
    {
      name: "JavaScript",
      level: 75,
      icon: <FaHtml5 className="text-yellow-400" />,
    },
    { name: "Java", level: 50, icon: <FaJava className="text-red-500" /> },
    {
      name: "HTML & CSS",
      level: 85,
      icon: <FaHtml5 className="text-orange-500" />,
    },
    { name: "PHP", level: 40, icon: <FaPhp className="text-indigo-500" /> },
  ];

  return (
    <section className="bg-gray-900 min-h-screen text-white px-5 md:px-20 py-20">
      {/* العنوان */}
      <h2
        className={`text-4xl font-bold mb-6 text-center transition-opacity duration-1000 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        About Me
      </h2>

      {/* النبذة */}
      <p
        className={`max-w-3xl mx-auto text-center mb-12 text-lg transition-opacity duration-1000 delay-200 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        Hello! I'm Ahmad Farroukh, a Computer Engineering graduate and
        passionate developer. I build web applications using React and
        JavaScript, and I enjoy learning new technologies and improving my
        skills continuously.
      </p>

      {/* المهارات */}
      <div
        className={`max-w-3xl mx-auto transition-opacity duration-1000 delay-400 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">My Skills</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  {skill.icon} <span>{skill.name}</span>
                </div>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${animate ? skill.level : 0}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
