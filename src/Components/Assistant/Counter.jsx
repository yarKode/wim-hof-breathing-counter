import React, { useContext } from "react";
import InfoField from "./InfoField";
import CountButton from "./CountButton";
import NextButton from "./NextButton";
import { GlobalContext } from "../../Contexts/GlobalContext";

export default function Counter({ type }) {
  const { state } = useContext(GlobalContext);

  return (
    <div className="assistant-row">
      <InfoField displayCount={state.count} />
      <CountButton />
      <NextButton type={type} />
    </div>
  );
}
