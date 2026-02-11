
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Orbs - Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-10 blur-[100px]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-600 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Version Badge - High Contrast Fix */}
        <div className="mb-8">
          <a 
            href="#features" 
            aria-label="Read about version 2.0 release"
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs md:text-sm font-semibold hover:bg-indigo-500/20 transition-all duration-300 group"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="group-hover:translate-x-0.5 transition-transform">Version 2.0 Now Live</span>
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05] text-white">
          Intelligence that <br />
          <span className="gradient-text">Flows with You</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-10 leading-relaxed px-4">
          The all-in-one AI platform to manage projects, automate workflows, and predict bottlenecks. Experience the future of team productivity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 px-4">
          <button 
            aria-label="Start your 14-day free trial"
            className="w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-500/20 hover:-translate-y-1 active:scale-95"
          >
            Start Free Trial
          </button>
          <button 
            aria-label="Watch the interactive demo"
            className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm active:scale-95"
          >
            View Live Demo
          </button>
        </div>

        {/* Dashboard Mockup - Massive Performance Optimization */}
        <div className="relative max-w-5xl mx-auto px-2 sm:px-0" style={{ minHeight: '300px' }}>
          <div className="absolute -inset-1 bg-indigo-500/20 rounded-2xl blur-2xl opacity-50" aria-hidden="true"></div>
          <div className="relative glass-morphism rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-float">
            <div className="bg-gray-900/90 px-4 py-3 border-b border-white/5 flex items-center space-x-2">
              <div className="flex space-x-1.5" aria-hidden="true">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
              </div>
              <div className="mx-auto bg-white/5 rounded-md px-10 py-1 text-[10px] text-gray-500 font-mono select-none">
                nexusflow.ai/dashboard
              </div>
            </div>
            {/* LCP Optimization: fetchPriority, aggressive sizing (1000px), q=60, webp */}
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=60&fm=webp" 
              alt="NexusFlow AI Project Dashboard Interface" 
              width="1000"
              height="562"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto opacity-95 object-cover bg-gray-950"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
