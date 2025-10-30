import React, { useRef, useState } from 'react';

export default function WorkTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef();

  function start() {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() =>
        setSeconds((sec) => sec + 1), 1000
      );
    }
  }

  function pause() {
    clearInterval(intervalRef.current);
    setRunning(false);
  }

  function reset() {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setRunning(false);
  }

  function format(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s
      .toString()
      .padStart(2, '0')}`;
  }

  return (
    <div className="work-timer-panel">
      <div className="timer-label">TIMER KERJA</div>
      <div className="work-timer-time">{format(seconds)}</div>
      <div className="timer-buttons">
        {running ? (
          <button className="timer-btn" onClick={pause}>Pause</button>
        ) : (
          <button className="timer-btn" onClick={start}>Start</button>
        )}
        <button className="timer-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
