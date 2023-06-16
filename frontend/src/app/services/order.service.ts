import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../resources/datatypes/order';
import { ORDER_PAYMENT, ORDER_REGISTER_URL } from 'src/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_REGISTER_URL, order);
  }

  getNewOrder():Observable<Order>{
    return this.http.get<Order>(ORDER_PAYMENT);
  }
}
