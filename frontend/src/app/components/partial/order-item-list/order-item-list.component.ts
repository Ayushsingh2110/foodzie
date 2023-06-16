import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/resources/datatypes/order';
import { CheckoutComponent } from '../../pages/checkout/checkout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.css']
})
export class OrderItemListComponent implements OnInit {

  @Input()
  order!:Order;
  
  constructor(private checkOut: CheckoutComponent, private route: Router) { }

  ngOnInit(): void {
  }

  GoToPayment(){
    this.checkOut.createOrder();
    this.route.navigateByUrl('/payment-page');
  }

}
