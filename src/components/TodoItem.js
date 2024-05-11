import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import "./TodoItem.css";

function TodoItem({ todoItem, index }) {
  return (
    <div className="todo-item-wrapper">
      <div className="todo-item-text">
        <div>{index}.</div>
        <div>{todoItem.name}</div>
      </div>
      <div className="todo-item-buttons">
        <button className="pencil-button">
          <PencilIcon />
        </button>
        <button className="trash-button">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
