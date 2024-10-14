// import { createReducer, on } from "@ngrx/store";
// import * as CartActions from './cart.action';
// import { error } from "console";

// export interface Cartstate {
//     cartItems: any[];
//     loading: boolean;
//     error:any;
//     cart:any,
// }

// export const initalState: Cartstate={
//     cartItems:[],
//     loading:false,
//     error:null,
//     cart:null
// }

// export const cartReducer =createReducer(
//     initalState,

//     on(CartActions.addItemToCartRequest,(state)=>({
//         ...state,
//         loading:true,
//         error:null,
//     })),

//     on(CartActions.addItemToCartSuccess,(state, action)=>({
//         ...state,
//         loading:false,
//         cartItems : [...state.cartItems, action.payload],
//     })),

//     on(CartActions.addItemToCartFailure,(state,action)=>({
//         ...state,
//         loading:false,
//         error: action.error,
//     })),

//     on(CartActions.getCartRequest,(state)=>({
//         ...state,
//         loading:true,
//         error:null,
//     })),

//     on(CartActions.getCartSuccess,(state,action)=>({
//         ...state,
//         loading: false,
//         cartItems: action.payload.cartItems || [],
//         cart:action.payload
//     })),

//     on(CartActions.getCartFailure,(state,action)=>({
//         ...state,
//         loading:false,
//         error:action.error,
//     })),

//     on(CartActions.removeCartItemRequest,(state)=>({
//         ...state,
//         loading:true,
//         error:null,
//     })),

//     on(CartActions.removeCartItemSuccess,(state,action)=>({
//         ...state,
//         loading:false,
//         cartItems: state.cartItems.filter((item)=> item.id !== action.cartItemId),
//     })),

//     on(CartActions.removeCartItemFailure,(state,action)=>({
//         ...state,
//         loading:true,
//         error:action.error,
//     })),

//     on(CartActions.updateCartItemRequest,(state)=>({
//         ...state,
//         loading:true,
//         error:null,
//     })),

//     on(CartActions.updateCartItemSuccess,(state,action)=>({
//         ...state,
//         loading:false,
//         cartItems: state.cartItems.map((item)=> item.id == action.payload.id ? action.payload : item),
//     })),

//     on(CartActions.updateCartItemFailure,(state,action)=>({
//         ...state,
//         loading:false,
//         error:action.error,
//     }))
// );


import { createReducer, on } from "@ngrx/store";
import * as CartActions from './cart.action';

export interface CartState {
    cartItems: any[];  // Stores the items in the cart
    loading: boolean;  // Tracks loading state for async operations
    error: any;        // Stores error message (if any)
    cart: any;         // Stores overall cart data, like total amount, etc.
}

export const initialState: CartState = {
    cartItems: [],
    loading: false,
    error: null,
    cart: null
};

export const cartReducer = createReducer(
    initialState,

    // Add item to cart
    on(CartActions.addItemToCartRequest, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(CartActions.addItemToCartSuccess, (state, action) => ({
        ...state,
        loading: false,
        cartItems: [...state.cartItems, action.payload], // Add new item to the cart
    })),

    on(CartActions.addItemToCartFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.error
    })),

    // Get cart data
    on(CartActions.getCartRequest, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(CartActions.getCartSuccess, (state, action) => ({
        ...state,
        loading: false,
        cartItems: action.payload.cartItems || [],  // Ensure cartItems is always an array
        cart: action.payload  // Store the full cart data
    })),

    on(CartActions.getCartFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.error
    })),

    // Remove item from cart
    on(CartActions.removeCartItemRequest, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(CartActions.removeCartItemSuccess, (state, action) => ({
        ...state,
        loading: false,
        cartItems: state.cartItems.filter((item) => item.id !== action.cartItemId)  // Remove the item by ID
    })),

    on(CartActions.removeCartItemFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.error
    })),

    // Update cart item quantity or details
    on(CartActions.updateCartItemRequest, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(CartActions.updateCartItemSuccess, (state, action) => ({
        ...state,
        loading: false,
        cartItems: state.cartItems.map((item) => 
            item.id === action.payload.id ? action.payload : item  // Update only the specific item
        )
    })),

    on(CartActions.updateCartItemFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.error
    }))
);
