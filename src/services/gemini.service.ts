import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.REACT_APP_GEMINI_API_KEY!});

export const correctText = async (text: string) => {
  const prompt = `Rewrite the text so that it is grammatically correct, and explain the changes, in a not too rigorous way
                  Write your answer without using quotation marks at the corrected text and as follows: corrected text /// explanations,
                  and each explanation must be in a different line separeted by -
                  
                  "${text}"`;

  const result = await ai.models.generateContent({
    model: process.env.REACT_APP_GEMINI_MODEL!,
    contents: prompt,
  });

  return result.text?.split('///') ?? "";
};

export const getSuggestion = async () => {
  const prompt = `Suggest one topic so that anyone can write a text about it.
                  Disregard previous suggestions.
                  Write your answer just with the topic`;

  const result = await ai.models.generateContent({
    model: process.env.REACT_APP_GEMINI_MODEL!,
    contents: prompt,
  });

  return result.text ?? "";
};
