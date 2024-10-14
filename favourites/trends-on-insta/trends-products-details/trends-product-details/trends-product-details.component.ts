import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { trends } from 'assets/Data/trends';

@Component({
  selector: 'app-trends-product-details',
  standalone: true,
  imports: [CommonModule,MatRadioButton,MatRadioGroup,FormsModule],
  templateUrl: './trends-product-details.component.html',
  styleUrl: './trends-product-details.component.scss'
})
export class TrendsProductDetailsComponent {

  product: any;
  selectedSize: string = '';

  constructor(private activatedroute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const productId= Number(this.activatedroute.snapshot.paramMap.get("id")); // Get the product ID from the route
      this.product = trends.find(p => p.id === productId);

  }

  handleAddToCart(){
    console.log("selected size", this.selectedSize)
    this.router.navigate(['Cart'])
  }

}
