import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  standalone: true,
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  imports: [CommonModule, RouterModule]
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  sortOrder = 'low-to-high';

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: (data) => {
        console.log('Restaurants fetched:', data);
        this.restaurants = this.sortRestaurants(data);
      },
      error: (err) => {
        console.error('Failed to fetch restaurants', err);
      }
    });
  }

  sortRestaurants(data: Restaurant[]): Restaurant[] {
    return this.sortOrder === 'high-to-low'
      ? [...data].sort((a, b) => b.price - a.price)
      : [...data].sort((a, b) => a.price - b.price);
  }
  

  onSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.sortOrder = selectElement.value;
    this.restaurants = this.sortRestaurants(this.restaurants);
  }
}
