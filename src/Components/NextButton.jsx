import React, { useContext, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../Contexts/GlobalContext";
import {
  MIN_1ST_PHASE_BREATHE,
  MIN_2ND_PHASE_BREATHE,
  MIN_COUNT,
} from "../settings";

export default function NextButton({ type }) {
  const { timerStarted1, toggleTimer1, toggleTimer2, state, dispatch } =
    useContext(GlobalContext);

  const [enabled, setEnabled] = useState(false);

  function enable1TimerUI() {
    dispatch({
      type: "ChangeUI",
      payload: {
        counter: false,
        counterNext: false,
        timer1Display: true,
        timer1NextBtn: true,
      },
    });
  }

  function enable2TimerUI() {
    dispatch({
      type: "ChangeUI",
      payload: {
        timer1Display: false,
        timer1NextBtn: false,
        timer2Display: true,
        timer2NextBtn: true,
      },
    });
  }

  function disableAllUI() {
    dispatch({
      type: "ChangeUI",
      payload: {
        timer2Display: false,
        timer2NextBtn: false,
      },
    });
  }

  useLayoutEffect(() => {
    if (state.hideButtons) {
      setEnabled(false);
      return;
    }
    if (type === "timer1" && state.count > MIN_COUNT)
      setEnabled(state.enabledUI.counterNext);
    if (type === "timer2" && state.timer1 > MIN_1ST_PHASE_BREATHE)
      setEnabled(state.enabledUI.timer1NextBtn);
    if (type === "stopTimer" && state.timer2 > MIN_2ND_PHASE_BREATHE)
      setEnabled(state.enabledUI.timer2NextBtn);
  }, [state, dispatch, type]);

  function clickHandler() {
    if (type === "timer1") {
      toggleTimer1();
      enable1TimerUI();
    } else if (type === "timer2") {
      if (timerStarted1) {
        toggleTimer1();
        toggleTimer2();
      } else {
        toggleTimer2();
      }
      enable2TimerUI();
    } else if (type === "stopTimer") {
      toggleTimer2();
      disableAllUI();
    }
  }

  return (
    <div
      className={
        enabled
          ? "square assistant-el assistant-btn"
          : "square assistant-el assistant-btn-disabled"
      }
      onClick={() => clickHandler()}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}
