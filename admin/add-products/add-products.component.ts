// // import { CommonModule } from '@angular/common';
// // import { Component } from '@angular/core';
// // import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// // import { ProductService} from '../../../State/Product/product.service' // Adjusted import
// // import { Router } from '@angular/router';
// // // import { ProductService } from '@api/product.service'; // Adjusted import

// // @Component({
// //   selector: 'app-add-products',
// //   standalone: true,
// //   imports: [ReactiveFormsModule, CommonModule, FormsModule],
// //   templateUrl: './add-products.component.html',
// //   styleUrls: ['./add-products.component.scss']
// // })
// // export class AddProductsComponent {

// //   addProductForm: FormGroup;  // Define the form group
// //   loading = false;  // Track loading state for the submit button
// //   successMessage = '';  // Store success message
// //   errorMessage = '';  // Store error message

// //   constructor(
// //     private formBuilder: FormBuilder,
// //     private productService: ProductService,
// //     private router: Router
// //   ) {
// //     // Initialize the form with validation rules
// //     this.addProductForm = this.formBuilder.group({
// //       title: ['', Validators.required],
// //       brand: ['', Validators.required],
// //       color: ['', Validators.required],
// //       price: ['', [Validators.required, Validators.min(1)]],
// //       discountedPrice: ['', Validators.min(0)],
// //       imageUrl: ['', [Validators.required, Validators.pattern(/https?:\/\/[\S]+/)]],  // URL validation
// //       sizes: this.formBuilder.array([])  // Handling multiple sizes (optional)
// //     });
// //   }

// //   // Getter for easy form control access
// //   get f() { return this.addProductForm.controls; }

// //   // Method to handle form submission
// //   onSubmit() {
// //     // Reset messages
// //     this.successMessage = '';
// //     this.errorMessage = '';

// //     // If form is invalid, return early
// //     if (this.addProductForm.invalid) {
// //       return;
// //     }

// //     // Set loading state
// //     this.loading = true;

// //     // Prepare product data from form values
// //     const productData = {
// //       title: this.f['title'].value,
// //       brand: this.f['brand'].value,
// //       color: this.f['color'].value,
// //       price: this.f['price'].value,
// //       discountedPrice: this.f['discountedPrice'].value,
// //       imageUrl: this.f['imageUrl'].value,
// //       sizes: []  // Handle sizes and quantities (can be expanded)
// //     };

// //     // Call the addProduct method in the ProductService
// //     this.productService.addProduct(productData).subscribe({
// //       next: (data) => {
// //         this.successMessage = 'Product added successfully!';
// //         this.loading = false;

// //         // Optionally navigate to another page (e.g., product listing page)
// //         this.router.navigate(['/products']);  // Adjust the path as necessary
// //       },
// //       error: (error) => {
// //         this.errorMessage = 'Failed to add product: ' + error.error;
// //         this.loading = false;
// //       }
// //     });
// //   }
// // }



// // import { Component } from '@angular/core';
// // import { ProductService } from '../../../State/Product/product.service';  // Import the service
// // import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';  // Use FormBuilder to manage the form
// // import { Router } from '@angular/router';
// // import { CommonModule } from '@angular/common';

// // @Component({
// //   selector: 'app-add-products',
// //   standalone: true,
// //   imports: [ReactiveFormsModule, CommonModule, FormsModule],
// //   templateUrl: './add-products.component.html',
// //   styleUrls: ['./add-products.component.scss']
// // })
// // export class AddProductComponent {
// //   addProductForm: FormGroup;  // Define the form group
// //   loading = false;  // Track loading state for the submit button
// //   successMessage = '';  // Store success message
// //   errorMessage = '';  // Store error message

