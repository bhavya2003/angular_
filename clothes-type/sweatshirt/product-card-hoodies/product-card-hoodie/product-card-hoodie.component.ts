import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card-hoodie',
  standalone: true,
  imports: [],
  templateUrl: './product-card-hoodie.component.html',
  styleUrl: './product-card-hoodie.component.scss'
})
export class ProductCardHoodieComponent {
  @Input() product:any

  constructor(private router:Router) {}

  navigate(path:string){

    this.router.navigate([`hoodies-product-details/${this.product.id}`])

    }


}
