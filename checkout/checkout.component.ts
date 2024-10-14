import { Component } from '@angular/core';
import { ShippingformComponent } from './shippingform/shippingform.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ShippingformComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
