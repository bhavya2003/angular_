// src/app/State/Product/product.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from './product.service';
import { 
    findProductByCategoryRequest, 
    findProductByCategorySuccess, 
    findProductByCategoryFailure,
    findProductByIdRequest,
    findProductByIdSuccess,
    findProductByIdFailure
} from '../Product/product.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}

    findProductByCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(findProductByCategoryRequest),
            mergeMap(action =>
                this.productService.findProductsByCategory(action.categoryId).pipe(
                    map(products => findProductByCategorySuccess({ payload: products })),
                    catchError(error => of(findProductByCategoryFailure({ error })))
                )
            )
        )
    );

    findProductById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(findProductByIdRequest),
            mergeMap(action =>
                this.productService.findProductsById(action.productId).pipe(
                    map(product => findProductByIdSuccess({ payload: product })),
                    catchError(error => of(findProductByIdFailure({ error })))
                )
            )
        )
    );
}
