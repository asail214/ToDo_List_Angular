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
  currentFilter: 'all' | 'pending' | 'completed' = 'all';
  taskToDelete: Todo | null = null;

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  private loadTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  toggleDone(id: number): void {
    this.todoService.toggleDone(id);
    this.loadTodos();
  }

  deleteTodo(id: number | undefined): void {
    if (id !== undefined) {
      this.todoService.deleteTodo(id);
      this.loadTodos();
      this.taskToDelete = null;
    }
  }

  confirmDelete(todo: Todo): void {
    this.taskToDelete = todo;
  }

  markAllCompleted(): void {
    this.todos.forEach(todo => {
      if (!todo.done) {
        this.todoService.toggleDone(todo.id);
      }
    });
    this.loadTodos();
  }

  setFilter(filter: 'all' | 'pending' | 'completed'): void {
    this.currentFilter = filter;
  }

  getFilteredTodos(): Todo[] {
    switch (this.currentFilter) {
      case 'pending':
        return this.todos.filter(todo => !todo.done);
      case 'completed':
        return this.todos.filter(todo => todo.done);
      default:
        return this.todos;
    }
  }

  trackByTodoId(index: number, todo: Todo): number {
    return todo.id;
  }

  // Helper methods for statistics
  getCompletedCount(): number {
    return this.todos.filter(todo => todo.done).length;
  }

  getPendingCount(): number {
    return this.todos.filter(todo => !todo.done).length;
  }

  getProgressPercentage(): number {
    if (this.todos.length === 0) return 0;
    return Math.round((this.getCompletedCount() / this.todos.length) * 100);
  }
}