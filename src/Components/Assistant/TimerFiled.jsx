import React from "react";

import { formatTimer } from "../../helpers";

export default function TimerFiled({ time, enabled = false }) {
  const formattedTime = formatTimer(time);

  return (
    <div
      className={
        enabled
          ? "double-square assistant-el"
          : "double-square assistant-el-disabled"
      }
    >
      <p>{formattedTime}</p>
    </div>
  );
}
