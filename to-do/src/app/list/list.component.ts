import { Component } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-list',
  template: 
    `<ul class="list-group">
      <li class="list-group-item" *ngFor="let task of tasks" [ngClass]="{ 'completed': task.completed }">
        <fa-icon [icon]="faCheck" (click)="toggleCompleted(task.id)" class="float-start me-2"></fa-icon>
        {{ task.name }}
        <button class="btn btn-danger btn-sm float-end" (click)="deleteTask(task.id)">
          <fa-icon [icon]="faTrashAlt"></fa-icon>
        </button>
      </li>
    </ul>`
  ,
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  tasks: Task[] = [];
  faTrashAlt = faTrashAlt;
  faCheck = faCheck;

  addTask(name: string) {
    const id = this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    this.tasks.push({ id, name, completed: false });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleCompleted(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}