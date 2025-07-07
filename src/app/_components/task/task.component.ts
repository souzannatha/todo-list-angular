import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<Task>();

  isChecked: boolean = false;

  ngOnInit(): void {
    this.isChecked = this.task.isCompleted;
  }

  toggleChecked() {
    this.isChecked = !this.isChecked;
    this.task.isCompleted = this.isChecked;
  }

  deleteTask() {
    this.remove.emit(this.task);
  }
}
