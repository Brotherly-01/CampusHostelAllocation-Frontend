import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class HostelApplication {

private apiUrl =
'https://localhost:7273/api/HostelApplications';

constructor(
private http: HttpClient
) {
}

getMyApplication() {

const token =
  localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.get(
  `${this.apiUrl}/my-application`,
  { headers }
);

}

getAllApplications() {

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

updateApplicationStatus(
id: number,
status: string
) {

const token =
  localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.put(
  `${this.apiUrl}/${id}/status`,
  {
    status: status
  },
  { headers }
);

}

}
