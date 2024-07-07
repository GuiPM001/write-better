import { useRef, useState } from "react";
import { correctText } from "./services/gemini.service";
import { RevisionContainer } from "./components/RevisionContainer";
import { useCheckDiff } from "./hooks/useCheckDiff.hook";
import { IaResponse } from "./types/IaResponse";

function App() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [iaResponse, setIaResponse] = useState<IaResponse>({
    correctedText: "",
    explanations: "",
  });

  const { diffResult, checkDiffText } = useCheckDiff();

  const checkText = async (): Promise<void> => {
    if (!textAreaRef.current?.value) 
      return;

    setLoading(true);
    const response = await correctText(textAreaRef.current.value);

    setIaResponse({ correctedText: response[0], explanations: response[1] });

    checkDiffText(textAreaRef.current.value, response[0]);
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen py-24 bg-slate-50 flex flex-col items-center justify-start gap-16">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-blue-500 text-5xl font-black">Write Better!</h1>

        <p className="text-slate-800 text-xl w-2/3 text-center">
          Write a text in the field below and receive a detailed correction of
          errors through an AI correction.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-2/3">
        <textarea
          id="message"
          className="p-2.5 text-slate-700 bg-slate-50 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-800"
          rows={4}
          autoFocus
          placeholder="Write your text here..."
          ref={textAreaRef}
        ></textarea>

        <button
          className="bg-blue-500 rounded-md px-8 py-2 text-slate-50 font-bold self-end hover:bg-blue-700 transition duration-150 ease-in-out disabled:bg-slate-400"
          onClick={checkText}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check"}
        </button>
      </div>

      <RevisionContainer
        correctedText={iaResponse.correctedText}
        explanations={iaResponse.explanations}
        diffResult={diffResult}
      />
    </div>
  );
}

export default App;
