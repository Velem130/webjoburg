
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const pricingTiers = [
  {
    category: "Website Creation",
    plans: [
      {
        name: "Premium",
        priceZAR: 4000,
        priceUSD: 228,
        features: [
          "Custom Design (5+ pages)",
          "E-commerce Ready",
          "Speed Optimized",
          "SEO Setup",
        ],
      },

      {
        name: "Standard",
        priceZAR: 2850,
        priceUSD: 162,
        features: [
          "Up to 5 Pages",
          "Responsive Design",
          "Basic SEO",
        ],
      },

      {
        name: "Basic",
        priceZAR: 1850,
        priceUSD: 106,
        features: [
          "3 Page Design",
          "Mobile Friendly",
        ],
      },

    ],
  },
  {
    category: "Logo Design",
    plans: [
      {
        name: "Premium",
        priceZAR: 600,
        priceUSD: 35,
        features: [
          "5 Logo Concepts",
          "Unlimited Revisions",
          "All Formats Included",
        ],
      },
      {
        name: "Standard",
        priceZAR: 300,
        priceUSD: 18,
        features: [
          "3 Logo Concepts",
          "3 Revisions",
          "PNG, JPG, PDF",
        ],
      },
      {
        name: "Basic",
        priceZAR: 220,
        priceUSD: 13,
        features: [
          "1 Logo Concept",
          "1 Revision",
        ],
      },
    ],
  },
  {
    category: "Website Maintenance",
    plans: [
      {
        name: "Premium",
        priceZAR: 1000,
        priceUSD: 60,
        features: [
          "Weekly Updates",
          "Security Checks",
          "Monthly Reports",
        ],
      },
      {
        name: "Standard",
        priceZAR: 700,
        priceUSD: 40,
        features: [
          "Bi-weekly Updates",
          "Bug Fixes",
        ],
      },
      {
        name: "Basic",
        priceZAR: 500,
        priceUSD: 30,
        features: [
          "Monthly Updates",
        ],
      },
    ],
  },
  {
    category: "Documents Editing",
    plans: [
      {
        name: "Premium",
        priceZAR: 900,
        priceUSD: 53,
        features: [
          "Collaboration & Tracking",
          "Advanced Layout & Design",
          "Email Marketing Setup",
          "Security & Export Optionsg",
        ],
      },
      {
        name: "Standard",
        priceZAR: 600,
        priceUSD: 35,
        features: [
          "3 Typing and correcting text",
          "simple shapes",
          "Monthly Reports",
        ],
      },
      {
        name: "Basic",
        priceZAR: 250,
        priceUSD: 16,
        features: [
          "1 Editing conten",
          "2 Inserting elements",
          "Formatting textt",
        ],
      },
    ],
  },
];

const Prices = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 pt-24">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Our Prices
      </h2>
      <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
        We guarantee the most affordable and quality services in all of South Africa — and the world! Get premium design at unbeatable prices.
      </p>

      {pricingTiers.map(({ category, plans }) => (
        <div key={category} className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">{category}</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {plans.map(({ name, priceZAR, priceUSD, features }) => (
              <div
                key={name}
                className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">{name} Plan</h4>
                <p className="text-gray-700 font-semibold mb-4">
                  ZAR R{priceZAR} / USD ${priceUSD}
                </p>
                <ul className="mb-6 space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <FaCheckCircle className="text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/27840489731"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#0b1120] text-white hover:bg-blue-700 transition-all font-semibold py-2 rounded-lg"
                >
                  Contact on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Prices;


