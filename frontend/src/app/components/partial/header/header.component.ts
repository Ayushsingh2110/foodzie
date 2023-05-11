import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as $ from 'jquery';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount=0;
  constructor(cartService:CartService) {
    cartService.getCartObservable().subscribe((cart) =>{
      this.cartCount = cart.TotalCount;
    })
   }

  ngOnInit(): void {
  }


}

