import { Component } from '@angular/core';
import {Orderservice} from '../services/orderservice';
import {Order} from '../models/Order';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCardTitle} from '@angular/material/card';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [
    MatToolbar,
    MatCardTitle,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    DatePipe
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders {

  orders:Order[] = [];
  displayedColumns: string[] = ['id', 'customerId', 'orderDate', 'shipName'];
  constructor(private orderService:Orderservice) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe({
      next: (response) => {
        console.log(response);
        this.orders = response;
      },
      error: (err) => {
        console.error('Error fetching orders', err);
      }
    });
  }

  showOrderDetails(row:Order) {
    console.log(row);
  }
}
