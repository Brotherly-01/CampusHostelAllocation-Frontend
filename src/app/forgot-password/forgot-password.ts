import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgotPassword as ForgotPasswordService } from '../services/forgot-password';

@Component({
  selector: 'app-forgot-password',
 imports: [FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {

  email = '';
  resetToken = '';

  @Output() resetPasswordClicked = new EventEmitter<void>();

  constructor(private forgotPasswordService: ForgotPasswordService) {
  }

  forgotPassword() {

    
    this.forgotPasswordService.forgotPassword(this.email).subscribe({

     next: (response) => {

  console.log(response);

  this.resetToken = response;

  alert('Password reset request sent.');

},

      error: (error) => {

        console.log('Forgot password error:', error);

        alert('Password reset request failed.');

      }

    });

  }
    showResetPassword() {
    this.resetPasswordClicked.emit();
  }

}