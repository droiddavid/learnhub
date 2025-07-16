import { Component, OnInit } from '@angular/core';

interface LiveSession {
  title: string;
  host: string;
  date: string;
  time: string;
  link: string;
}

@Component({
  selector: 'app-live-sessions',
  standalone: true,
  imports: [],
  templateUrl: './live-sessions.component.html',
  styleUrls: ['./live-sessions.component.css']
})
export class LiveSessionsComponent implements OnInit {
  sessions: LiveSession[] = [];

  ngOnInit(): void {
    this.sessions = [
      {
        title: 'Mastering React in Practice',
        host: 'Rachel Adams',
        date: 'July 20, 2025',
        time: '2:00 PM EST',
        link: '#'
      },
      {
        title: 'Advanced Python Techniques',
        host: 'David Kim',
        date: 'July 21, 2025',
        time: '11:00 AM EST',
        link: '#'
      },
      {
        title: 'Web3 and the Future of Learning',
        host: 'Aliyah Thompson',
        date: 'July 23, 2025',
        time: '6:00 PM EST',
        link: '#'
      }
    ];
  }
}
