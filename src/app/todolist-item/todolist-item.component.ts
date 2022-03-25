import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html',
  styleUrls: ['./todolist-item.component.scss'],
})
export class TodolistItemComponent implements OnInit {
  @Input() todo: Todo = { content: '', completed: false };
  @Output() onToggleTodo = new EventEmitter<void>();
  @Output() onDeleteTodo = new EventEmitter<void>();

  todos: Todo[] = [];
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  toggleTodo(): void {
    // todo.completed = !this.todo.completed;
    this.onToggleTodo.emit();
  }

  deleteTodo(): void {
    // const index = this.todos.indexOf(todo);
    // this.todosService.removeTodo(index);
    this.onDeleteTodo.emit();
  }
}
