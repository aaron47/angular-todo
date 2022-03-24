import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.scss'],
})
export class TodolistItemComponent implements OnInit {
  @Input() todo: Todo = { content: '', completed: false };
  todos: Todo[] = [];
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  toggleTodo(todo: Todo): void {
    todo.completed = !this.todo.completed;
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todosService.removeTodo(index);
  }
}
