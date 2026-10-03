import {
ChangeDetectorRef,
Component,
OnInit
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Room as RoomService } from '../services/room';

import { Hostel as HostelService } from '../services/hostel';

@Component({
selector: 'app-manage-rooms',

imports: [
FormsModule
],

templateUrl: './manage-rooms.html',

styleUrl: './manage-rooms.css',
})
export class ManageRooms implements OnInit {

rooms: any[] = [];

hostels: any[] = [];

loading = true;

showForm = false;

editingRoom = false;

selectedRoom: any = null;

constructor(
private roomService: RoomService,

private hostelService: HostelService,

private cdr: ChangeDetectorRef


) {
}

ngOnInit() {

this.loadRooms();

this.loadHostels();

}

loadRooms() {

this.loading = true;

this.roomService.getRooms().subscribe({

  next: (response: any) => {

    console.log('Rooms:', response);

    this.rooms = response;

    this.loading = false;

    this.cdr.detectChanges();

  },

  error: (error) => {

    console.log(
      'Get rooms error:',
      error
    );

    this.loading = false;

    this.cdr.detectChanges();

    alert(
      'Unable to load rooms.'
    );

  }

});

}

loadHostels() {

this.hostelService.getHostels().subscribe({

  next: (response: any) => {

    console.log(
      'Hostels:',
      response
    );

    this.hostels = response;

    this.cdr.detectChanges();

  },

  error: (error) => {

    console.log(
      'Get hostels error:',
      error
    );

    alert(
      'Unable to load hostels.'
    );

  }

});

}

showAddForm() {

this.editingRoom = false;

this.selectedRoom = {

  roomNumber: '',

  capacity: 1,

  hostelId: null

};

this.showForm = true;

}

editRoom(room: any) {

this.editingRoom = true;

this.selectedRoom = {

  id: room.id,

  roomNumber: room.roomNumber,

  capacity: room.capacity,

  hostelId: room.hostelId

};

this.showForm = true;

}

cancelForm() {

this.showForm = false;

this.selectedRoom = null;

}

saveRoom() {

if (!this.selectedRoom) {

  return;

}


const data = {

  roomNumber:
    this.selectedRoom.roomNumber,

  capacity:
    this.selectedRoom.capacity,

  hostelId:
    Number(this.selectedRoom.hostelId)

};


if (this.editingRoom) {

  this.roomService.updateRoom(

    this.selectedRoom.id,

    data

  ).subscribe({

    next: (response: any) => {

      console.log(
        'Room updated:',
        response
      );

      alert(
        'Room updated successfully.'
      );

      this.cancelForm();

      this.loadRooms();

    },

    error: (error) => {

      console.log(
        'Update room error:',
        error
      );

      let message =
        'Unable to update room.';


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

else {

  this.roomService.createRoom(

    data

  ).subscribe({

    next: (response: any) => {

      console.log(
        'Room created:',
        response
      );

      alert(
        'Room created successfully.'
      );

      this.cancelForm();

      this.loadRooms();

    },

    error: (error) => {

      console.log(
        'Create room error:',
        error
      );

      let message =
        'Unable to create room.';


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

deleteRoom(id: number) {

const confirmDelete = confirm(

  'Are you sure you want to delete this room?'

);


if (!confirmDelete) {

  return;

}


this.roomService.deleteRoom(id).subscribe({

  next: (response: any) => {

    console.log(
      'Room deleted:',
      response
    );

    alert(
      'Room deleted successfully.'
    );

    this.loadRooms();

  },

  error: (error) => {

    console.log(
      'Delete room error:',
      error
    );

    let message =
      'Unable to delete room.';


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
