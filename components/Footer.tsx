
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 pt-24 pb-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer Information</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center bg-indigo-600 rounded-[2.5rem] p-12 mb-20 relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
            <h4 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to accelerate?</h4>
            <p className="text-indigo-100 text-lg">Join 10,000+ teams shipping faster with NexusFlow.</p>
          </div>
          <div className="relative z-10">
            <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all active:scale-95">
              Join the Waitlist
            </button>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-800 rounded-full blur-3xl" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6 justify-center md:justify-start">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white" aria-hidden="true">N</div>
              <span className="text-xl font-bold tracking-tight text-white">NexusFlow</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Making work intelligent, one task at a time. Built with pride to scale your business.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Connect</h5>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" aria-label="NexusFlow on Twitter" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" aria-label="NexusFlow on LinkedIn" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 text-[10px] font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} NexusFlow AI Technologies Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
