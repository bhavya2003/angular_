import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrackerComponent } from '../../../shared/components/tracker/tracker.component';
import { CommonModule } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderService } from '../../../../State/order/order.service';
import { AppState } from '../../../../Models/AppState';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, MatCheckbox,OrderCardComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  order:any[] = []

  orderFilter=[
    {value:"on_the_way",label:"On_the_way"},
    {value:"delivered",label:"Delivered"},
    {value:"cancelled",label:"Cancelled"},
    {value:"return",label:"Returned"}
  ]

  orders=[[1,1],[1,1,1],[1,1]]

  constructor(private router:Router, private orderService: OrderService, private store:Store<AppState>){}

  navigateToOrderDetails=(id:Number)=>{
    this.router.navigate([`order/details/${id}`])

  }

  ngOnInit(){
    this.fetchOrderHistory();
    // this.order = this.store.select(selectOrderHistory);
  }

  fetchOrderHistory(){
    this.orderService.getOrderHistory();
  }




}
