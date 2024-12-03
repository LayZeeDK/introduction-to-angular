// today.component.ts
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-today',
  imports: [DatePipe],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css',
})
export class TodayComponent {
  now = new Date();

  refreshTime() {
    this.now = new Date();
  }
}
