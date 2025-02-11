import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { SidebarClubuserComponent } from '../../../shared/sidebarclubuser/sidebarclubuser.component';
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  imports: [FormsModule, SidebarClubuserComponent, NgFor, NgIf, SidebarComponent]
})
export class PostPageComponent {
  newPost = {
    type: 'event', // Default to 'event'
    startDate: '',
    githubLink: '',
    description: '',
    tags: [] as string[],
    visibility: 'public',
    image: null as File | null
  };

  tagInput = '';

  // Add a tag
  addTag() {
    if (this.tagInput.trim() !== '' && !this.newPost.tags.includes(this.tagInput)) {
      this.newPost.tags.push(this.tagInput.trim());
      this.tagInput = ''; // Reset input field
    }
  }

  // Remove a tag
  removeTag(index: number) {
    this.newPost.tags.splice(index, 1);
  }

  // Handle file upload
  handleFileInput(event: any) {
    this.newPost.image = event.target.files[0];
  }

  // Submit post (prepare data for backend)
  submitPost() {
    const post = { ...this.newPost };
    console.log("Post sent to backend:", post);
    this.resetForm(); // Reset after submission
  }

  // Reset form
  resetForm() {
    this.newPost = {
      type: 'event',
      startDate: '',
      githubLink: '',
      description: '',
      tags: [],
      visibility: 'public',
      image: null
    };
  }
  newAlumni = { name: '', email: '' };

saveAlumni() {
  console.log(this.newAlumni) // Stocke l'alumni dans newPost
}

resetAlumni() {
  this.newAlumni = { name: '', email: '' }; // Réinitialise les champs
}

}
