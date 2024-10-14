import { Component } from '@angular/core';
import { AuthService } from '../../../../State/Auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatLabel, MatButtonModule, MatFormFieldModule, MatCardContent, MatCardTitle, MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {

    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    const loginData = { email: this.email, password: this.password };


    this.authService.login(loginData);


    if (this.email === 'admin@gmail.com' && this.password === '12345678') {

      console.log('Login successful');
      console.log("login Data", loginData);
      this.router.navigate(['/admin']);
    } else {

      console.log('Invalid credentials');
      alert('Access denied. Invalid credentials.');
    }
  }
}
