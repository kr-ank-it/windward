import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class Orderservice {
  serviceUrl = 'https://northwind.vercel.app/api/orders';
  constructor(private http:HttpClient) {
  }
  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.serviceUrl);
  }

}
