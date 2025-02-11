import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { DisplayClubComponent } from './features/guest/display-club/display-club.component';
import { ClubsListComponent } from './features/guest/clubs-list/clubs-list.component';
import { ExplorComponent } from './features/guest/posts/explor/explor.component';
import { InterestComponent } from './features/guest/posts/interest/interest.component';
import { DisplayRoadmapComponent } from './features/guest/display-roadmap/display-roadmap.component';
import { ProfileComponent } from './features/guest/profile/profile.component';
import { ResourcePageComponent } from './features/clubuser/resource-page/resource-page.component';
import { PostPageComponent } from './features/clubuser/post-page/post-page.component';
import { AlumniPageComponent } from './features/clubuser/alumni-page/alumni-page.component';
import { RoadmapComponent } from './features/clubuser/roadmap/roadmap.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'login', component: AuthComponent, title: 'Login' },
  { path: 'clubs-list', component: ClubsListComponent, title: 'Clubs List' },
  {
    path: 'display-club/:id',
    component: DisplayClubComponent,
    title: 'Display Club',
  },
  {
    path: 'display-roadmap/:id',
    component: DisplayRoadmapComponent,
    title: 'Display Roadmap',
  },
  { path: 'explore-posts', component: ExplorComponent, title: 'Explore' },
  { path: 'interest-posts', component: InterestComponent, title: 'Interest' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  {
    path: 'club-user',
    component: ResourcePageComponent,
    title: 'Clubuser Ressources',
  },
  {
    path :'roadmap', component:RoadmapComponent , title : "roadmap Creation "
  },
  { path: 'creat-post', component: PostPageComponent, title: 'Post Creation' },
  { path: 'alumni', component: AlumniPageComponent, title: 'Alumni Creation ' },

  { path: '**', redirectTo: 'home' },
];
