import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative pt-7 px-6 flex justify-between items-center border-b border-gray-400 pb-4">
      {/* شعار الموقع أو الاسم على اليسار */}
      <div className="text-xl font-bold">Ahmad J Farroukh</div>

      {/* روابط Navbar للشاشات الكبيرة */}
      <div className="hidden lg:flex gap-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-primary" : "text-black"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? "text-primary" : "text-black"}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-primary" : "text-black"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${isActive ? "text-primary" : "text-black"}`
          }
        >
          My Projects
        </NavLink>
      </div>

      {/* Hamburger للجوال على الطرف الأيمن */}
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

      {/* Dropdown للجوال */}
      {menuOpen && (
        <div className="flex flex-col bg-white w-full  lg:hidden absolute left-0 top-full z-50">

            
          <NavLink
            to="/"
            className={({ isActive }) =>
              `p-4 ${isActive ? "text-primary" : "text-black"}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `p-4 ${isActive ? "text-primary" : "text-black"}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `p-4 ${isActive ? "text-primary" : "text-black"}`
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `p-4 ${isActive ? "text-primary" : "text-black"}`
            }
            onClick={() => setMenuOpen(false)}
          >
            My Projects
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
