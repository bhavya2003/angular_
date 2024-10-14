import { createReducer,on , Action } from "@ngrx/store";
import * as OrderActions from './order.action';

export interface OrderState{
    loading:boolean;
    error: string|null;
    order:any |null;
    orders:any[];
}

const initialState: OrderState={
    loading:false,
    error:null,
    order:null,
    orders:[],
    
};

export const orderReducer=createReducer(
    initialState,
    on(OrderActions.createOrderRequest,(state)=>({
        ...state,
        loading:true,
        error:null,
    })),

    on(OrderActions.createOrderSuccess,(state, {order})=>({
        ...state,
        loading:false,
        order,
    })),

    on(OrderActions.createOrderFailure,(state, {error})=>({
        ...state,
        loading:false,
        error,
    })),

    on(OrderActions.getOrderByIdRequest,(state)=>({
        ...state,
        loading:false,
        error:null,
    })),

    on(OrderActions.getOrderByIdSuccess,(state, {order})=>({
        ...state,
        loading:false,
        order,
    })),

    on(OrderActions.getOrderByIdFailure,(state, {error})=>({
        ...state,
        loading:false,
        error,
    })),

    on(OrderActions.getOrderHistoryRequest,(state)=>({
        ...state,
        loading:false,
        error:null,
    })),

    on(OrderActions.getOrderHistorySuccess,(state, {orders})=>({
        ...state,
        loading:false,
        orders,
    })),

    on(OrderActions.getOrderHistoryFailure,(state, {error})=>({
        ...state,
        loading:false,
        error,
    })),
)