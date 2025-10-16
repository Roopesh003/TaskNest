import React, { useEffect, useState } from 'react'
import Taskform from './Component/Taskform'
import TaskList from './Component/TaskList'
import Progresstracker from './Component/Progresstracker'

export default function App() {

const [tasks, setTasks] = useState([]);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
})

const addTask = (task) => {
  setTasks([...tasks, task]);
}

  return (
    <div>
      <h1>Task Nest</h1>
      <p>Our friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
      <TaskList />
      <Progresstracker />
      <button>Clear all task</button>
    </div>
  )
}
