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
    { nom: "Tutoriel Angular", description: "Introduction à Angular", type: "Video", level: "Beginner", file: null },
    { nom: "Cours TypeScript", description: "Guide complet TypeScript", type: "Document", level: "Meduim", file: null }
  ];

  filteredResources = [...this.resources]; // Liste filtrée

  showModal = false;
  newResource = { nom: "", description: "", type: "", level: "", file: null };

  // Filtres
  searchTerm: string = '';
  selectedType: string = '';
  selectedLevel: string = '';

  openModal() {
    console.log("Bouton cliqué, ouverture du modal...");
    this.showModal = true;
  }
  

  closeModal() {
    this.showModal = false;
    this.newResource = { nom: "", description: "", type: "", level: "", file: null };
  }

  handleFileInput(event: any) {
    this.newResource.file = event.target.files[0];
  }

  addResource() {
    if (this.newResource.nom && this.newResource.description && this.newResource.type && this.newResource.level) {
      this.resources.push({ ...this.newResource });
      this.applyFilters(); // Mettre à jour les résultats filtrés
      this.closeModal();
    }
  }

  deleteResource(index: number) {
    this.resources.splice(index, 1);
    this.applyFilters(); // Mise à jour des résultats après suppression
  }

  // Fonction de filtrage
  applyFilters() {
    this.filteredResources = this.resources.filter(resource =>
      (this.searchTerm ? resource.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) : true) &&
      (this.selectedType ? resource.type === this.selectedType : true) &&
      (this.selectedLevel ? resource.level === this.selectedLevel : true)
    );
  }
}
