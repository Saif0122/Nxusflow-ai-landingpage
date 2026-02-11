
import React, { useState } from 'react';

const faqs = [
  {
    q: "How does the AI task prioritization work?",
    a: "Our Gemini-powered engine analyzes task metadata, historical velocity, and upcoming deadlines to provide a dynamic 'Importance Score' for every item in your backlog."
  },
  {
    q: "Can I export my data?",
    a: "Absolutely. We support 1-click exports to CSV, JSON, and PDF, ensuring you always have full control over your project data."
  },
  {
    q: "Do you offer discounts for non-profits?",
    a: "Yes, we offer a 50% discount on all Pro plans for verified educational and non-profit organizations. Reach out to our support team to apply."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-bold text-white text-center mb-12">Got Questions?</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-morphism rounded-2xl border border-white/5 overflow-hidden">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-white">{faq.q}</span>
              <svg className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-300 ${openIdx === idx ? 'max-h-48 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
