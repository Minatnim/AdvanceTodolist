import styles from "./TodoLists.module.scss";
import { TodoItem } from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

export function TodoLists() {
  const sharedObj = useContext(TodoContext);
  const todosFilter = sharedObj.todosFilter;

  return (
    <ul className={styles.todoList}>
      {todosFilter?.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </ul>
  );
}
