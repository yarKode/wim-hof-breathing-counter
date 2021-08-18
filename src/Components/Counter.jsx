import React, { useState, useContext } from "react";
import InfoField from "./InfoField";
import CountButton from "./CountButton";
import NextButton from "./NextButton";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function Counter({ nextBtnHandler, type }) {
  const { time1, toggleTimer1, state } = useContext(GlobalContext);

  return (
    <div className="container assistant-row">
      <InfoField displayCount={state.count} />
      <CountButton />
      <NextButton
        nextBtnHandler={nextBtnHandler}
        timeHook={time1}
        type={type}
      />
    </div>
  );
}
