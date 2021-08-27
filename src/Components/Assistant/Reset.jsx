import React from "react";
import ResetButton from "./ResetButton";

function Reset() {
  return (
    <div className="assistant-row">
      <ResetButton type={"reset"} />
      <ResetButton type={"restart"} />
    </div>
  );
}

export default Reset = React.memo(Reset);
