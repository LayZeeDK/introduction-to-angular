// today.component.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-today',
  imports: [],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayComponent {
  today = new Date();
}
