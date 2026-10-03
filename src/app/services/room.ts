import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class Room {

private apiUrl =
'https://localhost:7273/api/Rooms';

constructor(
private http: HttpClient
) {
}

getRooms() {

const token =
  localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.get(
  this.apiUrl,
  { headers }
);

}

getRoom(id: number) {

const token =
  localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.get(
  `${this.apiUrl}/${id}`,
  { headers }
);


}

createRoom(data: any) {

const token =
  localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.post(
  this.apiUrl,
  data,
  { headers }
);


}

updateRoom(
id: number,
data: any
) {

const token =
  localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.put(
  `${this.apiUrl}/${id}`,
  data,
  { headers }
);


}

deleteRoom(id: number) {

const token =
  localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.delete(
  `${this.apiUrl}/${id}`,
  { headers }
);

}

}

