import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { formals } from 'assets/Data/formals';

@Component({
  selector: 'app-formals-product-details',
  standalone: true,
  imports: [CommonModule,MatRadioGroup,MatRadioButton,MatRadioModule,FormsModule],
  templateUrl: './formals-product-details.component.html',
  styleUrl: './formals-product-details.component.scss'
})
export class FormalsProductDetailsComponent {

  product: any;
  selectedSize: string = '';

  constructor(private activatedroute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const productId= Number(this.activatedroute.snapshot.paramMap.get("id")); // Get the product ID from the route
      this.product = formals.find(p => p.id === productId);

  }

  handleAddToCart(){
    console.log("selected size", this.selectedSize)
    this.router.navigate(['Cart'])
  }

}
