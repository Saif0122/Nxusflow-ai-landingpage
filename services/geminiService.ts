
import { GoogleGenAI } from "@google/genai";

export const createChatSession = () => {
  // Always use the process.env.API_KEY directly as required by the guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are NexusAI, a helpful and sophisticated assistant integrated into the NexusFlow SaaS platform. You specialize in productivity, project management, and business strategy. Provide concise, expert-level advice. Use Markdown for formatting.",
      temperature: 0.7,
    },
  });
};
