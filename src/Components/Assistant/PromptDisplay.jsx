import React, { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { PROMPTS } from "../../settings";

export default function PromptDisplay() {
  const {
    state: { phase },
  } = useContext(GlobalContext);

  return (
    <div className="assistant-row guide-display">
      <p>{PROMPTS[phase]}</p>
    </div>
  );
}
