import React from "react";

const Introsection = () => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('bg.png')] opacity-20"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            More about <span className="font-bold italic">myself</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            11+ Million Users | $100K Raised | Versatile product designer
            specializing in start-ups, SaaS teams, user-centered design,
            gamification, and crafting seamless digital experiences.
            <br />
            Proficient in Figma and Framer, with a proven track record of
            delivering results-driven solutions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-blue-500 text-sm font-semibold hover:bg-blue-600 hover:text-white transition relative"
            >
              Download Resume
              <span className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></span>
            </a>

            <a
              href="#"
              className="px-6 py-3 rounded-full text-sm font-semibold hover:text-blue-400 transition"
            >
              View Career Timeline &gt;
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="about.png"
              alt="About myself"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introsection;
