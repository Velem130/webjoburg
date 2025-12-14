import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="py-16 bg-white text-center px-4 md:px-8 lg:px-24">
      <h2 className="text-4xl font-bold text-[#0b1120] mb-6">Why We Do It</h2>

      <p className="bg-black bg-clip-text text-transparent text-lg leading-relaxed mb-4">
        At <strong>VisaDocs Solutions</strong>, we believe that everyone deserves a smooth and stress-free visa or job application process.
        We're passionate about helping clients prepare complete, accurate, and embassy-ready documents for travel, work, and study abroad.
      </p>

      <p className="bg-black bg-clip-text text-transparent text-lg leading-relaxed mb-8">
        We do this because we understand how complex applications can be. 
        Whether you need visa forms, travel itineraries, invitation letters, or employment documents, 
        we’re here to guide you step by step and ensure your documents meet all official requirements.
      </p>

      {/* Button */}
      <Link 
        to="/contact"
        className="bg-[#0b1120] text-white font-semibold 
           px-6 py-3 rounded-md hover:opacity-90 transition text-center"
      >
        Get Started with Your Documents
      </Link>
    </section>
  );
};

export default Menu;


