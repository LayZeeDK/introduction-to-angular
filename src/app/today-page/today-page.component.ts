// today-page.component.ts
import { Component } from '@angular/core';
import { TodayComponent } from '../today/today.component';

@Component({
  selector: 'app-today-page',
  imports: [TodayComponent],
  templateUrl: './today-page.component.html',
  styleUrl: './today-page.component.css',
})
export class TodayPageComponent {}
