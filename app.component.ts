import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule, Router } from '@angular/router';
import { FeatureModule} from './Module/feature/feature.module';
import { SharedModule } from './Module/shared/shared.module';
import { HomeComponent } from './Module/feature/components/home/home.component';
import { NavbarComponent } from './Module/feature/components/home/navbar/navbar.component';
import { ProductsComponent } from './Module/feature/components/products/products.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButton } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { UserService } from './State/User/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from './Models/AppState';
import { CartService } from './State/cart/cart.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,MatButtonModule,MatRadioModule,MatButton,FeatureModule,SharedModule,HomeComponent,NavbarComponent,ProductsComponent,MatDividerModule,MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';

  user:any;

  constructor(private userService: UserService, private store: Store<AppState>, private cartService: CartService){
        
  }

  ngOnInit(){
    if(localStorage.getItem("jwt")) 
      {this.userService.getUserProfile()
      this.cartService.getcart()}
    
      this.store.pipe(select((store)=>store.auth)).subscribe((auth)=>{
        this.userService.getUserProfile()
        this.cartService.getcart()
        console.log("store",this.user)
      
        
      })

  }

  
}

 