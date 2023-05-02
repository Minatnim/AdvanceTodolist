import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoHeader } from "./TodoHeader";
import { AddTodo } from "./AddTodo";
import { TodoLists } from "./TodoLists";
// import mockTodos from '../../data/todo.json'

export function TodoContent({ todos, setTodos, setTodoFilter }) {
  //HOOK-AREA :state ,Effect,Context
  const shareObj = useContext(TodoContext);

  return (
    <main className="content">
      <TodoHeader />
      <AddTodo />
      <TodoLists />
    </main>
  );
}
