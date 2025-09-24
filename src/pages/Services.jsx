import React from "react";
import { FaLaptopCode, FaPaintBrush, FaServer, FaMobileAlt, FaChartLine, FaLock, FaSearch, FaHandsHelping, FaBullhorn } from "react-icons/fa";

const services = [
  {
    title: "Website Design & Development",
    icon: <FaLaptopCode className="text-pink-600 text-5xl mb-4" />,
    description:
      "We specialize in building modern, responsive, and scalable websites. Whether you need a business site, portfolio, or e-commerce platform, we craft custom solutions tailored to your needs.",
    features: [
      "Custom Website Design",
      "E-commerce Development",
      "Responsive Mobile Design",
      "Performance & Speed Optimization",
    ],
  },
  {
    title: "UI/UX & Graphic Design",
    icon: <FaPaintBrush className="text-blue-600 text-5xl mb-4" />,
    description:
      "Our creative design team ensures that your brand identity stands out with stunning visuals and seamless user experiences.",
    features: [
      "Logo & Branding",
      "UI/UX Wireframes",
      "Creative Graphics",
      "Color & Typography Strategy",
    ],
  },
  {
    title: "Website Hosting & Security",
    icon: <FaServer className="text-green-600 text-5xl mb-4" />,
    description:
      "We don’t just create websites, we also keep them safe and online. With reliable hosting and robust security, your site is always protected.",
    features: [
      "Secure Website Hosting",
      "SSL Certificates",
      "Firewall & Security Setup",
      "Regular Backups",
    ],
  },
  {
    title: "SEO & Online Visibility",
    icon: <FaSearch className="text-yellow-600 text-5xl mb-4" />,
    description:
      "We make sure your website gets discovered. Our SEO experts boost your rankings and help you attract the right audience.",
    features: [
      "On-page SEO",
      "Keyword Research",
      "Google Analytics",
      "Monthly SEO Reports",
    ],
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn className="text-purple-600 text-5xl mb-4" />,
    description:
      "Grow your brand and reach a wider audience through tailored online marketing strategies.",
    features: [
      "Social Media Management",
      "Google & Facebook Ads",
      "Email Marketing",
      "Content Marketing",
    ],
  },
  {
    title: "Mobile Friendly Development",
    icon: <FaMobileAlt className="text-red-600 text-5xl mb-4" />,
    description:
      "In today’s world, most people browse on their phones. We make sure your website looks perfect on all devices.",
    features: [
      "Cross-Device Compatibility",
      "Mobile-First Design",
      "Touch Optimized Elements",
      "Fast Mobile Loading",
    ],
  },
  {
    title: "Maintenance & Support",
    icon: <FaHandsHelping className="text-indigo-600 text-5xl mb-4" />,
    description:
      "Our job doesn’t end after launch. We offer ongoing support and maintenance to keep your site fresh and secure.",
    features: [
      "Bug Fixes",
      "Content Updates",
      "Monthly Checkups",
      "24/7 Customer Support",
    ],
  },
  {
    title: "Cyber Security",
    icon: <FaLock className="text-gray-800 text-5xl mb-4" />,
    description:
      "Protect your digital assets with professional-grade security services that prevent hacks and vulnerabilities.",
    features: [
      "Website Security Audits",
      "Malware Removal",
      "Data Protection",
      "Advanced Firewall Setup",
    ],
  },
  {
    title: "Analytics & Business Growth",
    icon: <FaChartLine className="text-teal-600 text-5xl mb-4" />,
    description:
      "Understand your visitors and grow smarter. We provide insights and strategies for scaling your business.",
    features: [
      "Google Analytics Reports",
      "Conversion Rate Optimization",
      "Customer Insights",
      "Growth Roadmaps",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 pt-24">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        At WebCrafters, we provide a full spectrum of digital services. Our main
        focus is <span className="font-semibold text-blue-600">Website Creation</span>,
        but we go beyond by offering design, hosting, security, SEO, and marketing —
        everything your business needs to thrive online.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                     <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

