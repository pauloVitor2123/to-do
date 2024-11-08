import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

export const useToDoHook = () => {
  return useContext(ToDoContext);
};
