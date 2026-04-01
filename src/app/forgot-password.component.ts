import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.html'
})
export class ForgotPasswordComponent {
  protected email = '';

  protected onSubmit(): void {
    // Placeholder: wire up real "forgot password" later.
  }

  protected onReset(): void {
    this.email = '';
  }
}

