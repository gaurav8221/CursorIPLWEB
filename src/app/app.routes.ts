import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { ForgotPasswordComponent } from './forgot-password.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent }
  ,{ path: 'login', component: LoginComponent }
  ,{ path: 'signup', component: SignupComponent }
  ,{ path: 'forgot-password', component: ForgotPasswordComponent }
];
