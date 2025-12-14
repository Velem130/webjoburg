import React from 'react';
import { FaPassport, FaPlane, FaHotel, FaFileAlt, FaBriefcase, FaUniversity } from 'react-icons/fa';

const focusAreas = [
  {
    icon: <FaPassport size={24} />,
    title: 'Visa Application Support',
    description: 'We help you prepare complete and accurate visa application forms for hassle-free processing.',
  },
  {
    icon: <FaPlane size={24} />,
    title: 'Travel Itineraries',
    description: 'We provide flight reservations, hotel bookings, and detailed travel plans that meet embassy requirements.',
  },
  {
    icon: <FaHotel size={24} />,
    title: 'Accommodation Proof',
    description: 'We assist with hotel confirmations and accommodation documents to strengthen your application.',
  },
  {
    icon: <FaFileAlt size={24} />,
    title: 'Document Preparation',
    description: 'From employment letters to reference letters, salary slips, and CVs, we ensure all documents are professional and complete.',
  },
  {
    icon: <FaBriefcase size={24} />,
    title: 'Job Application Assistance',
    description: 'We help you prepare all work-related documents for international job applications, including offer letters and work experience certificates.',
  },
  {
    icon: <FaUniversity size={24} />,
    title: 'Academic Documentation',
    description: 'We prepare degree certificates, diplomas, transcripts, and other academic documents for study abroad applications.',
  },
];

const OurFocus = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <h2 className="text-4xl font-bold text-center text-[#0b1120] mb-12">Our Focus Areas</h2>

      <div className="space-y-8">
        {focusAreas.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFocus;


