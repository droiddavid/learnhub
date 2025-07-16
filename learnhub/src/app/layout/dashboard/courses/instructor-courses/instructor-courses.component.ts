import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Course {
  id: string;
  title: string;
  status: 'Published' | 'Draft';
  students: number;
  earnings: number;
}

@Component({
  selector: 'app-instructor-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './instructor-courses.component.html',
  styleUrl: './instructor-courses.component.css'
})
export class InstructorCoursesComponent {
  searchQuery = '';
  courses: Course[] = [
    {
      id: '1',
      title: 'Introduction to HTML',
      status: 'Published',
      students: 324,
      earnings: 2180
    },
    {
      id: '2',
      title: 'CSS Mastery',
      status: 'Draft',
      students: 120,
      earnings: 850
    }
  ];

  filteredCourses(): Course[] {
    return this.courses.filter(c =>
      c.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  editCourse(courseId: string) {
    console.log('Edit course', courseId);
    // Navigate to CourseBuilderComponent
  }

  duplicateCourse(courseId: string) {
    console.log('Duplicate course', courseId);
    // Implement duplication logic
  }

  deleteCourse(courseId: string) {
    this.courses = this.courses.filter(c => c.id !== courseId);
  }
}
