import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    preferredContactMethod: '',
    contactDetails: '',
  });

  const [status, setStatus] = useState(null); // "success" | "error"
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mblapvpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setErrorMessage('');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          preferredContactMethod: '',
          contactDetails: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <section className="bg-white text-black pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Image + Contact Info */}
        <div>
          <div className="w-full h-64 mb-6">
            <img
              src="/boss.jpg"
              alt="Team Lead"
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
          </div>

          <h2 className="text-4xl font-bold mb-4 text-lime-400">Contact Us</h2>
          <p className="text-lg mb-6">
            Get in touch with VisaDocs Solutions! Reach us by phone, email, or WhatsApp for quick support.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-lime-400" />
              <span className="font-medium">+27 84 048 9731</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-lime-400" />
              <span className="font-medium">mlulekivelem@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-lime-400" />
              <a
                href="https://wa.me/27840489731"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-500 font-medium"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300 p-8 rounded-md shadow-md text-black">
          <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-md placeholder-white text-black focus:outline-none"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-md placeholder-white text-black focus:outline-none"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-md placeholder-white text-black focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Contact Preference */}
            <div className="text-white">
              <p className="font-semibold mb-2">Preferred contact method:</p>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                {['Phone', 'WhatsApp', 'Email'].map((method) => (
                  <label key={method} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value={method}
                      checked={formData.preferredContactMethod === method}
                      onChange={handleChange}
                      required
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <input
              type="text"
              name="contactDetails"
              placeholder="Phone, WhatsApp, or other contact info"
              className="w-full px-4 py-2 border rounded-md placeholder-white text-black focus:outline-none"
              value={formData.contactDetails}
              onChange={handleChange}
              required
            />

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded-md placeholder-white text-black focus:outline-none"
              value={formData.message}
              onChange={handleChange}
              required
            />

            {/* Feedback Messages */}
            {status === 'success' && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {status === 'error' && <p className="text-red-600">{errorMessage}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-lime-500 font-semibold px-4 py-2 rounded-md hover:bg-lime-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


