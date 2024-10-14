// // // import { CommonModule } from '@angular/common';
// // // import { Component } from '@angular/core';
// // // import { CartItemComponent } from '../../../shared/components/cart-item/cart-item.component';
// // // import { MatDivider } from '@angular/material/divider';
// // // import { Router } from '@angular/router';
// // // import { ShippingformComponent } from '../checkout/shippingform/shippingform.component';
// // // import { CartService } from '../../../../State/cart/cart.service';
// // // import { select, Store } from '@ngrx/store';
// // // import { AppState } from '../../../../Models/AppState';


// // // @Component({
// // //   selector: 'app-cart',
// // //   standalone: true,
// // //   imports: [CommonModule,CartItemComponent,MatDivider,ShippingformComponent],
// // //   templateUrl: './cart.component.html',
// // //   styleUrl: './cart.component.scss'
// // // })
// // // export class CartComponent {

// // //   cart=[1,1,1];
// // //   cartItems:any

// // //   constructor(private router: Router,private cartService:CartService,private store:Store<AppState>){

// // //   }

// // //   ngOnInit(){
     
// // //      this.cartService.getcart()

// // //      this.store.pipe(select(store=>store.cart)).subscribe((cart)=>{
// // //       this.cartItems=cart.cartItems
// // //       console.log("store data", cart.cartItems)
// // //     });
// // //   }

// // //   navigateTocheckout(){
// // //     this.router.navigate(["checkout"])
// // //   }

// // // }


// // import { CommonModule } from '@angular/common';
// // import { Component } from '@angular/core';
// // import { CartItemComponent } from '../../../shared/components/cart-item/cart-item.component';
// // import { MatDivider } from '@angular/material/divider';
// // import { Router } from '@angular/router';
// // import { ShippingformComponent } from '../checkout/shippingform/shippingform.component';
// // import { CartService } from '../../../../State/cart/cart.service';
// // import { select, Store } from '@ngrx/store';
// // import { AppState } from '../../../../Models/AppState';
// // import { Subscription } from 'rxjs';

// // @Component({
// //   selector: 'app-cart',
// //   standalone: true,
// //   imports: [CommonModule, CartItemComponent, MatDivider, ShippingformComponent],
// //   templateUrl: './cart.component.html',
// //   styleUrls: ['./cart.component.scss'], // fixed 'styleUrl' to 'styleUrls'
// // })
// // export class CartComponent {
// //   // cartItems: any[] = []; // updated to hold actual cart items
// //   // totalPrice = 0; // added to hold total price
// //   // discount = 0; // added to hold discount
// //   // deliveryCharges = 40; // assuming a static delivery charge

// //   // constructor(private router: Router, private cartService: CartService, private store: Store<AppState>) {}

// //   // ngOnInit() {
// //   //   this.cartService.getcart();

// //   //   this.store.pipe(select(store => store.cart)).subscribe(cart => {
// //   //     this.cartItems = cart.cartItems;
// //   //     this.calculateTotal(); // call method to calculate total on cart item update
// //   //     console.log('store data', cart.cartItems);
// //   //   });
// //   // }

// //   // // Calculate total price and discounts
// //   // calculateTotal() {
// //   //   this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //   //   this.discount = this.calculateDiscount(); // add your discount logic here
// //   // }

// //   // // Dummy function to calculate discount (update as necessary)
// //   // calculateDiscount() {
// //   //   // For now, let's assume a flat discount of 799 if total price exceeds 1000
// //   //   return this.totalPrice > 1000 ? 799 : 0;
// //   // }

// //   // navigateTocheckout() {
// //   //   this.router.navigate(['checkout']);
// //   // }

 



// //   cartItems: any[] = []; // Holds actual cart items
// //   totalPrice = 0; // Holds total price
// //   discount = 0; // Holds discount
// //   deliveryCharges = 40; // Static delivery charge
// //   private cartSubscription: Subscription | undefined; // Declare the subscription variable

// //   constructor(private router: Router, private cartService: CartService, private store: Store<AppState>) {}

// //   // ngOnInit() {
// //   //   this.cartService.getcart();

// //   //   this.cartSubscription = this.store.pipe(select(store => store.cart)).subscribe(cart => {
// //   //     this.cartItems = cart.cartItems;
// //   //     this.calculateTotal(); // Call method to calculate total on cart item update
// //   //     console.log('store data', cart.cartItems);
// //   //   });
// //   // }


// //   ngOnInit() {
// //     // Fetch the cart initially
// //     this.cartService.getcart(); // Ensure this method updates the store with the cart data

// //     // Subscribe to the cart state from the store
// //     this.cartSubscription = this.store.pipe(select('cart')).subscribe(cart => {
// //       this.cartItems = cart.cartItems;
// //       this.calculateTotal(); // Call method to calculate total on cart item update
// //       console.log('store data', cart.cartItems);
// //     });
// //   }

  
// //   // Calculate total price and discounts
// //   calculateTotal() {
// //     this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //     this.discount = this.calculateDiscount(); // Calculate discount based on your logic
// //   }

// //   // Dummy function to calculate discount (update as necessary)
// //   calculateDiscount() {
// //     // For now, let's assume a flat discount of 799 if total price exceeds 1000
// //     return this.totalPrice > 1000 ? 799 : 0;
// //   }

// //   navigateTocheckout() {
// //     this.router.navigate(['checkout']);
// //   }

// //   ngOnDestroy() {
// //     // Unsubscribe to avoid memory leaks
// //     if (this.cartSubscription) {
// //       this.cartSubscription.unsubscribe();
// //     }
// //   }

