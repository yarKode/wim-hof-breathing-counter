import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function ResetButton({ type }) {
  const {
    state: { round, timer1, timer2 },
    dispatch,
    setTime1,
    setTime2,
  } = useContext(GlobalContext);

  function reset() {
    console.log(setTime1);
    setTime1(0);
    setTime2(0);
    dispatch({
      type: "Reset",
      payload: {
        count: 0,
        timer1: 0,
        timer2: 0,
        enabledUI: {
          counter: true,
          counterNext: true,
          timer1Display: false,
          timer1NextBtn: false,
          timer2Display: false,
          timer2NextBtn: false,
        },
        prompt: "",
        round: type === "restart" ? 1 : round,
      },
    });
  }

  return (
    <div
      className={
        type === "restart"
          ? "square assistant-el assistant-btn reset-btn"
          : "double-square assistant-el assistant-btn reset-btn"
      }
      onClick={reset}
    >
      <p>
        {type === "restart" ? "X" : "Reset Round"}{" "}
        {type !== "restart" && <span>#{round}</span>}
      </p>
    </div>
  );
}
