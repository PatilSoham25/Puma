import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `hover:text-white cursor-pointer ${
      isActive ? "text-white" : "text-gray-300"
    }`;

  return (
    <div className="font-sans bg-black text-white">
      <nav
        className="flex items-center justify-between px-8 py-4 shadow-md"
        data-aos="fade-down"
      >
        {/* LOGO */}
        <NavLink to="/">
          <img
            className="w-20"
            src="https://rabbitlogo.com/wp-content/uploads/2025/09/puma-logo.jpg"
            alt="Puma"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </ul>

        {/* HAMBURGER */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-6 space-y-4 text-center">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={linkClass}>
            About
          </NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)} className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
