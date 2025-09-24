import { useState } from "react";

const HowWeBuild = () => {
  const [showSteps, setShowSteps] = useState(false);

  const toggleSteps = () => setShowSteps(!showSteps);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        How We Bring Your Website to Life
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We make the process easy and transparent, guiding you from the first
        idea to a fully launched website. No tech jargon, no confusion, just a
        smooth journey to a site that works for your business.
      </p>

      <div className="text-center mb-6">
        <button
          onClick={toggleSteps}
          className="bg-[#0b1120] text-red-400 px-6 py-3 rounded hover:bg-blue-900 transitiontext-base sm:px-4 sm:py-2 sm:text-xs "
        >
          {showSteps ? "Hide process" : "Click Me to see how we build your website"}
        </button>
      </div>

      {showSteps && (
        <div className="space-y-6">
          {/* Step 01 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 01</h3>
            <h4 className="text-lg font-bold">Discover and Plan</h4>
            <p className="text-gray-600">
              It all starts with a conversation as we take the time to
              understand your business goals, your audience, and what success
              looks like for you. Then from there we map out the structure of
              your website and plan the user journey to keep things simple and
              effective.
            </p>
          </div>

          {/* Step 02 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 02</h3>
            <h4 className="text-lg font-bold">Content and Visual Style</h4>
            <p className="text-gray-600">
              You can provide your own content, or we can help you create it.
              At the same time, we define your site’s visual direction. So
              whether you prefer a bold, clean, modern, or unique look, we make
              sure it fits your brand perfectly.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 03</h3>
            <h4 className="text-lg font-bold">Design Mock-up</h4>
            <p className="text-gray-600">
              We create a complete visual mock-up of your homepage and key
              pages to give you a clear picture of how your website will look
              before we start building. At this stage, you can review and
              suggest changes.
            </p>
          </div>

          {/* Step 04 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 04</h3>
            <h4 className="text-lg font-bold">Build and Test</h4>
            <p className="text-gray-600">
              Once the design is approved, we build your website using
              WordPress, Shopify, or custom code depending on your needs. We
              test everything to ensure it loads quickly, looks great on mobile,
              and meets SEO best practices.
            </p>
          </div>

          {/* Step 05 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 05</h3>
            <h4 className="text-lg font-bold">Launch and Support</h4>
            <p className="text-gray-600">
              After final testing, your website goes live. You get full access
              and control, along with optional care plans for ongoing updates
              and support. Our team is always available if you need help after
              launch.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowWeBuild;

