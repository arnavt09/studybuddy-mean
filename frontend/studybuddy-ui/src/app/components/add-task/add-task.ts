import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Task, TaskService } from '../../services/task';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  task: Task = {
    title: '',
    subject: '',
    description: '',
    priority: 'medium',
    status: 'Pending',
  };

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  addTask(): void {
    this.taskService.addTask(this.task).subscribe({
      next: () => {
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.log('Error adding task', error);
      },
    });
  }
}
