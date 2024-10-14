import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { hoodies } from 'assets/Data/hoodies';

@Component({
  selector: 'app-hoodies-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule,MatRadioButton,MatRadioGroup],
  templateUrl: './hoodies-product-details.component.html',
  styleUrl: './hoodies-product-details.component.scss'
})
export class HoodiesProductDetailsComponent {

  product: any;
  selectedSize: string = '';

  constructor(private activatedroute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const productId= Number(this.activatedroute.snapshot.paramMap.get("id")); // Get the product ID from the route
      this.product = hoodies.find(p => p.id === productId);

  }

  handleAddToCart(){
    console.log("selected size", this.selectedSize)
    this.router.navigate(['Cart'])
  }
}
