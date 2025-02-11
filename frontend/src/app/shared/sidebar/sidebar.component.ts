import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ApiDataService } from '../../services/api-data.service';
import { NavigationService } from '../../services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [NgFor, RouterLink, NgIf],
})
export class SidebarComponent {
  constructor(
    private naviagtionServer: NavigationService,
    private apiDataService: ApiDataService,
    private router: Router
  ) {}
  user = {
    name: 'El Mahdi El Montader',
    type: 'Guest',
  };

  menuItems = [
    { name: 'Clubs', link: '/clubs-list', icon: '👥' },
    {
      name: 'Posts',
      link: '.',
      icon: '📰',
      subItems: [
        { name: 'Explore', link: '/explore-posts', icon: '🌍' },
        { name: 'Interest', link: '/interest-posts', icon: '⭐' },
      ],
    },
    { name: 'Profile', link: '/profile', icon: '👤' },
    { name: 'Notification', link: '.', icon: '🔔' },
    { name: 'Settings', link: '.', icon: '⚙️' },
  ];

  isActive(route: string): boolean {
    if (route === '/clubs-list') {
      return (
        this.router.url.startsWith('/clubs-list') ||
        this.router.url.startsWith('/display-club/') ||
        this.router.url.startsWith('/display-roadmap/')
      );
    }
    return this.router.url.startsWith(route);
  }

  Logout() {
    this.naviagtionServer.navigateTo('login');
    //   this.apiDataService.logout().subscribe({
    //     next: (response: any) => {
    //       localStorage.removeItem('accessToken');
    //       this.naviagtionServer.navigateTo('login');
    //     },
    //     error: (err) => {
    //       alert('logout failed');
    //     },
    //   });
  }
}
