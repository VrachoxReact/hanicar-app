import React from "react";
import HabitItem from "./HabitItem";

function HabitList({ habits, removeHabit }) {
  return (
    <ul className="habit-list">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} removeHabit={removeHabit} />
      ))}
    </ul>
  );
}

export default HabitList;
