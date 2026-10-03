import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { ManageUsers } from '../manage-users/manage-users';

import { ManageHostels } from '../manage-hostels/manage-hostels';

import { ManageRooms } from '../manage-rooms/manage-rooms';

import { ManageApplications } from '../manage-applications/manage-applications';

import { ManageAllocations } from '../manage-allocations/manage-allocations';

import {
  AdminDashboardService
} from '../services/admin-dashboard';


@Component({
  selector: 'app-admin-dashboard',

  imports: [
    ManageUsers,
    ManageHostels,
    ManageRooms,
    ManageApplications,
    ManageAllocations
  ],

  templateUrl: './admin-dashboard.html',

  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {

  showManageUsers = false;

  showManageHostels = false;

  showManageRooms = false;

  showManageApplications = false;

  showManageAllocations = false;


  statistics: any = null;

loadingStatistics = true;

adminName = '';


constructor(
  private adminDashboardService:
    AdminDashboardService,

  private cdr:
    ChangeDetectorRef
) {
}


ngOnInit() {

  this.adminName =
    localStorage.getItem('fullName') || 'Administrator';

  this.loadStatistics();

}


  loadStatistics() {

    this.loadingStatistics = true;


    this.adminDashboardService
      .getStatistics()
      .subscribe({

        next: (response: any) => {

          console.log(
            'Dashboard statistics:',
            response
          );


          this.statistics = response;

          this.loadingStatistics = false;


          this.cdr.detectChanges();

        },


        error: (error) => {

          console.log(
            'Dashboard statistics error:',
            error
          );


          this.loadingStatistics = false;


          this.cdr.detectChanges();

        }

      });

  }


  showManageUsersPage() {

    this.showManageUsers = true;

    this.showManageHostels = false;

    this.showManageRooms = false;

    this.showManageApplications = false;

    this.showManageAllocations = false;

  }


  showManageHostelsPage() {

    this.showManageUsers = false;

    this.showManageHostels = true;

    this.showManageRooms = false;

    this.showManageApplications = false;

    this.showManageAllocations = false;

  }


  showManageRoomsPage() {

    this.showManageUsers = false;

    this.showManageHostels = false;

    this.showManageRooms = true;

    this.showManageApplications = false;

    this.showManageAllocations = false;

  }


  showManageApplicationsPage() {

    this.showManageUsers = false;

    this.showManageHostels = false;

    this.showManageRooms = false;

    this.showManageApplications = true;

    this.showManageAllocations = false;

  }


  showManageAllocationsPage() {

    this.showManageUsers = false;

    this.showManageHostels = false;

    this.showManageRooms = false;

    this.showManageApplications = false;

    this.showManageAllocations = true;

  }


  backToDashboard() {

    this.showManageUsers = false;

    this.showManageHostels = false;

    this.showManageRooms = false;

    this.showManageApplications = false;

    this.showManageAllocations = false;

  }


  logout() {

  const confirmLogout = confirm(
    'Are you sure you want to logout?'
  );

  if (!confirmLogout) {
    return;
  }

  localStorage.removeItem('token');

  localStorage.removeItem('fullName');

  localStorage.removeItem('role');

 window.location.replace('/');

}
}