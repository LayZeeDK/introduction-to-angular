// app.component.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  messages: readonly string[] = [];

  receiveMessage(message: string) {
    this.messages = [...this.messages, message];
  }
}