// //   constructor(
// //     private formBuilder: FormBuilder,
// //     private productService: ProductService,
// //     private router: Router
// //   ) {
// //     // Initialize the form with validation rules
// //     this.addProductForm = this.formBuilder.group({
// //       title: ['', Validators.required],
// //       brand: ['', Validators.required],
// //       color: ['', Validators.required],
// //       price: ['', [Validators.required, Validators.min(1)]],
// //       discountedPrice: ['', Validators.min(0)],
// //       imageUrl: ['', [Validators.required, Validators.pattern(/https?:\/\/[\S]+/)]],  // URL validation
// //       sizes: this.formBuilder.array([])  // Handling multiple sizes (optional)
// //     });
// //   }

// //   // Getter for easy form control access
// //   get f() { return this.addProductForm.controls; }

// //   // Method to handle form submission
// //   onSubmit() {
// //     // Reset messages
// //     this.successMessage = '';
// //     this.errorMessage = '';

// //     // If form is invalid, return early
// //     if (this.addProductForm.invalid) {
// //       return;
// //     }

// //     // Set loading state
// //     this.loading = true;

// //     // Prepare product data from form values
// //     const productData = {
// //       title: this.f['title'].value,
// //       brand: this.f['brand'].value,
// //       color: this.f['color'].value,
// //       price: this.f['price'].value,
// //       discountedPrice: this.f['discountedPrice'].value,
// //       imageUrl: this.f['imageUrl'].value,
// //       sizes: []  // Handle sizes and quantities (can be expanded)
// //     };

// //     // Call the addProduct method in the ProductService
// //     this.productService.addProduct(productData).subscribe({
// //       next: (data) => {
// //         this.successMessage = 'Product added successfully!';
// //         this.loading = false;

// //         // Optionally navigate to another page (e.g., product listing page)
// //         this.router.navigate(['/products']);  // Adjust the path as necessary
// //       },
// //       error: (error) => {
// //         this.errorMessage = 'Failed to add product: ' + error.error;
// //         this.loading = false;
// //       }
// //     });
// //   }
// // }



// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ProductService } from '../../../State/Product/product.service'; // Adjusted import
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-add-products',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule, FormsModule],
//   templateUrl: './add-products.component.html',
//   styleUrls: ['./add-products.component.scss']
// })
// export class AddProductsComponent {

// productForm: FormGroup;
//   secondLevelCategories: string[] = [];
//   thirdLevelCategories: string[] = [];

//   // Explicitly defined categoryMap type
//   categoryMap: {
//     [key: string]: {
//       [key: string]: string[];
//     };
//   } = {
//     Catalogue: {
//       Clothing: ["Tops", "Bottomwear", "Formals", "Casuals"],
//       Accessories: ["Bags", "Belts", "Hats"]
//     }
//     // Add more categories if needed
//   };

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private productService: ProductService
//   ) {
//     this.productForm = this.fb.group({
//       topCategory: [''],
//       secondCategory: [''],
//       thirdCategory: [''],
//       productName: [''],
//       productPrice: [''],
//       // Add other product fields as needed
//     });
//   }

//   ngOnInit(): void {}

//   onTopCategoryChange(): void {
//     const topCategory = this.productForm.get('topCategory')?.value;
//     this.secondLevelCategories = topCategory ? Object.keys(this.categoryMap[topCategory]) : [];
//     this.thirdLevelCategories = []; // Reset third level categories
//   }

//   onSecondCategoryChange(): void {
//     const topCategory = this.productForm.get('topCategory')?.value;
//     const secondCategory = this.productForm.get('secondCategory')?.value;
//     this.thirdLevelCategories = topCategory && secondCategory ? this.categoryMap[topCategory][secondCategory] : [];
//   }

//   onSubmit(): void {
//     const { topCategory, secondCategory, thirdCategory, ...productDetails } = this.productForm.value;

//     // Build the route path based on the selected categories
//     let routePath = '';
//     if (topCategory && secondCategory && thirdCategory) {
//       routePath = `${topCategory.toLowerCase()}/${secondCategory.toLowerCase()}/${thirdCategory.toLowerCase()}`;
//     }

