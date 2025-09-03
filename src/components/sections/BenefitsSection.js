import React from "react";
import Image from "next/image";

// Import images
import BoostImage from "../../../public/images/Boost-productivity.png";
import BestImage from "../../../public/images/Best-solution.png";
import EstImage from "../../../public/images/East-use.png";
import RightImage from "../../../public/images/Right-privacy.png";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: BoostImage,
      title: "Boost Productivity",
      description:
        "Customize monitoring solutions to enhance employee performance while safeguarding the information. Customize monitoring solutions to enhance employee performance while safeguarding the information.",
    },
    {
      icon: BestImage,
      title: "Best Solution for Remote Teams",
      description:
        "Customize monitoring solutions to enhance employee performance while safeguarding the information. Customize monitoring solutions to enhance employee performance while safeguarding the information.",
    },
    {
      icon: EstImage,
      title: "Right to Privacy",
      description:
        "Customize monitoring solutions to enhance employee performance while safeguarding the information. Customize monitoring solutions to enhance employee performance while safeguarding the information.",
    },
    {
      icon: RightImage,
      title: "Easy to Use",
      description:
        "Customize monitoring solutions to enhance employee performance while safeguarding the information. Customize monitoring solutions to enhance employee performance while safeguarding the information.",
    },
  ];

  return (
    <section className="px-4 bg-white py-16 md:py-28">
      <div className="max-w-[81%] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p
            className="font-extrabold mb-3 bg-clip-text text-transparent text-sm sm:text-base"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(14, 113, 235, 1), rgba(116, 51, 204, 1))",
            }}
          >
            # No 1 Trending Apps
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Benefits of Employee Monitoring
          </h2>

          {/* Gradient Divider */}
          <div className="w-16 sm:w-20 h-[5px] mx-auto mt-2 rounded-[10px] bg-gradient-to-r from-[#0E71EB] to-[#7433CC]" />

          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Solving Business Problems Through Modern Software.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-5 p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50 p-2">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={74}
                  height={74}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Text */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;