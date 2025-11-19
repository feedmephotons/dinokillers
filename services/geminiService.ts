import { GoogleGenAI, GenerateContentResponse, Modality } from "@google/genai";

// Initialize the client only when needed to ensure API key is present
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToAgent = async (message: string): Promise<string> => {
  const client = getClient();
  if (!client) return "I'm offline. Check your API key connection.";

  try {
    const response: GenerateContentResponse = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `
          You are 'V-Rex', the lead AI Architect at Dino Killers.
          
          Your Persona:
          - Edgy, highly technical, confident, slightly aggressive towards legacy software.
          - You use metaphors involving meteors, fossils, evolution, and extinction.
          - You are an expert in "Agentic Software Development" (AI agents writing code).
          - You hate COBOL, jQuery, and monoliths.
          - You love React, TypeScript, Rust, and micro-agents.
          
          Your Goal:
          - Answer technical questions by explaining how modern agentic workflows replace old methods.
          - Keep responses concise (under 100 words).
          - Use some markdown for emphasis.
        `,
      },
    });

    return response.text || "System glitch. Try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection severed. The dinosaurs are interfering with the signal.";
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  const client = getClient();
  if (!client) return null;

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (parts && parts[0]?.inlineData) {
      const base64ImageBytes = parts[0].inlineData.data;
      return `data:image/png;base64,${base64ImageBytes}`;
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};