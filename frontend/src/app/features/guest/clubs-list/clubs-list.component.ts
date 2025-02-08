import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { SidebarComponent } from '../../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-club-list',
  imports: [NgFor, NgIf, SidebarComponent],
  templateUrl: './clubs-list.component.html',
})
export class ClubsListComponent {
  clubs = [
    {
      id: 1,
      name: 'GDG Algiers',
      description: 'Google Developer Group Algiers. Learn & Build!',
      banner: '/assets/gdg_algiers_cover.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'XMediaClub',
      description: 'Exploring the world of AI and Machine Learning.',
      banner: '/assets/X.png',
      rating: 4,
    },
    {
      id: 2,
      name: 'ShellMates',
      description: 'Learn ethical hacking and security practices.',
      banner: '/assets/shellmates_club_cover.jpg',
      rating: 3,
    },
  ];

  constructor(private router: Router) {}

  goToClub(clubId: number) {
    this.router.navigate(['/display-club', clubId]);
  }
}
