import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as $ from 'jquery';
import { user } from 'src/app/resources/datatypes/user';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount=0;
  User!:user;
  constructor(cartService:CartService, userService: UserService) {
    cartService.getCartObservable().subscribe((cart) =>{
      this.cartCount = cart.TotalCount;
    })

    userService.userObservable.subscribe((User) => {
      this.User = User;
    })
   }

  ngOnInit(): void {
  }


}

