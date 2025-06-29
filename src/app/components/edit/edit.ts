import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo';

@Component({
  standalone: true,
  selector: 'app-edit',
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
  imports: [FormsModule]
})
export class EditComponent {
  taskTitle = '';
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const todo = this.todoService.getTodoById(this.id);
    if (todo) this.taskTitle = todo.title;
  }

  save() {
    this.todoService.updateTodo(this.id, this.taskTitle);
    this.router.navigate(['/todos']);
  }
}
