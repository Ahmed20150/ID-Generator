import { useState } from "react";
const Clock = () => {
  const [time, setTime] = useState(new Date());

  function updateTime() {
    const newTime = new Date();
    setTime(newTime);
  }

  function formatTime(time: Date): string {
    return time.toLocaleTimeString();
  }

  setInterval(updateTime, 1000);
  return <h4>The current time is {formatTime(time)}</h4>;
};

export default Clock;
