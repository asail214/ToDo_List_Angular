import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggleDone(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
  getTodoById(id: number) {
  return this.todos.find(t => t.id === id);
}
saveToStorage() {
  localStorage.setItem('todos', JSON.stringify(this.todos));
}

updateTodo(id: number, title: string) {
  const todo = this.todos.find(t => t.id === id);
  if (todo) todo.title = title;
}
}

