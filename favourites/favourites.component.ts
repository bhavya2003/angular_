import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent { 

  constructor(private router:Router){

  }

  NavigateTo(path:any) {
    this.router.navigate([path])
  }

}
