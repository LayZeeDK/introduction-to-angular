// message-page.component.ts
import { Component, inject } from '@angular/core';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-page',
  imports: [MessageListComponent],
  templateUrl: './message-page.component.html',
  styleUrl: './message-page.component.css',
})
export class MessagePageComponent {
  messageService = inject(MessageService);
}
