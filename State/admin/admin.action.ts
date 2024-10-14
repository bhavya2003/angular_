import { createAction, props } from '@ngrx/store';

// Add Product Actions
export const addProduct = createAction(
    '[Admin] Add Product',
    props<{ payload: any }>()
);

export const addProductSuccess = createAction(
    '[Admin] Add Product Success',
    props<{ payload: any }>()
);

export const addProductFailure = createAction(
    '[Admin] Add Product Failure',
    props<{ error: string }>()
);

// Get Products Actions
export const getProducts = createAction(
    '[Admin] Get Products'
);

export const getProductsSuccess = createAction(
    '[Admin] Get Products Success',
    props<{ payload: any }>()
);

export const getProductsFailure = createAction(
    '[Admin] Get Products Failure',
    props<{ error: string }>()
);

// Update Product Actions
export const updateProduct = createAction(
    '[Admin] Update Product',
    props<{ payload: any }>()
);

export const updateProductSuccess = createAction(
    '[Admin] Update Product Success',
    props<{ payload: any }>()
);

export const updateProductFailure = createAction(
    '[Admin] Update Product Failure',
    props<{ error: string }>()
);

// Delete Product Actions
export const deleteProduct = createAction(
    '[Admin] Delete Product',
    props<{ productId: number }>()
);

export const deleteProductSuccess = createAction(
    '[Admin] Delete Product Success',
    props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
    '[Admin] Delete Product Failure',
    props<{ error: string }>()
);
