import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelApplication } from './hostel-application';

describe('HostelApplication', () => {
  let component: HostelApplication;
  let fixture: ComponentFixture<HostelApplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostelApplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelApplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
