import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaRocket, FaLock, FaHandsHelping, FaGlobe } from 'react-icons/fa';

const focusAreas = [
  {
    icon: <FaLaptopCode size={24} />,
    title: 'Web Development',
    description: 'We build fast, scalable, and secure websites tailored to your business needs.',
  },
  {
    icon: <FaPaintBrush size={24} />,
    title: 'Creative Design',
    description: 'From logos to full branding systems, we help you stand out visually.',
  },
  {
    icon: <FaRocket size={24} />,
    title: 'Startup Support',
    description: 'Helping startups go from idea to execution with agile, powerful digital tools.',
  },
  {
    icon: <FaLock size={24} />,
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with secure coding and best practices.',
  },
  {
    icon: <FaHandsHelping size={24} />,
    title: 'Client Empowerment',
    description: 'Training and tools to let you manage and grow your site with confidence.',
  },
  {
    icon: <FaGlobe size={24} />,
    title: 'Global Reach',
    description: 'We optimize for international scalability and multilingual expansion.',
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