// //   // Update item quantity
// //   updateItemQuantity(cartItem: any, newQuantity: number) {
// //     if (newQuantity < 1) {
// //       return;  // Prevent quantity lower than 1
// //     }
// //     const reqData = {
// //       cartItemId: cartItem.id || cartItem._id,  // Works for both numericId and ObjectId
// //       data: { quantity: newQuantity }
// //     };
// //     this.cartService.updateCartItem(reqData);
// //   }

// //   // Remove item from the cart
// //   removeItem(cartItem: any) {
// //     const cartItemId = cartItem.id || cartItem._id;  // Works for both numericId and ObjectId
// //     this.cartService.removeCartItem(cartItemId);
// //   }
  
// // }





// import { CommonModule } from '@angular/common';
// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { CartItemComponent } from '../../../shared/components/cart-item/cart-item.component';
// import { MatDivider } from '@angular/material/divider';
// import { Router } from '@angular/router';
// import { ShippingformComponent } from '../checkout/shippingform/shippingform.component';
// import { CartService } from '../../../../State/cart/cart.service';
// import { select, Store } from '@ngrx/store';
// import { AppState } from '../../../../Models/AppState';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule, CartItemComponent, MatDivider, ShippingformComponent],
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss'],
// })
// export class CartComponent implements OnInit, OnDestroy {
//   cartItems: any[] = []; // Holds actual cart items
//   totalPrice = 0; // Holds total price
//   discount = 0; // Holds discount
//   deliveryCharges = 40; // Static delivery charge
//   private cartSubscription: Subscription | undefined; // Declare the subscription variable

//   constructor(private router: Router, private cartService: CartService, private store: Store<AppState>) {}

//   ngOnInit() {
//     // Fetch the cart initially
//     this.cartService.getcart(); // Ensure this method updates the store with the cart data

//     // Subscribe to the cart state from the store
//     this.cartSubscription = this.store.pipe(select('cart')).subscribe(cart => {
//       this.cartItems = cart.cartItems;
//       this.calculateTotal(); // Call method to calculate total on cart item update
//       console.log('store data', cart.cartItems);
//     });
//   }

//   // Calculate total price and discounts
//   calculateTotal() {
//     this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     this.discount = this.calculateDiscount(); // Calculate discount based on your logic
//   }

//   // Dummy function to calculate discount (update as necessary)
//   calculateDiscount() {
//     // For now, let's assume a flat discount of 799 if total price exceeds 1000
//     return this.totalPrice > 1000 ? 799 : 0;
//   }

//   navigateTocheckout() {
//     this.router.navigate(['checkout']);
//   }

//   ngOnDestroy() {
//     // Unsubscribe to avoid memory leaks
//     if (this.cartSubscription) {
//       this.cartSubscription.unsubscribe();
//     }
//   }

//   // Update item quantity
//   updateItemQuantity(cartItem: any, newQuantity: number) {
//     if (newQuantity < 1) {
//       return;  // Prevent quantity lower than 1
//     }
//     const reqData = {
//       cartItemId: cartItem.id || cartItem._id,  // Works for both numericId and ObjectId
//       data: { quantity: newQuantity }
//     };
//     this.cartService.updateCartItem(reqData);
//   }

//   // Remove item from the cart
//   removeItem(cartItem: any) {
//     const cartItemId = cartItem.id || cartItem._id;  // Works for both numericId and ObjectId
//     this.cartService.removeCartItem(cartItemId);
//   }
// }


import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItemComponent } from '../../../shared/components/cart-item/cart-item.component';
import { MatDivider } from '@angular/material/divider';
import { Router } from '@angular/router';
import { ShippingformComponent } from '../checkout/shippingform/shippingform.component';
import { CartService } from '../../../../State/cart/cart.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent, MatDivider, ShippingformComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = []; // Holds actual cart items
  totalPrice = 0; // Holds total price
  discount = 0; // Holds discount
  deliveryCharges = 40; // Static delivery charge
  private cartSubscription: Subscription | undefined; // Declare the subscription variable

  constructor(private router: Router, private cartService: CartService, private store: Store<AppState>) {}

  ngOnInit() {
    // Fetch the cart initially
    this.cartService.getcart(); // Ensure this method updates the store with the cart data

    // Subscribe to the cart state from the store
    this.cartSubscription = this.store.pipe(select('cart')).subscribe(cart => {
      this.cartItems = cart.cartItems;
      this.calculateTotal(); // Call method to calculate total on cart item update
      console.log('store data', cart.cartItems);
      console.log('Cart Items:', this.cartItems);

    });
  }

  // Calculate total price and discounts
  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    this.discount = this.calculateDiscount(); // Calculate discount based on your logic
  }

  // Dummy function to calculate discount (update as necessary)
  calculateDiscount() {
    // For now, let's assume a flat discount of 799 if total price exceeds 1000
    return this.totalPrice > 1000 ? 799 : 0;
  }

  navigateTocheckout() {
    this.router.navigate(['checkout']);
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  // Update item quantity
  updateItemQuantity(cartItem: any, newQuantity: number) {
    if (newQuantity < 1) {
      return;  // Prevent quantity lower than 1
    }
    const reqData = {
      cartItemId: cartItem.id,  // Use only numeric ID
      data: { quantity: newQuantity }
    };
    this.cartService.updateCartItem(reqData);
  }

  // Remove item from the cart
  removeItem(cartItem: any) {
    const cartItemId = cartItem.id;  // Use only numeric ID
    this.cartService.removeCartItem(cartItemId);
  }

  calculateDiscountPercent(originalPrice: number, discountedPrice: number): number {
    if (originalPrice <= 0) return 0; // Prevent division by zero
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  }
}
