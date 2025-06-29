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
  imports: [FormsModule, RouterLink, NgIf]
})
export class AddComponent {
  taskTitle = '';
  priority = 'medium';
  showSuccessMessage = false;
  isSubmitting = false;

  constructor(private todoService: TodoService, private router: Router) {}

  addTask(): void {
    if (this.taskTitle.trim() && !this.isSubmitting) {
      this.isSubmitting = true;
      
      // Simulate processing time for better UX
      setTimeout(() => {
        // Add the task
        this.todoService.addTodo({
          id: Date.now(),
          title: this.taskTitle.trim(),
          done: false
        });
        
        // Show success message
        this.showSuccessMessage = true;
        this.isSubmitting = false;
        
        // Clear the form
        this.taskTitle = '';
        this.priority = 'medium';
        
        // Redirect after a short delay for better UX
        setTimeout(() => {
          this.router.navigate(['/todos']);
        }, 1500);
      }, 800);
    }
  }
}