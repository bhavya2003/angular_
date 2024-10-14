import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { under } from 'assets/Data/under';

@Component({
  selector: 'app-under-product-details',
  standalone: true,
  imports: [CommonModule, MatRadioButton,MatRadioGroup,FormsModule],
  templateUrl: './under-product-details.component.html',
  styleUrl: './under-product-details.component.scss'
})
export class UnderProductDetailsComponent {
  product: any;
  selectedSize: string = '';

  constructor(private activatedroute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const productId= Number(this.activatedroute.snapshot.paramMap.get("id")); // Get the product ID from the route
      this.product = under.find(p => p.id === productId);

  }

  handleAddToCart(){
    console.log("selected size", this.selectedSize)
    this.router.navigate(['Cart'])
  }


}
