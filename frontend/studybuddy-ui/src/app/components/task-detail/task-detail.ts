import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Task, TaskService } from '../../services/task';
@Component({
  selector: 'app-task-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail implements OnInit {
  task?: Task;
  taskId = '';
  constructor(
    private route: ActivatedRoute,
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
}
