import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './admin.component';
import path from 'path';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductAllComponent } from './product-all/product-all.component';
import { OrderAllComponent } from './order-all/order-all.component';
import { CustomersComponent } from './customers/customers.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { MatTableModule } from '@angular/material/table';
 
const routes: Routes = [
  {path: '', component: AdminComponent,children:[
  {path: '', component: DashboardComponent},
  {path: 'allproducts', component: ProductAllComponent},
  {path: 'all-orders',component: OrderAllComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'add-products', component:AddProductsComponent},
  


]},
];

@NgModule({
  imports: [RouterModule.forChild(routes),RouterOutlet, MatTableModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
