import React, { useEffect, useContext } from "react";
import PromptDisplay from "./PromptDisplay";
import Counter from "./Counter";
import Timer from "./Timer";
import Reset from "./Reset";

import { GlobalContext } from "../../Contexts/GlobalContext";

export default function Assistant() {
  const { time1, time2, state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: "StartTimer1", payload: time1 });
  }, [dispatch, time1]);

  useEffect(() => {
    dispatch({ type: "StartTimer2", payload: time2 });
  }, [dispatch, time2]);

  return (
    <div className="assistant">
      {/* <YoutubeEmbed embedId="nzCaZQqAs9I" /> */}
      <PromptDisplay />
      <Counter type={"timer1"} />
      <Timer time={state.timer1} type={"timer2"} />
      <Timer time={state.timer2} type={"stopTimer"} />
      <Reset />
    </div>
  );
}
