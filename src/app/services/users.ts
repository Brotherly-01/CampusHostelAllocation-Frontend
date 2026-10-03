import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class Users {

private apiUrl = 'https://localhost:7273/api/Users';

constructor(private http: HttpClient) {
}

getUsers() {

const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.get(
  this.apiUrl,
  { headers }
);

}

getUser(id: string) {

const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.get(
  `${this.apiUrl}/${id}`,
  { headers }
);

}

updateUser(
id: string,
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

deactivateUser(id: string) {

const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.put(
  `${this.apiUrl}/${id}/deactivate`,
  {},
  { headers }
);


}

activateUser(id: string) {

const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

return this.http.put(
  `${this.apiUrl}/${id}/activate`,
  {},
  { headers }
);


}

}

