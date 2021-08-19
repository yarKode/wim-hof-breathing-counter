import "./App.css";
import React, { useContext, useEffect } from "react";

import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import Reset from "./Components/Reset";
import { GlobalContext } from "./Contexts/GlobalContext";

function App() {
  const { time1, time2, state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: "StartTimer1", payload: time1 });
  }, [dispatch, time1]);

  useEffect(() => {
    dispatch({ type: "StartTimer2", payload: time2 });
  }, [dispatch, time2]);

  return (
    <div className="assistant">
      <div className="container assistant-row guide-display">
        <p>
          Breathe in, into the belly, into the chest and Breathe out. Like a
          wave. Tap on + Count each cycle.
        </p>
      </div>
      <Counter type={"timer1"} />
      <Timer time={state.timer1} type={"timer2"} />
      <Timer time={state.timer2} type={"stopTimer"} />
      <Reset />
    </div>
  );
}

export default App;
