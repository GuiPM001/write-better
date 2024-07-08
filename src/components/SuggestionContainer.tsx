import React, { useState } from "react";
import { Container } from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getSuggestion } from "services/gemini.service";

export const SuggestionContainer = () => {
  const [suggestion, setSuggestion] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSuggestion = async () => {
    setLoading(true);
    const response = await getSuggestion();
    setSuggestion(response);
    setLoading(false);
  };

  return (
    <Container>
      <button
        className="mt-10 border rounded-md border-blue-500 text-blue-500 font-semibold px-4 py-2 hover:bg-blue-500 hover:text-slate-50 transition duration-150 ease-in-out disabled:text-slate-400 disabled:border-slate-400 disabled:hover:bg-slate-50"
        onClick={fetchSuggestion}
        disabled={loading}
      >
        <span className="mr-2">Suggestion theme</span>
        {loading ? (
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        ) : (
          <FontAwesomeIcon icon={faWandMagicSparkles} />
        )}
      </button>

      {suggestion && (
        <span className="self-start text-slate-900 -mb-6 font-semibold">
          Write about:
          <span className="font-normal"> {suggestion}</span>
        </span>
      )}
    </Container>
  );
};
