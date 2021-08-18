import "./App.css";
import React, { useContext, useEffect } from "react";

import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import { GlobalContext } from "./Contexts/GlobalContext";

function App() {
  const { time1, time2, toggleTimer1, state, dispatch } =
    useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: "StartTimer1", payload: time1 });
  }, [dispatch, time1]);

  useEffect(() => {
    dispatch({ type: "StartTimer2", payload: time2 });
  }, [dispatch, time2]);

  return (
    <div className="assistant">
      <Counter nextBtnHandler={toggleTimer1} type={"timer1"} />
      <Timer time={state.timer1} type={"timer2"} />
      <Timer time={state.timer2} type={"stopTimer"} />
    </div>
  );
}

export default App;
