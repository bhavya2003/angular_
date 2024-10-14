import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card-bracelet',
  standalone: true,
  imports: [],
  templateUrl: './product-card-bracelet.component.html',
  styleUrl: './product-card-bracelet.component.scss'
})
export class ProductCardBraceletComponent {
      
  @Input() product:any

  constructor(private router:Router) {}

  navigate(path:string){

    this.router.navigate([`bracelet-product-details/${this.product.id}`])

    }
}
