
import React from 'react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Lead @ TechFlow",
    image: "https://picsum.photos/100/100?random=1",
    quote: "NexusFlow transformed how our remote team collaborates. The AI prioritization is a game-changer for our sprints."
  },
  {
    name: "Marcus Thorne",
    role: "CEO of NovaStream",
    image: "https://picsum.photos/100/100?random=2",
    quote: "The cleanest UI I've ever seen in a SaaS product. It's actually a joy to use daily."
  },
  {
    name: "Elena Rodriguez",
    role: "Operations Director",
    image: "https://picsum.photos/100/100?random=3",
    quote: "Reporting used to take hours. Now NexusFlow generates my weekly updates in literally three seconds."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" aria-labelledby="testimonials-heading">
      <h3 id="testimonials-heading" className="text-3xl md:text-5xl font-bold text-white mb-16">Loved by Global Teams</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="p-8 glass-morphism rounded-3xl border border-white/5 text-left relative">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 shrink-0">
                <img 
                  src={`${t.image}&fm=webp`} 
                  alt={t.name} 
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover border-2 border-indigo-500/30" 
                />
              </div>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{t.role}</p>
              </div>
            </div>
            <blockquote className="text-gray-300 italic leading-relaxed">
              <p>"{t.quote}"</p>
            </blockquote>
            <div className="mt-6 flex text-yellow-500" aria-label="Rating: 5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
