import React from "react";
import Slider from "react-slick";
import { FaLaptopCode, FaTools, FaPencilRuler, FaFileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-4xl text-white mb-4" />,
    title: "Website Development",
    desc: "Custom websites that are fast, responsive, and SEO-friendly.",
  },
  {
    icon: <FaTools className="text-4xl text-white mb-4" />,
    title: "Website Maintenance",
    desc: "Ongoing updates, fixes, backups, and support to keep things running.",
  },
  {
    icon: <FaPencilRuler className="text-4xl text-white mb-4" />,
    title: "Logo Design",
    desc: "Unique and professional logos tailored to your brand identity.",
  },
  {
    icon: <FaFileAlt className="text-4xl text-white mb-4" />,
    title: "Document Editing",
    desc: "We format and improve reports, resumes, and more with clean layouts.",
  },
];

// 🎨 List of different background Tailwind classes
const bgColors = [
  "bg-red-400",
  "bg-gradient-to-b from-blue-400 to-blue-700",
  "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
  "bg-[#0b1120]",
  
];

const Hero2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1120] mb-2">What We Do</h2>
        <p className="text-gray-600 text-base sm:text-lg">Explore our core services</p>
      </div>

      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="px-2 sm:px-4">
            <div
              className={`rounded-lg shadow-md p-6 sm:p-8 text-center hover:shadow-xl transition duration-300 h-full ${bgColors[index % bgColors.length]}`}
            >
              {service.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-lime-400 mb-2">
                {service.title}
              </h3>
              <p className="text-white text-sm sm:text-base">{service.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero2;

