import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private router: Router) {}
}
