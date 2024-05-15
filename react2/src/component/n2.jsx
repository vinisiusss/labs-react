import { useEffect, useState } from "react";

export function Timer() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <>
      <h1>timer: {counter}</h1>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
    </>
  );
}