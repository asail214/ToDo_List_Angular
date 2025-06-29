import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TodoService } from '../../services/todo';
import { Todo } from '../../models/todo.model';
import { RouterLink } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './todo-list.html'
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  toggleDone(id: number) {
    this.todoService.toggleDone(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
