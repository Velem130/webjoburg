
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
              alt="Boss"
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
          </div>

          <h2 className="text-4xl font-bold mb-4 text-blue-600">Contact Us</h2>
          <p className="text-lg mb-6 bg-black text-bold bg-clip-text text-transparent">
            Let's start a conversation! Reach out to us via phone, email, or WhatsApp.
          </p>

          <div className="space-y-4 text-black">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt />
              <span className="text-blue-600">+27 84 048 9731</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope />
              <span className="text-blue-600">mlulekivelem@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp />
              <a
                href="https://wa.me/27840489731"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-300 text-blue-600"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 bg-[length:200%_200%] animate-gradient-x text-black p-8 rounded-md shadow-md">
          <h3 className="text-2xl text-white font-semibold mb-6">Send us a message</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-2 border text-white placeholder-white rounded-md focus:outline-none"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-2 border text-white placeholder-white rounded-md focus:outline-none"
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
              className="w-full px-4 py-2 border text-white placeholder-white rounded-md focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Contact Preference (Radio) */}
            <div className="text-white">
              <p className="font-semibold mb-2">How would you prefer to be contacted?</p>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="Phone"
                    checked={formData.preferredContactMethod === 'Phone'}
                    onChange={handleChange}
                    required
                  />
                  <span>Phone</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="WhatsApp"
                    checked={formData.preferredContactMethod === 'WhatsApp'}
                    onChange={handleChange}
                    required
                  />
                  <span>WhatsApp</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="Email"
                    checked={formData.preferredContactMethod === 'Email'}
                    onChange={handleChange}
                    required
                  />
                  <span>Email</span>
                </label>
              </div>
            </div>

            {/* Contact Details Field */}
            <input
              type="text"
              name="contactDetails"
              placeholder="Enter your phone number, WhatsApp, or other contact info"
              className="w-full px-4 py-2 border text-white placeholder-white rounded-md focus:outline-none"
              value={formData.contactDetails}
              onChange={handleChange}
              required
            />

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md placeholder-white text-white focus:outline-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Feedback Messages */}
            {status === 'success' && (
              <p className="text-yellow-600">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-white">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition text-center"
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


