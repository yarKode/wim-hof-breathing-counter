import React, { useContext } from "react";
import TimerFiled from "./TimerFiled";
import NextButton from "./NextButton";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function Timer({ time, type }) {
  const { state } = useContext(GlobalContext);
  return (
    <div className="container assistant-row">
      <TimerFiled
        time={time}
        enabled={
          type === "timer2"
            ? state.enabledUI.timer1Display
            : state.enabledUI.timer2Display
        }
      />
      <NextButton type={type} />
    </div>
  );
}
