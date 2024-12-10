// message-page.component.ts
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-page',
  imports: [MessageListComponent, AsyncPipe],
  templateUrl: './message-page.component.html',
  styleUrl: './message-page.component.css',
})
export class MessagePageComponent {
  messageService = inject(MessageService);
}
