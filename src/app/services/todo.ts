import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private readonly STORAGE_KEY = 'angular-todos';

  constructor() {
    this.loadFromStorage();
  }

  // Load todos from localStorage on service initialization
  private loadFromStorage(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        this.todos = JSON.parse(stored);
      } else {
        // Add some demo data if no stored todos
        this.todos = [
          { id: 1, title: 'Sample Task 1', done: false },
          { id: 2, title: 'Sample Task 2', done: true }
        ];
        this.saveToStorage();
      }
    } catch (error) {
      console.error('Error loading todos from storage:', error);
      this.todos = [];
    }
  }

  // Save todos to localStorage
  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    } catch (error) {
      console.error('Error saving todos to storage:', error);
    }
  }

  // Get all todos
  getTodos(): Todo[] {
    return [...this.todos]; // Return a copy to prevent direct mutation
  }

  // Get todo by ID
  getTodoById(id: number): Todo | undefined {
    return this.todos.find(t => t.id === id);
  }

  // Add a new todo
  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveToStorage();
  }

  // Update todo title
  updateTodo(id: number, title: string): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo && title.trim()) {
      todo.title = title.trim();
      this.saveToStorage();
    }
  }

  // Toggle done status
  toggleDone(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.done = !todo.done;
      this.saveToStorage();
    }
  }

  // Delete todo
  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveToStorage();
  }

  // Clear all todos (bonus method)
  clearAllTodos(): void {
    this.todos = [];
    this.saveToStorage();
  }
}