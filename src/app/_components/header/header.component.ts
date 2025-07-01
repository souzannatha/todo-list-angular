import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() totalTask:number = 0;
  @Input() totalTasksCompleted:number = 0;


}

