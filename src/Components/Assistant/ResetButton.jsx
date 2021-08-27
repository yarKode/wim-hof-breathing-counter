import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { uiStatus } from "../../helpers";

import { INIT_STATE } from "../../settings";

function ResetButton({ type }) {
  const {
    state: { round, enabledUI, resetBtn },
    dispatch,
    setTime1,
    setTime2,
    timerStarted1,
    timerStarted2,
    toggleTimer1,
    toggleTimer2,
  } = useContext(GlobalContext);

  useEffect(() => {
    const uiDisabled = uiStatus(enabledUI);

    if (uiDisabled) dispatch({ type: "ChangeResetBtn", payload: "StartNew" });
  }, [dispatch, enabledUI]);

  function resetUI() {
    setTime1(0);
    setTime2(0);
    timerStarted1 && toggleTimer1();
    timerStarted2 && toggleTimer2();

    dispatch({
      type: "Reset",
      payload: {
        ...INIT_STATE,
        hideButtons: true,
        round:
          type === "restart" ? 1 : resetBtn === "Reset" ? round : round + 1,
      },
    });
  }

  if (type === "restart") {
    return (
      <div className="assistant-btn reset-btn" onClick={resetUI}>
        <FontAwesomeIcon icon={faPowerOff} />
      </div>
    );
  }

  if (type === "reset" && resetBtn === "StartNew") {
    return (
      <div
        style={{ backgroundColor: "#3c6204" }}
        className="double-square assistant-el assistant-btn reset-btn"
        onClick={resetUI}
      >
        <p>
          Start Round #<span>{round + 1}</span>
        </p>
      </div>
    );
  }

  return (
    <div
      className="double-square assistant-el assistant-btn reset-btn"
      onClick={resetUI}
    >
      <p>
        Reset Round #<span>{round}</span>
      </p>
    </div>
  );
}

export default ResetButton = React.memo(ResetButton);
