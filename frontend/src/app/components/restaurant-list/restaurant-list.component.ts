import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- this is the fix

@Component({
  selector: 'app-restaurant-list',
  standalone: true, // <--- if you're using standalone components
  imports: [CommonModule], // <--- include CommonModule
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  foodItems = [
    {
      name: 'Pizza Margherita',
      description: 'Classic pizza with tomato, mozzarella, and basil',
      price: 12.99,
      imageUrl: 'https://images.unsplash.com/photo-1601924579440-b2b6a4f259bc?auto=format&fit=crop&w=600&q=80',
      restaurant: 'Luigi’s Pizzeria'
    },
    {
      name: 'Sushi Platter',
      description: 'Assorted sushi rolls with wasabi and soy sauce',
      price: 18.50,
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      restaurant: 'Tokyo Garden'
    },
    {
      name: 'Pasta Carbonara',
      description: 'Spaghetti in creamy sauce with pancetta and parmesan',
      price: 14.75,
      imageUrl: 'https://unsplash.com/photos/pasta-dish-on-white-ceramic-plate--5FECW242og',
      restaurant: 'Casa Roma'
    }
  ];
}  