import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/resources/datatypes/order';
import { CheckoutComponent } from '../../pages/checkout/checkout.component';

@Component({
  selector: 'order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.css']
})
export class OrderItemListComponent implements OnInit {

  @Input()
  order!:Order;
  
  constructor(private checkOut: CheckoutComponent) { }

  ngOnInit(): void {
  }

  GoToPayment(){
    this.checkOut.createOrder();
  }

}
