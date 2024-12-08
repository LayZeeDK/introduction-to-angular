// app.component.ts
import { Component, inject } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageService } from './message.service';
import { TodayComponent } from './today/today.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, TodayComponent, MessageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  messageService = inject(MessageService);
}
