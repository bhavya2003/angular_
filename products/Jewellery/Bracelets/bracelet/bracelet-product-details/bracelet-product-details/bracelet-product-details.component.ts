import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { bracelets } from 'assets/Data/bracelets';

@Component({
  selector: 'app-bracelet-product-details',
  standalone: true,
  imports: [CommonModule,MatRadioGroup,MatRadioButton,MatRadioModule,FormsModule],
  templateUrl: './bracelet-product-details.component.html',
  styleUrl: './bracelet-product-details.component.scss'
})
export class BraceletProductDetailsComponent {
  product: any;
  selectedSize: string = '';

  constructor(private activatedroute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    const productId= Number(this.activatedroute.snapshot.paramMap.get("id")); // Get the product ID from the route
      this.product = bracelets.find(p => p.id === productId);

  }

  handleAddToCart(){
    console.log("selected size", this.selectedSize)
    this.router.navigate(['Cart'])
  }

}
