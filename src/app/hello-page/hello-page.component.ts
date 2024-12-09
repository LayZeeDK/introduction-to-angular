// hello-page.compoennt.ts
import { Component, inject } from '@angular/core';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hello-page',
  imports: [HelloWorldComponent],
  templateUrl: './hello-page.component.html',
  styleUrl: './hello-page.component.css',
})
export class HelloPageComponent {
  messageService = inject(MessageService);
}
