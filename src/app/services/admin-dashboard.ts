import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  private apiUrl =
    'https://localhost:7273/api/AdminDashboard';


  constructor(
    private http: HttpClient
  ) {
  }


  getStatistics() {

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

}