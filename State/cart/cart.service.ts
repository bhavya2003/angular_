// // import { Injectable } from "@angular/core";
// // import { BASE_API_URL } from "../../Config/api";
// // import { Store } from "@ngrx/store";
// // import { HttpClient, HttpHeaders } from "@angular/common/http";
// // import { Router, ActivatedRoute } from "@angular/router";
// // import { 
// //   addItemToCartFailure, 
// //   addItemToCartSuccess, 
// //   getCartFailure, 
// //   getCartSuccess, 
// //   removeCartItemSuccess, 
// //   removeCartItemFailure, 
// //   updateCartItemFailure, 
// //   updateCartItemSuccess 
// // } from "./cart.action";
// // import { BehaviorSubject, catchError, map, of } from "rxjs";

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class CartService {
// //   API_BASE_URL = BASE_API_URL;
// //   private cartItems = new BehaviorSubject<any[]>([]); // Manages the cart items locally
// //   cartItems$ = this.cartItems.asObservable();         // Observable for cart items

// //   constructor(
// //     private store: Store,
// //     private http: HttpClient,
// //     private router: Router,
// //     private route: ActivatedRoute
// //   ) {}

// //   // Add item to the cart (client-side and API logic)
// //   addItemToCart(product: any) {
// //     const currentCart = this.cartItems.value;

// //     // Check if the product already exists in the cart (handles numeric IDs)
// //     const existingProduct = currentCart.find(item =>
// //       item.id === product.id // Only check for numeric IDs now
// //     );

// //     if (existingProduct) {
// //       // Increment the quantity if product is already in the cart
// //       existingProduct.quantity += 1;
// //     } else {
// //       // Add the new product to the cart with a quantity of 1
// //       currentCart.push({ ...product, quantity: 1 });
// //     }

// //     // Update the cart with new items locally
// //     this.cartItems.next(currentCart);

// //     // Optionally, dispatch an action to update the store if needed
// //     this.store.dispatch(addItemToCartSuccess({ payload: currentCart }));
// //   }

// //   // Get cart items from the local BehaviorSubject (for reactive UI updates)
// //   getCartItems() {
// //     return this.cartItems$;
// //   }

  


// // // getcart() {
// // //   const url = `${this.API_BASE_URL}/api/cart/`;
// // //   const headers = new HttpHeaders({
// // //     Authorization: `Bearer ${localStorage.getItem('jwt')}`,
// // //     'Content-Type': 'application/json',
// // //   });

// // //   return this.http.get(url, { headers }).pipe(
// // //     map((data: any) => {
// // //       // Log the full cart details for debugging
// // //       console.log('Cart data from API:', data);

// // //       // Check if cartItems exist before mapping
// // //       const cartItems = data.cartItems ? data.cartItems.map((item: any) => {
// // //         // Check if product exists before accessing properties
// // //         const product = item.product ? item.product : {};
// // //         return {
// // //           id: product.id || null,  // Ensure product id is being assigned correctly
// // //           product: {
// // //             brand: product.brand || null,  // Assign brand safely
// // //             title: product.title || null,  // Assign title safely
// // //             description: product.description || null,  // Assign description safely
// // //             image: product.imageUrl || null,  // Assign image safely
// // //           },
// // //           price: item.price || 0,  // Default to 0 if price is missing
// // //           discountedPrice: item.discountedPrice || 0,  // Default to 0 if discounted price is missing
// // //           size: item.size || null,  // Assign size safely
// // //           quantity: item.quantity || 0,  // Default to 0 if quantity is missing
// // //         };
// // //       }) : [];  // Default to an empty array if cartItems doesn't exist

// // //       console.log('Mapped Cart Items:', cartItems);  // Log mapped cart items
// // //       return getCartSuccess({ payload: { ...data, cartItems } });  // Include cartItems in payload
// // //     }),
// // //     catchError((error: any) => {
// // //       const errorMessage = error.error?.message || error.message;
// // //       console.error('Error fetching cart:', errorMessage);  // Log the error for debugging
// // //       return of(getCartFailure(errorMessage));
// // //     })
// // //   ).subscribe((action) => this.store.dispatch(action));
// // // }




// // getcart() {
// //   const url = `${this.API_BASE_URL}/api/cart/`;
// //   const headers = new HttpHeaders({
// //     Authorization: `Bearer ${localStorage.getItem('jwt')}`,
// //     'Content-Type': 'application/json',
// //   });

// //   return this.http.get(url, { headers }).pipe(
// //     map((data: any) => {
// //       const cartItems = data.cartItems ? data.cartItems.map((item: any) => {
// //         const product = item.product ? item.product : {};
// //         return {
// //           cartItemId: item._id || null,  // Assign cartItemId from the item's _id (or create one)
// //           product: {
// //             id: product._id || null, // Use numericId for the product
// //             brand: product.brand || null,  
// //             title: product.title || null,  
// //             description: product.description || null,  
// //             image: product.imageUrl || null,  
// //           },
// //           price: item.price || 0,  
// //           discountedPrice: item.discountedPrice || 0,  
// //           size: item.size || null,  
// //           quantity: item.quantity || 0,
// //         };
// //       }) : [];

// //       return getCartSuccess({ payload: { ...data, cartItems } });
// //     }),
// //     catchError((error: any) => {
// //       const errorMessage = error.error?.message || error.message;
// //       return of(getCartFailure(errorMessage));
// //     })
// //   ).subscribe((action) => this.store.dispatch(action));
// // }



// // // Remove an item from the cart by cartItemId (API and NgRx store)
// //   removeCartItem(cartItemId: number) {
// //     const url = `${this.API_BASE_URL}/api/cart_items/${cartItemId}`;
// //     const headers = new HttpHeaders({
// //       Authorization: `Bearer ${localStorage.getItem('jwt')}`,
// //       'Content-Type': 'application/json',
// //     });

// //     return this.http.delete(url, { headers }).pipe(
// //       map((data: any) => {
// //         console.log('Removed item: ', data);
// //         return removeCartItemSuccess({ cartItemId });
// //       }),
// //       catchError((error: any) => {
// //         const errorMessage = error.error?.message || error.message;
// //         return of(removeCartItemFailure(errorMessage));
// //       })
// //     ).subscribe((action) => this.store.dispatch(action));
// //   }

// //   // Update the quantity or data of a cart item (API and NgRx store)
// //   updateCartItem(reqData: any) {
// //     console.log('Request Data: ', reqData);
// //     const url = `${this.API_BASE_URL}/api/cart_items/${reqData.cartItemId}`;
// //     const headers = new HttpHeaders({
// //       Authorization: `Bearer ${localStorage.getItem('jwt')}`,
// //       'Content-Type': 'application/json',
// //     });

// //     return this.http.put(url, reqData.data, { headers }).pipe(
// //       map((data: any) => {
// //         console.log('Updated item: ', data);
// //         return updateCartItemSuccess({ payload: data });
// //       }),
// //       catchError((error: any) => {
// //         const errorMessage = error.error?.message || error.message;
// //         return of(updateCartItemFailure(errorMessage));
// //       })
// //     ).subscribe((action) => this.store.dispatch(action));
// //   }

// //   // Clear the cart (client-side only)
// //   clearCart() {
// //     this.cartItems.next([]);
// //   }
// // }


// import { Injectable } from "@angular/core";
// import { BASE_API_URL } from "../../Config/api";
// import { Store } from "@ngrx/store";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Router, ActivatedRoute } from "@angular/router";
// import { 
//   addItemToCartFailure, 
//   addItemToCartSuccess, 
//   getCartFailure, 
//   getCartSuccess, 
//   removeCartItemSuccess, 
//   removeCartItemFailure, 
//   updateCartItemFailure, 
//   updateCartItemSuccess 
// } from "./cart.action";
// import { BehaviorSubject, catchError, map, of } from "rxjs";

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   API_BASE_URL = BASE_API_URL;
//   private cartItems = new BehaviorSubject<any[]>([]); // Manages the cart items locally
//   cartItems$ = this.cartItems.asObservable();         // Observable for cart items

//   constructor(
//     private store: Store,
//     private http: HttpClient,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}

//   // Add item to the cart (client-side and API logic)
//   addItemToCart(product: any) {
//     const currentCart = this.cartItems.value;

//     // Check if the product already exists in the cart using numeric ID
//     const existingProductIndex = currentCart.findIndex(item => Number.isInteger(item.id) && item.id === product.id);

//     if (existingProductIndex !== -1) {
//       // Increment the quantity if product is already in the cart
//       currentCart[existingProductIndex].quantity += 1;
//     } else {
//       // Add the new product to the cart with a quantity of 1 (ensure numeric ID)
//       currentCart.push({ ...product, id: Number(product.id), quantity: 1 });
//     }

//     // Update the cart with new items locally
//     this.cartItems.next(currentCart);

//     // Optionally, dispatch an action to update the store if needed
//     this.store.dispatch(addItemToCartSuccess({ payload: currentCart }));
//   }

//   // Get cart items from the local BehaviorSubject (for reactive UI updates)
//   getCartItems() {
//     return this.cartItems$;
//   }

//   getcart() {
//     const url = `${this.API_BASE_URL}/api/cart/`;
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${localStorage.getItem('jwt')}`,
//       'Content-Type': 'application/json',
//     });

//     return this.http.get(url, { headers }).pipe(
//       map((data: any) => {
//         const cartItems = data.cartItems ? data.cartItems.map((item: any) => {
//           const product = item.product ? item.product : {};
//           return {
//             cartItemId: item._id || null,  // Assign cartItemId from the item's _id (or create one)
//             product: {
//               id: Number(product._id) || null, // Use numeric ID for the product
//               brand: product.brand || null,
//               title: product.title || null,
//               description: product.description || null,
//               image: product.imageUrl || null,
//             },
//             price: item.price || 0,
//             discountedPrice: item.discountedPrice || 0,
//             size: item.size || null,
//             quantity: item.quantity || 0,
//           };
//         }) : [];

//         return getCartSuccess({ payload: { ...data, cartItems } });
//       }),
//       catchError((error: any) => {
//         const errorMessage = error.error?.message || error.message;
//         console.error('Error fetching cart:', errorMessage);  // Log the error for debugging
//         return of(getCartFailure(errorMessage));
//       })
//     ).subscribe((action) => this.store.dispatch(action));
//   }

//   // Remove an item from the cart by cartItemId (API and NgRx store)
//   removeCartItem(cartItemId: string | object) {
//     const url = `${this.API_BASE_URL}/api/cart_items/${cartItemId}`;
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${localStorage.getItem('jwt')}`,
//       'Content-Type': 'application/json',
//     });
  
//     return this.http.delete(url, { headers }).pipe(
//       map((data:   
//    any) => {
//         console.log('Removed item: ', data);
//         return removeCartItemSuccess({ cartItemId });
//       }),
//       catchError((error: any) => {
//         const errorMessage = error.error?.message || error.message;
//         return of(removeCartItemFailure(errorMessage));
//       })
//     ).subscribe((action) => this.store.dispatch(action));
//   }

//   // Update the quantity or data of a cart item (API and NgRx store)
//   updateCartItem(reqData: any) {
//     console.log('Request Data: ', reqData);
//     const url = `${this.API_BASE_URL}/api/cart_items/${reqData.cartItemId}`;
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${localStorage.getItem('jwt')}`,
//       'Content-Type': 'application/json',
//     });

//     return this.http.put(url, reqData.data, { headers }).pipe(
//       map((data: any) => {
//         console.log('Updated item: ', data);
//         return updateCartItemSuccess({ payload: data });
//       }),
//       catchError((error: any) => {
//         const errorMessage = error.error?.message || error.message;
//         return of(updateCartItemFailure(errorMessage));
//       })
//     ).subscribe((action) => this.store.dispatch(action));
//   }

//   // Clear the cart (client-side only)
//   clearCart() {
//     this.cartItems.next([]);
//   }
// }

import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../Config/api";
import { Store } from "@ngrx/store";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import {
  addItemToCartFailure,
  addItemToCartSuccess,
  getCartFailure,
  getCartSuccess,
  removeCartItemSuccess,
  removeCartItemFailure,
  updateCartItemFailure,
  updateCartItemSuccess,
} from "./cart.action";
import { BehaviorSubject, catchError, map, of, Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  API_BASE_URL = BASE_API_URL;

  // Use BehaviorSubject with initial value from API
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  private unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Add item to the cart (client-side and API logic)
  addItemToCart(product: any) {
    const currentCart = this.cartItems.value;

    // Check if the product already exists in the cart using numeric ID
    const existingProductIndex = currentCart.findIndex(item => Number.isInteger(item.id) && item.id === product.id);

    if (existingProductIndex !== -1) {
      // Increment the quantity if product is already in the cart
      currentCart[existingProductIndex].quantity += 1;
    } else {
      // Add the new product to the cart with a quantity of 1 (ensure numeric ID)
      currentCart.push({ ...product, id: Number(product.id), quantity: 1 });
    }

    // Update the cart with new items locally
    this.cartItems.next(currentCart);

    // Optionally, dispatch an action to update the store if needed
    this.store.dispatch(addItemToCartSuccess({ payload: currentCart }));
  }

  // Get cart items from the local BehaviorSubject (for reactive UI updates)
  getCartItems() {
    return this.cartItems$;
  }

  // Fetch cart items from API and update local BehaviorSubject
  getcart() {
    const url = `${this.API_BASE_URL}/api/cart/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });

    return this.http.get(url, { headers }).pipe(
      map((data: any) => {
        const cartItems = data.cartItems ? data.cartItems.map((item: any) => {
          const product = item.product ? item.product : {};
          return {
            cartItemId: item._id || null,  // Assign cartItemId from the item's _id (or create one)
            product: {
              id: product.id || null, // Use numeric ID for the product
              brand: product.brand || null,
              title: product.title || null,
              description: product.description || null,
              image: product.imageUrl || null,
            },
            price: item.price || 0,
            discountedPrice: item.discountedPrice || 0,
            size: item.size || null,
            quantity: item.quantity || 0,
          };
        }) : [];

        return getCartSuccess({ payload: { ...data, cartItems } });
      }),
      catchError((error: any) => {
        const errorMessage = error.error?.message || error.message;
        console.error('Error fetching cart:', errorMessage);  // Log the error for debugging
        return of(getCartFailure(errorMessage));
      })
    ).subscribe((action) => this.store.dispatch(action));
  }

  // Remove an item from the cart by cartItemId (API and NgRx store)
  removeCartItem(cartItemId: string | object) {
    const url = `${this.API_BASE_URL}/api/cart_items/${cartItemId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });

    return this.http.delete(url, { headers }).pipe(
      map((data: any) => {
        console.log('Removed item: ', data);
        return removeCartItemSuccess({ cartItemId });
      }),
      catchError((error: any) => {
        const errorMessage = error.error?.message || error.message;
        return of(removeCartItemFailure(errorMessage));
      })
    ).subscribe((action) => this.store.dispatch(action));
  }

  // Update the quantity or data of a cart item (API and NgRx store)
  updateCartItem(reqData: any) {
    console.log('Request Data: ', reqData);
    const url = `${this.API_BASE_URL}/api/cart_items/${reqData.cartItemId}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });

    return this.http.put(url, reqData.data, { headers }).pipe(
      map((data: any) => {
        console.log('Updated item: ', data);
        return updateCartItemSuccess({ payload: data });
      }),
      catchError((error: any) => {
        const errorMessage = error.error?.message || error.message;
        return of(updateCartItemFailure(errorMessage));
      })
    ).subscribe((action) => this.store.dispatch(action));
  }

  // Clear the cart (client-side only)
  clearCart() {
    this.cartItems.next([]);
  }
}