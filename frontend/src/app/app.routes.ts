import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { GuestClubsComponent } from './features/guest/guest-clubs/guest-clubs.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'login', component: AuthComponent, title: 'Login' },
  { path: 'guest-clubs', component: GuestClubsComponent, title: 'Guest Clubs' },
  { path: '**', redirectTo: 'home' },
];