//     console.log('Product added');
//     this.router.navigate([routePath]);

//     // Save product to the selected category (API call)
//     this.productService.addProduct(routePath, productDetails).subscribe(response => {
//       console.log('Product saved successfully:', response);
//       // Handle response (e.g., show success message)
//     });
//   }
// }

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { ProductService } from '../../../State/Product/product.service'; // Adjusted import
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-add-products',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './add-products.component.html',
//   styleUrls: ['./add-products.component.scss']
// })
// export class AddProductsComponent {

//   productForm: FormGroup;
//   secondLevelCategories: string[] = [];
//   thirdLevelCategories: string[] = [];
//   products: any[] = [];

  // Explicitly defined categoryMap type
  // categoryMap: {
  //   [key: string]: {
  //     [key: string]: string[];
  //   };
  // } = {
  //   Catalogue: {
  //     Clothing: ["Tops", "Bottomwear", "Formals", "Casuals"],
  //     Accessories: ["rings", "Bracelets", "necklace", "earrings"]
  //   }
    // Add more categories if needed
  // };

  // constructor(
  //   private fb: FormBuilder,
  //   private router: Router,
  //   private productService: ProductService
  // ) {
  //   this.productForm = this.fb.group({
  //     topCategory: ['', Validators.required],
  //     secondCategory: ['', Validators.required],
  //     thirdCategory: ['', Validators.required],
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //     price: ['', [Validators.required, Validators.min(0)]],
  //     discountedPrice: ['', Validators.min(0)],
  //     brand: ['', Validators.required],
  //     size: ['', Validators.required],
  //     quantity: ['', [Validators.required, Validators.min(1)]],
  //     color: ['', Validators.required], // Added color control
  //     imageUrl: ['', Validators.required], // Added imageUrl control
  //     discountedPercent: ['', Validators.min(0)]
  //   });
  // }

  // ngOnInit(): void {}

  // getCategoryKeys(): string[] {
  //   return Object.keys(this.categoryMap);
  // }

  // onTopCategoryChange(): void {
  //   const topCategory = this.productForm.get('topCategory')?.value;
  //   this.secondLevelCategories = topCategory ? Object.keys(this.categoryMap[topCategory]) : [];
  //   this.thirdLevelCategories = []; // Reset third level categories
  // }

  // onSecondCategoryChange(): void {
  //   const topCategory = this.productForm.get('topCategory')?.value;
  //   const secondCategory = this.productForm.get('secondCategory')?.value;
  //   this.thirdLevelCategories = topCategory && secondCategory ? this.categoryMap[topCategory][secondCategory] : [];
  // }

  // onSubmit(): void {
  //   const { topCategory, secondCategory, thirdCategory, ...productDetails } = this.productForm.value;

    // Build the route path based on the selected categories
    // let routePath = '';
    // if (topCategory && secondCategory && thirdCategory) {
    //   routePath = `${topCategory.toLowerCase()}/${secondCategory.toLowerCase()}/${thirdCategory.toLowerCase()}`;
    // }

    // console.log('Product added');
    // this.router.navigate([routePath]);

    // Save product to the selected category (API call)
    // this.productService.addProduct(routePath, productDetails).subscribe(response => {
    //   console.log('Product saved successfully:', response);

      
    //   this.fetchAllProducts();
    //   this.productForm.reset();
      // Handle response (e.g., show success message)
//     });
//   }

//   fetchAllProducts(): void {
//     this.productService.getAllProducts().subscribe(
//       products => {
//         this.products = products; // Store fetched products
//         console.log('Fetched products:', this.products); // Log or display products as needed
//       },
//       error => {
//         console.error('Error fetching products:', error);
//       }
//     );
//   }
// }

// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { ProductService } from '../../../State/Product/product.service'; // Adjusted import
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for notifications

