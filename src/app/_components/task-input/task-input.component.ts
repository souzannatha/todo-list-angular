import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.scss',
})
export class TaskInputComponent {
  @Output() add = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  taskText = '';

  onAddClick() {
    this.add.emit(this.taskText);
    this.taskText = '';
  }

  onCancelClick() {
    this.cancel.emit();
  }
}
