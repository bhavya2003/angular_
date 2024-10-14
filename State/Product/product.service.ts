import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../Config/api';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { 
  findProductByCategoryFailure, 
  findProductByCategorySuccess, 
  findProductByIdFailure, 
  findProductByIdSuccess, // Import action to handle fetching all products
} from './product.action';
import { Product } from '../admin/models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_BASE_URL = BASE_API_URL;

  constructor(private store: Store, private http: HttpClient) {}

  private getHeader(): HttpHeaders {
    const token = localStorage.getItem("jwt");
    return new HttpHeaders().set("Authorization", `Bearer ${token}`);
  }

  findProductsByCategory(reqData: any): Observable<any> {
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;

    let params = new HttpParams()
      .set('color', colors)
      .set('size', sizes)
      .set('minPrice', minPrice)
      .set('maxPrice', maxPrice)
      .set('minDiscount', minDiscount)
      .set('category', category)
      .set('stock', stock)
      .set('sort', sort)
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

    const headers = this.getHeader();

    return this.http.get(`${this.API_BASE_URL}/api/products`, { headers, params }).pipe(
      map((data: any) => {
        console.log('Products data', data);
        return findProductByCategorySuccess({ payload: data });
      }),
      catchError((error: any) => {
        const errorMessage = error.error?.message || error.message;
        return of(findProductByCategoryFailure(errorMessage));
      })
    );
  }

  findProductsById(id: number): Observable<Product | null> {
    const headers = this.getHeader();

    return this.http.get<Product>(`${this.API_BASE_URL}/api/products/id/${id}`, { headers }).pipe(
      map((data: Product) => {
        console.log("Product details", data);
        return data; // Return the product data directly
      }),
      catchError((error: any) => {
        const errorMessage = error.error?.message || error.message;
        console.error(errorMessage);
        return of(null); // Return null in case of an error
      })
    );
  }

// Method to add a new product
  addProduct(routePath: string, productDetails: any): Observable<any> {
    const headers = this.getHeader();
    return this.http.post(`${this.API_BASE_URL}/api/admin/products`, productDetails, { headers }).pipe(
      map((response: any) => {
        // After adding the product, fetch all products to update the store
        this.getAllProducts(); // Call to update the products list
        return response;
      }),
      catchError((error: any) => {
        const errorMessage = error.error && error.error.message ? 
                             error.error.message : error.message;
        console.error('Error adding product', errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  // Method to update an existing product
  updateProduct(productId: string, productData: any): Observable<any> {
    const headers = this.getHeader();
    return this.http.put(`${this.API_BASE_URL}/api/admin/products/${productId}`, productData, { headers }).pipe(
      map((response: any) => response),
      catchError((error: any) => {
        console.error('Error updating product', error);
        return throwError(error);
      })
    );
  }

  // Method to delete a product by ID
  deleteProduct(productId: string): Observable<any> {
    const headers = this.getHeader();
    return this.http.delete(`${this.API_BASE_URL}/api/admin/products/${productId}`, { headers }).pipe(
      map(() => {
        console.log(`Product with ID: ${productId} deleted successfully`);
      }),
      catchError((error: any) => {
        console.error('Error deleting product', error);
        return of({ error: error.message });
      })
    );
  }

  // Method to get all products with pagination
  getAllProducts(page: number = 1, size: number = 10): Observable<any> {
    const headers = this.getHeader();
    return this.http.get<any>(`${this.API_BASE_URL}/api/products?page=${page}&size=${size}`, { headers }).pipe(
      map((response: any) => {
        // Check if the response contains paginated content
        if (response && response.content) {
          this.store.dispatch(findProductByIdSuccess({ payload: response.content })); // Dispatch action to update the store with all products
          return response.content; // Return only the product data
        } else {
          console.error('Unexpected response structure', response);
          return [];
        }
      }),
      catchError((error: any) => {
        console.error('Error fetching products', error);
        return throwError(error); // Throw the error to be handled by the caller
      })
    );
  }
}
