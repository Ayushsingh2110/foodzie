import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/resources/datatypes/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  order:Order = new Order();
  constructor(orderservice:OrderService, router: Router) { 
    orderservice.getNewOrder().subscribe({
      next: (order) => {
        this.order = order;
      },
      error:() => {
        router.navigateByUrl('/checkout');
      }
    })
  }

  ngOnInit(): void {
  }

}
