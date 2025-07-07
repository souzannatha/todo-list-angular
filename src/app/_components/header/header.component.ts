import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TaskInputComponent } from '../task-input/task-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, TaskInputComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() totalTask: number = 0;
  @Input() totalTasksCompleted: number = 0;

  @Output() addTask = new EventEmitter<string>();

  showTaskInput: boolean = true;

  onShowInput() {
    this.showTaskInput = !this.showTaskInput;
    console.log(this.showTaskInput);
  }

  onAddTask(description: string) {
    this.addTask.emit(description);
    this.showTaskInput = false;
  }
}
