import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class Hostel {

private apiUrl = 'https://localhost:7273/api/Hostels';

private applicationUrl =
'https://localhost:7273/api/HostelApplications';

constructor(private http: HttpClient) {
}

getHostels() {


const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.get(
  this.apiUrl,
  { headers }
);


}

applyForHostel(hostelId: number) {


const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.post(
  this.applicationUrl,
  {
    hostelId: hostelId
  },
  { headers }
);


}

getHostel(id: number) {


const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.get(
  `${this.apiUrl}/${id}`,
  { headers }
);


}

createHostel(data: any) {

const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.post(
  this.apiUrl,
  data,
  { headers }
);

}

updateHostel(
id: number,
data: any
) {


const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.put(
  `${this.apiUrl}/${id}`,
  data,
  { headers }
);


}

deleteHostel(id: number) {


const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.delete(
  `${this.apiUrl}/${id}`,
  { headers }
);


}

}