// @Component({
//   selector: 'app-add-products',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './add-products.component.html',
//   styleUrls: ['./add-products.component.scss']
// })
// export class AddProductsComponent implements OnInit {

//   productForm: FormGroup;
//   secondLevelCategories: string[] = [];
//   thirdLevelCategories: string[] = [];
//   products: any[] = [];

//   @Output() productAdded = new EventEmitter<any>();

//   categoryMap: {
//     [key: string]: {
//       [key: string]: string[];
//     };
//   } = {
//     Catalogue: {
//       Clothing: ["Tops", "Bottomwear", "Formals", "Casuals"],
//       Accessories: ["Rings", "Bracelets", "Necklace", "Earrings"]
//     }
//   };

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private productService: ProductService,
//     private snackBar: MatSnackBar // Add MatSnackBar for notifications
//   ) {
//     this.productForm = this.fb.group({
//       topCategory: ['', Validators.required],
//       secondCategory: ['', Validators.required],
//       thirdCategory: ['', Validators.required],
//       title: ['', Validators.required],
//       description: ['', Validators.required],
//       price: ['', [Validators.required, Validators.min(0)]],
//       discountedPrice: ['', Validators.min(0)],
//       brand: ['', Validators.required],
//       size: ['', Validators.required],
//       quantity: ['', [Validators.required, Validators.min(1)]],
//       color: ['', Validators.required],
//       imageUrl: ['', Validators.required],
//       discountedPercent: ['', Validators.min(0)]
//     });
//   }

//   ngOnInit(): void {
//     this.fetchAllProducts();
//   }

//   getCategoryKeys(): string[] {
//     return Object.keys(this.categoryMap);
//   }

//   onTopCategoryChange(): void {
//     const topCategory = this.productForm.get('topCategory')?.value;
//     this.secondLevelCategories = topCategory ? Object.keys(this.categoryMap[topCategory]) : [];
//     this.thirdLevelCategories = [];
//   }

//   onSecondCategoryChange(): void {
//     const topCategory = this.productForm.get('topCategory')?.value;
//     const secondCategory = this.productForm.get('secondCategory')?.value;
//     this.thirdLevelCategories = topCategory && secondCategory ? this.categoryMap[topCategory][secondCategory] : [];
//   }

//   onSubmit(): void {
//     const { topCategory, secondCategory, thirdCategory, ...productDetails } = this.productForm.value;

//     let routePath = '';
//     if (topCategory && secondCategory && thirdCategory) {
//       routePath = `${topCategory.toLowerCase()}/${secondCategory.toLowerCase()}/${thirdCategory.toLowerCase()}`;
//     }

//     this.productService.addProduct(routePath, productDetails).subscribe(
//       response => {
//         console.log('Product saved successfully:', response);
//         this.productAdded.emit(response.product);
//         this.productForm.reset();
//         this.router.navigate([routePath]);
//         this.snackBar.open('Product added successfully', 'Close', { duration: 2000 }); // Show success message
//       },
//       error => {
//         console.error('Error saving product:', error);
//         this.snackBar.open('Error adding product: ' + error.message, 'Close', { duration: 2000 }); // Show error message
//       }
//     );

    
//   }


//   fetchAllProducts(): void {
//     this.productService.getAllProducts().subscribe(
//       products => {
//         this.products = products; // Store fetched products
//         console.log('Fetched products:', this.products);
//       },
//       error => {
//         console.error('Error fetching products:', error);
//       }
//     );
//   }
  
