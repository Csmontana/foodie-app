import { Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // <-- Make sure you have this

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Only one redirect
  { path: 'dashboard', component: DashboardComponent },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', redirectTo: '/dashboard', pathMatch: 'full' }

];
