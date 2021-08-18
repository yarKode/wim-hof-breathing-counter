import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function NextButton({ nextBtnHandler, type }) {
  const { time1, time2, toggleTimer1, toggleTimer2, dispatch } =
    useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: "StartTimer1", payload: time1 });
  }, [time1]);

  useEffect(() => {
    dispatch({ type: "StartTimer2", payload: time2 });
  }, [time2]);

  function clickHandler() {
    console.log(type);
    if (type === "timer1") {
      nextBtnHandler();
    } else if (type === "timer2") {
      nextBtnHandler();
      toggleTimer1();
    } else if (type === "stopTimer") {
      toggleTimer2();
    }
  }

  return (
    <div
      className="square assistant-el assistant-btn"
      onClick={() => clickHandler()}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}
