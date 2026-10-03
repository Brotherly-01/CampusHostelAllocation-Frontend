import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResetPassword as ResetPasswordService } from '../services/reset-password';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {

  email = '';
  token = '';
  newPassword = '';
  confirmPassword = '';

  constructor(private resetPasswordService: ResetPasswordService) {
  }

  resetPassword() {

  if (this.newPassword !== this.confirmPassword) {

    alert('Passwords do not match.');

    return;

  }

  const data = {
    email: this.email,
    token: this.token,
    newPassword: this.newPassword,
    confirmPassword: this.confirmPassword
  };

  this.resetPasswordService.resetPassword(data).subscribe({

    next: (response) => {

      console.log(response);

      alert('Password reset successfully.');

    },

      error: (error) => {

        console.log('Reset password error:', error);

        alert('Password reset failed.');

      }

    });

  }
}