import { useState, useLayoutEffect } from "react";

export default function useTimer(initTime) {
  const [time, setTime] = useState(initTime);
  const [timerStarted, setStartTimer] = useState(false);

  function toggleTimer() {
    setStartTimer(!timerStarted);
  }

  useLayoutEffect(() => {
    if (timerStarted) {
      const timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timerStarted, time]);

  return { time, toggleTimer, timerStarted };
}
