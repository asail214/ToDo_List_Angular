import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';
import { TodoService } from '../../services/todo';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [RouterLink, RouterLinkActive, NgIf]
})
export class NavbarComponent implements OnInit {
  showQuickStats = false;
  totalTasks = 0;
  completedTasks = 0;

  constructor(
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    // Listen to route changes to show/hide stats
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showQuickStats = event.url === '/todos';
        if (this.showQuickStats) {
          this.updateStats();
        }
      });

    // Initial check
    this.showQuickStats = this.router.url === '/todos';
    if (this.showQuickStats) {
      this.updateStats();
    }
  }

  private updateStats(): void {
    const todos = this.todoService.getTodos();
    this.totalTasks = todos.length;
    this.completedTasks = todos.filter(todo => todo.done).length;
  }
}