import React, { useState } from 'react'
import { useTodo } from '../Context'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
    <form onSubmit={add} className="flex">
    <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-gray-300 rounded-l-lg px-3 outline-none duration-150 bg-white/40 py-2"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
    />
    <button type="submit" className="rounded-r-lg px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors duration-200">
        Add
    </button>
</form>

  );
}

export default TodoForm;