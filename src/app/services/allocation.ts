import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Allocation {

  private apiUrl =
    'https://localhost:7273/api/Allocations';


  constructor(
    private http: HttpClient
  ) {
  }


  getMyAllocation() {

    const token =
      localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(
      `${this.apiUrl}/my-allocation`,
      { headers }
    );

  }


  getAllAllocations() {

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
