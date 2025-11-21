import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9cu4uic",
        "template_hsr2ext",
        form.current,
        "1ZkcUeefmwFIA1Jk1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
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

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-800 p-8 rounded-lg border-2 border-blue-500 shadow-lg flex flex-col gap-4"
      >
        <div>
          <label className="block mb-2 text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-white" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`mt-2 text-center ${
              status.includes("successfully")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactPage;
