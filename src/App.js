import React, { useState } from "react";
import HabitInput from "./components/HabitInput";
import HabitList from "./components/HabitList";
function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    const newHabit = {
      id: Date.now(),
      name: habit,
      startTime: Date.now(),
    };
    setHabits([newHabit, ...habits]);
  };

  const removeHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="App">
      <HabitInput addHabit={addHabit} />
      <HabitList habits={habits} removeHabit={removeHabit} />
    </div>
  );
}

export default App;
