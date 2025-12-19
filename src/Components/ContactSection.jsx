import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function ContactSection() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-5 md:px-20 py-20 text-white">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8 text-center max-w-xl text-white">
          I would love to hear from you! Send me a message or connect via social
          media.
        </p>

        <p>Email: ahmad.j.farroukh@gmail.com</p>
        <p>Phone Number: +963 985 954 034</p>
        <br />

        <div className="flex gap-6 mb-8 text-white text-2xl">
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 transition duration-300" />
          </a>
          <a
            href="https://github.com/AhmadjF123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="mailto:ahmad.j.farroukh@gmail.com">
            <FaEnvelope className="hover:text-red-500 transition duration-300" />
          </a>
        </div>

       
      </section>
    </>
  );
}

export default ContactSection;
