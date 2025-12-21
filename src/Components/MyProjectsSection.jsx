import React, { useState, useRef } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function MyProjectsSection({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleMouseDown = (e) => {
    if (isAnimating) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setDragOffset(0);
  };

  const handleTouchStart = (e) => {
    if (isAnimating) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].pageX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setDragOffset(0);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ project: projects[index], offset: i });
    }
    return visible;
  };

  return (
    <section className="relative py-20 lg:py-32 px-6 lg:px-20 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured
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

        {/* Mobile View - Grid */}
        <div className="grid md:grid-cols-2 lg:hidden gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
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

        {/* Large Screen View - Draggable Carousel */}
        <div className="hidden lg:block relative">
          <div className="relative flex items-center justify-center">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="absolute left-0 z-20 w-16 h-16 bg-slate-800/80 backdrop-blur-sm border-2 border-blue-500/30 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="text-blue-400 text-2xl" />
            </button>

            {/* Carousel Container */}
            <div
              ref={containerRef}
              className="relative h-[650px] w-full max-w-5xl flex items-center justify-center cursor-grab active:cursor-grabbing"
              style={{ perspective: "2000px" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {getVisibleProjects().map(({ project, offset }) => {
                let transform = "";
                let opacity = 1;
                let zIndex = 1;
                let pointerEvents = "none";

                const dragAdjustment = isDragging ? dragOffset * 0.5 : 0;

                 if (offset === -1) {
                  transform = `translateX(${
                    -450 + dragAdjustment
                  }px) translateZ(-200px) rotateY(45deg) scale(0.75)`;
                  opacity = 0.4;
                  zIndex = 1;
                } else if (offset === 0) {
                  transform = `translateX(${dragAdjustment}px) translateZ(100px) rotateY(0deg) scale(1)`;
                  opacity = 1;
                  zIndex = 10;
                  pointerEvents = "auto";
                } else if (offset === 1) {
                  transform = `translateX(${
                    450 + dragAdjustment
                  }px) translateZ(-200px) rotateY(-45deg) scale(0.75)`;
                  opacity = 0.4;
                  zIndex = 1;
                }

                return (
                  <div
                    key={`${project.name}-${offset}`}
                    className="absolute w-[420px] transition-all duration-500 ease-in-out"
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      transformStyle: "preserve-3d",
                      pointerEvents,
                      transitionDuration: isDragging ? "0ms" : "500ms",
                    }}
                  >
                    <ProjectCard project={project} isActive={offset === 0} />
                  </div>
                );
              })}
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="absolute right-0 z-20 w-16 h-16 bg-slate-800/80 backdrop-blur-sm border-2 border-blue-500/30 rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="text-blue-400 text-2xl" />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isActive = false }) {
  return (
    <div
      className={`relative bg-slate-900/80 backdrop-blur-lg rounded-2xl overflow-hidden border transition-all duration-500 ${
        isActive
          ? "border-blue-500/50 shadow-2xl shadow-blue-500/30"
          : "border-slate-800/50"
      }`}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700"
          draggable="false"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 hover:opacity-20 transition-opacity duration-300`}
        />
      </div>

      <div className="p-6">
        <div className="inline-block px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold mb-3">
          {project.tech}
        </div>
        <h3
          className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
            isActive ? "text-blue-400" : "text-white"
          }`}
        >
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-center font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo <FaExternalLinkAlt className="text-xs" />
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-slate-800/80 hover:bg-slate-700 rounded-xl font-semibold text-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyProjectsSection;
