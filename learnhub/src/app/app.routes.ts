import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

export const routes: Routes = [
     { path: '', component: DashboardComponent },
     { 
          path: 'dashboard', 
          component: DashboardComponent, 
          children: [
               { path: '', component: DashboardComponent },
               // { path: 'dashboard-cards', component: DashboardCardsComponent },
               // { path: 'live-sessions', component: LiveSessionsComponent },
               // { path: 'recent-activity', component: RecentActivityComponent },
               // { path: 'recent-certificates', component: RecentCertificatesComponent }
          ]
     },
     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
     { path: '**', redirectTo: 'dashboard' },
     { 
          path: 'courses', 
          loadComponent: () => 
          import('./layout/dashboard/courses/courses.component').then(m => m.CoursesComponent) },
     {
          path: 'course-builder',
          loadComponent: () =>
          import('./layout/dashboard/courses/course-builder/course-builder.component').then(m => m.CourseBuilderComponent)
     },
     {
          path: 'analytics',
          loadComponent: () =>
          import('./layout/dashboard/analytics/analytics.component').then(m => m.AnalyticsComponent)
     },
     {
          path: 'settings',
          loadComponent: () =>
          import('./layout/dashboard/settings/settings.component').then(m => m.SettingsComponent)
     },
     {
          path: 'course/:courseId/player',
          loadComponent: () =>
          import('./layout/student/course-player/course-player.component').then(m => m.CoursePlayerComponent)
     },
     {
          path: 'courses',
          loadComponent: () =>
          import('./layout/dashboard/courses/instructor-courses/instructor-courses.component').then(m => m.InstructorCoursesComponent)
     },





];
