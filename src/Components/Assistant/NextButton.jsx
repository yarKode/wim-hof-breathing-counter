import React, { useContext, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../Contexts/GlobalContext";
import {
  MIN_1ST_PHASE_BREATHE,
  MIN_2ND_PHASE_BREATHE,
  MIN_COUNT,
} from "../../settings";

export default function NextButton({ type }) {
  const { timerStarted1, toggleTimer1, toggleTimer2, state, dispatch } =
    useContext(GlobalContext);

  const [enabled, setEnabled] = useState(false);

  function enableTimerUI(timerNumber) {
    dispatch({
      type: "ChangeUI",
      payload: {
        counter: false,
        counterNext: false,
        timer1Display: timerNumber === 1 ? true : false,
        timer1NextBtn: timerNumber === 1 ? true : false,
        timer2Display: timerNumber === 1 ? false : true,
        timer2NextBtn: timerNumber === 1 ? false : true,
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
    if (type === "timer1" && state.count > MIN_COUNT) {
      setEnabled(state.enabledUI.counterNext);
    }

    if (type === "timer2" && state.timer1 > MIN_1ST_PHASE_BREATHE)
      setEnabled(state.enabledUI.timer1NextBtn);
    if (type === "stopTimer" && state.timer2 > MIN_2ND_PHASE_BREATHE)
      setEnabled(state.enabledUI.timer2NextBtn);
  }, [state, dispatch, type]);

  function clickHandler() {
    dispatch({ type: "NextPhase", payload: 1 });
    if (type === "timer1") {
      toggleTimer1();
      enableTimerUI(1);
    } else if (type === "timer2") {
      if (timerStarted1) toggleTimer1();
      toggleTimer2();
      enableTimerUI(2);
    } else if (type === "stopTimer") {
      toggleTimer2();
      disableAllUI();
    }
  }

  return (
    <button
      className={enabled ? "assistant-btn" : "assistant-btn-disabled"}
      onClick={() => clickHandler()}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
}
