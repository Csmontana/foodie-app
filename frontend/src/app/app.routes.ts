import { Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then((m) => m.DashboardComponent)
  },
  {
    path: 'restaurants',
    component: RestaurantListComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'profile',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
