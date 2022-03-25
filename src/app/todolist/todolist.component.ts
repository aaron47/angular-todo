import { TodosService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todosService.removeTodo(index);
  }
}
