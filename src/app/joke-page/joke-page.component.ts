// joke-page.component.ts
import { Component } from '@angular/core';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-page',
  imports: [JokeComponent],
  templateUrl: './joke-page.component.html',
  styleUrl: './joke-page.component.css',
})
export class JokePageComponent {}
