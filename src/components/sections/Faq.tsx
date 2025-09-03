"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "What is an auto chatbot?",
    answer:
      "An auto chatbot is an AI-powered assistant designed to handle customer queries automatically without human intervention.",
  },
  {
    question: "What is the AI chatbot for car dealers?",
    answer:
      "It helps car dealers engage with customers, schedule test drives, answer FAQs, and provide instant responses.",
  },
  {
    question: "Can a chatbot do machine learning?",
    answer:
      "Chatbots can be enhanced with machine learning to improve their responses over time based on data and interactions.",
  },
  {
    question: "Is a chatbot a form of robotics?",
    answer:
      "Not exactly. Chatbots are software applications, whereas robotics involves physical machines. However, chatbots can integrate with robotic systems.",
  },
  {
    question: "What features should I look for in an automotive chatbot?",
    answer:
      "Look for natural language processing, lead capture, scheduling integration, CRM support, and multi-language capabilities.",
  },
  {
    question: "How do automotive chatbots improve customer support?",
    answer:
      "They provide 24/7 instant responses, reduce wait times, and improve customer satisfaction by automating repetitive queries.",
  },
  {
    question: "Can chatbots assist in car dealership automation?",
    answer:
      "Yes, chatbots can automate scheduling, lead management, and answer common dealership-related queries.",
  },
  {
    question: "Are automotive chatbots customizable?",
    answer:
      "Most automotive chatbots are highly customizable, allowing dealerships to tailor responses and workflows.",
  },
  {
    question: "How secure are interactions with automotive service chatbots?",
    answer:
      "With proper encryption and security protocols, chatbot interactions can be made safe and compliant with data protection laws.",
  },
  {
    question: "Can an automotive chatbot handle multiple languages?",
    answer:
      "Yes, many modern chatbots support multi-language functionality to serve diverse customer bases.",
  },
  {
    question:
      "How easy is it to integrate a chatbot into an existing automotive website?",
    answer:
      "Integration is typically straightforward with modern chatbot platforms offering simple script embeds or API connections.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 mb-[100px]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#141432] mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full border border-[#D9DBE9] px-6 py-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left text-lg font-bold text-[#4E4B66]"
              >
                {faq.question}
                {openIndex === index ? (
                  <FaMinus size={18} className="text-[#777777]" />
                ) : (
                  <FaPlus size={18} className="text-[#777777]" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-[16px] leading-[25px] text-[#4E4B66] font-normal">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
