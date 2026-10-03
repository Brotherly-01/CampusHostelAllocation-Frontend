import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPassword {

  private apiUrl = 'https://localhost:7273/api/Auth';

  constructor(private http: HttpClient) {
  }

  resetPassword(data: any) {

    return this.http.post(
      `${this.apiUrl}/reset-password`,
      data,
      { responseType: 'text' }
    );

  }

}
