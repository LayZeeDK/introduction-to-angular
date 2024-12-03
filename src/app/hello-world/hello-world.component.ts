// hello-world.component.ts
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent {
  @Input()
  name = 'World';
  @Output()
  messageSent = new EventEmitter<string>();
}
