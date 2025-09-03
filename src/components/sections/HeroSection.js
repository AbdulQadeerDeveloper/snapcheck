import React, { useState } from "react";
import { Check, Mail } from "lucide-react";
import Image from "next/image";
import { Rubik } from 'next/font/google';
import { IoMailSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = () => {
    console.log("Email submitted:", email);
    // Handle email submission logic here
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 pt-16 lg:pt-18 pb-0 max-w-6xl mx-auto min-h-screen">

        {/* Left Content */}
        <div className="flex-1 max-w-2xl mb-8 lg:mb-0 lg:pr-12">

          {/* Introducing Label */}
          <div className="mb-4 md:mb-6 px-1">
            <span
              className={`${rubik.className} font-bold tracking-widest text-base md:text-lg lg:text-xl`}
              style={{ color: 'rgba(14, 113, 235, 1)' }}
            >
              Introducing
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-4 md:mb-6 leading-tight">
            <span className={`${rubik.className} font-medium block`}>
              BEST WAY TO MANAGE YOUR
            </span>
            <span
              className={`${rubik.className} font-medium`}
              style={{ color: 'rgba(14, 113, 235, 1)' }}
            >
              EMPLOYEES
            </span>{" "}
            <span className={`${rubik.className} font-medium`}>
              EASILY
            </span>
          </h1>

          {/* Description */}
          <p className={`${rubik.className} font-normal text-gray-600 text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed`}>
            Save everyone time by harnessing your team's collective knowledge
            into easy-to-find information.
          </p>

          {/* Email Signup Form */}
          <div className="mb-6 md:mb-8">
            <div className="relative w-full max-w-lg">
              {/* Left Mail Icon */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500">
                <IoMailSharp className="text-white text-xs md:text-sm" />
              </div>

              {/* Input Field */}
              <input
                type="email"
                placeholder="Enter your email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 md:pl-14 pr-24 md:pr-28 py-2 md:py-2.5 border border-gray-300 rounded-full text-sm placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              {/* Right Button */}
              <button
                onClick={handleEmailSubmit}
                className="absolute right-1 top-1/2 -translate-y-1/2 px-4 md:px-5 py-1 md:py-1.5 text-white text-xs md:text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1 md:gap-2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(14,113,235,1) 0%, rgba(116,51,204,1) 100%)",
                }}
              >
                <span className="hidden xs:inline">Free Trial</span>
                <span className="xs:hidden">Try Free</span>
                <FaArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          </div>

          {/* Feature Points */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div
                className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(to right, rgba(14, 113, 235, 1), rgba(116, 51, 204, 1))"
                }}
              >
                <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
              <span className="text-gray-700 text-sm md:text-base font-medium">Easy to access</span>
            </div>

            <div className="flex items-center space-x-2 md:space-x-3">
              <div
                className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(to right, rgba(14, 113, 235, 1), rgba(116, 51, 204, 1))"
                }}
              >
                <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
              <span className="text-gray-700 text-sm md:text-base font-medium">No credit card</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Dashboard Image */}
      <div className="absolute right-0 bottom-0 w-full lg:w-auto flex justify-center lg:justify-end">
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none lg:w-[500px] xl:w-[600px] 2xl:w-[700px] h-auto">
          <Image
            src="/images/dashboard-preview.png"
            alt="SnapCheck Dashboard Preview"
            width={700}
            height={800}
            className="w-full h-auto object-contain object-bottom"
            priority
          />

          {/* User Dashboard Callout */}
          <div className="absolute top-16 sm:top-20 md:top-24 lg:top-32 left-8 sm:left-12 md:left-16 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-1 md:space-x-2">
              <span className="text-xs md:text-sm text-gray-700 font-medium">User</span>
              <div className="bg-orange-100 text-orange-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium border border-orange-200">
                Dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;