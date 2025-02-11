import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarClubuserComponent } from '../../../shared/sidebarclubuser/sidebarclubuser.component';
@Component({
  selector: 'app-alumni-page',
  templateUrl: './alumni-page.component.html',
  styleUrls: ['./alumni-page.component.css'],
  imports : [FormsModule,SidebarClubuserComponent]
})
export class AlumniPageComponent {
  alumni = { name: '', email: '' };

 
  submitAlumni() {
    console.log("Sending alumni data:", this.alumni);

    
  }

  resetForm() {
    this.alumni = { name: '', email: '' };
  }
}
