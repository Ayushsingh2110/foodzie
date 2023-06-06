import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/resources/datatypes/order';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  Order:Order = new Order();
  checkoutForm !: FormGroup;
  constructor(
    cartService: CartService,
    private userService : UserService,
    private formBuilder : FormBuilder,
    private toastrService : ToastrService
  ) { 
    const wholeCart = cartService.getWholeCart();
    this.Order.Items = wholeCart.items;
    this.Order.totalPrice = wholeCart.TotalPrice;
    this.Order.totalCount = wholeCart.TotalCount;
  }

  ngOnInit(): void {
    let {name,address} = this.userService.getCurrentuser()
    this.checkoutForm = this.formBuilder.group({
      name:[name, Validators.required],
      address: [address, Validators.required]
    })
  }

  get cfc(){
    return this.checkoutForm.controls;
  }

  createOrder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please check if all details are filled', 'Invalid input');
      return;
    }

    this.Order.name = this.cfc.name.value;
    this.Order.address = this.cfc.address.value;
  }

}
