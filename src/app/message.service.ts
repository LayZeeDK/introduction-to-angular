// message.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: readonly string[] = [];

  receiveMessage(message: string) {
    this.messages = [...this.messages, message];
  }
}
