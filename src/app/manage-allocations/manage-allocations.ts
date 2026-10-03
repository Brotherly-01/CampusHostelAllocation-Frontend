import { DatePipe } from '@angular/common';

import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import {
  Allocation as AllocationService
} from '../services/allocation';

@Component({
  selector: 'app-manage-allocations',

 imports: [
  DatePipe
],

  templateUrl: './manage-allocations.html',

  styleUrl: './manage-allocations.css',
})
export class ManageAllocations implements OnInit {

  allocations: any[] = [];

  loading = true;


  constructor(
    private allocationService:
      AllocationService,

    private cdr:
      ChangeDetectorRef
  ) {
  }


  ngOnInit() {

    this.loadAllocations();

  }


  loadAllocations() {

    this.loading = true;

    this.allocationService
      .getAllAllocations()
      .subscribe({

        next: (response: any) => {

          console.log(
            'Allocations:',
            response
          );

          this.allocations = response;

          this.loading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.log(
            'Get allocations error:',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();

          alert(
            'Unable to load allocations.'
          );

        }

      });

  }

}
