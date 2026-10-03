import {
ChangeDetectorRef,
Component,
OnInit
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Hostel as HostelService } from '../services/hostel';

@Component({
selector: 'app-manage-hostels',
imports: [
FormsModule
],
templateUrl: './manage-hostels.html',
styleUrl: './manage-hostels.css',
})
export class ManageHostels implements OnInit {

hostels: any[] = [];

loading = true;

showForm = false;

editingHostel = false;

selectedHostel: any = null;

constructor(
private hostelService: HostelService,
private cdr: ChangeDetectorRef
) {
}

ngOnInit() {

this.loadHostels();

}

loadHostels() {


this.loading = true;

this.hostelService.getHostels().subscribe({

  next: (response: any) => {

    console.log('Hostels:', response);

    this.hostels = response;

    this.loading = false;

    this.cdr.detectChanges();

  },

  error: (error) => {

    console.log('Get hostels error:', error);

    this.loading = false;

    this.cdr.detectChanges();

    alert('Unable to load hostels.');

  }

});

}

showAddForm() {

this.editingHostel = false;

this.selectedHostel = {

  hostelName: '',

  location: '',

  gender: 'Male'

};

this.showForm = true;


}

editHostel(hostel: any) {


this.editingHostel = true;

this.selectedHostel = {

  id: hostel.id,

  hostelName: hostel.hostelName,

  location: hostel.location,

  gender: hostel.gender

};

this.showForm = true;


}

cancelForm() {


this.showForm = false;

this.selectedHostel = null;

}

saveHostel() {


if (!this.selectedHostel) {

  return;

}


const data = {

  hostelName: this.selectedHostel.hostelName,

  location: this.selectedHostel.location,

  gender: this.selectedHostel.gender

};


if (this.editingHostel) {

  this.hostelService.updateHostel(
    this.selectedHostel.id,
    data
  ).subscribe({

    next: (response: any) => {

      console.log('Hostel updated:', response);

      alert('Hostel updated successfully.');

      this.cancelForm();

      this.loadHostels();

    },

    error: (error) => {

      console.log('Update hostel error:', error);

      let message = 'Unable to update hostel.';

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

} else {

  this.hostelService.createHostel(data).subscribe({

    next: (response: any) => {

      console.log('Hostel created:', response);

      alert('Hostel created successfully.');

      this.cancelForm();

      this.loadHostels();

    },

    error: (error) => {

      console.log('Create hostel error:', error);

      let message = 'Unable to create hostel.';

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


}

deleteHostel(id: number) {

const confirmDelete = confirm(
  'Are you sure you want to delete this hostel?'
);


if (!confirmDelete) {

  return;

}


this.hostelService.deleteHostel(id).subscribe({

  next: (response: any) => {

    console.log('Hostel deleted:', response);

    alert('Hostel deleted successfully.');

    this.loadHostels();

  },

  error: (error) => {

    console.log('Delete hostel error:', error);

    let message = 'Unable to delete hostel.';

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

}
