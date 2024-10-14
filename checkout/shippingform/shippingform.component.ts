// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { MatDivider } from '@angular/material/divider';
// import { AddresscardComponent } from '../../../../shared/components/addresscard/addresscard.component';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MatFormField, MatLabel } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';

// @Component({
//   selector: 'app-shippingform',
//   standalone: true,
//   imports: [MatDivider,CommonModule,MatFormField,MatLabel,MatInputModule,MatButtonModule,AddresscardComponent,ReactiveFormsModule],
//   templateUrl: './shippingform.component.html',
//   styleUrl: './shippingform.component.scss'
// })
// export class ShippingformComponent {

//   address=[1,1,1]

//   constructor(private formBuilder:FormBuilder){}

//     myform:FormGroup=this.formBuilder.group({
//     FirstName:["",Validators.required],
//     LastName:["",Validators.required],
//     StreetAddress:["",Validators.required],
//     State:["",Validators.required],
//     Zipcode:["",Validators.required],
//     MobileNumber:["",Validators.required]
//   })


//   // constructor(private formBuilder:FormBuilder){}



//   handleCreateorder(item:any){

//   }

//   handlesubmit=()=>{
//     const formValue=this.myform.value
//     console.log("form data", formValue )
//   }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { AddresscardComponent } from '../../../../shared/components/addresscard/addresscard.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { OrderService } from '../../../../../State/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shippingform',
  standalone: true,
  imports: [MatDivider, CommonModule, MatFormField, MatLabel, MatInputModule, MatButtonModule, AddresscardComponent, ReactiveFormsModule],
  templateUrl: './shippingform.component.html',
  styleUrls: ['./shippingform.component.scss']
})
export class ShippingformComponent {

  addressList = [
    { firstName: "John", lastName: "Doe", city: "New York", streetAddress: "123 Main St", state: "NY", zipCode: "10001", mobile: "1234567890", email: "john@example.com" },
    { firstName: "Jane", lastName: "Smith", city: "Los Angeles", streetAddress: "456 Elm St", state: "CA", zipCode: "90001", mobile: "0987654321", email: "jane@example.com" }
  ];

  address = [1, 1, 1];
  myform: FormGroup;
  selectedAddress:any;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService, private route: Router) {
    this.myform = this.formBuilder.group({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      StreetAddress: ["", Validators.required],
      City: ["", Validators.required],
      State: ["", Validators.required],
      Zipcode: ["", Validators.required],
      MobileNumber: ["", Validators.required]
    });
  }

  handleCreateorder(item: any) {
    this.selectedAddress = item;
    this.route.navigate(['/checkout/order-summary/:id']);
  }

  handlesubmit() {
    const formValue = this.myform.value;
    this.orderService.createOrder({formValue})
    console.log("form data", formValue);
  }
}
