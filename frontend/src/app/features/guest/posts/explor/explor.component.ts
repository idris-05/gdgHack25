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
      title: 'Building cool things with Angular!',
      description: 'A guide on how to create modern web apps with Angular.',
      type: 'Project',
      githubLink: 'https://github.com',
      date: '',
      imageUrl: '/assets/angular-post.jpg',
      likes: 0,
      isLiked: false,
    },
    {
      title: 'GDG Algiers Tech Meetup',
      description: 'Join us for an exciting tech talk and networking event!',
      type: 'Event',
      githubLink: '',
      date: '2024-03-15',
      imageUrl: '/assets/se.jpg',
      likes: 0,
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
