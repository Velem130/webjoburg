import React, { useState } from 'react';

const faqsData = [
  {
    question: "What services does WebJoburg provide?",
    answer: "We offer website development, logo & branding, and 24/7 site maintenance services.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Typical websites take 1–2 weeks depending on features and client feedback.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide continuous support, updates, and security maintenance.",
  },
  {
    question: "Can I update my site after it's built?",
    answer: "Absolutely. We can build sites with CMS integration so you can make updates easily.",
  },
  {
    question: "Is SEO included in your packages?",
    answer: "Basic SEO is included in all packages. We also offer advanced SEO services separately.",
  },
  {
    question: "How do I get a quote?",
    answer: "Click the 'Get a Quote' button at the top or contact us via the Contact section.",
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
