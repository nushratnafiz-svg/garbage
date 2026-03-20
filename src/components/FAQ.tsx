"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#262626] rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#1f1f1f] transition-colors"
      >
        <span className="font-medium">{question}</span>
        <span className={`text-[#22d3ee] text-2xl transition-transform ${isOpen ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="px-6 pb-4 text-[#a3a3a3]">{answer}</p>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in React, Next.js, TypeScript, Node.js, PostgreSQL, and cloud platforms like AWS. I'm always learning new technologies to stay current.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity. A simple website takes 1-2 weeks, while complex web applications can take 2-3 months. I'll provide a detailed timeline after our initial consultation.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! I offer monthly maintenance packages that include bug fixes, security updates, and feature enhancements. Let's discuss your needs during our call.",
  },
  {
    question: "What is your pricing structure?",
    answer: "I offer both project-based and hourly pricing. For fixed-scope projects, I provide a detailed quote after understanding your requirements. For ongoing work, my hourly rate is competitive.",
  },
  {
    question: "How do we communicate during the project?",
    answer: "I use Slack for quick communication, email for formal updates, and regular video calls for meetings. You'll always know the status of your project.",
  },
];

export function FAQ() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
