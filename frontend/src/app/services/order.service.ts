import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../resources/datatypes/order';
import { ORDER_REGISTER_URL } from 'src/url';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_REGISTER_URL, order);
  }
}
