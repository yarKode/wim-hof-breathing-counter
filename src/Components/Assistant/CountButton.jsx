import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../../Contexts/GlobalContext";

export default function CountButton() {
  const { dispatch, state } = useContext(GlobalContext);

  function countClickHandler() {
    dispatch({ type: "Count", payload: 1 });
    if (state.hideButtons) dispatch({ type: "HideBtns", payload: false });
  }
  return (
    <div
      onClick={countClickHandler}
      className={
        state.enabledUI.counter
          ? "square assistant-el assistant-btn"
          : "square assistant-el assistant-btn-disabled"
      }
    >
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
}
