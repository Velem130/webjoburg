import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiHexagon } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#0b1120] shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex flex-col items-center text-white font-bold text-xl leading-tight">
            <Link to="/" className="flex flex-col items-center hover:text-lime-400 transition">
              <FiHexagon className="text-3xl mb-[-2px]" />
              <span>VisaDocs Solutions</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/services" className="text-white hover:text-lime-400 font-medium">
              Services
            </Link>
            <Link to="/about2" className="text-white hover:text-lime-400 font-medium">
              About Us
            </Link>
            <Link to="/prices" className="text-white hover:text-lime-400 font-medium">
              Prices
            </Link>
            <Link to="/contact" className="text-white hover:text-lime-400 font-medium">
              Contact
            </Link>
            <Link to="/" className="text-white hover:text-lime-400 font-medium">
              Home
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/27840489731"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime-400 text-[#0b1120] font-semibold px-4 py-2 rounded-md hover:bg-lime-500 transition"
            >
              Get Help Now
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b1120] shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            <Link to="/services" className="text-white hover:text-lime-400 font-medium" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/about2" className="text-white hover:text-lime-400 font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/prices" className="text-white hover:text-lime-400 font-medium" onClick={toggleMenu}>
              Prices
            </Link>
            <Link to="/contact" className="text-white hover:text-lime-400 font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/" className="text-white hover:text-lime-400 font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <a
              href="https://wa.me/27840489731"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime-400 text-[#0b1120] font-semibold px-4 py-2 rounded-md hover:bg-lime-500 transition text-center"
              onClick={toggleMenu}
            >
              Get Help Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






