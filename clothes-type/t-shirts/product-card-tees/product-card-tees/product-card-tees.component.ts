import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card-tees',
  standalone: true,
  imports: [],
  templateUrl: './product-card-tees.component.html',
  styleUrl: './product-card-tees.component.scss'
})
export class ProductCardTeesComponent {
  @Input() product:any

  constructor(private router:Router) {}

  navigate(path:string){

    this.router.navigate([`tees-product-details/${this.product.id}`])

    }


}
