import React from "react";
import Users from '../components/Users';


const About2 = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 pt-24">
      {/* Founders Section */}
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
        Our Founders
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Founder 1 */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <img
            src="/boss.jpg"
            alt="Founder 1"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800"> Pieter Van der Merwe </h3>
          <p className="text-blue-600 font-medium mb-3">Co-Founder & CEO</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Van der Merwe started his journey as a freelance web developer and later
            co-founded WebJoburg to help businesses in South Africa establish
            their online presence with modern, scalable websites.
          </p>
        </div>

        {/* Founder 2 */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
          <img
            src="/boss2.jpg"
            alt="Founder 2"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800">Zubair Muhammad Khan</h3>
          <p className="text-blue-600 font-medium mb-3">Co-Founder & CTO</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Muhammad khan brought he's expertise in design and technology to the team,
            ensuring that every project is not only functional but also visually
            stunning and user-friendly.
          </p>
        </div>
      </div>

      {/* About Company Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">About Our Company</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          WebJoburg was founded with one mission: to deliver affordable and
          professional web solutions to businesses of all sizes. Our passion
          lies in Website Creation, where we combine creativity, technology,
          and strategy to craft websites that not only look great but also help
          our clients grow online.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          From small startups to established enterprises, we provide tailored
          solutions that focus on responsive design, speed optimization, SEO
          setup, and user-friendly experiences. We believe every business
          deserves a powerful online identity — and we’re here to build it.
        </p>
      </div>
        <Users />
    </section>
  );
};

export default About2;


