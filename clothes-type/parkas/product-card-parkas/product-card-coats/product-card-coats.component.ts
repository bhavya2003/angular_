import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card-coats',
  standalone: true,
  imports: [],
  templateUrl: './product-card-coats.component.html',
  styleUrl: './product-card-coats.component.scss'
})
export class ProductCardCoatsComponent {
  @Input() product:any

  constructor(private router:Router) {}

  navigate(path:string){

    this.router.navigate([`coats-product-details/${this.product.id}`])

    }


}
