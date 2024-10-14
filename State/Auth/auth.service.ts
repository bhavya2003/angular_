import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { BASE_API_URL } from "../../Config/api";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { catchError, map, of, tap } from "rxjs";
import { loginFailure, loginSuccess, registerFailure, registerSuccess,logout } from "./auth.actions";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn:'root',
})

export class AuthService{
  private isBrowser: boolean;
  private apiUrl=BASE_API_URL+"/auth";

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient, private store:Store){
    console.log('AuthService constructor called');
    this.isBrowser = isPlatformBrowser(this.platformId);
    console.log('Running in browser:', this.isBrowser);

    // If needed, call any initialization methods
    if (this.isBrowser) {
      console.log('Initializing AuthService in browser');
      this.initAuth();
    }
    else{
      console.log("not running")
    }
  }

   initAuth() {
    // Any auth-related logic here
    console.log('Initializing authentication process...');
  }

  login(loginData:any){
    return this.http.post(`${this.apiUrl}/signin`,loginData).pipe(
      map((user:any)=>{
        console.log('login user',user)
        if( this.isBrowser && user.jwt ){
          localStorage.setItem("jwt",user.jwt);
        }
        return loginSuccess({user})
        
      }),
      catchError((error)=>{
        console.error('Login error:', error);
        return of(
          loginFailure(
            error.response && error.response.data.message ?
            error.response.data.message : error.message
          )
        )
      })

    ).subscribe((action)=>this.store.dispatch(action))
  }

  register(user:any){
    return this.http.post(`${this.apiUrl}/signup`,user).pipe(
      map((user:any)=>{
        console.log('register user',user)
        if(this.isBrowser && user.jwt){
          localStorage.setItem("jwt",user.jwt);
        }
        return registerSuccess({user})
      }),
      catchError((error)=>{
        return of(
          registerFailure(
            error.response && error.response.data.message ?
            error.response.data.message : error.message
          )
        )
      })

    ).subscribe((action)=>this.store.dispatch(action))
  }


  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .pipe(
        tap(() => {
          // Optionally, remove token from local storage
          localStorage.removeItem('token');
        })
      );
  }

}