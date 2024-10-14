// // models/cart-item.model.ts
// export interface CartItem {
//     id: string;
//     product: {
//         title: string;
//         price: number;
//         imageUrl: string;

//     };
//     quantity: number;
// }


export interface Product {
    _id: string;
    title: string;
    brand: string;
    color: string;
    imageUrl: string;
    description: string;
  }
  
  export interface CartItem {
    _id: string;
    cart: string;
    product: Product; // This is the nested product object
    size: string;
    quantity: number;
    price: number;
    discountedPrice: number;
  }
  
  export interface CartResponse {
    _id: string;
    user: string;
    cartItems: CartItem[];
    totalPrice: number;
    totalItem: number;
    totalDiscountedPrice: number;
    discount: number;
  }
  