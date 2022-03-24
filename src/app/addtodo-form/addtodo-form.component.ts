import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-addtodo-form',
  templateUrl: './addtodo-form.component.html',
  styleUrls: ['./addtodo-form.component.scss'],
})
export class AddtodoFormComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  addTodoItem(val: HTMLInputElement) {
    this.todosService.addTodo(val);
    val.value = '';
  }
}