// }

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../State/Product/product.service'; // Adjusted import
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for notifications

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  // productForm: FormGroup;
  // secondLevelCategories: string[] = [];
  // thirdLevelCategories: string[] = [];
  // products: any[] = [];
  // newlyAddedProduct: any; // **New variable to hold newly added product**

  // @Output() productAdded = new EventEmitter<any>();

  // categoryMap: {
  //   [key: string]: {
  //     [key: string]: string[];
  //   };
  // } = {
  //   Catalogue: {
  //     Clothing: ["Tops", "Bottomwear", "Formals", "Casuals"],
  //     Accessories: ["Rings", "Bracelets", "pendants", "Earrings"]
  //   }
  // };

  // constructor(
  //   private fb: FormBuilder,
  //   private router: Router,
  //   private productService: ProductService,
  //   private snackBar: MatSnackBar // Add MatSnackBar for notifications
  // ) {
  //   this.productForm = this.fb.group({
  //     topCategory: ['', Validators.required],
  //     secondCategory: ['', Validators.required],
  //     thirdCategory: ['', Validators.required],
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //     price: ['', [Validators.required, Validators.min(0)]],
  //     discountedPrice: ['', Validators.min(0)],
  //     brand: ['', Validators.required],
  //     size: ['', Validators.required],
  //     quantity: ['', [Validators.required, Validators.min(1)]],
  //     color: ['', Validators.required],
  //     imageUrl: ['', Validators.required],
  //     discountedPercent: ['', Validators.min(0)]
  //   });
  // }

  // ngOnInit(): void {
  //   this.fetchAllProducts();
  // }

  // getCategoryKeys(): string[] {
  //   return Object.keys(this.categoryMap);
  // }

  // onTopCategoryChange(): void {
  //   const topCategory = this.productForm.get('topCategory')?.value;
  //   this.secondLevelCategories = topCategory ? Object.keys(this.categoryMap[topCategory]) : [];
  //   this.thirdLevelCategories = [];
  // }

  // onSecondCategoryChange(): void {
  //   const topCategory = this.productForm.get('topCategory')?.value;
  //   const secondCategory = this.productForm.get('secondCategory')?.value;
  //   this.thirdLevelCategories = topCategory && secondCategory ? this.categoryMap[topCategory][secondCategory] : [];
  // }

  // onSubmit(): void {
  //   const { topCategory, secondCategory, thirdCategory, ...productDetails } = this.productForm.value;

  //   let routePath = '';
  //   if (topCategory && secondCategory && thirdCategory) {
  //     routePath = `${topCategory.toLowerCase()}/${secondCategory.toLowerCase()}/${thirdCategory.toLowerCase()}`;
  //   }

  //   // **Add the current timestamp to productDetails**
  //   const currentDate = new Date().toISOString(); // Get the current date in ISO format
  //   productDetails.createdAt = currentDate; // **Assuming your backend expects this field**

  //   this.productService.addProduct(routePath, productDetails).subscribe(
  //     response => {
  //       console.log('Product saved successfully:', response);
  //       this.newlyAddedProduct = response.product; // **Store the newly added product**
  //       this.productAdded.emit(response.product);
  //       this.productForm.reset();
  //       this.router.navigate([routePath]);
  //       this.snackBar.open('Product added successfully', 'Close', { duration: 2000 }); // Show success message

  //       // **Fetch only products created at the current date and time**
  //       this.filterProductsByCurrentDate(); 
  //     },
  //     error => {
  //       console.error('Error saving product:', error);
  //       this.snackBar.open('Error adding product: ' + error.message, 'Close', { duration: 2000 }); // Show error message
  //     }
  //   );
  // }

  // // **New method to filter products based on the creation date**
  // filterProductsByCurrentDate(): void {
  //   const currentDate = new Date();
  //   this.products = this.products.filter(product => {
  //     const productDate = new Date(product.createdAt); // Assuming each product has a createdAt field
  //     return (
  //       productDate.getFullYear() === currentDate.getFullYear() &&
  //       productDate.getMonth() === currentDate.getMonth() &&
  //       productDate.getDate() === currentDate.getDate() &&
  //       productDate.getHours() === currentDate.getHours() &&
  //       productDate.getMinutes() === currentDate.getMinutes()
  //     );
  //   });
  //   console.log('Filtered products created at the current time:', this.products);
  // }

  // fetchAllProducts(): void {
  //   this.productService.getAllProducts().subscribe(
  //     products => {
  //       this.products = products; // Store fetched products
  //       console.log('Fetched products:', this.products);
  //     },
  //     error => {
  //       console.error('Error fetching products:', error);
  //     }
  //   );
  // }
  productForm: FormGroup;
  secondLevelCategories: string[] = [];
  thirdLevelCategories: string[] = [];
  products: any[] = [];
  newlyAddedProduct: any; // New variable to hold newly added product

  @Output() productAdded = new EventEmitter<any>();

  categoryMap: {
    [key: string]: {
      [key: string]: string[];
    };
  } = {
    Catalogue: {
      Clothing: ["Tops", "Bottomwear", "Formals", "Casuals"],
      Accessories: ["Rings", "Bracelets", "Pendants", "Earrings"]
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private snackBar: MatSnackBar // Add MatSnackBar for notifications
  ) {
    this.productForm = this.fb.group({
      topCategory: ['', Validators.required],
      secondCategory: ['', Validators.required],
      thirdCategory: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      discountedPrice: ['', Validators.min(0)],
      brand: ['', Validators.required],
      size: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      color: ['', Validators.required],
      imageUrl: ['', Validators.required],
      discountedPercent: ['', Validators.min(0)]
    });
  }

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  getCategoryKeys(): string[] {
    return Object.keys(this.categoryMap);
  }

  onTopCategoryChange(): void {
    const topCategory = this.productForm.get('topCategory')?.value;
    this.secondLevelCategories = topCategory ? Object.keys(this.categoryMap[topCategory]) : [];
    this.thirdLevelCategories = [];
  }

  onSecondCategoryChange(): void {
    const topCategory = this.productForm.get('topCategory')?.value;
    const secondCategory = this.productForm.get('secondCategory')?.value;
    this.thirdLevelCategories = topCategory && secondCategory ? this.categoryMap[topCategory][secondCategory] : [];
  }

  onSubmit(): void {
    const { topCategory, secondCategory, thirdCategory, ...productDetails } = this.productForm.value;

    let routePath = '';
    if (topCategory && secondCategory && thirdCategory) {
      routePath = `${topCategory.toLowerCase()}/${secondCategory.toLowerCase()}/${thirdCategory.toLowerCase()}`;
    }

    // Add the current timestamp to productDetails
    const currentDate = new Date().toISOString(); // Get the current date in ISO format
    productDetails.createdAt = currentDate; // Assuming your backend expects this field

    this.productService.addProduct(routePath, productDetails).subscribe(
      response => {
        console.log('Product saved successfully:', response);
        this.newlyAddedProduct = response.product; // Store the newly added product
        this.productAdded.emit(response.product);
        this.productForm.reset();
        this.router.navigate([routePath]);
        this.snackBar.open('Product added successfully', 'Close', { duration: 2000 }); // Show success message

        // Fetch only products created at the current date and time
        this.filterProductsByCurrentDate(); 
      },
      error => {
        console.error('Error saving product:', error);
        this.snackBar.open('Error adding product: ' + error.message, 'Close', { duration: 2000 }); // Show error message
      }
    );
  }

  // New method to filter products based on the creation date
  filterProductsByCurrentDate(): void {
    const currentDate = new Date();
    this.products = this.products.filter(product => {
      const productDate = new Date(product.createdAt); // Assuming each product has a createdAt field
      return (
        productDate.getFullYear() === currentDate.getFullYear() &&
        productDate.getMonth() === currentDate.getMonth() &&
        productDate.getDate() === currentDate.getDate() &&
        productDate.getHours() === currentDate.getHours() &&
        productDate.getMinutes() === currentDate.getMinutes()
      );
    });
    console.log('Filtered products created at the current time:', this.products);
  }

  fetchAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      products => {
        this.products = products; // Store fetched products
        console.log('Fetched products:', this.products);
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
