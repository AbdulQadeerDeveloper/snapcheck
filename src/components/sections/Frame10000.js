import React from 'react';
import Image from 'next/image';
import svgImage from "../../../public/images/image-icon.png"
import svgImageRightDot from "../../../public/images/right-dots.png"
import shadeClients from "../../../public/images/shade.png"

const Frame10000 = () => {
  return (
    <section className="px-4 bg-white py-16 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p
            className="font-extrabold mb-3 uppercase tracking-wider text-xs md:text-sm bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(14, 113, 235, 1), rgba(116, 51, 204, 1))",
            }}
          >
            REMOTE WORK MANAGEMENT
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Empower Your Team with Complete
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Remote Transparency
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 px-2 md:px-4 lg:px-12">
          {/* Left Side - Challenge */}
          <div
            className="w-full max-w-sm md:max-w-md rounded-2xl p-4 md:p-6"
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(90deg, rgba(14,113,235,0.6) 0%, rgba(116,51,204,0.6) 100%)",
              borderImageSlice: 1,
              borderRadius: "1rem", // Changed from 100rem to standard value
            }}
          >
            {/* Section Heading */}
            <h3 className="text-[#74829A] text-xs font-semibold mb-2 uppercase tracking-widest text-center">
              THE CHALLENGE
            </h3>

            {/* Title */}
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-5 text-center">
              Snapcheck that Foster <br /> Remote Work
            </h4>

            {/* Bullet Points */}
            <div className="space-y-3">
              {[
                {
                  bold: "Strategic decision",
                  text: "halted leading to diminished growth and profitability.",
                },
                {
                  bold: "Reduced visibility",
                  text: "into daily operations leading to missed deadlines.",
                },
                {
                  bold: "Managers' inability",
                  text: "to correctly allocate work and track progress.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg border border-[#D3D8E4] cursor-pointer group"
                  style={{
                    border: "0.8px solid",
                    borderImageSource:
                      "linear-gradient(90deg, rgba(14,113,235,0.4) 0%, rgba(116,51,204,0.4) 100%)",
                    borderImageSlice: 1,
                    borderRadius: "0.5rem",
                  }}
                >
                  {/* Left Image Instead of Dot */}
                  <Image
                    src={svgImage}
                    alt="icon"
                    width={20}
                    height={20}
                    className="mt-1 transition-transform duration-300 group-hover:scale-125 active:scale-90"
                  />

                  <p className="text-gray-700 text-xs md:text-sm">
                    <span className="font-semibold">{item.bold}</span> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Center - Image - Visible on tablets and up */}
          <div className="md:w-1/4 flex justify-center flex-shrink-0 my-6 md:my-0 order-first md:order-none">
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden">
                <Image
                  src={shadeClients}
                  alt="Center"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Solution */}
          <div
            className="w-full max-w-sm md:max-w-md rounded-2xl p-4 md:p-6"
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(90deg, rgba(14,113,235,0.6) 0%, rgba(116,51,204,0.6) 100%)",
              borderImageSlice: 1,
              borderRadius: "1rem", // Changed from 100rem to standard value
            }}
          >
            {/* Section Heading */}
            <h3 className="text-blue-600 text-xs font-semibold mb-2 uppercase tracking-widest text-center">
              THE SOLUTION
            </h3>

            {/* Title */}
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-5 text-center">
              Snapcheck that Foster Accountable <br />
              Remote Work
            </h4>

            {/* Bullet Points */}
            <div className="space-y-3">
              {[
                {
                  bold: "Strategic insights",
                  text: "into workflows, tasks and activities.",
                },
                {
                  bold: "Data-driven",
                  text: "elimination of idle time and inefficient processes.",
                },
                {
                  bold: "Increased accountability",
                  text: "with real-time visibility leading to higher productivity.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg cursor-pointer group"
                  style={{
                    border: "0.8px solid",
                    borderImageSource:
                      "linear-gradient(90deg, rgba(14,113,235,0.4) 0%, rgba(116,51,204,0.4) 100%)",
                    borderImageSlice: 1,
                    borderRadius: "0.5rem",
                  }}
                >
                  {/* Left Image Instead of Dot */}
                  <Image
                    src={svgImageRightDot}
                    alt="icon"
                    width={20}
                    height={20}
                    className="mt-1 transition-transform duration-300 group-hover:scale-125 active:scale-90"
                  />

                  <p className="text-gray-700 text-xs md:text-sm">
                    <span className="font-semibold">{item.bold}</span> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-8 md:mt-10">
          {/* Start Free Trial */}
          <button
            className="text-white px-5 py-2 md:px-7 md:py-2 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
            style={{
              background:
                "linear-gradient(to right, rgba(14, 113, 235, 1), rgba(116, 51, 204, 1))",
            }}
            onMouseOver={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(to right, rgba(116, 51, 204, 1), rgba(14, 113, 235, 1))")
            }
            onMouseOut={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(to right, rgba(14, 113, 235, 1), rgba(116, 51, 204, 1))")
            }
          >
            Start Free Trial
          </button>

          {/* Book a Demo */}
          <button className="border-2 border-blue-600 text-blue-600 px-5 py-2 md:px-7 md:py-2 rounded-lg font-semibold bg-white hover:bg-blue-600 hover:text-white focus:bg-blue-700 focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base">
            Book a Demo
          </button>
        </div>

        <p className="text-center text-gray-500 text-xs md:text-sm mt-3">
          No credit card required
        </p>
      </div>
    </section>
  );
};

export default Frame10000;