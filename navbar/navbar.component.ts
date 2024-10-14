import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavContentComponent } from './nav-content/nav-content.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from '../../../../auth/auth.component';
import { AuthService } from '../../../../../State/Auth/auth.service';
import { UserService } from '../../../../../State/User/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../../Models/AppState';
import { HttpClient} from '@angular/common/http';
import { filter, take } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule,MatMenuModule,NavContentComponent,MatDialogModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

//   currentSection:any
//   isNavbarContentOpen:any
//   userProfile:any
  

  

//   constructor(private router:Router, private dialog : MatDialog,private userService:UserService, private store:Store<AppState>,private authService:AuthService){

//   }


//   openNavbarContent(section:any) {
//     this.isNavbarContentOpen=true;
//     this.currentSection=section;
//   }

//   closeNavbarContent(){
//     this.isNavbarContentOpen=false
//   }

//   // NavigateTo(path:any) {
//   //   this.router.navigate([path])
//   // }

//   NavigateTo(path: string) {
//     if (path === 'login' && this.userProfile && this.userProfile.role === 'admin') {
//         // If the user is an admin, allow navigation to the admin panel
//         this.router.navigate(['/admin']); // Adjust the route based on your admin panel
//     } else if (path === 'login') {
//         // If the user is not an admin, show access denied
//         alert('Access Denied: You must be an admin to access this page.');
//     } else {
//         this.router.navigate([path]);
//     }
// }






//   ngOnInit(){

//     if(localStorage.getItem("jwt")) this.userService.getUserProfile()

//       this.store.pipe(select((store)=>store.user)).subscribe((user)=>{
//         this.userProfile=user.userProfile;
//         console.log("store",this.store)
  

//         if(this.userProfile){
//           this.dialog.closeAll()
//         }
//       })
//   }


//   @HostListener('document:click', ['$event']) 
//   onDocumentClick(event:MouseEvent) {
//     const modalContainer = document.querySelector(".modal-container");
//     const openButtons = document.querySelectorAll(".open-button");

//     let clickInsideButton=false;

//     openButtons.forEach((button:Element)=>{
//       if(button.contains(event.target as Node)) {
//         clickInsideButton=true
//       }
//     })

//     if(modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
//       this.closeNavbarContent();
//     }

//   }

//   onOpenLoginModal=()=>{
//     console.log("handle open login module")
//     this.dialog.open(AuthComponent,{
//       width:"500px",
//       disableClose:false

//     })
//   }
  
//   // handleLogout=()=>{
//   //   this.userService.logout()
//   //   this.router.navigate(['/']);
//   // }

//   handleLogout(userId: string) {
//     if (confirm('Are you sure you want to log out?')) {
//       this.userService.logout(userId); // Call logout with user ID
//       this.router.navigate(['/']);
//     }
//   }

//   navigate(path:string){
//     this.router.navigate([path])
//   }

// currentSection: any;                // Variable to hold the current section
//   isNavbarContentOpen: boolean = false; // Boolean to manage navbar state
//   userProfile: any;   
//   isProfileLoaded: boolean = false;                 // Variable to hold user profile data

//   constructor(
//     private router: Router,
//     private dialog: MatDialog,
//     private userService: UserService,
//     private store: Store<AppState>,
//     private authService: AuthService
//   ) {}

//   // Method to open navbar content based on the section
//   openNavbarContent(section: any) {
//     this.isNavbarContentOpen = true;
//     this.currentSection = section;
//   }

//   // Method to close the navbar content
//   closeNavbarContent() {
//     this.isNavbarContentOpen = false;
//   }

//   // Navigation method to handle routing based on user role
//   // NavigateTo(path: string) {
//   //   if (this.userProfile && this.userProfile.role === 'admin') {
//   //     // Navigate to the login component when the user is an admin
//   //     this.router.navigate(['/login']);
//   //   } else {
//   //     alert('Access Denied: Only admins can access this page.');
//   //   }
//   // }

//   NavigateTo(path: string) {
//     if (!this.isProfileLoaded) {
//       alert('Profile is still loading. Please wait.');
//       return;
//     }

//     if (this.userProfile && this.userProfile.role === 'admin') {
//       // Navigate to the login component when the user is an admin
//       this.router.navigate(['/login']);
//     } else {
//       alert('Access Denied: Only admins can access this page.');
//     }
//   }

//   // showAccessDeniedAlert() {
//   //   alert('Access Denied: You must be an admin to access this page.');
//   // }


//   ngOnInit() {
//     // Fetch user profile if JWT exists
//     if (localStorage.getItem("jwt")) {
//       this.userService.getUserProfile(); // Ensure this fetches the user profile correctly
//     }

//     // Subscribe to user profile from store
//     this.store.pipe(select((store) => store.user)).subscribe((user) => {
//       this.userProfile = user.userProfile;
//       console.log("User profile from store:", this.userProfile);

//       // Close dialog if user profile is available
//       if (this.userProfile) {
//         this.dialog.closeAll();
//       }
//     });
//   }

//   // HostListener to manage clicks outside the modal
//   @HostListener('document:click', ['$event']) 
//   onDocumentClick(event: MouseEvent) {
//     const modalContainer = document.querySelector(".modal-container");
//     const openButtons = document.querySelectorAll(".open-button");

//     let clickInsideButton = false;

//     // Check if clicked inside an open button
//     openButtons.forEach((button: Element) => {
//       if (button.contains(event.target as Node)) {
//         clickInsideButton = true;
//       }
//     });

//     // Close the navbar if clicked outside
//     if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
//       this.closeNavbarContent();
//     }
//   }

//   // Method to open the login modal
//   onOpenLoginModal() {
//     console.log("Opening login modal");
//     this.dialog.open(AuthComponent, {
//       width: "500px",
//       disableClose: false
//     });
//   }

//   // Method to handle user logout
//   handleLogout(userEmail: string) {
//     if (confirm('Are you sure you want to log out?')) {
//       this.userService.logout(userEmail); // Call logout with user ID
//       this.router.navigate(['/']); // Redirect to home after logout
//     }
//   }

//   // Generic navigation method
//   navigate(path: string) {
//     this.router.navigate([path]);
//   }

currentSection: any;
  isNavbarContentOpen = false;
  userProfile: any;
  isProfileLoaded: boolean = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }

  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }


  NavigateTo(path: string) {

      this.router.navigate([`/${path}`]);

   }

 

   


  // Subscribe to profile store
  ngOnInit() {
    // Fetch the profile on component initialization
    if (localStorage.getItem('jwt')) {
      this.userService.getUserProfile();  // Trigger profile fetch
    }

    // Wait for the profile to load
    this.store.pipe(select((store) => store.user)).subscribe((user) => {
      this.userProfile = user.userProfile;
      this.isProfileLoaded = !!this.userProfile;
      console.log('User profile fetched:', this.userProfile);
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });

    if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }

  onOpenLoginModal() {
        console.log("Opening login modal");
        this.dialog.open(AuthComponent, {
          width: "500px",
          disableClose: false
        });
      }

  handleLogout(userEmail: string) {
    if (confirm('Are you sure you want to log out?')) {
      this.userService.logout(userEmail);
      this.router.navigate(['/']);
    }
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }


}
