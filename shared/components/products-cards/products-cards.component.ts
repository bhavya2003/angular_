import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-cards',
  standalone: true,
  imports: [],
  templateUrl: './products-cards.component.html',
  styleUrl: './products-cards.component.scss'
})
export class ProductsCardsComponent {

  @Input() product:any
 
  constructor(private router:Router){
    
  }

  navigate(path:string){

    this.router.navigate([`trends-product-details/${this.product.id}`])

    }

}
