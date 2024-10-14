import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carousal',
  standalone: true,
  imports: [MatButton,MatIcon,MatButtonModule],
  templateUrl: './carousal.component.html',
  styleUrl: './carousal.component.scss'
})
export class CarousalComponent {


constructor(private router: Router){

}

  navigate(path:string){
    this.router.navigate([path])
  }


}
