import React from "react";

export default function TimerFiled({ time, enabled = false }) {
  function formatTimer() {
    if (time < 10) return `00:0${time}`;
    if (time < 60) return `00:${time}`;
    const module = time % 60;
    const minutes = (time - module) / 60;
    const seconds = module < 10 ? `0${module}` : `${module}`;
    return `0${minutes}:${seconds}`;
  }

  const formattedTime = formatTimer();
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
