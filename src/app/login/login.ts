import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Auth } from '../services/auth';

import { ForgotPassword } from '../forgot-password/forgot-password';

import { ResetPassword } from '../reset-password/reset-password';


@Component({
  selector: 'app-login',

  imports: [
    FormsModule,
    ForgotPassword,
    ResetPassword
  ],

  templateUrl: './login.html',

  styleUrl: './login.css',
})
export class Login {

  email = '';

  password = '';

  showForgotPassword = false;

  showResetPassword = false;


  @Output() registerClicked =
    new EventEmitter<void>();


  @Output() loginSuccess =
    new EventEmitter<string>();


  constructor(
    private auth: Auth
  ) {
  }


  showRegister() {

    this.registerClicked.emit();

  }


  showForgotPasswordPage() {

    this.showForgotPassword = true;

    this.showResetPassword = false;

  }


  showResetPasswordPage() {

    this.showResetPassword = true;

    this.showForgotPassword = false;

  }


  login() {

    this.auth.login(
      this.email,
      this.password
    ).subscribe({

      next: (response) => {

        console.log(
          'Login response:',
          response
        );


        localStorage.setItem(
          'token',
          response.token
        );


        localStorage.setItem(
          'fullName',
          response.fullName
        );


        localStorage.setItem(
          'role',
          response.role
        );


        this.loginSuccess.emit(
          response.role
        );

      },


      error: (error) => {

        console.log(
          'Login error:',
          error
        );


        let message =
          'Login failed.';


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