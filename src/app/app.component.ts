import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './_components/header/header.component';
import { TaskComponent } from './_components/task/task.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { TaskInputComponent } from './_components/task-input/task-input.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TaskComponent,
    BaseUiComponent,
    TaskInputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
