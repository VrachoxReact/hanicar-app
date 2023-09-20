import React, { useState, useEffect } from "react";

function HabitItem({ habit, removeHabit }) {
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      setTimePassed(Math.floor((currentTime - habit.startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [habit]);

  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));
    let divisorForMinutes = secs % (60 * 60);
    let minutes = Math.floor(divisorForMinutes / 60);
    let divisorForSeconds = divisorForMinutes % 60;
    let seconds = Math.ceil(divisorForSeconds);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <li className="habit-item">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-time">{secondsToTime(timePassed)}</span>
      <button
        className="habit-delete-button"
        onClick={() => removeHabit(habit.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default HabitItem;
