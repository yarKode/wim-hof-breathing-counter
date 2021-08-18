import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function CountButton() {
  const { dispatch, state } = useContext(GlobalContext);
  return (
    <div
      onClick={() => dispatch({ type: "Count", payload: 1 })}
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
