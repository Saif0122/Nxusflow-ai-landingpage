
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs - Decorative only, hidden from SR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-20 blur-[120px]" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Clickable Version Badge */}
        <a 
          href="#features" 
          aria-label="New: Version 2.0 features now live"
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs md:text-sm font-medium mb-8 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 active:scale-95 group"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="group-hover:translate-x-0.5 transition-transform duration-300">Version 2.0 Now Live</span>
          <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
          Intelligence that <br />
          <span className="gradient-text">Flows with You</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-400 mb-10 leading-relaxed px-4">
          The all-in-one AI platform to manage projects, automate workflows, and predict bottlenecks. Join the future of streamlined productivity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 px-4">
          <button 
            aria-label="Get started with a free trial"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-500/20 hover:-translate-y-1 active:scale-95"
          >
            Start Free Trial
          </button>
          <button 
            aria-label="View product demo video"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm active:scale-95"
          >
            View Live Demo
          </button>
        </div>

        {/* Dashboard Mockup - Performance Optimized */}
        <div className="relative max-w-5xl mx-auto group px-2 sm:px-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" aria-hidden="true"></div>
          <div className="relative glass-morphism rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 animate-float shadow-2xl">
            <div className="bg-gray-900/90 px-4 py-3 border-b border-white/5 flex items-center space-x-2">
              <div className="flex space-x-1.5" aria-hidden="true">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="mx-auto bg-white/5 rounded-md px-4 sm:px-10 py-1 text-[8px] sm:text-[10px] text-gray-500 font-mono truncate max-w-[150px] sm:max-w-none">
                nexusflow.ai/workspace/dashboard
              </div>
            </div>
            {/* LCP Optimization: fetchPriority, Decoding, and WebP Compression */}
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80&fm=webp" 
              alt="NexusFlow AI Project Dashboard Interface" 
              width="1200"
              height="675"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto opacity-90 group-hover:scale-[1.02] transition-transform duration-1000 object-cover cursor-pointer bg-gray-900"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
