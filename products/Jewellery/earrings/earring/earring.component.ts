// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { MatButton } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatRadioModule } from '@angular/material/radio';
// import { ActivatedRoute, Router, RouterModule } from '@angular/router';
// import { ProductCardEarringsComponent } from './product-card-earrings/product-card-earrings/product-card-earrings.component';
// import { filters, singleFilter } from '../../../filterdata';
// import { tops } from '../../../../../../../../assets/Data/tops';
// import { earrings } from '../../../../../../../../assets/Data/earrings';
// import { ProductService } from 'app/State/Product/product.service';

// @Component({
//   selector: 'app-earring',
//   standalone: true,
//   imports: [RouterModule,MatIconModule,MatRadioModule,MatButton,MatMenuModule,MatDividerModule,CommonModule,MatCheckboxModule, MatMenuModule,MatIconModule,CommonModule,FormsModule,ProductCardEarringsComponent],
//   templateUrl: './earring.component.html',
//   styleUrl: './earring.component.scss'
// })
// export class EarringComponent {

//    Earrings: any[] = earrings; // Static rings
//    dynamicearrings: any[] = []; // Fetched dynamic products
//    combinedearrings: any[] = []; // Combined static and dynamic products

// constructor(
//   private productService: ProductService,
//   private activatedRoute: ActivatedRoute,
//   private router: Router
// ) {}

// ngOnInit() {
//   this.loadProducts(); // Load dynamic products
// }

// loadProducts() {
//   this.productService.getAllProducts().subscribe(
//     (response: any) => {
//       console.log('Fetched Products:', response);

//       if (Array.isArray(response)) {
//         const currentTime = new Date();

//         // Filter products created today
//         const filteredProducts = response.filter((product: any) => {
//           const productDate = new Date(product.createdAt);

//           // Check if the product was created on the same day
//           return (
//             productDate.getFullYear() === currentTime.getFullYear() &&
//             productDate.getMonth() === currentTime.getMonth() &&
//             productDate.getDate() === currentTime.getDate()
//           );
//         });

//         // Remove duplicates based on unique identifier (_id)
//         this.dynamicearrings = this.removeDuplicatesById(filteredProducts);
//       } else {
//         console.error('Error: No valid product data found', response);
//       }

//       this.combineProducts();
//     },
//     (error) => {
//       console.error('Error fetching dynamic products:', error);
//       this.dynamicearrings = []; // Handle the error case
//     }
//   );
// }

// addNewProduct(product: any) {
//   const currentTime = new Date();
//   const productDate = new Date(product.createdAt);

//   // Check if the product was created today
//   if (
//     productDate.getFullYear() === currentTime.getFullYear() &&
//     productDate.getMonth() === currentTime.getMonth() &&
//     productDate.getDate() === currentTime.getDate()
//   ) {
//     // ** Add new product only if it doesn't already exist (based on _id or another unique field) **
//     if (!this.dynamicearrings.some(p => p._id === product._id)) {
//       this.dynamicearrings.unshift(product); // Add to the beginning
//     } else {
//       console.warn('Duplicate product not added:', product);
//     }

//     this.combineProducts();
//   } else {
//     console.warn('Product not created today:', product);
//   }
// }

// // ** Helper method to remove duplicate products by ID (or any unique field) **
// removeDuplicatesById(products: any[]): any[] {
//   const uniqueProducts: any[] = [];
//   const productIds = new Set();

//   products.forEach((product) => {
//     if (!productIds.has(product._id)) {
//       uniqueProducts.push(product); // Add the unique product
//       productIds.add(product._id); // Keep track of added product IDs
//     }
//   });

//   return uniqueProducts; // Return unique products
// }

// combineProducts() {
//   this.combinedearrings = [...this.dynamicearrings, ...this.Earrings]; // Ensure dynamic products come first
//   console.log('Combined Rings:', this.combinedearrings); // Debug output
// }

// deleteProduct(productId: string) {
//   this.productService.deleteProduct(productId).subscribe(
//     (response) => {
//       console.log('Product deleted successfully:', response);
//       // Remove the deleted product from dynamicRings
//       this.dynamicearrings = this.dynamicearrings.filter(product => product._id !== productId);
//       this.combineProducts();
//     },
//     (error) => {
//       console.error('Error deleting product:', error);
//     }
//   );
// }

// sortProducts(order: 'asc' | 'desc'): void {
//      if (order === 'asc') {
//        this.combinedearrings.sort((a, b) => a.price - b.price); // Sort by price low to high
//      } else {
//        this.combinedearrings.sort((a, b) => b.price - a.price); // Sort by price high to low
//      }
//    }

  
// //    Earrings:any

// //   constructor(private activatedRoute:ActivatedRoute, private router:Router){

// //   }


// //   ngOnInit(){
// //      this.Earrings=earrings
// //   }


