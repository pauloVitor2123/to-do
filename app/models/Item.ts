import { ToDoItem } from "../@types/ToDo";

export class ItemModel {
  text: string;
  createdAt: Date;
  done: boolean;

  constructor({ text, createdAt, done }: ToDoItem) {
    this.text = text;
    this.createdAt = createdAt;
    this.done = done;
  }

  static create(props: ToDoItem) {
    const level = new ItemModel(props);
    return level;
  }
}
