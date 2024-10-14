// import { Component, Input } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductService } from '../../../../../../../State/Product/product.service';

// @Component({
//   selector: 'app-bottomwear-product-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './bottomwear-product-card.component.html',
//   styleUrl: './bottomwear-product-card.component.scss'
// })
// export class BottomwearProductCardComponent {
//   products: any[] = [];
//   product: any; // To hold the fetched product

//   @Input() productId: string;


//   constructor(private router:Router,private productService: ProductService,private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.getProductById(); // Fetch products when component initializes
//   }

//   getProductById() {
//     if (this.productId) {
//       this.productService.findProductsById(this.productId).subscribe(
//         (data: any) => {
//           this.product = data; // Set the product details
//           console.log('Fetched product:', this.product); // Log the fetched product for debugging
//         },
//         error => {
//           console.error('Error fetching product by ID:', error);
//         }
//       );
//     }
//   }


//   navigate(path:string){

//     this.router.navigate([`/product-details/${this.product.id}`])

//     }

 
  
// }


// import { Component, Input } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductService } from '../../../../../../../State/Product/product.service';

// @Component({
//   selector: 'app-bottomwear-product-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './bottomwear-product-card.component.html',
//   styleUrls: ['./bottomwear-product-card.component.scss'] // Corrected here
// })
// export class BottomwearProductCardComponent {
//   product: any; // To hold the fetched product

//   @Input() productId!: string; // Expecting product ID to be passed as an Input

//   constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     console.log('Product ID:', this.productId); // Log productId for debugging
//     this.getProductById(); // Fetch product when component initializes
//   }

//   getProductById() {
//     if (this.productId) {
//       this.productService.findProductsById(this.productId).subscribe(
//         (data: any) => {
//           this.product = data; // Set the product details
//           console.log('Fetched product:', this.product); // Log the fetched product for debugging
//         },
//         error => {
//           console.error('Error fetching product by ID:', error);
//         }
//       );
//     } else {
//       console.error('Product ID is not defined');
//     }
//   }

//   navigate() {
//     if (this.product && this.product.id) {
//       this.router.navigate([`/product-details/${this.product.id}`]);
//     } else {
//       console.error('Product ID is not defined');
//     }
//   }
// }

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../../../../../State/Product/product.service';
import { bottomwear } from '../../../../../../../../assets/Data/Womenbottomwear'; // Adjust the import path accordingly

@Component({
  selector: 'app-bottomwear-product-card',
  standalone: true,
  imports: [],
  templateUrl: './bottomwear-product-card.component.html',
  styleUrls: ['./bottomwear-product-card.component.scss']
})
export class BottomwearProductCardComponent {
  @Input() product:any
  products = bottomwear; 
 
  constructor(private router:Router){
    
  }

  navigate(path:string){
    this.router.navigate([path])
  }

  navigateToProductDetails() {
    this.router.navigate([`bottomwear-product-details/${this.product.id}`]);
  }
}
