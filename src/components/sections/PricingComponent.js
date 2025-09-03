import React from 'react';

const PricingComponent = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto pb-12 lg:pb-20">

        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
            14-Day Free Trial + 100% No-Risk Guarantee!
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Choose an affordable plan that's packed with the best features for engaging your
            visitors, creating customer loyalty, and driving sales.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button className="px-4 md:px-6 py-2 rounded-full text-gray-600 font-medium text-sm md:text-base">
              Billed Monthly
            </button>
            <button className="px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm md:text-base">
              Billed Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 md:gap-4 lg:gap-6">

          {/* Free Plan */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-6 lg:p-8 w-full md:max-w-[320px] lg:w-[350px] flex flex-col mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Free Plan</h3>
            <div className="mb-6 md:mb-8">
              <span className="text-3xl md:text-4xl font-bold text-black">Rs.0</span>
            </div>
            <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-2 md:py-3 rounded-full font-semibold mb-6 md:mb-8 hover:bg-blue-50 transition-colors text-sm md:text-base">
              Start Trial
            </button>
            <div className="space-y-3 md:space-y-4 overflow-y-auto flex-1">
              {[
                "Unlimited users",
                "Upto 2 teams",
                "Computer activity tracking",
                "Timesheet and attendance",
                "Custom rules to detect slacking employees",
                "Screenshots every 10 minutes",
                "Last 10 days data retention",
                "10 GB file storage limit"
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-6 lg:p-8 w-full md:max-w-[320px] lg:w-[350px] flex flex-col mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Pro</h3>
            <div className="mb-6 md:mb-8">
              <span className="text-3xl md:text-4xl font-bold text-black">Rs.699</span>
            </div>
            <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-2 md:py-3 rounded-full font-semibold mb-6 md:mb-8 hover:bg-blue-50 transition-colors text-sm md:text-base">
              Start Trial
            </button>
            <div className="space-y-3 md:space-y-4 overflow-y-auto flex-1">
              {[
                "Unlimited users",
                "Upto 2 teams",
                "Computer activity tracking",
                "Timesheet and attendance",
                "Custom rules to detect slacking employees",
                "Screenshots every 10 minutes",
                "Last 10 days data retention",
                "10 GB file storage limit",
                "Detailed timelines & visuals of progress",
                "Export to CSV, XLS",
                "Priority support",
                "Remove Co-Branding/White Label"
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-xl p-[2px] w-full md:max-w-[320px] lg:w-[350px] mx-auto"
            style={{ background: "linear-gradient(to right, rgba(14, 113, 235, 1), rgba(116, 51, 204, 1))" }}>
            <div className="bg-white rounded-xl p-6 md:p-6 lg:p-8 h-full flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">Enterprise</h3>
              <div className="mb-6 md:mb-8">
                <span className="text-3xl md:text-4xl font-bold text-black">Custom</span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 md:py-3 rounded-full font-semibold mb-6 md:mb-8 hover:from-blue-700 hover:to-purple-700 transition-all text-sm md:text-base">
                Start Trial
              </button>
              <div className="space-y-3 md:space-y-4 overflow-y-auto flex-1">
                {[
                  "5 Chat Widgets",
                  "5 Website Domains",
                  "Unlimited Agents",
                  "5000 Chat conversations/month",
                  "Message Shortcuts",
                  "ChatGPT, Gemini, and Claude Models",
                  "5000 AI Trained URLs",
                  "Automatic URL Retraining",
                  "Cross Teams Chat Transfers"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingComponent;