import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Material} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class Productservice {

  serviceUrl = 'https://northwind.vercel.app/api/products';
  constructor(private http:HttpClient) {
  }
  getAllProducts():Observable<Material[]> {
    return this.http.get<Material[]>(this.serviceUrl);
  }
}
