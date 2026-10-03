import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHostels } from './manage-hostels';

describe('ManageHostels', () => {
  let component: ManageHostels;
  let fixture: ComponentFixture<ManageHostels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageHostels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageHostels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
