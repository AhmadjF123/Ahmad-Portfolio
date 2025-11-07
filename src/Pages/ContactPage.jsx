import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-5 md:px-20 py-20 text-white">
      {/* عنوان الصفحة */}
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="mb-8 text-center max-w-xl text-white">
        I would love to hear from you! Send me a message or connect via social
        media.
      </p>

      {/* أيقونات التواصل الاجتماعي */}
      <div className="flex gap-6 mb-8 text-white text-2xl">
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-500 transition duration-300" />
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-400 transition duration-300" />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope className="hover:text-red-500 transition duration-300" />
        </a>
      </div>

      {/* النموذج */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800 p-8 rounded-lg border-2 border-blue-500 shadow-lg"
      >
        <div className="mb-4">
          <label className="block mb-2 text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-white" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
