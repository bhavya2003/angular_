// src/app/reducers.ts
import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './State/Auth/auth.reducer'; // Import your feature reducers
import { userReducer } from './State/User/user.reducer';
import { productReducer } from './State/Product/product.reducer';
import { cartReducer } from './State/cart/cart.reducer';
import { orderReducer } from './State/order/order.reducer';

export interface AppState {
  user: any;
  product: any;
  auth: any; 
  cart: any;
  order: any;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,  
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer
};
