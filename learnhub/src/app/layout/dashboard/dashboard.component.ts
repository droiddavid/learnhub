import { Component } from '@angular/core';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { RecentCertificatesComponent } from './recent-certificates/recent-certificates.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { CoursePerformanceComponent } from './course-performance/course-performance.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { LiveSessionsComponent } from './live-sessions/live-sessions.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardCardsComponent,
    RecentActivityComponent,
    CoursePerformanceComponent,
    QuickActionsComponent,
    LiveSessionsComponent,
    RecentCertificatesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
