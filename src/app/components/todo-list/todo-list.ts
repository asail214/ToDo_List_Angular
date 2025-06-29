import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TodoService } from '../../services/todo';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  toggleDone(id: number) {
    this.todoService.toggleDone(id);
    // Refresh the list after toggling
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    // Refresh the list after deletion
    this.todos = this.todoService.getTodos();
  }

  // Helper methods for statistics
  getCompletedCount(): number {
    return this.todos.filter(todo => todo.done).length;
  }

  getPendingCount(): number {
    return this.todos.filter(todo => !todo.done).length;
  }
}