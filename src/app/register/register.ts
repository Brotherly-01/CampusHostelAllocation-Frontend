import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register as RegisterService } from '../services/register';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  fullName = '';
  email = '';
  phoneNumber = '';
  gender = '';
  password = '';
  confirmPassword = '';

  @Output() loginClicked = new EventEmitter<void>();

  showLogin() {
    this.loginClicked.emit();
  }

  constructor(private registerService: RegisterService) {
  }

  register() {

    if (this.password !== this.confirmPassword) {

      alert('Passwords do not match.');

      return;

    }

   const data = {
  fullName: this.fullName,
  email: this.email,
  phoneNumber: this.phoneNumber,
  gender: this.gender,
  password: this.password,
  confirmPassword: this.confirmPassword
};

    this.registerService.register(data).subscribe({

      next: (response) => {

        console.log(response);

        alert('Registration successful.');

      },

      error: (error) => {

       console.log('Registration error:', error);

          alert(
            'Status: ' + error.status +
            '\nStatus Text: ' + error.statusText +
            '\nMessage: ' + error.message
          );

        }

    });
  }
}