import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarClubuserComponent } from '../../../shared/sidebarclubuser/sidebarclubuser.component';
import { NgIf, NgFor } from '@angular/common';
import { AlumniPageComponent } from "../alumni-page/alumni-page.component";
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-resource-page',
  templateUrl: './resource-page.component.html',
  styleUrls: ['./resource-page.component.css'],
  imports: [FormsModule, SidebarClubuserComponent, NgFor, NgIf, AlumniPageComponent, SidebarComponent]
})
export class ResourcePageComponent {
  resources = [
    { nom: "Tutoriel Angular", description: "Introduction à Angular", type: "Video", level: "beginner", tags: ["Machine Learning"], file: null },
    { nom: "Cours TypeScript", description: "Guide complet TypeScript", type: "PDF", level: "Medium", tags: ["AI"], file: null }
  ];

  filteredResources = [...this.resources]; // Liste filtrée

  showModal = false;
  newResource = { nom: "", description: "", type: "", level: "", tags: [] as string[], file: null };

  searchTerm: string = '';
  selectedType: string = '';
  selectedLevel: string = '';
  selectedTags: string[] = []; 
  selectedTag : string="";// Liste des tags sélectionnés pour filtrage

  tagInput: string = '';
  tagSuggestions: string[] = [];
  
  availableTags: string[] = [
    "AI", "Machine Learning", "Deep Learning", "Data Science", "Big Data", "Cybersecurity",
    "Blockchain", "Cloud Computing", "DevOps", "IoT", "AR/VR", "Web Development",
    "Mobile Development", "Game Development", "Networking", "Embedded Systems",
    "Software Engineering", "Databases", "Cryptography", "Computer Vision", "NLP",
    "UI/UX", "Open Source", "Physics", "Chemistry", "Biology", "Mathematics",
    "Aerospace", "Robotics", "Electronics", "Mechanical Engineering", "Civil Engineering",
    "Biotechnology", "Environmental Science", "Astronomy", "Geology", "Business",
    "Entrepreneurship", "Startups", "Finance", "Economics", "Marketing", "Investing",
    "Cryptocurrency", "E-Commerce", "Stock Market", "Product Management", "Sales",
    "Leadership", "Human Resources", "Philosophy", "History", "Literature", "Music",
    "Visual Arts", "Photography", "Film", "Theater", "Architecture", "Design", "Writing",
    "Poetry", "Psychology", "Healthcare", "Medicine", "Mental Health", "Fitness",
    "Nutrition", "Sports", "Yoga", "Self Improvement", "Travel", "Culinary Arts",
    "Politics", "Social Justice", "Environmentalism", "Climate Change", "Education",
    "Law", "Ethics", "Memes", "Cars", "Anime", "Gaming", "Esports", "DIY",
    "Hacking", "Space", "Science Fiction", "Future Tech"
  ];

  openModal() {
    this.showModal = true;
  }
  
  closeModal() {
    this.showModal = false;
    this.newResource = { nom: "", description: "", type: "", level: "", tags: [], file: null };
  }

  handleFileInput(event: any) {
    this.newResource.file = event.target.files[0];
  }

  addResource() {
    const validTypes = ["Video", "PDF"];
  
    if (!this.newResource.nom.trim() || 
        !this.newResource.description.trim() || 
        !this.newResource.type.trim() || 
        !this.newResource.level.trim() || 
        this.newResource.tags.length === 0) {
      alert("Veuillez remplir tous les champs et ajouter au moins un tag.");
      return;
    }
  
    if (!validTypes.includes(this.newResource.type)) {
      alert("Le type doit être 'Video' ou 'PDF'.");
      return;
    }

    this.newResource.tags = this.newResource.tags.filter(tag => this.availableTags.includes(tag));

    if (this.newResource.tags.length === 0) {
      alert("Veuillez sélectionner des tags valides.");
      return;
    }
  
    this.resources.push({ ...this.newResource });
    this.applyFilters();
    this.closeModal();
  }
  
  deleteResource(index: number) {
    const resourceToDelete = this.filteredResources[index];
    const originalIndex = this.resources.findIndex(res => res === resourceToDelete);
  
    if (originalIndex !== -1) {
      this.resources.splice(originalIndex, 1);
    }
  
    this.applyFilters();
  }

  applyFilters() {
    this.filteredResources = this.resources.filter(resource =>
      (this.searchTerm ? resource.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) : true) &&
      (this.selectedType ? resource.type === this.selectedType : true) &&
      (this.selectedLevel ? resource.level === this.selectedLevel : true) &&
      (this.selectedTag ? resource.tags.includes(this.selectedTag) : true)
    );
    console.log(this.filteredResources)
  }
  
  
  
  updateTagSuggestions() {
    if (this.tagInput.length > 0) {
      this.tagSuggestions = this.availableTags.filter(tag =>
        tag.toLowerCase().includes(this.tagInput.toLowerCase()) &&
        !this.newResource.tags.includes(tag)
      ).slice(0, 5);
    } else {
      this.tagSuggestions = [];
    }
  }
  
  selectTag(tag: string) {
    if (!this.newResource.tags.includes(tag)) {
      this.newResource.tags.push(tag);
    }
    this.tagInput = ''; // Réinitialise l'input après sélection
    this.tagSuggestions = [];
  }
  
  clearTag(index: number) {
    this.newResource.tags.splice(index, 1);
  }
  
  removeTag(index: number) {
    if (this.newResource.tags && this.newResource.tags.length > index) {
      this.newResource.tags.splice(index, 1);
    }
  }
  
  

  getUniqueTags(): string[] {
    console.log(...new Set(this.resources.flatMap(res => res.tags)))
    return [...new Set(this.resources.flatMap(res => res.tags))];
    
  }
}
