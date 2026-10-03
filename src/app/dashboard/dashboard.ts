import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
  HostelApplication as HostelApplicationService
} from '../services/hostel-application';

import { HostelApplication } from '../hostel-application/hostel-application';
import { Allocation } from '../allocation/allocation';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-dashboard',
  imports: [
    DatePipe,
    HostelApplication,
    Allocation,
    Profile
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  fullName = localStorage.getItem('fullName');

  application: any;

  showHostelApplication = false;

  showAllocation = false;

  showProfile = false;

  constructor(
    private hostelApplication: HostelApplicationService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {

    this.hostelApplication.getMyApplication().subscribe({

      next: (response) => {

        this.application = response;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.log(error);

      }

    });

  }

  showHostelApplicationPage() {

    this.showHostelApplication = true;

    this.showAllocation = false;

    this.showProfile = false;

  }

  showAllocationPage() {

    this.showAllocation = true;

    this.showHostelApplication = false;

    this.showProfile = false;

  }

  showProfilePage() {

    this.showProfile = true;

    this.showHostelApplication = false;

    this.showAllocation = false;

  }

  logout() {

    localStorage.removeItem('token');

    localStorage.removeItem('fullName');

    window.location.reload();

  }

}