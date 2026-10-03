import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassword {

  private apiUrl = 'https://localhost:7273/api/Auth';

  constructor(private http: HttpClient) {
  }

  forgotPassword(email: string) {

    return this.http.post(
      `${this.apiUrl}/forgot-password`,
      {
        email: email
      },
      { responseType: 'text' }
    );

  }

}