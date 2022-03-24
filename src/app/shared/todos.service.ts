import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];
  constructor() {}

  getTodos() {
    return this.todos;
  }

  addTodo(input: HTMLInputElement) {
    this.todos.push(new Todo(input.value, false));
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
