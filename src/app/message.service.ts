// message.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { MessageState } from './message-state';

const initialState: MessageState = {
  messages: [],
};

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  #state = new BehaviorSubject<MessageState>(initialState);

  messages$: Observable<readonly string[]> = this.#state.pipe(
    map((state) => state.messages),
  );

  receiveMessage(message: string) {
    const state = this.#state.value;
    this.#state.next({
      ...state,
      messages: [...state.messages, message],
    });
  }
}
