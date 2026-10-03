import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

import { DatePipe } from '@angular/common';

import { Allocation as AllocationService } from '../services/allocation';

@Component({
  selector: 'app-allocation',
  imports: [DatePipe],
  templateUrl: './allocation.html',
  styleUrl: './allocation.css',
})
export class Allocation implements OnInit {

  allocation: any = null;

  loading = true;

  @Output() backToDashboardClicked = new EventEmitter<void>();

  constructor(
    private allocationService: AllocationService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {

    this.allocationService.getMyAllocation().subscribe({

      next: (response: any) => {

        console.log('My allocation:', response);

        this.allocation = response;

        this.loading = false;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.log('Get allocation error:', error);

        this.loading = false;

        this.cdr.detectChanges();

      }

    });

  }

  backToDashboard() {

    this.backToDashboardClicked.emit();

  }

}

