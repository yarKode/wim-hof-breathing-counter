import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { uiStatus } from "../../helpers";

export default function ResetButton({ type }) {
  const {
    state: { round, enabledUI, resetBtn },
    dispatch,
    setTime1,
    setTime2,
    timerStarted1,
    timerStarted2,
    toggleTimer1,
    toggleTimer2,
  } = useContext(GlobalContext);

  useEffect(() => {
    const uiDisabled = uiStatus(enabledUI);

    if (uiDisabled) dispatch({ type: "ChangeResetBtn", payload: "StartNew" });
  }, [dispatch, enabledUI]);

  function reset() {
    setTime1(0);
    setTime2(0);
    timerStarted1 && toggleTimer1();
    timerStarted2 && toggleTimer2();

    dispatch({ type: "ChangeResetBtn", payload: "Reset" });
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
        hideButtons: true,
        prompt: "",
        phase: 0,
        round:
          type === "restart" ? 1 : resetBtn === "Reset" ? round : round + 1,
      },
    });
  }

  if (type === "restart") {
    return (
      <div
        className="square assistant-el assistant-btn reset-btn"
        onClick={reset}
      >
        <FontAwesomeIcon icon={faPowerOff} />
      </div>
    );
  }

  if (type === "reset" && resetBtn === "StartNew") {
    return (
      <div
        style={{ backgroundColor: "green", border: "2px solid green" }}
        className="double-square assistant-el assistant-btn reset-btn"
        onClick={reset}
      >
        <p>
          Start Round #<span>{round + 1}</span>
        </p>
      </div>
    );
  }

  return (
    <div
      className="double-square assistant-el assistant-btn reset-btn"
      onClick={reset}
    >
      <p>
        Reset Round #<span>{round}</span>
      </p>
    </div>
  );
}
