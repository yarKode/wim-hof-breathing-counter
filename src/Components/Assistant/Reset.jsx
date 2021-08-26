import React from "react";
import ResetButton from "./ResetButton";

export default function Reset() {
  return (
    <div className="assistant-row">
      <ResetButton type={"reset"} />
      <ResetButton type={"restart"} />
    </div>
  );
}
