import { Component } from '@angular/core';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('TestComponent initialized');
    this.authService.login({ username: 'test', password: 'test' });
  }
}


