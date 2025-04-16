import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurants',
    pathMatch: 'full' // ✅ Now defaults to /restaurants instead of /dashboard
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'restaurants',
    component: RestaurantListComponent // ✅ Renders your dynamic, filterable restaurant page
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
