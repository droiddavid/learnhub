import { Component, OnInit } from '@angular/core';

interface Certificate {
  studentName: string;
  courseName: string;
  issuedDate: string;
  downloadLink: string;
}

@Component({
  selector: 'app-recent-certificates',
  standalone: true,
  imports: [],
  templateUrl: './recent-certificates.component.html',
  styleUrls: ['./recent-certificates.component.css']
})
export class RecentCertificatesComponent implements OnInit {
  certificates: Certificate[] = [];

  ngOnInit(): void {
    this.certificates = [
      {
        studentName: 'Jamal Simmons',
        courseName: 'Machine Learning Foundations',
        issuedDate: 'July 15, 2025',
        downloadLink: '#'
      },
      {
        studentName: 'Olivia Grant',
        courseName: 'UI/UX Design Masterclass',
        issuedDate: 'July 14, 2025',
        downloadLink: '#'
      },
      {
        studentName: 'Marcus Lee',
        courseName: 'Ethical Hacking Essentials',
        issuedDate: 'July 13, 2025',
        downloadLink: '#'
      }
    ];
  }
}
