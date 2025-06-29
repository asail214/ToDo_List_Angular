import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { TodoService } from '../../services/todo';

@Component({
  standalone: true,
  selector: 'app-add',
  templateUrl: './add.html',
  styleUrl: './add.scss',
  imports: [FormsModule, RouterLink, NgIf] // ✅ Added NgIf and RouterLink
})
export class AddComponent {
  taskTitle = '';
  showSuccessMessage = false;

  constructor(private todoService: TodoService, private router: Router) {}

  addTask() {
    if (this.taskTitle.trim()) {
      // Add the task
      this.todoService.addTodo({
        id: Date.now(),
        title: this.taskTitle.trim(),
        done: false
      });
      
      // Show success message
      this.showSuccessMessage = true;
      
      // Clear the form
      this.taskTitle = '';
      
      // Redirect after a short delay for better UX
      setTimeout(() => {
        this.router.navigate(['/todos']);
      }, 1000);
    }
  }
}