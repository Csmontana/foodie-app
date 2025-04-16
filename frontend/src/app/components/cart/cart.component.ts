import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    {
      name: 'Pizza Margherita',
      description: 'Tomato, mozzarella, basil',
      price: 12.99,
      quantity: 1
    },
    {
      name: 'Pasta Carbonara',
      description: 'Spaghetti with pancetta and parmesan',
      price: 14.75,
      quantity: 1
    },
    {
      name: 'Sushi Platter',
      description: 'Assorted rolls with soy sauce and wasabi',
      price: 18.50,
      quantity: 1
    }
  ];

  total: number = 0;

  ngOnInit(): void {
    this.updateCartTotal();
  }

  updateCartTotal(): void {
    this.total = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  // ✅ Add this method to remove an item
  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCartTotal();
  }

  // ✅ Add this method to proceed to checkout
  proceedToCheckout(): void {
    alert('🧾 Thank you for your order!');
    this.cartItems = [];
    this.updateCartTotal();
  }
}
