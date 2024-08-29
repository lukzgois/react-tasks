import { useRef, useState } from "react"

const AddTask = ({ onTaskAdded }) => {
  const inputRef = useRef(null)
  const [taskName, setTaskName] = useState('')

  const addTask = (e) => {
    e.preventDefault()

    onTaskAdded(taskName)
    setTaskName('')
    inputRef.current.focus()
  }

  return (
    <form onSubmit={addTask}>
      <label className="block">
        <span className="text-gray-700">What do you plan to do next?</span>

        <input
          ref={inputRef}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Buy new shoes..."
          value={taskName}
          onInput={e => setTaskName(e.target.value)}
        />
      </label>

      <button className="mt-2 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Add Task
     </button>
    </form>
  )
}

export default AddTask
