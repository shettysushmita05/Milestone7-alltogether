import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../../features/todoSlice";
import "./Task6.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="secondary" onClick={handleAdd}>Add</button>
      <ul className="a">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button className="danger"onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
