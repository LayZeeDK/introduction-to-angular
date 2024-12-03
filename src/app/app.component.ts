// app.component.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TodayComponent } from './today/today.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, TodayComponent],
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
