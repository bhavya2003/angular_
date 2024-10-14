// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Store } from "@ngrx/store";
// import { catchError, map,of } from "rxjs";
// import { BASE_API_URL } from '../../Config/api'; 
// import { getUserProfileFailure, getUserProfileSuccess } from "./user.action";



// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   private apiURL = BASE_API_URL+"/api"; 
//   headers:any

//   constructor(private http: HttpClient, private store: Store) {
//      this.headers=new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem("jwt")}`)
//   }

  
  
//   getUserProfile() {
//     return this.http.get(`${this.apiURL}/profile`,{headers:this.headers}).pipe(
//       map((user: any) => {
//          console.log('user profile success',user)
         
//         return getUserProfileSuccess({userProfile:user})
//       }),
//       catchError((error) => {
//         return of(
//             getUserProfileFailure(
//                 error.response && error.response.data.message ? 
//                 error.response.data.message : error.message
                
//          )
//         )
        
//       })
//     ).subscribe((action)=>this.store.dispatch(action))
//   }

// }

// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Store } from "@ngrx/store";
// import { catchError, map, of } from "rxjs";
// import { BASE_API_URL } from '../../Config/api'; 
// import { getUserProfileFailure, getUserProfileSuccess, logoutSuccess } from "./user.action";

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   private apiURL = `${BASE_API_URL}/api`; 
//   headers: HttpHeaders;

//   constructor(private http: HttpClient, private store: Store) {
//     if(typeof window !== 'undefined' && window.localStorage){
//     this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`);
//     }
//     else{
//       this.headers = new HttpHeaders();
//     }
//   }

//   getUserProfile() {
    // const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt") || ''}`);
    // return this.http.get(`${this.apiURL}/profile`, { headers:this.headers}).pipe(
    //   map((user: any) => {
    //     console.log('User profile success', user);
    //     return getUserProfileSuccess({ userProfile: user });
    //   }),
    //   catchError((error) => {
        // const errorMessage = error.error?.message || error.message || 'An error occurred';
  //       return of(
  //         getUserProfileFailure(
  //           error.response && error.response.data.message ?
  //           error.response.data.message : error.message
          
  //         )
  //       );
  //     })
  //   ).subscribe((action)=>this.store.dispatch(action))
  // }

  // src/app/State/User/user.service.ts
// deleteUser(userId: string) {
//   const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`);
//   return this.http.delete(`${this.apiURL}/users/${userId}`, { headers }).pipe(
//     map((response: any) => {
//       console.log('User deleted successfully', response);
//       return response;
//     }),
//     catchError((error) => {
//       console.error('Delete user error:', error);
//       return of(error.message || 'Error occurred while deleting user');
//     })
//   );
// }


// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Store } from "@ngrx/store";
// import { catchError, map, of } from "rxjs";
// import { BASE_API_URL } from '../../Config/api'; 
// import { getUserProfileFailure, getUserProfileSuccess, logoutSuccess } from "./user.action";

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   private apiURL = `${BASE_API_URL}/api`; 
//   headers: HttpHeaders;

//   constructor(private http: HttpClient, private store: Store) {
    // Initialize headers with Authorization only if JWT token is available
  //   const token = localStorage.getItem("jwt");
  //   this.headers = token ? new HttpHeaders().set("Authorization", `Bearer ${token}`) : new HttpHeaders();
  // }

  // getUserProfile() {
  //   return this.http.get(`${this.apiURL}/profile`, { headers: this.headers }).pipe(
  //     map((user: any) => {
  //       console.log('User profile success', user);
  //       return getUserProfileSuccess({ userProfile: user });
  //     }),
  //     catchError((error) => {
  //       const errorMessage = error.error?.message || error.message || 'An error occurred';
  //       return of(getUserProfileFailure(errorMessage));
  //     })
  //   ).subscribe((action) => this.store.dispatch(action));
  // }

  // deleteUser(userId: string) {
  //   return this.http.delete(`${this.apiURL}/users/${userId}`, { headers: this.headers }).pipe(
  //     map((response: any) => {
  //       console.log('User deleted successfully', response);
        // return response;  // You can dispatch an action here if needed
  //     }),
  //     catchError((error) => {
  //       const errorMessage = error.error?.message || error.message || 'Error occurred while deleting user';
  //       console.error('Delete user error:', error);
  //       return of(errorMessage);
  //     })
  //   );
  // }

  // logout() {
  //   localStorage.removeItem("jwt");
  //   this.store.dispatch(logoutSuccess());
  // }

  // isAdmin(userProfile: any): boolean {
  //   // Example admin check (adjust based on your actual structure)
//     return userProfile && 
//            userProfile.firstName === 'admin' &&
//            userProfile.lastName === 'admin' &&
//            userProfile.email === 'admin@gmail.com' &&
//            userProfile.password === '12345678' &&
//            userProfile.role === 'admin';
//   }
// }


