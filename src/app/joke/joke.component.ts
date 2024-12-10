// joke.component.ts
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JokeResponse } from '../joke-response';

@Component({
  selector: 'app-joke',
  imports: [AsyncPipe],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css',
})
export class JokeComponent {
  http = inject(HttpClient);

  joke$: Observable<string> = this.http
    .get<JokeResponse>(
      'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single',
    )
    .pipe(map((response) => response.joke));
}
