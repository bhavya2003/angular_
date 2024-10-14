// import { CommonModule } from '@angular/common';
// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { MatButtonModule } from '@angular/material/button';
// import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
// import { bottomwear } from '../../../../../assets/Data/Womenbottomwear';
// import { tops } from '../../../../../assets/Data/tops';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { RecommendationsComponent } from './recommendations/recommendations.component';
// import { ProductService } from '../../../../State/Product/product.service';
// import { CartService } from '../../../../State/cart/cart.service';
// import { Subscription, Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';

// // Import the interfaces
// import { Product } from '../../../../State/admin/models/Product.model'; // Adjust the path accordingly
// import { Store } from '@ngrx/store';
// import { AppState } from 'app/reducer';
// import { findProductByIdRequest } from 'app/State/Product/product.action';

// @Component({
//   selector: 'app-product-details',
//   standalone: true,
//   imports: [
//     RouterModule,
//     MatButtonModule,
//     MatRadioModule,
//     CommonModule,
//     FormsModule,
//     RecommendationsComponent,
//     MatRadioModule,
//     MatRadioButton
//   ],
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.scss'],
// })
// export class ProductDetailsComponent implements OnInit{

// product: any; // Use null initially
//   productId!: number;
//   selectedSize: string = ''; // Initialize selected size

//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProductService,
//     private router: Router,
//     private cartService: CartService,
//     private store: Store<AppState>
//   ) {}

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.productId = +params['id']; // Convert to number
//       this.getProductDetails(this.productId);
//       this.store.dispatch(findProductByIdRequest({ productId: this.productId }));
//     });
//   }

//   getProductDetails(id: number): void {
//     this.productService.findProductsById(id).subscribe({
//       next: (data) => {
//         this.product = data; // Set the product details
//       },
//       error: (err) => {
//         console.error(err); // Handle the error
//       }
//     });
//   }

//   handleAddToCart() {
//     if (!this.selectedSize) {
//       alert('Please select a size before adding to cart.');
//       return; // Prevent adding to cart if no size is selected
//     }

   

//     if (this.product) {
//       const cartItem = {
//         productId: this.product._id || this.product.numericId,
//           // id: this.product.numericId || null,  // Use numeric ID
//           product: {
//               brand: this.product.brand || null,  // Ensure brand is captured
//               title: this.product.title || null,  // Correct title
//               description: this.product.description || null,  // Correct description
//               image: this.product.imageUrl || null,  // Ensure image URL is used
//           },
//           price: this.product.price || 0,  // Add price with default value
//           discountedPrice: this.product.discountedPrice || 0,  // Add discounted price with default value
//           size: this.selectedSize || null,  // Ensure selected size is set
//           quantity: 1 // Default to 1 for a new cart item
//       };

//       this.cartService.addItemToCart(cartItem); // Add item to the cart via service
//       this.router.navigate(['Cart']); // Navigate to the cart page after adding
//     }
//   }

//   calculateDiscountPercent(originalPrice: number, discountedPrice: number): number {
//     if (originalPrice <= 0) return 0; // Prevent division by zero
//     return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
//   }
// }


import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { bottomwear } from '../../../../../assets/Data/Womenbottomwear';
import { tops } from '../../../../../assets/Data/tops';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ProductService } from '../../../../State/Product/product.service';
import { CartService } from '../../../../State/cart/cart.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Import the interfaces
import { Product } from '../../../../State/admin/models/Product.model'; // Adjust the path accordingly
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducer';
import { findProductByIdRequest } from 'app/State/Product/product.action';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatRadioModule,
    CommonModule,
    FormsModule,
    RecommendationsComponent,
    MatRadioModule,
    MatRadioButton
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  product: any; // Use null initially
  productId!: number;
  selectedSize: string = ''; // Initialize selected size

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; // Convert to number
      this.getProductDetails(this.productId);
      this.store.dispatch(findProductByIdRequest({ productId: this.productId }));
    });
  }

  getProductDetails(id: number): void {
    this.productService.findProductsById(id).subscribe({
      next: (data) => {
        this.product = data; // Set the product details
      },
      error: (err) => {
        console.error(err); // Handle the error
      }
    });
  }

  handleAddToCart() {
    if (!this.selectedSize) {
      alert('Please select a size before adding to cart.');
      return; // Prevent adding to cart if no size is selected
    }

    if (this.product) {
      const cartItem = {
        productId: this.product.id || this.product.numericId,  // Use numeric ID (ensure conversion)
        product: {
          brand: this.product.brand || null,  // Ensure brand is captured
          title: this.product.title || null,  // Correct title
          description: this.product.description || null,  // Correct description
          image: this.product.imageUrl || null,  // Ensure image URL is used
        },
        price: this.product.price || 0,  // Add price with default value
        discountedPrice: this.product.discountedPrice || 0,  // Add discounted price with default value
        size: this.selectedSize || null,  // Ensure selected size is set
        quantity: 1 // Default to 1 for a new cart item
      };

      this.cartService.addItemToCart(cartItem); // Add item to the cart via service
      this.router.navigate(['Cart']); // Navigate to the cart page after adding
    }
  }

  calculateDiscountPercent(originalPrice: number, discountedPrice: number): number {
    if (originalPrice <= 0) return 0; // Prevent division by zero
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  }
}