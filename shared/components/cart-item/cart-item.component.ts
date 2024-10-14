import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../../../State/cart/cart.service';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatButton,MatButtonModule,MatIcon, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input() cartItem:any;
  @Input() showButton:any;



  constructor(private cartService:CartService){
  console.log("cartItem", this.cartItem);  // Add this line to inspect the cartItem structure



  }

  updateCartItem(num:Number){
    console.log("num",num)
    this.cartService.updateCartItem({
      cartItemId:this.cartItem.id,
      data:{quantity:num+this.cartItem.quantity}
    })
  }

  removeCartItem(){
    console.log("remove cart item")
    this.cartService.removeCartItem(this.cartItem.Id)
  }

  

}
