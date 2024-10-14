import { Component,Input } from '@angular/core';
import { TrackerComponent } from '../../../shared/components/tracker/tracker.component';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from '../orders/order-card/order-card.component';
import { AddresscardComponent } from '../../../shared/components/addresscard/addresscard.component';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [TrackerComponent,MatIcon,MatDivider,CommonModule,OrderCardComponent,AddresscardComponent],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {

  orders=[1, 1, 1];

  steps=[
    {id:0,title:"PLACED",iscompleted:true},
    {id:1,title:"CONFIRMED",iscompleted:true},
    {id:2,title:"SHIPPED",iscompleted:false},
    {id:3,title:"DELIVERED",iscompleted:false}
  
 
  
  ]

}
