import React from "react";

function HeroSection() {
  return (
    <section className="bg-gray-900 min-h-screen flex flex-col md:flex-row justify-between items-center px-5 md:px-20 py-20">
      
      {/* النص */}
      <div className="flex flex-col justify-center text-white max-w-xl text-center md:text-left">
        <p className="text-lg mb-2">Hello, I am</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ahmad Farroukh</h1>
        <p className="text-md md:text-lg mb-6">
          Computer Engineering Student | React & JavaScript Developer
        </p>

        {/* زر CTA */}
        <div>
          <a
            href="/Ahmad_Farroukh_CV.pdf"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* الصورة */}
      <div className="mt-10 md:mt-0">
        <img
          src="/personal.jpg"
          alt="Ahmad Farroukh"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
