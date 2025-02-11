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
  constructor(private router: Router) {}
  user = {
    name: 'GDG Algiers',
    bio: 'GDG For Once GDG For Everrrr!',
    followers: '1000',
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

  roadmaps = [
    {
      id: 1,
      name: 'Full-Stack Developer Roadmap',
      description:
        'Learn frontend, backend, and DevOps to become a full-stack dev.',
    },
    {
      id: 2,
      name: 'Blockchain Developer Roadmap',
      description:
        'Master the fundamentals of blockchain, smart contracts, and decentralized applications (DApps). Learn Solidity, Ethereum, and Web3 development.',
    },
  ];

  alumni = [
    { name: 'Fares Mezenner', email: 'alumni@gdg.dz' },
    { name: 'Sofiane Yekene', email: 'alumni@gdg.dz' },
    { name: 'Ilyes Arabet', email: 'alumni@gdg.dz' },
    { name: 'Ayoub Kasmi', email: 'alumni@gdg.dz' },
    { name: 'Aymen Mougari', email: 'alumni@gdg.dz' },
  ];

  agenda = this.posts.map((post) => ({
    date: post.date,
    title: post.title,
  }));

  selectedPost: any = null;

  openPost(post: any) {
    this.selectedPost = post;
    console.log(post);
    console.log('I am herw');
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
