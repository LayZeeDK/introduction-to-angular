import { Routes } from '@angular/router';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { JokePageComponent } from './joke-page/joke-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { TodayPageComponent } from './today-page/today-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hello',
  },
  {
    title: 'Hello',
    path: 'hello',
    component: HelloPageComponent,
  },
  {
    title: 'Joke',
    path: 'joke',
    component: JokePageComponent,
  },
  {
    title: 'Messages',
    path: 'messages',
    component: MessagePageComponent,
  },
  {
    title: 'Today',
    path: 'today',
    component: TodayPageComponent,
  },
];
