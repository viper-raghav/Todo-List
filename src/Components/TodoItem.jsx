import React, { useState } from 'react';
import { useTodo } from '../Context';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex border border-gray-300 rounded-lg px-4 py-2 gap-x-3 shadow-md transition duration-300 transform ${
                todo.completed ? "bg-[#e0f7e9]" : "bg-[#e7f1ff]"
            } hover:shadow-lg hover:scale-105`}
        >
            <input
                type="checkbox"
                className="cursor-pointer accent-green-500"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? 'border-gray-300 px-2' : 'border-transparent'
                } ${todo.Completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-white hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
                onClick={() => {
                    if (todo.Completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? '📁' : '✏️'}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-white hover:bg-red-200 transition-colors duration-200"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
