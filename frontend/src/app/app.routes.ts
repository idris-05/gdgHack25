import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { GuestClubsComponent } from './features/guest/guest-clubs/guest-clubs.component';
import { Component } from '@angular/core';
import { GuestPostComponent } from './features/guest/guest-posts/guest-post/guest-post.component';
import { SidebarClubuserComponent } from './shared/sidebarclubuser/sidebarclubuser.component';
import { ResourcePageComponent } from './features/clubuser/resource-page/resource-page.component';
import { PostPageComponent } from './features/clubuser/post-page/post-page.component';
import { AlumniPageComponent } from './features/clubuser/alumni-page/alumni-page.component';
import { RoadmapPageComponent } from './features/clubuser/roadmap-page/roadmap-page.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'login', component: AuthComponent, title: 'Login' },
  { path: 'guest-clubs', component: GuestClubsComponent, title: 'Guest Clubs' },
  {path:'posts', component: GuestPostComponent , title:"Guest posts"},
  {path:'club-user', component: ResourcePageComponent , title:'Clubuser Ressources'},
  {path:"creat-post",component :PostPageComponent , title:'Post Creation' },
  { path: 'alumni', component: AlumniPageComponent, title:"Alumni Creation " },
  {path:"roadmap", component: RoadmapPageComponent, title :'Roadmap Creation '},
  { path: '**', redirectTo: 'home' },
 
];
