"use client";
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Convenient and comprehensive cloud-based PC monitoring software. It's easy to install, access, and monitor client PCs. A mature and feature-rich solution for on-premise and remote monitoring.",
    name: "Easter Haward",
    role: "IT Support Specialist",
  },
  {
    text: "The tools allow us to supervise employees' access to data and their activity efficiently. It helped detect wasted time and improved overall productivity.",
    name: "Easter Haward",
    role: "CIO",
  },
  {
    text: "Easy implementation, great UI, and excellent support. We can track high-risk situations and prevent data loss effectively.",
    name: "Easter Haward",
    role: "$7B Manufacturing Enterprise",
  },
  {
    text: "The software provides detailed analytics and screenshots which help us manage remote teams seamlessly. Highly recommend for growing businesses.",
    name: "Samuel Lee",
    role: "Operations Manager",
  },
  {
    text: "Outstanding tool for employee monitoring with minimal setup. The dashboards are intuitive and give quick insights into productivity.",
    name: "Mia Johnson",
    role: "HR Director",
  },
  {
    text: "A must-have for companies with remote workers. Tracks computer activity, attendance, and keeps everything transparent.",
    name: "Liam Smith",
    role: "Team Lead",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 24 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // Add plugins if needed
    ]
  );

  // Fix for Keen Slider initial rendering on mobile
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [instanceRef]);

  return (
    <section className="py-16 px-4 sm:py-20 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-lg font-bold bg-gradient-to-r from-[#0E71EB] to-[#7433CC] bg-clip-text text-transparent">
            Customer Feedback
          </h4>
          <div className="w-12 h-1.5 mx-auto mt-2 rounded-full bg-gradient-to-r from-[#0E71EB] to-[#7433CC]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            What our valuable customers say
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Hear from businesses that have transformed their operations with our
            solution
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12 lg:mt-16">
          {/* Navigation Arrows */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}

          {/* Carousel */}
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="keen-slider__slide px-4 bg-white rounded-xl shadow-sm p-6 sm:p-6 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed flex-grow">
                  "{item.text}"
                </p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h5 className="font-semibold text-gray-900">{item.name}</h5>
                  <span className="text-sm text-gray-500 block mt-1">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {loaded && instanceRef.current && (
            <div className="flex justify-center mt-8 gap-2">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      currentSlide === idx
                        ? "bg-gradient-to-r from-[#0E71EB] to-[#7433CC] w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                );
              })}
            </div>
          )}

          {/* Mobile Arrows */}
          <div className="flex justify-center mt-6 gap-4 md:hidden">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
