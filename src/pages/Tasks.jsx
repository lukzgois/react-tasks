import AddTask from "@components/tasks/AddTask"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (name) => {
    console.log(name)
  }

  return (
    <div>
      <h1 className="text-center text-4xl text-bold">React Tasks</h1>

      <AddTask
        onTaskAdded={addTask}
      />
    </div>
  )
}

export default App
