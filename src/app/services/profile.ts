import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Profile {

  private apiUrl = 'https://localhost:7273/api/Auth';

  constructor(private http: HttpClient) {
  }

  getProfile() {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(
      `${this.apiUrl}/profile`,
      { headers }
    );

  }

}
