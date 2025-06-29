import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo';

@Component({
  standalone: true,
  selector: 'app-add',
  templateUrl: './add.html',
  styleUrl: './add.scss',
  imports: [FormsModule] // ✅ this allows [(ngModel)]
})
export class AddComponent {
  taskTitle = '';

  constructor(private todoService: TodoService, private router: Router) {}

  addTask() {
    if (this.taskTitle.trim()) {
      this.todoService.addTodo({
        id: Date.now(),
        title: this.taskTitle.trim(),
        done: false
      });
      this.taskTitle = '';
      this.router.navigate(['/todos']); // redirect to list
    }
  }
}
