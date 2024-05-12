import { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import "./Input.css";
import { v4 } from "uuid";

function Input({ todoListItems, setTodoListItems }) {
  const [todoInput, setTodoInput] = useState("");

  const hanldeClick = () => {
    if (todoInput.length > 0) {
      const newTodolistItem = {
        id: v4(),
        name: todoInput,
        isCompleted: false,
      };
      const newTodoListItems = [...todoListItems, newTodolistItem];
      setTodoListItems(newTodoListItems);
      setTodoInput("");
    }
  };

  return (
    <div className="todo-input-wrapper">
      <input
        type="text"
        placeholder="Enter Your Todo.."
        value={todoInput}
        onChange={(event) => {
          setTodoInput(event.target.value);
        }}
      />
      <button onClick={hanldeClick}>
        <PlusIcon className="plus-icon" />
      </button>
    </div>
  );
}

export default Input;
