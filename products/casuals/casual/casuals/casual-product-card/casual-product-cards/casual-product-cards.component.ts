import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casual-product-cards',
  standalone: true,
  imports: [],
  templateUrl: './casual-product-cards.component.html',
  styleUrl: './casual-product-cards.component.scss'
})
export class CasualProductCardsComponent {

  @Input() product:any

  constructor(private router:Router) {}

  navigate(path:string){

    this.router.navigate([`casuals-product-details/${this.product.id}`])

    }


}
