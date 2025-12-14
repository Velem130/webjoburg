import React from 'react';
import { FaPassport, FaPlane, FaFileAlt, FaBriefcase } from 'react-icons/fa';

const features = [
  {
    icon: <FaPassport className="text-blue-500 text-5xl mb-4" />,
    title: 'Expert Visa Documentation',
    description:
      'We help you prepare complete and accurate visa application forms and supporting documents for any country.',
  },
  {
    icon: <FaPlane className="text-green-500 text-5xl mb-4" />,
    title: 'Travel Itineraries & Bookings',
    description:
      'Get professionally prepared flight reservations, hotel bookings, and travel plans to strengthen your application.',
  },
  {
    icon: <FaFileAlt className="text-purple-500 text-5xl mb-4" />,
    title: 'Academic & Job Documents',
    description:
      'We assist with CVs, employment letters, offer letters, salary slips, education certificates, and transcripts.',
  },
  {
    icon: <FaBriefcase className="text-orange-500 text-5xl mb-4" />,
    title: 'Career & Business Support',
    description:
      'Whether you are self-employed or applying for a job abroad, we provide all the necessary documentation support.',
  },
];

const SpecialSection = () => {
  return (
    <section className="bg-[#0b1120] py-16 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">Why Choose VisaDocs Solutions</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs hover:scale-105 transform transition duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialSection;



