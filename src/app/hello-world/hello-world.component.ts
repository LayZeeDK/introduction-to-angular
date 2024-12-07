// hello-world.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontSizeDirective } from '../font-size.directive';

@Component({
  selector: 'app-hello-world',
  imports: [FontSizeDirective],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
})
export class HelloWorldComponent {
  @Input()
  name = 'World';
  @Output()
  messageSent = new EventEmitter<string>();
}
