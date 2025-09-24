import React from 'react';
import { FaReact, FaCode, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaReact className="text-sky-400 text-5xl mb-4" />,
    title: 'Built with React',
    description: 'Modern, component-based architecture for fast and scalable web apps.',
  },
  {
    icon: <FaCode className="text-purple-600 text-5xl mb-4" />,
    title: 'Clean Code',
    description: 'We follow best practices to ensure maintainable and readable code.',
  },
  {
    icon: <FaRocket className="text-orange-500 text-5xl mb-4" />,
    title: 'Fast Performance',
    description: 'Optimized loading and performance for a seamless user experience.',
  },
];

const SpecialSection = () => {
  return (
    <section className="bg-[#0b1120] py-16 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">What Makes Us So Special</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-xl shadow-lg p-6 w-full max-w-xs hover:scale-105 transform transition duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-pink-800 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialSection;


