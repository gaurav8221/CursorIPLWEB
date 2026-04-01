import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html'
})
export class LoginComponent {
  protected username = '';
  protected password = '';
  protected submitted = false;
  protected usernameError = false;
  protected passwordError = false;

  // Basic email validation: local@domain.tld (no whitespace)
  private readonly usernameEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // At least 8 chars, 1 uppercase letter, 1 special character (non-alphanumeric).
  private readonly passwordRegex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

  protected get showUsernameError(): boolean {
    return this.submitted && this.usernameError;
  }

  protected get showPasswordError(): boolean {
    return this.submitted && this.passwordError;
  }

  protected onSubmit(event?: Event): void {
    event?.preventDefault();
    this.submitted = true;
    const usernameTrimmed = this.username.trim();
    this.usernameError = usernameTrimmed.length === 0 || !this.usernameEmailRegex.test(usernameTrimmed);
    this.passwordError = this.password.length === 0 || !this.passwordRegex.test(this.password);
  }

  protected onReset(): void {
    this.username = '';
    this.password = '';
    this.submitted = false;
    this.usernameError = false;
    this.passwordError = false;
  }
}

