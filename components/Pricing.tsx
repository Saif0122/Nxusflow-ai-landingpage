
import React from 'react';

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["Up to 3 Projects", "Basic AI Analytics", "Community Support", "Mobile App Access"],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited Projects", "Advanced NexusAI", "Custom Workflows", "Priority Support", "API Access"],
    cta: "Get Started Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Dedicated Instances", "White-glove Onboarding", "SLA Guarantees", "Custom Security"],
    cta: "Contact Sales",
    popular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h3>
        <p className="text-gray-400">Scale your team without hitting budget walls.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`p-10 rounded-3xl flex flex-col transition-transform hover:scale-[1.02] duration-300 ${
              plan.popular 
                ? 'bg-gradient-to-br from-indigo-600 to-indigo-800 ring-4 ring-indigo-500/20 relative' 
                : 'glass-morphism border border-white/5'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-white text-indigo-600 text-[10px] font-black px-8 py-1 rotate-45 translate-x-8 translate-y-4 shadow-sm">
                  MOST POPULAR
                </div>
              </div>
            )}
            
            <h4 className="text-xl font-bold mb-2 text-white">{plan.name}</h4>
            <div className="flex items-baseline space-x-1 mb-8">
              <span className="text-4xl font-extrabold text-white">{plan.price}</span>
              {plan.price !== "Custom" && (
                <span className={plan.popular ? 'text-indigo-200' : 'text-gray-500'}>/mo</span>
              )}
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <svg 
                    className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-white' : 'text-indigo-500'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${plan.popular ? 'text-indigo-50' : 'text-gray-400'}`}>{f}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${
              plan.popular 
                ? 'bg-white text-indigo-600 hover:bg-gray-100 shadow-xl' 
                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
            }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
