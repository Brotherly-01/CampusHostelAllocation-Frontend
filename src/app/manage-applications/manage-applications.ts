import { DatePipe } from '@angular/common';

import {
ChangeDetectorRef,
Component,
OnInit
} from '@angular/core';

import {
HostelApplication as HostelApplicationService
} from '../services/hostel-application';

@Component({
selector: 'app-manage-applications',

imports: [
DatePipe
],

templateUrl: './manage-applications.html',

styleUrl: './manage-applications.css',
})
export class ManageApplications implements OnInit {

applications: any[] = [];

loading = true;

constructor(
private applicationService:
HostelApplicationService,


private cdr: ChangeDetectorRef

) {
}

ngOnInit() {

this.loadApplications();

}

loadApplications() {

this.loading = true;

this.applicationService
  .getAllApplications()
  .subscribe({

    next: (response: any) => {

      console.log(
        'Applications:',
        response
      );

      this.applications = response;

      this.loading = false;

      this.cdr.detectChanges();

    },

    error: (error) => {

      console.log(
        'Get applications error:',
        error
      );

      this.loading = false;

      this.cdr.detectChanges();

      alert(
        'Unable to load applications.'
      );

    }

  });

}

approveApplication(id: number) {

const confirmApprove = confirm(
  'Are you sure you want to approve this application?'
);


if (!confirmApprove) {

  return;

}


this.applicationService
  .updateApplicationStatus(
    id,
    'Approved'
  )
  .subscribe({

    next: (response: any) => {

      console.log(
        'Application approved:',
        response
      );

      alert(
        'Application approved successfully.'
      );

      this.loadApplications();

    },

    error: (error) => {

      console.log(
        'Approve application error:',
        error
      );

      let message =
        'Unable to approve application.';


      if (error.error) {

        if (
          typeof error.error ===
          'string'
        ) {

          message =
            error.error;

        }
        else if (
          error.error.message
        ) {

          message =
            error.error.message;

        }

      }


      alert(message);

    }

  });

}

rejectApplication(id: number) {

const confirmReject = confirm(
  'Are you sure you want to reject this application?'
);


if (!confirmReject) {

  return;

}


this.applicationService
  .updateApplicationStatus(
    id,
    'Rejected'
  )
  .subscribe({

    next: (response: any) => {

      console.log(
        'Application rejected:',
        response
      );

      alert(
        'Application rejected successfully.'
      );

      this.loadApplications();

    },

    error: (error) => {

      console.log(
        'Reject application error:',
        error
      );

      let message =
        'Unable to reject application.';


      if (error.error) {

        if (
          typeof error.error ===
          'string'
        ) {

          message =
            error.error;

        }
        else if (
          error.error.message
        ) {

          message =
            error.error.message;

        }

      }


      alert(message);

    }

  });


}

}
