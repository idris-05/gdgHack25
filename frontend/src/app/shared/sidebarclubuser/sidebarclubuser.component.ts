


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ApiDataService } from '../../services/api-data.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-sidebarclubuser',
  templateUrl: './sidebarclubuser.component.html',
  imports: [NgFor, RouterLink],
})
export class SidebarClubuserComponent {
  constructor(
    private naviagtionServer: NavigationService,
    private apiDataService: ApiDataService
  ) {
    
  }
  user = {
    name: 'El dajaal',
    type: 'Club',
  };

  menuItems = [
    { name: 'Ressource', link: '/club-user', icon: '📰' },
    {name: 'Post' , link:'/creat-post',icon:"📝"},
    { name: 'Roadmap', link: '/roadmap', icon: '➡️' },
    {
      name :"Alumni ", link :"/alumni", icon :"🎓"
    },
  
   
  ];

  

  Logout() {
    this.naviagtionServer.navigateTo('login')
    ;
    
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
