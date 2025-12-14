import { useState } from "react";

const HowWeBuild = () => {
  const [showSteps, setShowSteps] = useState(false);

  const toggleSteps = () => setShowSteps(!showSteps);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        How We Assist You With Your Documents
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We make the visa, travel, and job application process simple and stress-free.
        Our team guides you step-by-step to ensure your documents are complete and accurate.
      </p>

      <div className="text-center mb-6">
        <button
          onClick={toggleSteps}
          className="bg-[#0b1120] text-white px-4 py-2 text-sm rounded hover:bg-blue-900 transition w-full max-w-xs sm:max-w-md text-wrap text-center"
        >
          {showSteps ? "Hide Process" : "Click Here to See How We Work"}
        </button>
      </div>

      {showSteps && (
        <div className="space-y-6">
          {/* Step 01 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 01</h3>
            <h4 className="text-lg font-bold">Initial Consultation</h4>
            <p className="text-gray-600">
              We start by understanding your travel, visa, or job requirements.
              We review your situation and provide guidance on which documents you need.
            </p>
          </div>

          {/* Step 02 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 02</h3>
            <h4 className="text-lg font-bold">Document Preparation</h4>
            <p className="text-gray-600">
              We assist you in preparing all required documents including visa forms,
              flight and hotel reservations, employment letters, and academic certificates.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 03</h3>
            <h4 className="text-lg font-bold">Review & Verification</h4>
            <p className="text-gray-600">
              Our team carefully reviews all documents for accuracy and completeness,
              making sure everything meets embassy or employer requirements.
            </p>
          </div>

          {/* Step 04 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 04</h3>
            <h4 className="text-lg font-bold">Submission Support</h4>
            <p className="text-gray-600">
              We guide you through the submission process to embassies, consulates, or employers,
              ensuring that your applications are submitted correctly and on time.
            </p>
          </div>

          {/* Step 05 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-blue-600 text-sm font-semibold">Step 05</h3>
            <h4 className="text-lg font-bold">Follow-Up & Assistance</h4>
            <p className="text-gray-600">
              After submission, we provide follow-up support, answer queries, and help with
              any additional documentation or updates needed until your application is approved.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowWeBuild;


