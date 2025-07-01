import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  isChecked: boolean = false;

  ngOnInit(): void {
    this.isChecked = this.task.isCompleted;
  }

  toggleChecked() {
    this.isChecked = !this.isChecked;
    this.task.isCompleted = this.isChecked;
  }
}
