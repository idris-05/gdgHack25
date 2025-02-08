import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SidebarClubuserComponent } from '../../../shared/sidebarclubuser/sidebarclubuser.component';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css'],
  imports: [NgClass, FormsModule, NgFor, NgIf, SidebarClubuserComponent]
})
export class RoadmapComponent {
  roadmap = [
    {
      step: 1,
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      type: "Video",
      level: "Beginner",
      tag: "Programming",
      file: "intro_python.mp4",
      quizzes: [
        {
          question: "What is Python primarily used for?",
          options: ["Web development", "Data science", "Mobile apps", "None of the above"],
          correctAnswers: ["Web development", "Data science"]
        },
        {
          question: "Which keyword is used to define a function in Python?",
          options: ["def", "function", "define", "fun"],
          correctAnswers: ["def"]
        }
      ]
    },
    {
      step: 2,
      title: "Data Structures and Algorithms",
      description: "Understand fundamental data structures and algorithms.",
      type: "PDF",
      level: "Medium",
      tag: "Algorithms",
      file: "data_structures.pdf",
      quizzes: [
        {
          question: "Which data structure uses LIFO (Last In, First Out)?",
          options: ["Queue", "Stack", "Array", "Graph"],
          correctAnswers: ["Stack"]
        }
      ]
    }
  ];
}
