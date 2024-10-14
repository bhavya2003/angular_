import { ChangeDetectorRef, Component } from '@angular/core';
import { filters, singleFilter } from '../../../filterdata';
import { tops } from '../../../../../../../../assets/Data/tops';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from '../../../../product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatButton } from '@angular/material/button';
import { ProductCardBraceletComponent } from './bracelet-product-card/product-card-bracelet/product-card-bracelet.component';
import { bracelets } from '../../../../../../../../assets/Data/bracelets';
import { ProductService } from 'app/State/Product/product.service';

@Component({
  selector: 'app-bracelet',
  standalone: true,
  imports: [RouterModule,MatIconModule,MatRadioModule,MatButton,MatMenuModule,MatDividerModule,CommonModule,MatCheckboxModule, FormsModule,ProductCardBraceletComponent],
  templateUrl: './bracelet.component.html',
  styleUrl: './bracelet.component.scss'
})
export class BraceletComponent {

//    Bracelets: any[] = bracelets; // Static rings
//    dynamicbracelets: any[] = []; // Fetched dynamic products
//    combinedbracelets: any[] = []; // Combined static and dynamic products

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
//         this.dynamicbracelets = this.removeDuplicatesById(filteredProducts);
//       } else {
//         console.error('Error: No valid product data found', response);
//       }

//       this.combineProducts();
//     },
//     (error) => {
//       console.error('Error fetching dynamic products:', error);
//       this.dynamicbracelets = []; // Handle the error case
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
//     if (!this.dynamicbracelets.some(p => p._id === product._id)) {
//       this.dynamicbracelets.unshift(product); // Add to the beginning
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
//   this.combinedbracelets = [...this.dynamicbracelets, ...this.Bracelets]; // Ensure dynamic products come first
//   console.log('Combined Rings:', this.combinedbracelets); // Debug output
// }

// deleteProduct(productId: string) {
//   this.productService.deleteProduct(productId).subscribe(
//     (response) => {
//       console.log('Product deleted successfully:', response);
//       // Remove the deleted product from dynamicRings
//       this.dynamicbracelets = this.dynamicbracelets.filter(product => product._id !== productId);
//       this.combineProducts();
//     },
//     (error) => {
//       console.error('Error deleting product:', error);
//     }
//   );
// }

// sortProducts(order: 'asc' | 'desc'): void {
//      if (order === 'asc') {
//        this.combinedbracelets.sort((a, b) => a.price - b.price); // Sort by price low to high
//      } else {
//        this.combinedbracelets.sort((a, b) => b.price - a.price); // Sort by price high to low
//      }
//    }

// //   Bracelet:any

// //   constructor(private activatedRoute:ActivatedRoute, private router:Router){

// //   }


// //   ngOnInit(){
// //      this.Bracelet=bracelets
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

currentDate = new Date();
  allowedKeywords = ['bracelet', 'bangle', 'wristband', 'Bracelets', 'Bracelet']; // Keywords for filtering
  dynamicBracelets: any[] = [];
  combinedBracelets: any[] = []; // Final list for displaying

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchDynamicBracelets();
  }

  // Fetch products created today and with valid keywords in the title
  fetchDynamicBracelets() {
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        const today = this.getFormattedDate(new Date());

        // Filter products based on creation date and title keywords
        this.dynamicBracelets = response.filter((product: any) => {
          const productDate = this.getFormattedDate(new Date(product.createdAt));

          // Check if the product was created today and has the right title keywords
          return (
            productDate === today &&
            this.allowedKeywords.some(keyword =>
              product.title.toLowerCase().includes(keyword)
            )
          );
        });

        // Combine dynamic bracelets with static data
        this.combinedBracelets = [...bracelets, ...this.dynamicBracelets];
        console.log('Combined Bracelets:', this.combinedBracelets);

        this.cdr.detectChanges(); // Manually trigger change detection
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  // Helper function to format date to 'YYYY-MM-DD' for easier comparison
  getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }  


 }