import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { BASE_API_URL } from '../../Config/api'; 
import { getUserProfileFailure, getUserProfileSuccess, logoutSuccess } from "./user.action";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL = `${BASE_API_URL}/api/profile`; 
  headers: HttpHeaders;
  isProfileLoaded: boolean = false;
  userProfile: any;

  constructor(private http: HttpClient, private store: Store, private router: Router) {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("jwt")}`);
    } else {
      this.headers = new HttpHeaders();
    }
  }

  // Method to get user profile
  // getUserProfile() {
  //   return this.http.get(`${this.apiURL}`, { headers: this.headers }).pipe(
  //     map((user: any) => {
  //       console.log('User profile success', user);
  //       return getUserProfileSuccess({ userProfile: user });
  //     }),
  //     catchError((error) => {
  //       return of(
  //         getUserProfileFailure(
  //           error.response && error.response.data.message ?
  //           error.response.data.message : error.message
  //         )
  //       );
  //     })
  //   ).subscribe((action) => this.store.dispatch(action));
  // }
  

  getUserProfile() {
    return this.http.get(`${this.apiURL}`, { headers: this.headers }).pipe(
      map((user: any) => {
        console.log('User profile success', user);
        this.isProfileLoaded = true; // Mark profile as loaded
        this.userProfile = user; // Store the user profile
        console.log('User role:', this.userProfile?.role);
        return getUserProfileSuccess({ userProfile: user });
      }),
      catchError((error) => {
        this.isProfileLoaded = false; // In case of error, mark profile as not loaded
        return of(
          getUserProfileFailure(
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      })
    ).subscribe((action) => this.store.dispatch(action));
  }

  // Method to navigate to the desired path
  // NavigateTo(path: string) {
  //   // Check if the profile is loaded before navigating
  //   if (this.isProfileLoaded && this.userProfile?.role === 'admin') {
  //     // Navigate to the specified path when the user is an admin
  //     this.router.navigate([`/${path}`]);
  //   } else if (this.isProfileLoaded && this.userProfile?.role !== 'admin') {
  //     alert('Access Denied: Only admins can access this page.');
  //   }
  // }

  NavigateTo(path: string) {
    if (this.isProfileLoaded && this.userProfile?.role === 'admin') {
      this.router.navigate([`/${path}`]);
    } else if (this.isProfileLoaded && this.userProfile?.role !== 'admin') {
      alert('Access Denied: Only admins can access this page.');
    }
  }

  
  
  

  // Method to get all users
  getAllUsers() {
    return this.http.get<any[]>(`${this.apiURL}/users`, { headers: this.headers }).pipe(
      catchError((error) => {
        console.error('Error fetching users:', error);
        return of([]); // Return an empty array on error
      })
    );
  }

  // Method to delete a user
  deleteUser(userId: string) {
    console.log('Attempting to delete user with ID:', userId);
    return this.http.delete(`${this.apiURL}/users/${userId}`, { headers: this.headers }).pipe(
      map((response: any) => {
        console.log('User deleted successfully', response);
        return response;
      }),
      catchError((error) => {
        console.error('Delete user error:', error);
        return of(error.message || 'Error occurred while deleting user');
      })
    );
  }

  logout(userEmail: string) {
    // **Highlight: Update user status to inactive when logging out**
    this.updateUserStatusByEmail(userEmail, false).subscribe(() => {
      localStorage.removeItem("jwt");
      this.store.dispatch(logoutSuccess());
    });
  }
  
  updateUserStatusByEmail(email: string, isActive: boolean) {
    return this.http.patch(`${this.apiURL}/users/email/${email}`, { isActive }, { headers: this.headers }).pipe(
      map((response: any) => {
        console.log('User status updated:', response);
        return response;
      }),
      catchError((error) => {
        console.error('Error updating user status:', error);
        return of(null); // Handle error gracefully
      })
    );
  }
  

  

  // Logout method
  // logout() {
  //   localStorage.removeItem("jwt");
  //   this.store.dispatch(logoutSuccess());
  // }

  // Method to check if the user is admin
  isAdmin(userProfile: any): boolean {
    return userProfile && userProfile.firstName === 'admin' && userProfile.lastName === 'admin' &&
           userProfile.email === 'admin@gmail.com' && userProfile.password === '12345678' && 
           userProfile.role === 'admin';
  }
}







  // logout(){
  //   localStorage.removeItem("jwt");
  //   this.store.dispatch(logoutSuccess())

    
  // }

  // isAdmin(userProfile: any): boolean {
  //   return userProfile && userProfile.firstName === 'admin' && userProfile.lastName === 'admin' && userProfile.email ==='admin@gmail.com' && userProfile.password === '12345678' && userProfile.role === 'admin';
  // }
// }


