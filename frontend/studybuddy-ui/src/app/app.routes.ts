import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { AddTask } from './components/add-task/add-task';
import { EditTask } from './components/edit-task/edit-task';
import { TaskDetail } from './components/task-detail/task-detail';
export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskList },
  { path: 'add-task', component: AddTask },
  { path: 'tasks/:id', component: TaskDetail },
  { path: 'edit-task/:id', component: EditTask },
];
