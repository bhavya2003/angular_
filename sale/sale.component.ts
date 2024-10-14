import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [MatButton,MatButtonModule,MatIcon],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent {

  constructor(private router: Router){

  }

  navigate(path:string){
    this.router.navigate([path])
  }

}
