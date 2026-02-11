
import React, { useState, useRef, useEffect } from 'react';
import { createChatSession } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize chat session on component mount
  useEffect(() => {
    chatRef.current = createChatSession();
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const stream = await chatRef.current.sendMessageStream({ message: textToSend });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        fullResponse += chunkText;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'model', text: fullResponse };
          return updated;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Please check your connection." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestions = [
    "Plan a product launch",
    "Analyze team velocity",
    "Draft a project update",
    "Optimizing workflows"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-white mb-2">NexusAI Concierge</h3>
        <p className="text-gray-400">The most advanced conversational engine for your business workflows.</p>
      </div>

      <div className="glass-morphism rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[600px]">
        {/* Chat Header */}
        <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-tight">NexusFlow AI</h4>
              <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                Active Instance
              </span>
            </div>
          </div>
          <button 
            onClick={() => {
              setMessages([]);
              chatRef.current = createChatSession();
            }}
            className="text-xs text-gray-500 hover:text-white transition-colors"
          >
            Clear Session
          </button>
        </div>

        {/* Message Window */}
        <div 
          ref={scrollRef}
          className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar scroll-smooth"
        >
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-60">
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-white mb-2">How can I help you today?</p>
                <div className="flex flex-wrap justify-center gap-2 max-w-sm">
                  {suggestions.map((s) => (
                    <button 
                      key={s} 
                      onClick={() => handleSend(s)}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-gray-400 hover:text-white transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-500/10' 
                    : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">
                  {msg.text || (msg.role === 'model' && <span className="flex space-x-1"><span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span><span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span><span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span></span>)}
                </div>
              </div>
            </div>
          ))}
          {isTyping && messages[messages.length-1]?.role === 'user' && (
             <div className="flex justify-start">
               <div className="bg-white/5 border border-white/10 p-4 rounded-3xl rounded-tl-none">
                 <div className="flex space-x-1">
                   <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                   <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                 </div>
               </div>
             </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white/5 border-t border-white/5">
          <div className="relative group">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message or request..."
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="absolute right-2 top-2 bottom-2 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 rounded-xl text-white transition-all active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
          <p className="mt-3 text-[10px] text-gray-600 text-center uppercase tracking-widest font-bold">
            Powered by Gemini Pro • Intelligent Strategic Analysis
          </p>
        </div>
      </div>
    </div>
  );
};
