import { useState } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpanListResult } from "../types/SpanListResult";

interface RevisionContainerProps {
  correctedText: string;
  explanations: string;
  diffResult: SpanListResult | null;
}

export const RevisionContainer = (props: RevisionContainerProps) => {
  const { correctedText, explanations, diffResult } = props;

  const initialTextButton = "Copy correct text to clipboard";

  const [buttonText, setButtonText] = useState<string>(initialTextButton);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(correctedText);
    setButtonText("Text copied!");
    setTimeout(() => setButtonText(initialTextButton), 500);
  };

  return (
    <div className="flex flex-col gap-6 w-2/3">
      {diffResult && (
        <>
          <div>
            <span className="text-slate-700 font-semibold">Diff checker:</span>
            <div className="p-2.5 bg-slate-100 rounded-lg border border-slate-300 select-none flex flex-col gap-6">
              <div>{diffResult?.wrongSpanList.map((span: any) => span)}</div>

              <div>{diffResult?.correctSpanList.map((span: any) => span)}</div>
            </div>
          </div>

          <div>
            <span className="text-slate-700 font-semibold">Explanations:</span>
            <span className="text-slate-600 whitespace-pre-line">
              {explanations}
            </span>
          </div>

          <button
            onClick={copyToClipboard}
            className="text-slate-700 py-2 my-4 w-72 self-center hover:text-blue-700 transition duration-150 ease-in-out"
          >
            <FontAwesomeIcon icon={faCopy} size="xl" />
            <span className="ml-2 font-semibold min-w-72">{buttonText}</span>
          </button>
        </>
      )}
    </div>
  );
};