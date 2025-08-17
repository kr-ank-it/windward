import { Component } from '@angular/core';
import {Productservice} from '../services/productservice';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {Material} from '../models/Product';

@Component({
  selector: 'app-product',
  imports: [
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardImage,
    MatCardContent
  ],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent {

  products:Material[] = [];
  loading:boolean = true;
  constructor(private productService:Productservice){

  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.products = response;
        this.loading = false;
      },
      error: (err) => {
      console.error('Error fetching products', err);
      this.loading = false;
    }
    })
  }

}
