import React from "react";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Samantha Nkosi",
    date: "2025-08-12",
    stars: 5,
    review: `VisaDocs Solutions made my visa application process smooth and stress-free. All my documents were accurate and embassy-ready. Highly recommended!`,
    avatar: null,
  },
  {
    name: "Thabo Mokoena",
    date: "2025-08-10",
    stars: 5,
    review: `I needed flight reservations and hotel bookings for my visa. They prepared everything professionally and on time. Excellent service!`,
    avatar: "/review1.jpg",
  },
  {
    name: "Anika Patel",
    date: "2025-08-08",
    stars: 5,
    review: `My CV and employment documents were perfectly formatted for my job application abroad. The team was very professional and helpful.`,
    avatar: null,
  },
  {
    name: "David Botha",
    date: "2025-08-05",
    stars: 5,
    review: `The team at VisaDocs Solutions helped me with invitation letters and travel plans. Everything was ready for my embassy appointment. Amazing support!`,
    avatar: "/review2.jpg",
  },
  {
    name: "Lerato Khumalo",
    date: "2025-08-03",
    stars: 5,
    review: `Professional and reliable! My education certificates and transcripts were properly prepared for my application. Thank you, VisaDocs Solutions!`,
    avatar: "/review3.jpg",
  },
  {
    name: "Rohan Singh",
    date: "2025-08-01",
    stars: 4,
    review: `I wasn’t sure how to organize my work experience documents, but they guided me step by step and made everything clear and professional.`,
    avatar: null,
  },
];

const MAX_REVIEW_LENGTH = 160;

const Testimonials = () => {
  const renderStars = (count) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-yellow-400 ${i < count ? "" : "opacity-30"}`}
      >
        ★
      </span>
    ));

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => {
          const isLongReview = t.review.length > MAX_REVIEW_LENGTH;
          const displayedReview = isLongReview
            ? t.review.slice(0, MAX_REVIEW_LENGTH) + "..."
            : t.review;

          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between"
            >
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
                <img
                  src="/verified1.jpg"
                  alt="verified"
                  className="w-8 h-4 ml-2"
                />
                <span className="text-blue-600 text-xs font-medium ml-1">
                  Verified
                </span>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-700 whitespace-pre-line mb-2">
                {displayedReview}
              </p>

              {isLongReview && (
                <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                  Read more
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;

