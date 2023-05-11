import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/resources/datatypes/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  Cart!: cart;
  constructor(private cartService: CartService) {
    cartService.getCartObservable().subscribe((cart) =>{
      this.Cart = cart;
    })
   }


  ngOnInit(): void {
  }

  RemoveFromCart(id:string){
    this.cartService.removeFromCart(id);
  }

  ChangeQuantity(id:string, quantity:string){
    this.cartService.ChangeQuantity(id,quantity);
  }
}
