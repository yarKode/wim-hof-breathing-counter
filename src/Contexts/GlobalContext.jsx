import React, { useReducer } from "react";

import { INIT_STATE } from "./../settings";

import useTimer from "../CustomHooks/useTimer";

export const GlobalContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "Count":
      return { ...state, count: state.count + action.payload };
    case "StartTimer1":
      return { ...state, timer1: action.payload };
    case "StartTimer2":
      return { ...state, timer2: action.payload };
    case "ChangeUI":
      return { ...state, enabledUI: { ...state.enabledUI, ...action.payload } };
    case "NextRound":
      return { ...state, round: state.round + action.payload };
    case "Reset":
      return { ...state, ...action.payload };
    case "ChangeResetBtn":
      return { ...state, resetBtn: action.payload };
    case "HideBtns": {
      return { ...state, hideButtons: action.payload };
    }
    case "NextPhase":
      return { ...state, phase: state.phase + action.payload };
    default:
      throw Error("Impossible case");
  }
}

export function ContextProvider({ children }) {
  const {
    time: time1,
    toggleTimer: toggleTimer1,
    timerStarted: timerStarted1,
    setTime: setTime1,
  } = useTimer(0);
  const {
    time: time2,
    toggleTimer: toggleTimer2,
    timerStarted: timerStarted2,
    setTime: setTime2,
  } = useTimer(0);

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const value = {
    time1,
    time2,
    timerStarted1,
    timerStarted2,
    toggleTimer1,
    toggleTimer2,
    setTime1,
    setTime2,
    state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
