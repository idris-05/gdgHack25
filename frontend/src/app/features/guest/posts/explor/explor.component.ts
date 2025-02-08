import { Component } from '@angular/core';
import { SidebarComponent } from '../../../../shared/sidebar/sidebar.component';
import { NgIf,NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-explor',
  imports: [SidebarComponent, NgIf, NgFor, NgClass],
  templateUrl: './explor.component.html',
  styleUrl: './explor.component.css',
})
export class ExplorComponent {
  posts = [
    {
      title: 'GIP',
      description:
        'GIP is a competition designed to facilitate the integration of new members into GDG Algiers by helping them understand how the club operates.',
      type: 'Project',
      githubLink: 'https://www.gdgalgiers.com/projects/gip',
      date: '',
      imageUrl: '/assets/GIP.png',
      likes: 390,
      isLiked: false,
    },
    {
      title: 'GDG Internal Hackathon',
      description:
        'he first day of the GDG Internal Hackathon has ended, and what an exciting start!',
      type: 'Event',
      githubLink: '',
      date: '2024-03-15',
      imageUrl: '/assets/GHack.png',
      likes: 999,
      isLiked: false,
    },
  ];
  selectedPost: any = null;
  openPost(post: any) {
    this.selectedPost = post;
    console.log(post);
    console.log('I am herw');
  }

  closePost() {
    this.selectedPost = null;
  }

  // Like post function
  toggleLike(post: any) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
  }
}
