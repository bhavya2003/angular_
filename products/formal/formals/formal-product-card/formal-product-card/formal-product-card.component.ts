import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formal-product-card',
  standalone: true,
  imports: [],
  templateUrl: './formal-product-card.component.html',
  styleUrl: './formal-product-card.component.scss'
})
export class FormalProductCardComponent {

  @Input() product:any

  constructor(private router:Router) {}

  navigate(path:string){

    this.router.navigate([`formals-product-details/${this.product.id}`])

    }


}
