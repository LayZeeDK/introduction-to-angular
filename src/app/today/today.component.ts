// today.component.ts
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { WeekdayPipe } from '../weekday.pipe';

@Component({
  selector: 'app-today',
  imports: [DatePipe, WeekdayPipe],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css',
})
export class TodayComponent {
  now = new Date();

  refreshTime() {
    this.now = new Date();
  }
}
