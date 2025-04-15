import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  customer = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  };

  placeOrder() {
    alert('✅ Order placed successfully!\nThank you, ' + this.customer.fullName + '!');
  }
}
