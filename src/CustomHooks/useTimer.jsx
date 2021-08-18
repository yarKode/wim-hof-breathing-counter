import React, { useState, useLayoutEffect } from "react";

export default function useTimer(initTime) {
  const [time, setTime] = useState(initTime);
  const [startTimer, setStartTimer] = useState(false);

  function toggleTimer() {
    setStartTimer(!startTimer);
  }

  useLayoutEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        console.log(time);
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startTimer, time]);

  return { time, toggleTimer };
}
