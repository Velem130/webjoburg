import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

// Exchange rates (rounded approximation for demonstration)
const exchangeRates = {
  ZAR: 19,    // 1 USD ≈ 19 ZAR
  INR: 83,    // 1 USD ≈ 83 INR
  PKR: 280,   // 1 USD ≈ 280 PKR
  IDR: 15500, // 1 USD ≈ 15,500 IDR
  NGN: 780,   // 1 USD ≈ 780 NGN
};

// List of services for VisaDocs Solutions
const services = [
  "Visa Application Forms",
  "Flight Itineraries & Reservations",
  "Hotel Bookings & Accommodation Proof",
  "Travel Plans & Cover Letters",
  "Invitation Letters",
  "Employment & Leave Letters",
  "Business Registration Documents",
  "Work Experience & Reference Letters",
  "Offer Letters & Salary Slips",
  "CVs & Job Applications",
  "Education & Degree Documents",
  "Transcripts & Certificates",
  "GCMS Notes",
  "IRCC Webform",
  "Reconsideration for Canada Visas",
];

const Prices = () => {
  // Generate random USD price for each service (between 20–30)
  const servicePrices = services.map((service) => {
    const priceUSD = Math.round(Math.random() * 10 + 20); // 20–30 USD
    return {
      service,
      USD: priceUSD,
      ZAR: Math.round(priceUSD * exchangeRates.ZAR),
      INR: Math.round(priceUSD * exchangeRates.INR),
      PKR: Math.round(priceUSD * exchangeRates.PKR),
      IDR: Math.round(priceUSD * exchangeRates.IDR),
      NGN: Math.round(priceUSD * exchangeRates.NGN),
    };
  });

  return (
    <section className="bg-white py-16 px-6 md:px-20 pt-24">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Our Prices
      </h2>
      <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
        Professional visa & job documentation support at affordable prices. Prices are shown in multiple currencies for your convenience.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicePrices.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-2">{item.service}</h4>
            <p className="text-gray-700 font-semibold mb-4">
              USD ${item.USD} | ZAR R{item.ZAR} | INR ₹{item.INR} | PKR ₨{item.PKR} | IDR Rp{item.IDR} | NGN ₦{item.NGN}
            </p>
            <a
              href="https://wa.me/27840489731"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-600 text-white hover:bg-blue-800 transition-all font-semibold py-2 rounded-lg"
            >
              Contact on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prices;



