import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div class="input-group mb-3">
      <input type="text" class="form-control" [(ngModel)]="newTask" placeholder="Add a new task...">
      <button class="btn btn-primary" (click)="addTask()">Add</button>
    </div>`
  ,
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  newTask: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskAdded.emit(this.newTask.trim());
      this.newTask = '';
    }
  }
}