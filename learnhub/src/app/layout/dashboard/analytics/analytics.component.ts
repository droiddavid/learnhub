import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface AnalyticsMetric {
  label: string;
  value: string;
  description: string;
}
@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  metrics: AnalyticsMetric[] = [];

  ngOnInit(): void {
    this.metrics = [
      {
        label: 'Total Students',
        value: '3,152',
        description: 'Total enrolled students across all your courses'
      },
      {
        label: 'Avg. Completion Rate',
        value: '68%',
        description: 'Average course completion rate'
      },
      {
        label: 'Monthly Revenue',
        value: '$5,921',
        description: 'Earnings for the current month'
      },
      {
        label: 'Active Courses',
        value: '9',
        description: 'Courses currently published and active'
      }
    ];
  }
}
