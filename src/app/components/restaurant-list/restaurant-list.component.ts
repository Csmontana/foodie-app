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
      imageUrl: 'https://via.placeholder.com/300x200?text=Pizza'
    },
    {
      name: 'Sushi Platter',
      description: 'Assorted sushi rolls with wasabi and soy sauce',
      price: 18.50,
      imageUrl: 'https://via.placeholder.com/300x200?text=Sushi'
    },
    {
      name: 'Pasta Carbonara',
      description: 'Spaghetti in creamy sauce with pancetta and parmesan',
      price: 14.75,
      imageUrl: 'https://via.placeholder.com/300x200?text=Pasta'
    }
  ];
}
