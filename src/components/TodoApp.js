import { useState } from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";
import "./TodoApp.css";

function TodoApp() {
  const [todoListItems, setTodoListItems] = useState([]);

  return (
    <div className="todo-list-container">
      <h1>My Todos</h1>
      <Input
        todoListItems={todoListItems}
        setTodoListItems={setTodoListItems}
      />
      <div className="todo-items-wrapper">
        {todoListItems.map((item, index) => {
          return (
            <TodoItem
              todoListItems={todoListItems}
              setTodoListItems={setTodoListItems}
              index={index + 1}
              key={item.id}
              todoItem={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoApp;
