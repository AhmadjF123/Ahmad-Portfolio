import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative pt-7 px-6 flex justify-between bg-gray-900 text-white items-center pb-4 lg:px-20">
      <div className="text-xl font-bold">Ahmad J Farroukh</div>

      <div className="hidden lg:flex gap-12">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>

      <div
        className="lg:hidden flex flex-col justify-between w-7 h-6 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`block h-1 w-full bg-black rounded transform transition duration-300 ${
            menuOpen ? "rotate-45 translate-y-3" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-full bg-black rounded transition duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-full bg-black rounded transform transition duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>

      {menuOpen && (
        <div className="flex flex-col bg-white w-full  lg:hidden absolute left-0 top-full z-50">
          <a onClick={() => setMenuOpen(false)} href="/">
            Home
          </a>
          <a onClick={() => setMenuOpen(false)} href="/about">
            About
          </a>
          <a onClick={() => setMenuOpen(false)} href="/projects">
            Projects
          </a>
          <a onClick={() => setMenuOpen(false)} href="/contact">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
