import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card-under-500',
  standalone: true,
  imports: [],
  templateUrl: './product-card-under-500.component.html',
  styleUrl: './product-card-under-500.component.scss'
})
export class ProductCardUnder500Component {

  
  @Input() product:any

  constructor(private router:Router) {}

  navigate(path:string){

    this.router.navigate([`under-product-details/${this.product.id}`])

    }

}
