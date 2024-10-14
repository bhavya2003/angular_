// import { createReducer, on } from "@ngrx/store"
// import { findProductByCategoryFailure, findProductByCategorySuccess, findProductByIdFailure, findProductByIdSuccess } from "./product.action"

// const  initalState={
//     products:[],
//     loading:false,
//     error:null,
//     product:null

// }

// export const productReducer=createReducer(
//     initalState,
//     on(findProductByCategorySuccess,(state,{payload})=>({
//         ...state,
//         products:payload,
//         content:payload.content,
//         loading:false
//     })),

//     on(findProductByIdSuccess,(state,{payload})=>({
//         ...state,
//         product:payload,
//         loading:false
//     })),
    
//     on(findProductByCategoryFailure,
//         findProductByIdFailure,
//         (state,{error})=>({
//         ...state,
//         error:error,
//         loading:false
//     })),

// )
    



// src/app/State/Product/product.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { 
    findProductByCategoryFailure, 
    findProductByCategoryRequest, 
    findProductByCategorySuccess, 
    findProductByIdFailure, 
    findProductByIdRequest, 
    findProductByIdSuccess 
} from '../Product/product.action';

const initialState = {
    products: [],
    loading: false,
    error: null,
    product: null,
};

export const productReducer = createReducer(
    initialState,
    // Set loading to true on request
    on(findProductByCategoryRequest, findProductByIdRequest, (state) => ({
        ...state,
        loading: true,
        error: null, // Reset error state
    })),
    // Handle success for finding products by category
    on(findProductByCategorySuccess, (state, { payload }) => ({
        ...state,
        products: payload,
        loading: false,
    })),
    // Handle success for finding a product by ID
    on(findProductByIdSuccess, (state, { payload }) => ({
        ...state,
        product: payload,
        loading: false,
    })),
    // Handle failure for finding products by category or ID
    on(findProductByCategoryFailure, findProductByIdFailure, (state, { error }) => ({
        ...state,
        error: error,
        loading: false,
    }))
);
