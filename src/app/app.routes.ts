import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Auth} from './auth/auth';
import { ProductComponent} from './product/product';
import {Authguard} from './services/authguard';
import {Orders} from './orders/orders';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', loadComponent: () => import('./home/home').then(m => m.Home)},
  {path:'auth', loadComponent: () => import('./auth/auth').then(m => m.Auth)},
  // {path:'products', component:ProductComponent, canActivate:[Authguard]},
  // {path:'orders', component:Orders, canActivate:[Authguard]}
  {path:'products', loadComponent: () => import('./product/product').then(m => m.ProductComponent)},
  {path:'orders', loadComponent: ()=> import('./orders/orders').then(m => m.Orders)}
];
