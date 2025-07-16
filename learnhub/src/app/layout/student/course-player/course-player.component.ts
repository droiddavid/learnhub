import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Lesson {
  title: string;
  contentType: 'video' | 'pdf' | 'text';
  contentUrl: string;
  isCompleted: boolean;
}
@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-player.component.html',
  styleUrl: './course-player.component.css'
})
export class CoursePlayerComponent {

  lessons: Lesson[] = [];
  currentLessonIndex = 0;

  ngOnInit(): void {
    this.lessons = [
      {
        title: 'Welcome to the Course',
        contentType: 'video',
        contentUrl: 'https://example.com/welcome.mp4',
        isCompleted: false
      },
      {
        title: 'Course Overview (PDF)',
        contentType: 'pdf',
        contentUrl: 'https://example.com/overview.pdf',
        isCompleted: false
      },
      {
        title: 'Learning Objectives',
        contentType: 'text',
        contentUrl: 'This course will help you master the basics of frontend development...',
        isCompleted: false
      }
    ];
  }

  get currentLesson(): Lesson {
    return this.lessons[this.currentLessonIndex];
  }

  nextLesson() {
    if (this.currentLessonIndex < this.lessons.length - 1) {
      this.currentLessonIndex++;
    }
  }

  prevLesson() {
    if (this.currentLessonIndex > 0) {
      this.currentLessonIndex--;
    }
  }

  markAsCompleted() {
    this.currentLesson.isCompleted = true;
  }

  completionRate(): number {
    const completed = this.lessons.filter(lesson => lesson.isCompleted).length;
    return Math.round((completed / this.lessons.length) * 100);
  }
}
