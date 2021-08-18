import React, { useReducer } from "react";

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
    default:
      throw Error("Impossible case");
  }
}

export function ContextProvider({ children }) {
  const {
    time: time1,
    toggleTimer: toggleTimer1,
    timerStarted: timerStarted1,
  } = useTimer(0);
  const {
    time: time2,
    toggleTimer: toggleTimer2,
    timerStarted: timerStarted2,
  } = useTimer(0);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    timer1: 1,
    timer2: 2,
  });

  const value = {
    time1,
    time2,
    timerStarted1,
    timerStarted2,
    toggleTimer1,
    toggleTimer2,
    state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
