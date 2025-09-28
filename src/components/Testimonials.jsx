import React from "react";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Noah Mathebula",
    date: "2025-07-09",
    stars: 5,
    review: `High quality service\nProfessionalism and they update all the until they are done with work.\nGreat job.`,
    avatar: null,
  },
  {
    name: "Franco van Rooyen",
    date: "2025-07-09",
    stars: 5,
    review: `This is the best website design I have never seen.\nI appreciate your my business is now moving....`,
    avatar: "/review1.jpg",
  },
  {
    name: "Morategi Sekgobela",
    date: "2025-07-09",
    stars: 5,
    review: `Excellent customer service 👍`,
    avatar: null,
  },
  {
    name: "Gege Phant",
    date: "2025-07-09",
    stars: 5,
    review: `Exceptional Service & Stunning Design – Highly Recommended!\nIf you're looking for a design team....`,
    avatar: "/review2.jpg",
  },
  {
    name: "Adrian Vanvyk",
    date: "2025-07-05",
    stars: 5,
    review: `I was not happy with the website my previous designer did cause it just did not represent my brand properly but I found Lamus Design and honestly,...`,
    avatar: "/review3.jpg",
  },
  {
    name: "Given Khoza",
    date: "2025-07-04",
    stars: 4,
    review: `I didn’t know how to start but they help me from beginning to end they design everything nice, and my website look professional. Thank you...`,
    avatar: null,
  },
];

const Testimonials = () => {
  const renderStars = (count) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-yellow-400 ${i < count ? "" : "opacity-30"}`}>★</span>
    ));

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-5">
            {/* Header */}
            <div className="flex items-center mb-3">
              {t.avatar ? (
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 text-gray-400 mr-3" />
              )}

              <div className="flex flex-col">
                <div className="flex items-center gap-1 font-semibold text-sm text-gray-800">
                  {t.name}
                  <img
                    src="/google.png"
                    alt="Google"
                    className="w-8 h-4 ml-1"
                  />
                </div>
                <span className="text-xs text-gray-400">{t.date}</span>
              </div>
            </div>

            {/* Stars & Verified */}
            <div className="flex items-center text-sm mt-1 mb-3">
              {renderStars(t.stars)}
              <img src="/verified1.jpg" alt="verified" className="w-8 h-4 ml-2" />
              <span className="text-blue-600 text-xs font-medium ml-1">Verified</span>
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-700 whitespace-pre-line mb-2">
              {t.review.length > 160 ? t.review.slice(0, 160) + "..." : t.review}
            </p>

            {t.review.length > 160 && (
              <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                Read more
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

