import { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";

function Input({ todoListItems, setTodoListItems }) {
  const [todoInput, setTodoInput] = useState("");

  const hanldeClick = () => {
    const newTodolistItem = {
      id: "1",
      name: todoInput,
      isCompleted: false,
    };
    const newTodoListItems = [...todoListItems, newTodolistItem];
    setTodoListItems(newTodoListItems);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Todo.."
        value={todoInput}
        onChange={(event) => {
          setTodoInput(event.target.value);
        }}
      />
      <button className="add-button" onClick={hanldeClick}>
        <PlusIcon />
      </button>
    </div>
  );
}

export default Input;
