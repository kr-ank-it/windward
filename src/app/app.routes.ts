import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Auth} from './auth/auth';
import { ProductComponent} from './product/product';
import {Authguard} from './services/authguard';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:Home},
  {path:'auth', component:Auth},
  {path:'products', component:ProductComponent, canActivate:[Authguard]}
];
