import React from "react";
import TimerFiled from "./TimerFiled";
import NextButton from "./NextButton";

export default function Timer({ time, nextBtnHandler, type }) {
  return (
    <div className="container assistant-row">
      <TimerFiled time={time} />
      <NextButton nextBtnHandler={nextBtnHandler} type={type} />
    </div>
  );
}
