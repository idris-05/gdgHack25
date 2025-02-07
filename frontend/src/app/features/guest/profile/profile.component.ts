import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SidebarComponent } from '../../../shared/sidebar/sidebar.component';
@Component({
  selector: 'app-profile',
  imports: [NgFor, SidebarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user = {
    image: '/assets/profile.png',
    name: 'Mahdi',
    score: 1500,
    roadmaps: [
      {
        name: 'Full-Stack Development',
        description: 'Learn front-end and back-end development.',
      },
      {
        name: 'Machine Learning',
        description: 'Dive into AI and deep learning.',
      },
    ],
    followedClubs: [
      {
        name: 'GDG Algiers',
        description: 'Google Developer Group in Algiers.',
      },
      {
        name: 'AI Enthusiasts',
        description: 'Exploring the world of Artificial Intelligence.',
      },
    ],
    memberClubs: [
      {
        name: 'Open Source Community',
        description: 'Contributing to open-source projects.',
      },
    ],
  };
}
