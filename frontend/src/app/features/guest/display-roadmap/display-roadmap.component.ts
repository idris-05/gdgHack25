import { Component } from '@angular/core';
import { SidebarComponent } from '../../../shared/sidebar/sidebar.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-display-roadmap',
  imports: [SidebarComponent, NgFor, NgIf],
  templateUrl: './display-roadmap.component.html',
  styleUrl: './display-roadmap.component.css',
})
export class DisplayRoadmapComponent {
  roadmap = {
    name: 'Full-Stack Developer Roadmap',
    lessons: [
      {
        name: 'Lesson 1: Introduction to HTML & CSS',
        resource: {
          type: 'video',
          name: 'HTML Basics',
          url: '/assets/html-video.mp4',
        },
        test: {
          type: 'qcm',
          questions: [
            {
              id: 1,
              text: 'What does HTML stand for?',
              options: [
                'HyperText Markup Language',
                'Hyper Transfer',
                'High Tech Machine',
              ],
              answer: 'HyperText Markup Language',
              selectedAnswer: '',
            },
            {
              id: 2,
              text: 'Which tag is used for a paragraph?',
              options: ['<div>', '<p>', '<span>'],
              answer: '<p>',
              selectedAnswer: '',
            },
          ],
        },
      },
      {
        name: 'Lesson 2: JavaScript Basics',
        resource: {
          type: 'pdf',
          name: 'JavaScript Guide',
          url: '/assets/js-guide.pdf',
        },
        test: {
          type: 'file-upload',
          description:
            'Write a simple JavaScript function that adds two numbers and upload your code file.',
          file: null,
        },
      },
    ],
  };

  // Handle QCM answer selection
  selectAnswer(question: any, option: string) {
    question.selectedAnswer = option;
  }

  // Submit QCM answers
  submitQCM(lesson: any) {
    let correctAnswers = 0;
    lesson.test.questions.forEach((q: any) => {
      if (q.selectedAnswer === q.answer) correctAnswers++;
    });
    alert(`You got ${correctAnswers}/${lesson.test.questions.length} correct!`);
  }

  // Handle file upload
  uploadFile(event: any, lesson: any) {
    lesson.test.file = event.target.files[0];
  }

  // Submit file test
  submitFile(lesson: any) {
    if (lesson.test.file) {
      alert(`File "${lesson.test.file.name}" uploaded successfully!`);
    } else {
      alert('Please upload a file before submitting.');
    }
  }
}
