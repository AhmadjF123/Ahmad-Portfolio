import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <>
      <div className=" pt-7 px-20 flex justify-center border-b-gray-400 border-b pb-4 items-center">
        <div className="flex gap-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-primary" : "text-black"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` ${isActive ? "text-primary" : "text-black"}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` ${isActive ? "text-primary" : "text-black"}`
            }
          >
            About
          </NavLink>




          <NavLink
            to="/projects"
            className={({ isActive }) =>
              ` ${isActive ? "text-primary" : "text-black"}`
            }
          >
            My Projects
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
