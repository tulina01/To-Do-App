import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import "./TodoItem.css";
import { useState } from "react";

function TodoItem({ todoItem, index, todoListItems, setTodoListItems }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodoName, setEditTodoName] = useState("");

  const handleDelete = () => {
    const newTodoListItems = todoListItems.filter((item) => {
      if (todoItem.id === item.id) {
        return false;
      } else return true;
    });

    setTodoListItems(newTodoListItems);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
    setEditTodoName(todoItem.name);
  };

  const hanldeSubmit = (e) => {
    if (e.keyCode === 13) {
      const newTodoListItems = todoListItems.map((item) => {
        if (todoItem.id === item.id) {
          return {
            ...item,
            name: editTodoName,
          };
        } else {
          return item;
        }
      });
      setTodoListItems(newTodoListItems);
      setIsEdit(false);
    }
  };

  const handleComplete = () => {
    const newTodoListItems = todoListItems.map((item) => {
      if (todoItem.id === item.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      } else {
        return item;
      }
    });
    setTodoListItems(newTodoListItems);
  };

  return (
    <div className="todo-item-wrapper">
      <div className="todo-item-text">
        <div>{index}.</div>
        {isEdit ? (
          <input
            type="text"
            value={editTodoName}
            onChange={(e) => {
              setEditTodoName(e.target.value);
            }}
            onKeyDown={hanldeSubmit}
          />
        ) : (
          <div
            onClick={handleComplete}
            style={{
              textDecorationLine: todoItem.isCompleted
                ? "line-through"
                : "none",
            }}
          >
            {todoItem.name}
          </div>
        )}
      </div>
      <div className="todo-item-buttons">
        <button className="pencil-button" onClick={handleEdit}>
          <PencilIcon />
        </button>
        <button className="trash-button" onClick={handleDelete}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
