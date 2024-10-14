import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { url } from 'inspector';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product:any

  constructor(private router:Router) {}

  navigate(){

    this.router.navigate([`product-details/${this.product.id}`]);

    }

 
  

}