// //    handleMultipleSelectFilter(value:string, sectionId:string){
// //      const queryParams={...this.activatedRoute.snapshot.queryParams};

// //      console.log("query params",queryParams)
// //      // const filterValue=queryParams[sectionId]?

// //      const filterValues=queryParams[sectionId]?queryParams[sectionId].split(","):[];

// //      const valueIndex=filterValues.indexOf(value);

// //      if(valueIndex!=-1){
// //            filterValues.splice(valueIndex,1)
// //      }
// //      else{
// //         filterValues.push(value);
// //      }

// //      if(filterValues.length>0){
// //         queryParams[sectionId]=filterValues.join(",")
// //      }
// //      else{
// //         delete queryParams[sectionId];
// //      }

// //      this.router.navigate([],{queryParams})

// //    }

// //    handleSingleSelectFilter(value:string, sectionId:string){
// //      const queryParams={...this.activatedRoute.snapshot.queryParams};
// //      queryParams[sectionId]=value;
// //      this.router.navigate([],{queryParams})

// //      console.log(queryParams)
// //    }


// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductCardEarringsComponent } from './product-card-earrings/product-card-earrings/product-card-earrings.component';
import { filters, singleFilter } from '../../../filterdata';
import { tops } from '../../../../../../../../assets/Data/tops';
import { earrings } from '../../../../../../../../assets/Data/earrings';
import { ProductService } from 'app/State/Product/product.service';

@Component({
  selector: 'app-earring',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatRadioModule, MatButton, MatMenuModule, MatDividerModule, CommonModule, MatCheckboxModule, MatMenuModule, MatIconModule, CommonModule, FormsModule, ProductCardEarringsComponent],
  templateUrl: './earring.component.html',
  styleUrls: ['./earring.component.scss']
})
export class EarringComponent {
  Earrings: any[] = earrings; // Static earrings
  dynamicearrings: any[] = []; // Fetched dynamic products
  combinedearrings: any[] = []; // Combined static and dynamic products

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts(); // Load dynamic products
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        console.log('Fetched Products:', response);

        if (Array.isArray(response)) {
          const currentTime = new Date();

          // Filter products created today
          const filteredProducts = response.filter((product: any) => {
            const productDate = new Date(product.createdAt);

            // Check if the product was created on the same day
            return (
              productDate.getFullYear() === currentTime.getFullYear() &&
              productDate.getMonth() === currentTime.getMonth() &&
              productDate.getDate() === currentTime.getDate()
            );
          });

          // Remove duplicates based on unique identifier (_id)
          this.dynamicearrings = this.removeDuplicatesById(filteredProducts);
        } else {
          console.error('Error: No valid product data found', response);
        }

        this.combineProducts();
      },
      (error) => {
        console.error('Error fetching dynamic products:', error);
        this.dynamicearrings = []; // Handle the error case
      }
    );
  }

  addNewProduct(product: any) {
    const currentTime = new Date();
    const productDate = new Date(product.createdAt);

    // Check if the product was created today
    if (
      productDate.getFullYear() === currentTime.getFullYear() &&
      productDate.getMonth() === currentTime.getMonth() &&
      productDate.getDate() === currentTime.getDate()
    ) {
      // ** Add new product only if it doesn't already exist (based on _id or another unique field) **
      if (!this.dynamicearrings.some(p => p._id === product._id)) {
        this.dynamicearrings.unshift(product); // Add to the beginning
      } else {
        console.warn('Duplicate product not added:', product);
      }

      this.combineProducts();
    } else {
      console.warn('Product not created today:', product);
    }
  }

  // ** Helper method to remove duplicate products by ID (or any unique field) **
  removeDuplicatesById(products: any[]): any[] {
    const uniqueProducts: any[] = [];
    const productIds = new Set();

    products.forEach((product) => {
      if (!productIds.has(product._id)) {
        uniqueProducts.push(product); // Add the unique product
        productIds.add(product._id); // Keep track of added product IDs
      }
    });

    return uniqueProducts; // Return unique products
  }

  combineProducts() {
    // Only combine dynamic earrings that contain specific keywords in their titles
    this.combinedearrings = [
      ...this.dynamicearrings.filter(product => 
        /studs|earrings|hoops/i.test(product.title)
      ), 
      ...this.Earrings
    ]; // Ensure dynamic products come first
    console.log('Combined Earrings:', this.combinedearrings); // Debug output
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(
      (response) => {
        console.log('Product deleted successfully:', response);
        // Remove the deleted product from dynamicEarrings
        this.dynamicearrings = this.dynamicearrings.filter(product => product._id !== productId);
        this.combineProducts();
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  sortProducts(order: 'asc' | 'desc'): void {
    if (order === 'asc') {
      this.combinedearrings.sort((a, b) => a.price - b.price); // Sort by price low to high
    } else {
      this.combinedearrings.sort((a, b) => b.price - a.price); // Sort by price high to low
    }
  }
}
