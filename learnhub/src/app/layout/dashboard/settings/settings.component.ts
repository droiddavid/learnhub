import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  profile = {
    name: 'Dr. Jordan Smith',
    email: 'jordan@example.com',
    bio: 'Passionate educator and lifelong learner.',
    notifications: true
  };

  saveSettings() {
    console.log('Saving settings:', this.profile);
    // Normally you'd call a service here
  }
}
