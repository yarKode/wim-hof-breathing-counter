import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function NextButton({ type }) {
  const { timerStarted1, toggleTimer1, toggleTimer2 } =
    useContext(GlobalContext);

  function clickHandler() {
    if (type === "timer1") {
      toggleTimer1();
    } else if (type === "timer2") {
      if (timerStarted1) {
        toggleTimer1();
        toggleTimer2();
      } else {
        toggleTimer2();
      }
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
