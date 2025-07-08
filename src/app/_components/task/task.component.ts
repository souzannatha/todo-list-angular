import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../interfaces/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<Task>();

  isChecked: boolean = false;
  isEditing: boolean = false;
  editedText: string = '';

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

  startEditing() {
    this.isEditing = true;
    this.editedText = this.task.description;
  }

  saveEdit() {
    this.task.description = this.editedText.trim() || this.task.description;
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
  }
}
