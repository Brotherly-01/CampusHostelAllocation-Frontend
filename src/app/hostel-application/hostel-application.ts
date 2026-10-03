import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

import { Hostel } from '../services/hostel';

@Component({
  selector: 'app-hostel-application',
  imports: [],
  templateUrl: './hostel-application.html',
  styleUrl: './hostel-application.css',
})
export class HostelApplication implements OnInit {

  hostels: any[] = [];

  @Output() backToDashboardClicked = new EventEmitter<void>();

  constructor(
    private hostelService: Hostel,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {

    this.hostelService.getHostels().subscribe({

      next: (response: any) => {

        console.log('Hostels:', response);

        this.hostels = response;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.log('Get hostels error:', error);

      }

    });

  }

  applyForHostel(hostelId: number) {

    this.hostelService.applyForHostel(hostelId).subscribe({

      next: (response) => {

        console.log('Application successful:', response);

        alert('Hostel application submitted successfully.');

      },

      error: (error) => {

        console.log('Application error:', error);

        let message = 'Unable to submit hostel application.';

        if (error.error) {

          if (typeof error.error === 'string') {

            message = error.error;

          } else if (error.error.message) {

            message = error.error.message;

          }

        }

        alert(message);

      }

    });

  }

  backToDashboard() {

    this.backToDashboardClicked.emit();

  }

}