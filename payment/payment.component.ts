import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { CartItemComponent } from '../../../shared/components/cart-item/cart-item.component';
import { AddresscardComponent } from '../../../shared/components/addresscard/addresscard.component';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../../State/order/order.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';
import { PaymentService } from '../../../../State/payment/payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [MatDivider,CommonModule,CartItemComponent,AddresscardComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  products=[1,1,1]
  order:any

  constructor(private activatedRoute:ActivatedRoute, private orderService:OrderService,private store:Store<AppState>,private paymentService:PaymentService){}

  ngOnInit(){
    let id=this.activatedRoute.snapshot.paramMap.get("id")
    console.log("id",id)
    if(id){
      this.orderService.getOrderById(id);
    }

    this.store.pipe(select(store=>store.order)).subscribe((order)=>{
    this.order=order.order
    })
 
  }

  redirectToPayment=()=>{
    if(this.order.id){
      this.paymentService.createPayment(this.order.id)
    }

  }

}
