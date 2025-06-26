import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  isChecked: boolean = false;

  toggleChecked() {
    this.isChecked = !this.isChecked;
    console.log('isChecked: ', this.isChecked);
  }
}
