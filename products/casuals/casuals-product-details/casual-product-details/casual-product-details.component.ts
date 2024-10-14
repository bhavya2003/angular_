import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { casuals } from 'assets/Data/casuals';

@Component({
  selector: 'app-casual-product-details',
  standalone: true,
  imports: [CommonModule,MatRadioGroup,MatRadioButton,MatRadioModule,FormsModule],
  templateUrl: './casual-product-details.component.html',
  styleUrl: './casual-product-details.component.scss'
})
export class CasualProductDetailsComponent {

  product: any;
  selectedSize: string = '';

  constructor(private activatedroute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const productId= Number(this.activatedroute.snapshot.paramMap.get("id")); // Get the product ID from the route
      this.product = casuals.find(p => p.id === productId);

  }

  handleAddToCart(){
    console.log("selected size", this.selectedSize)
    this.router.navigate(['Cart'])
  }

}

