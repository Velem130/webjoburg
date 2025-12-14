import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">VisaDocs Solutions</h2>
          <p className="text-sm">
            We provide professional assistance for visa applications, travel documentation,
            and job or academic document preparation. Helping clients submit complete and accurate documents since 2023.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#visa" className="hover:underline">Visa Application Support</a></li>
            <li><a href="#travel" className="hover:underline">Travel Itineraries & Accommodation</a></li>
            <li><a href="#jobdocs" className="hover:underline">Job Application Documents</a></li>
            <li><a href="#academic" className="hover:underline">Academic Documentation</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about1" className="hover:underline">About Us</Link></li>
            <li><Link to="/prices" className="hover:underline">Prices</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm">Email: support@visadocssolutions.com</p>
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
        &copy; 2025 VisaDocs Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

