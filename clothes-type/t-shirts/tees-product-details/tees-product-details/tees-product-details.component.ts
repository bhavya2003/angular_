import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { tees } from 'assets/Data/tees';

@Component({
  selector: 'app-tees-product-details',
  standalone: true,
  imports: [CommonModule,MatRadioButton,MatRadioGroup,FormsModule],
  templateUrl: './tees-product-details.component.html',
  styleUrl: './tees-product-details.component.scss'
})
export class TeesProductDetailsComponent {
  product: any;
  selectedSize: string = '';

  constructor(private activatedroute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const productId= Number(this.activatedroute.snapshot.paramMap.get("id")); // Get the product ID from the route
      this.product = tees.find(p => p.id === productId);

  }

  handleAddToCart(){
    console.log("selected size", this.selectedSize)
    this.router.navigate(['Cart'])
  }

}
