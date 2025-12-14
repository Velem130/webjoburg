import React from "react";
import Users from '../components/Users';

const About2 = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 pt-24">
      {/* Founders Section */}
      <h2 className="text-4xl font-bold text-center text-lime-400 mb-12">
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
          <h3 className="text-xl font-semibold text-gray-800">Pieter Van der Merwe</h3>
          <p className="text-lime-400 font-medium mb-3">Co-Founder & CEO</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Pieter has years of experience assisting clients with visas, travel documents, and employment certifications. 
            He co-founded VisaDocs Solutions to make immigration and job documentation easier, faster, and more reliable.
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
          <p className="text-lime-400 font-medium mb-3">Co-Founder & COO</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Zubair brings extensive knowledge in international documentation, compliance, and customer support. 
            His focus ensures that every client receives accurate, timely, and hassle-free visa and work permit assistance.
          </p>
        </div>
      </div>

      {/* About Company Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-lime-400 mb-6">About VisaDocs Solutions</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          VisaDocs Solutions was founded to simplify the complex process of visas, work permits, and travel documentation. 
          Our mission is to provide fast, reliable, and affordable document processing services for individuals and businesses worldwide.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          From employment visas to travel documentation, we offer tailored solutions that save time and minimize stress. 
          Our team combines expertise, technology, and customer care to ensure your documents are handled smoothly and professionally.
        </p>
      </div>

      {/* Users/Testimonials Section */}
      <Users />
    </section>
  );
};

export default About2;



