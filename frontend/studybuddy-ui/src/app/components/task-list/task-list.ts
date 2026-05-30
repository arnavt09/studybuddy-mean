import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Task, TaskService } from '../../services/task';
@Component({
  selector: 'app-task-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (error) => {
        console.log('Error loading tasks', error);
      },
    });
  }
  deleteTask(id: string | undefined): void {
    if (!id) {
      return;
    }
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: (error) => {
        console.log('Error deleting task', error);
      },
    });
  }
}
