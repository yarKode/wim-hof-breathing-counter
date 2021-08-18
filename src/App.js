import "./App.css";
import React, { useReducer, useContext } from "react";

import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import { GlobalContext } from "./Contexts/GlobalContext";

function App() {
  const { time1, time2, toggleTimer1, toggleTimer2, state, dispatch } =
    useContext(GlobalContext);

  console.log(state);
  return (
    <div className="assistant">
      <Counter nextBtnHandler={toggleTimer1} type={"timer1"} />
      <Timer
        time={state.timer1}
        nextBtnHandler={toggleTimer2}
        type={"timer2"}
      />
      <Timer time={state.timer2} type={"stopTimer"} />
    </div>
  );
}

export default App;
