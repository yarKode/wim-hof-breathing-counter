import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function CountButton({ setCount }) {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div
      onClick={() => dispatch({ type: "Count", payload: 1 })}
      className="square assistant-el assistant-btn"
    >
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
}
