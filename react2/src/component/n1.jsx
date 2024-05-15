import { useEffect, useState } from "react";

export function Time() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  return <h1>timer: {counter}</h1>;
}