import React from "react";

export default function Timer({
  milliseconds,
  seconds,
  minutes,
  hours,
  changeSeconds,
  changeMinutes,
  changeHours,
}) {
  return (
    <div className="timer-container">
      <div >
        <h6 className="label">hh</h6>
        <input value={hours} onChange={changeHours} />
      </div>{" "}
      <div >
        <h6 className="label">mm</h6>
        <input value={minutes} onChange={changeMinutes} />
      </div>{" "}
      <div >
        <h6 className="label">ss</h6>
        <input value={seconds} onChange={changeSeconds} />
      </div>{" "}
      <div >
        <h6 className="label">ms</h6>
        <input disabled value={milliseconds} />
      </div>
    </div>
  );
}
