import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([   
    {
        id: 1,
        text: 'Appointment',
        day: 'February 5th, 2023 at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Hoosier Vet',
        day: 'February 10th, 2023 at 3:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Haircut',
        day: 'February 21st, 2023 at 5:30pm',
        reminder: true
    },
    {
        id: 4,
        text: 'House Appointment',
        day: 'February 25th, 2022 at 5:00pm',
        reminder: true
    },])

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    }

    //toggle remind
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
    </div>
  );
}

export default App;
