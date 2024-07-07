import { ReactElement, useState } from "react";
import { SpanListResult } from "../types/SpanListResult";
import { DiffResult } from "../types/DiffResult";

const Diff = require("diff");

export const useCheckDiff = () => {
  const [diffResult, setDiffResult] = useState<SpanListResult | null>(null);

  let correctSpanList: ReactElement[] = [];
  let wrongSpanList: ReactElement[] = [];

  const checkDiffText = (userText: string, iaText: string): void => {
    setDiffResult(null);

    const diff = Diff.diffChars(userText, iaText);

    diff.forEach((part: DiffResult) => arrangeSpan(part));

    setDiffResult({ wrongSpanList, correctSpanList });
  };

  const arrangeSpan = (part: DiffResult): void => {
    if (part.removed) {
      wrongSpanList.push(
        <span className="bg-red-200 px-px rounded-sm" key={wrongSpanList.length}>
          {part.value}
        </span>
      );

      return;
    }

    if (part.added) {
      correctSpanList.push(
        <span className="bg-green-200 px-px rounded-sm" key={correctSpanList.length}>
          {part.value}
        </span>
      );

      return;
    }

    correctSpanList.push(
      <span className="rounded-sm" key={correctSpanList.length}>
        {part.value}
      </span>
    );

    wrongSpanList.push(
      <span className="rounded-sm" key={wrongSpanList.length}>
        {part.value}
      </span>
    );
  };

  return { diffResult, checkDiffText };
}