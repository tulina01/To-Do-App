import { useState } from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [todoListItems, setTodoListItems] = useState([]);

  return (
    <div>
      <h1>My Todos</h1>
      <Input
        todoListItems={todoListItems}
        setTodoListItems={setTodoListItems}
      />
      <div>
        {todoListItems.map((item) => {
          return <TodoItem key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default TodoApp;
