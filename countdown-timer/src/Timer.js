import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function startTimer() {
  if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
    setIsRunning(true);
  } else {
    window.alert("Add Time.");
  }
}

return (
  <div>
    <button onClick={startTimer}>
      <BsFillPlayFill />
    </button>
  </div>
);