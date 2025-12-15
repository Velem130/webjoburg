import React from "react";

const teamMembers = [
  {
    name: "Aisha Khan",
    role: "Founder & Visa Specialist",
    image: "/team1.jpg",
  },
  {
    name: "David Jhon Ken",
    role: "Travel Documentation Expert",
    image: "/team2.jpg",
  },
  {
    name: "Ananya Sharma",
    role: "Job & Academic Document Consultant",
    image: "/team3.jpg",
  },
  {
    name: "Isaac Velem Cordin",
    role: "Client Support & Application Coordinator",
    image: "/team4.jpg",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="bg-[#0b1120] py-16 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Slogan and Intro */}
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Your Trusted <span className="text-lime-400">Visa & Documentation</span> Team
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          At <span className="text-lime-400 font-semibold">VisaDocs Solutions</span>, we specialize in helping clients prepare complete, accurate, and embassy-ready documents for visas, travel, and job applications. Our dedicated team ensures your process is smooth, fast, and professional.
        </p>

        {/* Team Section Title */}
        <h3 className="text-3xl font-bold mb-10 border-b-4 border-lime-400 inline-block pb-2">
          Meet the Team
        </h3>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-contain mb-4 rounded-full border-2 border-lime-400"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-lime-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
