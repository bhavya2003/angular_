import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card-earrings',
  standalone: true,
  imports: [],
  templateUrl: './product-card-earrings.component.html',
  styleUrl: './product-card-earrings.component.scss'
})
export class ProductCardEarringsComponent {

  @Input() product:any

  constructor(private router:Router) {}

  navigate(path:string){

    this.router.navigate([`earrings-product-details/${this.product.id}`])

    }

}
