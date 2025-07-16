// course-builder.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Lesson {
  title: string;
  content: string;
}

interface Course {
  title: string;
  description: string;
  thumbnailUrl: string;
  price: number;
  lessons: Lesson[];
}

@Component({
  selector: 'app-course-builder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-builder.component.html',
  styleUrls: ['./course-builder.component.css']
})
export class CourseBuilderComponent {
  currentStep: 'basics' | 'curriculum' | 'media' | 'pricing' | 'publish' = 'basics';

  course: Course = {
    title: '',
    description: '',
    thumbnailUrl: '',
    price: 0,
    lessons: []
  };

  addLesson() {
    this.course.lessons.push({ title: '', content: '' });
  }

  removeLesson(index: number) {
    this.course.lessons.splice(index, 1);
  }

  saveDraft() {
    console.log('Saving course as draft...', this.course);
    // TODO: Connect to backend draft service
  }

  publishCourse() {
    console.log('Publishing course...', this.course);
    // TODO: Connect to backend publish service
  }
}
