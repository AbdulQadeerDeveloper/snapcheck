// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0E71EB] to-[#7433CC] h-[200px] md:h-[300px]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between h-full relative">
        {/* Left Content */}
        <div className="text-white relative z-10 text-center md:text-left">
          <h1 className="font-bold text-[28px] md:text-[33px] leading-[38px] md:leading-[55px] font-[Nunito Sans]">
            Don&apos;t waste another minute! Snapcheck is FREE forever.
          </h1>
          <p className="mt-4 text-[16px] md:text-[15px] tracking-wide leading-[24px] md:leading-[28px] font-normal">
            Get Snapcheck with the ultimate time tracking software...
          </p>

          {/* Gradient Border Button */}
          <button className="relative mt-6 w-[260px] md:w-[347px] h-[56px] md:h-[66px] rounded-[10px] font-bold text-[18px] md:text-[24px] leading-[16px] text-[#7366FF]">
            <span className="absolute inset-0 rounded-[10px] p-[2px] bg-gradient-to-r from-[#0E71EB] to-[#7433CC]"></span>
            <span className="relative flex items-center justify-center w-full h-full bg-white rounded-[10px]">
              Track time now - it&apos;s FREE!
            </span>
          </button>
        </div>

        {/* Right Side with Overlapping Images */}
        <div className="relative h-[320px] sm:h-[400px] md:h-[330px] w-full md:w-[480px] mt-20 md:mt-0 flex-shrink-0">
          {/* Chart background image */}
          <Image
            src="/images/charts.png"
            alt="Chart Graphic"
            width={220}
            height={220}
            className="absolute bottom-0 left-[40px] sm:left-[80px] md:left-[120px] w-[220px] sm:w-[300px] md:w-[400px] h-auto object-contain z-10"
            priority
          />

          {/* Person image overlapping */}
          <Image
            src="/images/hero-men.png"
            alt="Hero Man"
            width={400}
            height={150}
            className="absolute bottom-0 sm:bottom-2 md:bottom-4 h-[150px] sm:h-[150px] md:h-[400px] w-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
