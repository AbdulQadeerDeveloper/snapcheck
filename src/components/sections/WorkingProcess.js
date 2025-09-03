import React from 'react';
import Image from 'next/image';
import { Settings, BarChart3, Users } from 'lucide-react';

import compact from "../../../public/images/compact.png";
import zoom from "../../../public/images/zoom.png";
import mobi from "../../../public/images/mobi.png";
import shap from "../../../public/images/shape.png";

const WorkingProcess = () => {
  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Set your personalized spending budget",
      description: "Organize pages, attachments, and even spaces with keyword labels — such as meeting type or project name."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User friendly user interface design layout",
      description: "Use the advanced search & page tree to quickly find and label key docs in a well-organized page tree."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Made with powerful programming Language",
      description: "High-level programming language that is one of the core technologies of the World Wide Web."
    }
  ];

  const bottomFeatures = [
    {
      icon: mobi,
      title: "Create Your Account",
      description: "App development refers to the process of designing, developing, and deploying",
    },
    {
      icon: zoom,
      title: "Download Snapcheck",
      description: "Customization refers to the process of modifying or tailoring a product & service",
    },
    {
      icon: compact,
      title: "Start Monitoring",
      description: "An integration directory is a repository or a directory that contains information",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16 mb-16 lg:mb-20">
          {/* Left Side - Dashboard Images */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main To-Do App Image */}
              <div className="relative z-0">
                <Image
                  src="/images/to-do-app.png"
                  alt="To-Do App Dashboard"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-2xl shadow-2xl object-contain"
                />
              </div>

              {/* Overlapping Chart Card */}
              <div className="absolute -bottom-10 lg:-bottom-20 -right-2 lg:-right-2 z-10 w-1/3 lg:w-auto">
                <Image
                  src="/images/chart-card.png"
                  alt="Chart Card"
                  width={220}
                  height={160}
                  className="rounded-xl shadow-xl border-4 border-white object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-6 text-center lg:text-left">
              <p className="text-blue-600 font-semibold mb-2">Working Process</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 lg:mb-8 leading-snug">
                Observe the Snapcheck's Working Process Thoroughly
              </h2>
              <div className="relative">
                {/* Gradient Divider */}
                <div className="w-16 sm:w-20 h-[5px] rounded-[10px] bg-gradient-to-r from-[#0E71EB] to-[#7433CC] absolute bottom-[15px] left-0" />
              </div>
            </div>



            <div className="relative flex flex-col space-y-10">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

              {features.map((feature, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  {/* Icon with circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-200">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>



        {/* Bottom Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className="relative items-start gap-4 bg-white rounded-xl p-5 md:p-6 transition-all duration-300 border flex flex-col text-center md:text-left"
              style={{
                border: "1px solid #E5E7EB",
                boxShadow: `
          0px 5.05px 4.04px 0px rgba(82, 77, 141, 0.05),
          0px 9.51px 7.61px 0px rgba(82, 77, 141, 0.06),
          0px 10.94px 10.94px 0px rgba(82, 77, 141, 0.04)
        `,
              }}
            >
              {/* Icon/Image */}
              <div className="w-16 h-16 items-center justify-center mx-auto md:mx-0">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Decorative Shape Image (Top Right) */}
              <div className="absolute top-0 right-0">
                <Image
                  src={shap}
                  alt="Decorative Shape"
                  width={95}
                  height={86}
                  className="opacity-100"
                />
              </div>

              {/* Text Content */}
              <div className="mt-2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkingProcess;