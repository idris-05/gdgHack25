import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ApiDataService } from '../../services/api-data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [NgFor, RouterLink],
})
export class SidebarComponent {
  constructor(
    private naviagtionServer: NavigationService,
    private apiDataService: ApiDataService
  ) {}
  user = {
    name: 'El Mahdi El Montader',
    type: 'Guest',
  };

  menuItems = [
    { name: 'Posts', link: '/posts', icon: '📰' },
    { name: 'Clubs', link: '/clubs', icon: '👥' },
    { name: 'Profile', link: '/profile', icon: '👤' },
    { name: 'Notification', link: '/settings', icon: '🔔' },
    { name: 'Settings', link: '/settings', icon: '⚙️' },
  ];
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
