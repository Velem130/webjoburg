import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Visa & Job Application <br />
            <span className="text-blue-300">Documentation Made Easy</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8">
            <strong>VisaDocs Solutions</strong> provides professional visa, travel,
            and career documentation support to help applicants submit
            complete, accurate, and embassy-ready applications.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Link to Services Page */}
            <Link
              to="/services"
              className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
            >
              Our Services
            </Link>

            {/* Link to Contact Page */}
            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-white text-gray-800 rounded-xl shadow-xl p-8">
          <h3 className="text-xl font-semibold mb-4">
            We Assist With:
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li>✔ Visa Application Forms</li>
            <li>✔ Flight Itineraries & Reservations</li>
            <li>✔ Hotel Bookings & Accommodation Proof</li>
            <li>✔ Travel Plans & Cover Letters</li>
            <li>✔ Invitation Letters</li>
            <li>✔ Employment & Leave Letters</li>
            <li>✔ Business Registration Documents</li>
            <li>✔ Work Experience & Reference Letters</li>
            <li>✔ Offer Letters & Salary Slips</li>
            <li>✔ CVs & Job Applications</li>
            <li>✔ Education & Degree Documents</li>
            <li>✔ Transcripts & Certificates</li>
            <li>✔ GCMS notes</li>
            <li>✔ IRCC Webform</li>
            <li>✔ Reconsideration for Canada Visas</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

