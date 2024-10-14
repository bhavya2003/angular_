import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../Config/api";
import { Store } from "@ngrx/store";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { 
    addProductFailure, 
    addProductSuccess, 
    getProductsFailure, 
    getProductsSuccess, 
    updateProductFailure, 
    updateProductSuccess, 
    deleteProductFailure, 
    deleteProductSuccess 
} from "../admin/admin.action"; // Ensure these actions are defined
import { catchError, map, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AdminService {
    API_BASE_URL = BASE_API_URL;

    constructor(
        private store: Store,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    // Add a new product
    addProduct(reqData: any) {
        const url = `${this.API_BASE_URL}/api/admin/products`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
        });

        return this.http
            .post(url, reqData, { headers })
            .pipe(
                map((data: any) => {
                    console.log("Product added: ", data);
                    return addProductSuccess({ payload: data });
                }),
                catchError((error: any) => {
                    return of(addProductFailure(error.response && error.response.data.message ? error.response.data.message : error.message));
                })
            )
            .subscribe((action) => this.store.dispatch(action));
    }

    // Get all products
    getProducts() {
        const url = `${this.API_BASE_URL}/api/admin/products`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
        });

        return this.http.get(url, { headers }).pipe(
            map((data: any) => {
                console.log("Products: ", data);
                return getProductsSuccess({ payload: data });
            }),
            catchError((error: any) => {
                return of(getProductsFailure(error.response && error.response.data.message ? error.response.data.message : error.message));
            })
        )
        .subscribe((action) => this.store.dispatch(action));
    }

    // Update a product
    updateProduct(reqData: any) {
        const url = `${this.API_BASE_URL}/api/admin/products/${reqData.productId}`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
        });

        return this.http.put(url, reqData.data, { headers }).pipe(
            map((data: any) => {
                console.log("Product updated: ", data);
                return updateProductSuccess({ payload: data });
            }),
            catchError((error: any) => {
                return of(updateProductFailure(error.response && error.response.data.message ? error.response.data.message : error.message));
            })
        )
        .subscribe((action) => this.store.dispatch(action));
    }

    // Delete a product
    deleteProduct(productId: number) {
        const url = `${this.API_BASE_URL}/api/admin/products/${productId}`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
        });

        return this.http.delete(url, { headers }).pipe(
            map((data: any) => {
                console.log("Product deleted: ", data);
                return deleteProductSuccess({ productId });
            }),
            catchError((error: any) => {
                return of(deleteProductFailure(error.response && error.response.data.message ? error.response.data.message : error.message));
            })
        )
        .subscribe((action) => this.store.dispatch(action));
    }
}
