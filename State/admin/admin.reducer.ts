import { createReducer, on } from '@ngrx/store';
import { 
    addProduct, 
    addProductSuccess, 
    addProductFailure,
    getProducts,
    getProductsSuccess,
    getProductsFailure,
    updateProduct,
    updateProductSuccess,
    updateProductFailure,
    deleteProduct,
    deleteProductSuccess,
    deleteProductFailure 
} from './admin.action';

// Define the initial state for the admin
export interface AdminState {
    products: any[];        // Array to hold products
    loading: boolean;       // To track loading state
    error: string | null;   // To hold any error messages
}

export const initialState: AdminState = {
    products: [],
    loading: false,
    error: null
};

// Create the reducer
export const adminReducer = createReducer(
    initialState,
    
    // Add Product
    on(addProduct, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(addProductSuccess, (state, { payload }) => ({
        ...state,
        loading: false,
        products: [...state.products, payload],
        error: null
    })),
    on(addProductFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // Get Products
    on(getProducts, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(getProductsSuccess, (state, { payload }) => ({
        ...state,
        loading: false,
        products: payload,
        error: null
    })),
    on(getProductsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // Update Product
    on(updateProduct, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(updateProductSuccess, (state, { payload }) => ({
        ...state,
        loading: false,
        products: state.products.map(product => 
            product.id === payload.id ? payload : product
        ),
        error: null
    })),
    on(updateProductFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // Delete Product
    on(deleteProduct, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(deleteProductSuccess, (state, { productId }) => ({
        ...state,
        loading: false,
        products: state.products.filter(product => product.id !== productId),
        error: null
    })),
    on(deleteProductFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);
