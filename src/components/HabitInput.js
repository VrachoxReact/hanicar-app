import React, { useState } from "react";

function HabitInput({ addHabit }) {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim()) {
      addHabit(habit.trim());
      setHabit("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="habit-input-form">
      <input
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter habit to stop..."
        className="habit-input-field"
      />
      <button type="submit" className="habit-submit-button">
        Add
      </button>
    </form>
  );
}

export default HabitInput;
