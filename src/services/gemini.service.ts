import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPEN_AI_API_KEY!);

export const correctText = async (text: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Rewrite the text so that it is grammatically correct, and explain the changes, in a not too rigorous way
                  Write your answer without using quotation marks at the corrected text and as follows: corrected text | explanations,
                  and each explanation must be in a different line separeted by -
                  
                  "${text}"`

  const result = await model.generateContent(prompt);
  return result.response.text().split(" | ");
}