import { Component } from '@angular/core';
import { HeaderComponent } from './_components/header/header.component';
import { TaskComponent } from './_components/task/task.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CommonModule } from '@angular/common';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TaskComponent, BaseUiComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  task: Task[] = [];

  totalTask(): number {
    return this.task.length;
  }

  totalTasksCompleted(): number {
    return this.task.filter((task) => {
      return task.isCompleted;
    }).length;
  }

  addNewTask(description: string) {
    if (description.trim()) {
      const newTask: Task = {
        id: this.task.length + 1,
        description,
        isCompleted: false,
      };
      this.task.push(newTask);
    }
  }

  removeTask(task: Task) {
    this.task = this.task.filter((t) => t.id != task.id);
  }
}
