import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Task, TaskService } from '../../services/task';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css',
})
export class EditTask implements OnInit {
  task: Task = {
    title: '',
    subject: '',
    description: '',
    priority: 'medium',
    status: 'Pending',
  };

  taskId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
  ) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id') || '';

    this.taskService.getTaskById(this.taskId).subscribe({
      next: (data) => {
        this.task = data;
      },
      error: (error) => {
        console.log('Error loading task', error);
      },
    });
  }

  updateTask(): void {
    this.taskService.updateTask(this.taskId, this.task).subscribe({
      next: () => {
        this.router.navigate(['/tasks']);
      },
      error: (error) => {
        console.log('Error updating task', error);
      },
    });
  }
}
