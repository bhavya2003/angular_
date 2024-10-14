import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from 'app/State/Auth/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,MatIconModule,MatDivider,RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
