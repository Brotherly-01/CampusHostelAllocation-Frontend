import { Component } from '@angular/core';
import {

  OnInit
} from '@angular/core';
import { Login } from './login/login';

import { Register } from './register/register';

import { Dashboard } from './dashboard/dashboard';

import { AdminDashboard } from './admin-dashboard/admin-dashboard';


@Component({
  selector: 'app-root',

  imports: [
    Login,
    Register,
    Dashboard,
    AdminDashboard
  ],

  templateUrl: './app.html',

  styleUrl: './app.css'
})
export class App implements OnInit {

  showRegister = false;

  isLoggedIn = false;

  loggedInRole = '';


  ngOnInit() {

    const token =
      localStorage.getItem('token');

    const role =
      localStorage.getItem('role');

    if (token && role) {

      this.isLoggedIn = true;

      this.loggedInRole = role;

    }

  }


  showRegisterPage() {

    this.showRegister = true;

  }


  showLoginPage() {

    this.showRegister = false;

  }


  loginSuccessful(role: string) {

    this.isLoggedIn = true;

    this.loggedInRole = role;

  }

}