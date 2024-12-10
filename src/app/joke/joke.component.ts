// joke.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { JokeResponse } from '../joke-response';

@Component({
  selector: 'app-joke',
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css',
})
export class JokeComponent {
  http = inject(HttpClient);

  jokeRequest$ = this.http.get<JokeResponse>(
    'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single',
  );
  joke?: string;

  constructor() {
    this.jokeRequest$
      .pipe(
        tap((response) => {
          this.joke = response.joke;
        }),
        takeUntilDestroyed(),
      )
      .subscribe();
  }
}
