// navigation.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  routes = routes.filter((route) => route.path !== '');
}
