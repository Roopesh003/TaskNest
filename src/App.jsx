import React from 'react'
import Taskform from './Component/Taskform'
import TaskList from './Component/TaskList'
import Progresstracker from './Component/Progresstracker'

export default function App() {
  return (
    <div>
      <h1>Task Nest</h1>
      <p>Our friendly TaskManager</p>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear all task</button>
    </div>
  )
}
