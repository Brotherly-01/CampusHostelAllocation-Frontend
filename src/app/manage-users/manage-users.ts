import {
ChangeDetectorRef,
Component,
OnInit
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Users as UsersService } from '../services/users';

@Component({
selector: 'app-manage-users',
imports: [
FormsModule
],
templateUrl: './manage-users.html',
styleUrl: './manage-users.css',
})
export class ManageUsers implements OnInit {

users: any[] = [];

loading = true;

showEditForm = false;

selectedUser: any = null;

constructor(
private usersService: UsersService,
private cdr: ChangeDetectorRef
) {
}

ngOnInit() {
this.loadUsers();
}

loadUsers() {


this.loading = true;

this.usersService.getUsers().subscribe({

  next: (response: any) => {

    console.log('Users:', response);

    this.users = response;

    this.loading = false;

    this.cdr.detectChanges();

  },

  error: (error) => {

    console.log('Get users error:', error);

    this.loading = false;

    this.cdr.detectChanges();

    alert('Unable to load users.');

  }

});


}

editUser(user: any) {


this.selectedUser = {

  id: user.id,

  fullName: user.fullName,

  email: user.email,

  phoneNumber: user.phoneNumber,

  gender: user.gender

};

this.showEditForm = true;


}

cancelEdit() {


this.showEditForm = false;

this.selectedUser = null;


}

updateUser() {


if (!this.selectedUser) {

  return;

}

const data = {

  fullName: this.selectedUser.fullName,

  email: this.selectedUser.email,

  phoneNumber: this.selectedUser.phoneNumber,

  gender: this.selectedUser.gender

};

this.usersService.updateUser(
  this.selectedUser.id,
  data
).subscribe({

  next: (response: any) => {

    console.log('User updated:', response);

    alert('User updated successfully.');

    this.showEditForm = false;

    this.selectedUser = null;

    this.loadUsers();

  },

  error: (error) => {

    console.log('Update user error:', error);

    let message = 'Unable to update user.';

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
deactivateUser(id: string) {


const confirmDeactivate = confirm(
  'Are you sure you want to deactivate this user?'
);

if (!confirmDeactivate) {

  return;

}

this.usersService.deactivateUser(id).subscribe({

  next: (response: any) => {

    console.log('User deactivated:', response);

    alert('User deactivated successfully.');

    this.loadUsers();

  },

  error: (error) => {

    console.log('Deactivate user error:', error);

    let message = 'Unable to deactivate user.';

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

activateUser(id: string) {

const confirmActivate = confirm(
  'Are you sure you want to activate this user?'
);

if (!confirmActivate) {

  return;

}

this.usersService.activateUser(id).subscribe({

  next: (response: any) => {

    console.log('User activated:', response);

    alert('User activated successfully.');

    this.loadUsers();

  },

  error: (error) => {

    console.log('Activate user error:', error);

    let message = 'Unable to activate user.';

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




this.usersService.deactivateUser(id).subscribe({

  next: (response: any) => {

    console.log('User deactivated:', response);

    alert('User deactivated successfully.');

    this.loadUsers();

  },

  error: (error) => {

    console.log('Deactivate user error:', error);

    let message = 'Unable to deactivate user.';

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