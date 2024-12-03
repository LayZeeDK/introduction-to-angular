// message-list.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  imports: [],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  @Input()
  messages: readonly string[] = [];
}
