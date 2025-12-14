import React, { useState } from 'react';

const faqsData = [
  {
    question: "What services does VisaDocs Solutions offer?",
    answer: "We provide professional assistance for visa applications, travel documentation, job and academic documents, including CVs, employment letters, flight itineraries, hotel bookings, and more.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer: "We provide complete and accurate documentation support, but we cannot guarantee visa approval, as the final decision rests with the embassy or consulate.",
  },
  {
    question: "How long does it take to prepare documents?",
    answer: "Document preparation typically takes 1–3 business days, depending on the complexity and the number of documents required.",
  },
  {
    question: "Can you help with job application documents?",
    answer: "Yes! We assist with CVs, offer letters, salary slips, reference letters, and other employment-related documents to ensure your application is professional and complete.",
  },
  {
    question: "Do you provide travel itineraries and hotel bookings?",
    answer: "Absolutely. We create flight itineraries, hotel bookings, and complete travel plans that meet embassy requirements for visa applications.",
  },
  {
    question: "How can I get started?",
    answer: "Simply click the 'Get Started' button or contact us through our website. We'll guide you step by step to prepare all your documents quickly and professionally.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-[#0b1120] mb-10">Frequently Asked Questions</h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-md shadow-sm bg-white">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="text-2xl text-blue-600">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-blue-600 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
