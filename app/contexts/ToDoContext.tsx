import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { ToDoItem } from "../@types/ToDo";
import { useFirstRender, useUpdateEffect } from "react-haiku";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

interface ToDoContextType {
  toDoItems: ToDoItem[];
  add: (item: ToDoItem) => void;
  remove: (item: ToDoItem) => void;
  update: (item: ToDoItem) => void;
}

export const ToDoContext = createContext<ToDoContextType>(
  {} as ToDoContextType
);

interface ToDoProviderProps {
  children: ReactNode;
}

const ToDo_STORAGE_KEY = "ToDoItems";

const getInitialToDoItems = async (): Promise<ToDoItem[]> => {
  const { getItem } = useAsyncStorage(ToDo_STORAGE_KEY);
  const storedToDo = await getItem();
  return storedToDo ? JSON.parse(storedToDo) : [];
  return [];
};

const saveToDoToLocalStorage = (ToDoItems: ToDoItem[]) => {
  if (typeof window !== "undefined") {
    const { setItem } = useAsyncStorage(ToDo_STORAGE_KEY);
    setItem(JSON.stringify(ToDoItems));
  }
};

export const ToDoProvider = ({ children }: ToDoProviderProps) => {
  const isFirst = useFirstRender();
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);

  useEffect(() => {
    if (isFirst) {
      getInitialToDoItems().then((result) => setToDoItems(result));
    }
  }, []);

  useUpdateEffect(() => {
    saveToDoToLocalStorage(toDoItems);
  }, [toDoItems]);

  const add = useCallback((item: ToDoItem) => {
    setToDoItems((prevItems) => {
      return [...prevItems, { ...item }];
    });
  }, []);

  const remove = useCallback((item: ToDoItem) => {
    setToDoItems((prevData) =>
      prevData.filter((prev) => prev.createdAt !== item.createdAt)
    );
  }, []);

  const update = useCallback((item: ToDoItem) => {
    setToDoItems((previus) =>
      previus.map((itemFiltered) => {
        if (itemFiltered.createdAt.toString() === item.createdAt.toString()) {
          return item;
        }
        return itemFiltered;
      })
    );
  }, []);

  return (
    <ToDoContext.Provider value={{ toDoItems, remove, add, update }}>
      {children}
    </ToDoContext.Provider>
  );
};
