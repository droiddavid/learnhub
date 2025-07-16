import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Course {
  title: string;
  status: 'Draft' | 'Published' | 'Archived';
  studentsEnrolled: number;
  lastUpdated: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        title: 'Intro to HTML & CSS',
        status: 'Published',
        studentsEnrolled: 320,
        lastUpdated: 'July 14, 2025'
      },
      {
        title: 'React Native Bootcamp',
        status: 'Draft',
        studentsEnrolled: 92,
        lastUpdated: 'July 10, 2025'
      },
      {
        title: 'Advanced TypeScript',
        status: 'Archived',
        studentsEnrolled: 187,
        lastUpdated: 'June 22, 2025'
      }
    ];
  }
}

