import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { SidebarComponent } from '../../../shared/sidebar/sidebar.component';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-club',
  imports: [NgFor, NgIf, SidebarComponent, NgClass],
  templateUrl: './display-club.component.html',
  styleUrl: './display-club.component.css',
})
export class DisplayClubComponent {
  constructor (private router: Router){}
  user = {
    name: 'GDG Algiers',
    bio: 'GDG For Once GDG For Everrrr!',
    followers: 200,
    following: 0,
    isFollowing: false,
  };

  activeTab = 'posts'; // Default tab

  tabs = [
    { key: 'posts', name: 'Posts' },
    { key: 'roadmap', name: 'Roadmap' },
    { key: 'alumni', name: 'Alumni' },
    { key: 'agenda', name: 'Agenda' },
  ];

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

  roadmaps = [
    {
      id: 1,
      name: 'Full-Stack Developer Roadmap',
      description:
        'Learn frontend, backend, and DevOps to become a full-stack dev.',
    },
    
  ];

  alumni = [
    { name: 'Alice Johnson', email: 'name@google.com' },
    { name: 'Bob Smith', email: 'example@esi.dz' },
    { name: 'Charlie Lee', email: 'hero@gdg.dz' },
  ];

  agenda = this.posts.map((post) => ({
    date: post.date,
    title: post.title,
  }));

  selectedPost: any = null;

  openPost(post: any) {
    this.selectedPost = post;
    console.log(post);
    console.log("I am herw");
  }

  closePost() {
    this.selectedPost = null;
  }

  // Follow the club function
  toggleFollow() {
    this.user.isFollowing = !this.user.isFollowing;
    this.user.followers += this.user.isFollowing ? 1 : -1;
  }

  // Like post function
  toggleLike(post: any) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
  }

  goToRoadmap(roadID: number) {
    this.router.navigate(['/display-roadmap', roadID]);
  }
}
