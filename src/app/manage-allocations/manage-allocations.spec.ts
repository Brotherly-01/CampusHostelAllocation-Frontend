import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAllocations } from './manage-allocations';

describe('ManageAllocations', () => {
  let component: ManageAllocations;
  let fixture: ComponentFixture<ManageAllocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAllocations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAllocations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
