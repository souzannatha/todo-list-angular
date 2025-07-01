import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './_components/header/header.component';
import { TaskComponent } from './_components/task/task.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { TaskInputComponent } from './_components/task-input/task-input.component';
import { CommonModule } from '@angular/common';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TaskComponent,
    BaseUiComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  Tasks:Task[]= [
    { id: 1, description: 'Comprar pão', isCompleted: false },
    { id: 2, description: 'Estudar Angular', isCompleted: true },
    { id: 3, description: 'Fazer exercícios', isCompleted: false },
  ]

  totalTask():number{
    return this.Tasks.length;
  }

  totalTasksCompleted():number{
    return this.Tasks.filter((task) =>{
      return task.isCompleted
    }).length
  }
}
