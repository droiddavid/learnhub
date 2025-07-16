import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCertificatesComponent } from './recent-certificates.component';

describe('RecentCertificatesComponent', () => {
  let component: RecentCertificatesComponent;
  let fixture: ComponentFixture<RecentCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
