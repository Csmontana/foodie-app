import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true, // ✅ must be true for standalone setup
  imports: [CommonModule, FormsModule], // ✅ include FormsModule here
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    {
      name: 'Pizza Margherita',
      description: 'Tomato, mozzarella, basil',
      price: 12.99,
      quantity: 1,
      imageUrl: 'https://example.com/pizza.jpg'
    },
    // add more items as needed
  ];

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
