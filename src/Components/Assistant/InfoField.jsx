import React, { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";

function InfoField({ displayCount }) {
  const { state } = useContext(GlobalContext);
  return (
    <div
      className={
        state.enabledUI.counter ? "assistant-el" : "assistant-el-disabled"
      }
    >
      <p>{displayCount < 10 ? `0${displayCount}` : `${displayCount}`}</p>
    </div>
  );
}

export default InfoField;
