// components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">WebCrafters</h2>
          <p className="text-sm">
            We design, build, and maintain modern websites with love & expertise.
            Serving clients globally since 2018.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#webdev" className="hover:underline">Web Development</a></li>
            <li><a href="#branding" className="hover:underline">Logo & Branding</a></li>
            <li><a href="#maintenance" className="hover:underline">Maintenance</a></li>
            <li><a href="#consulting" className="hover:underline">Consulting</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about1" className="hover:underline">About Us</Link></li>
            <li><Link to="/Prices" className="hover:underline">Prices</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/Services" className="hover:underline">Services</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm">Email: mlulekivelem@gmail.com</p>
          <p className="text-sm mb-3">Phone: +27 (84) 048-9731</p>

          <div className="flex space-x-4 text-white text-xl">
            <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white mt-10 pt-6 text-center text-sm">
        &copy; 2025 WebJoburg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
