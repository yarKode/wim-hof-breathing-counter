import React from "react";

export default function TimerFiled({ time }) {
  function formatTimer() {
    if (time < 10) return `00:0${time}`;
    if (time < 60) return `00:${time}`;
    const module = time % 60;
    const minutes = (time - module) / 60;
    const seconds = module < 9 ? `0${module}` : `${module}`;
    return `0${minutes}:${seconds}`;
  }

  const formattedTime = formatTimer();
  return (
    <div className="double-square assistant-el">
      <p>{formattedTime}</p>
    </div>
  );
}
