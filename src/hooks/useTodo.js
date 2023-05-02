import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
// export const useTodo = () => {
//   const shareObj = useContext(TodoContext);
//   return shareObj;
// };

export const useTodo = () => useContext(TodoContext);
