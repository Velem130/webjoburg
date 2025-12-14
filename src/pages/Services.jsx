import React from "react";
import { FaPassport, FaRegFileAlt, FaGlobe, FaLock, FaHandsHelping, FaPhoneAlt, FaBullhorn, FaUsers } from "react-icons/fa";

const services = [
  {
    title: "Visa Processing Assistance",
    icon: <FaPassport className="text-lime-400 text-5xl mb-4" />,
    description:
      "We help individuals and businesses obtain visas quickly and correctly, guiding you through every step of the process.",
    features: [
      "Tourist & Business Visas",
      "Work & Study Visas",
      "Visa Application Review",
      "Expedited Processing",
    ],
  },
  {
    title: "Document Verification",
    icon: <FaRegFileAlt className="text-blue-600 text-5xl mb-4" />,
    description:
      "Ensure your documents meet all official requirements. We check and verify your certificates, letters, and forms.",
    features: [
      "Employment Verification",
      "Educational Documents",
      "Travel Paperwork",
      "Compliance Checks",
    ],
  },
  {
    title: "Global Immigration Support",
    icon: <FaGlobe className="text-teal-600 text-5xl mb-4" />,
    description:
      "Our team provides expert advice and support for immigration and international travel procedures.",
    features: [
      "Country-Specific Guidance",
      "Application Assistance",
      "Legal & Policy Updates",
      "Custom Solutions",
    ],
  },
  {
    title: "Secure Document Handling",
    icon: <FaLock className="text-gray-800 text-5xl mb-4" />,
    description:
      "We take data privacy seriously, ensuring your sensitive documents are handled securely and confidentially.",
    features: [
      "Data Encryption",
      "Confidential Storage",
      "Secure Transfers",
      "Audit & Compliance",
    ],
  },
  {
    title: "Client Assistance & Support",
    icon: <FaHandsHelping className="text-indigo-600 text-5xl mb-4" />,
    description:
      "We guide you through each step, answer your questions, and provide hands-on support for a smooth process.",
    features: [
      "One-on-One Guidance",
      "Step-by-Step Instructions",
      "Email & Phone Support",
      "Document Follow-up",
    ],
  },
  {
    title: "24/7 Communication",
    icon: <FaPhoneAlt className="text-red-600 text-5xl mb-4" />,
    description:
      "Our team is always available to assist you with urgent requests or questions regarding your documentation.",
    features: [
      "Round-the-Clock Help",
      "Instant Responses",
      "Multi-Channel Support",
      "Quick Resolution",
    ],
  },
  {
    title: "Notification & Updates",
    icon: <FaBullhorn className="text-purple-600 text-5xl mb-4" />,
    description:
      "Stay informed about your application status, deadlines, and policy changes with timely updates.",
    features: [
      "Email & SMS Alerts",
      "Status Tracking",
      "Deadline Reminders",
      "Policy Notifications",
    ],
  },
  {
    title: "Group & Corporate Services",
    icon: <FaUsers className="text-yellow-600 text-5xl mb-4" />,
    description:
      "We offer tailored solutions for companies and groups needing multiple visa or documentation processing.",
    features: [
      "Bulk Applications",
      "Company Account Support",
      "Priority Processing",
      "Custom Reporting",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 pt-24">
      <h2 className="text-4xl font-bold text-center text-lime-400 mb-6">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        At <span className="font-semibold text-lime-400">VisaDocs Solutions</span>, 
        we provide comprehensive visa and document processing services. From individual applications to corporate solutions, 
        our goal is to simplify, secure, and speed up your travel and work documentation needs.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
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


