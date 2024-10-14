import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../product-card/product-card.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule,ProductCardComponent,RouterModule],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {

  @Input() title: any
  @Input() products:any

  constructor(private router:Router) {}

  navigate(path:string){

    this.router.navigate([`/product-details/${this.products.id}`])

    }

}
