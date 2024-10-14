import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clothes-type',
  standalone: true,
  imports: [],
  templateUrl: './clothes-type.component.html',
  styleUrl: './clothes-type.component.scss'
})
export class ClothesTypeComponent {

  constructor(private router: Router){

  }

  navigate(path:string){
    this.router.navigate([path])
  }

}
