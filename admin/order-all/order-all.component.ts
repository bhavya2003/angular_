import { Component } from '@angular/core';
import { OrderService } from '../../../State/order/order.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-all',
  standalone: true,
  imports: [CommonModule,FormsModule,MatMenuModule,MatCardModule,MatToolbarModule,MatButtonModule,MatTableModule],
  templateUrl: './order-all.component.html',
  styleUrl: './order-all.component.scss'
})
export class OrderAllComponent {

  displayedColumns: string[] = ['image', 'title', 'price', 'status', 'update', 'delete'];
  orders = new MatTableDataSource<Order>([
    { 
      imageUrl: 'https://via.placeholder.com/50', 
      title: 'Product Name', 
      price: 999, 
      status: 'PLACED' 
    },
    // Add more orders
  ]);

  getStatusColor(status: string): string {
    switch (status) {
      case 'PLACED':
        return 'primary';
      case 'CONFIRMED':
        return 'accent';
      case 'SHIPPED':
        return 'warn';
      case 'DELIVERED':
        return 'success';
      default:
        return '';
    }
  }

  updateStatus(order: Order, status: string) {
    order.status = status;
  }

  deleteOrder(order: Order) {
    const index = this.orders.data.indexOf(order);
    if (index >= 0) {
      this.orders.data.splice(index, 1);
      this.orders._updateChangeSubscription(); // Update table
    }
  }
}

interface Order {
  imageUrl: string;
  title: string;
  price: number;
  status: string;
}
