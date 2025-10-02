import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section className="bg-blue-50 py-20 px-6 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight 
                      text-black
                       drop-shadow-sm leading-tight text-center p-8">
          We Design, <span className="text-lime-400">Build</span> & Maintain <span className="text-red-400">Websites</span> 
        </h1>

        <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
          Your all-in-one solution for professional websites, branding, and 24/7 support.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-[#0b1120] backdrop-blur-sm rounded-xl shadow hover:shadow-lg text-blue-900">
            <h3 className="text-xl font-semibold text-red-400">Web Development</h3>
            <p className="mt-2 text-white">Custom websites that load fast and look great.</p>
          </div>
          <div className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow hover:shadow-lg text-blue-900">
            <h3 className="text-xl font-semibold text-blue-600">Logo & Branding</h3>
            <p className="mt-2 text-gray-700">Unique logos and visual identities for your brand.</p>
          </div>
          <div className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow hover:shadow-lg text-blue-900">
            <h3 className="text-xl font-semibold text-blue-600">Maintenance</h3>
            <p className="mt-2 text-gray-700">Keep your site secure, updated, and running 24/7.</p>
          </div>
        </div>

        <div className="mt-10">
          <Link 
            to="/contact"
            className="bg-[#0b1120] text-white font-semibold 
                       px-6 py-3 rounded-md hover:opacity-90 transition text-center"
          >
            Come and meet us
          </Link>
        </div>
      </section>

      {/* ✅ WhatsApp Floating Button by isa velem */}
      <a
        href="https://wa.me/27840489731"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 2.11.61 4.05 1.67 5.69L2 22l4.56-1.18a10.14 10.14 0 005.48 1.57h.01c5.45 0 9.88-4.43 9.88-9.89S17.5 2 12.04 2zm0 18.08a8.17 8.17 0 01-4.17-1.15l-.3-.18-2.7.7.72-2.63-.18-.27a8.2 8.2 0 01-1.28-4.42c0-4.52 3.67-8.19 8.2-8.19 4.52 0 8.2 3.67 8.2 8.2 0 4.52-3.68 8.19-8.2 8.19zm4.49-6.17c-.25-.13-1.47-.73-1.7-.82-.23-.08-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.26-.74-.66-1.23-1.48-1.38-1.73-.14-.25-.02-.39.11-.52.11-.11.25-.3.37-.45.12-.15.16-.25.24-.41.08-.16.04-.3-.02-.42-.07-.12-.57-1.38-.78-1.89-.2-.48-.41-.42-.57-.43l-.49-.01a.96.96 0 00-.7.33c-.24.26-.92.9-.92 2.2s.94 2.56 1.07 2.73c.13.17 1.84 2.81 4.46 3.94.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.17-.46-.3z" />
        </svg>
      </a>
    </div>
  );
}

export default Hero;

