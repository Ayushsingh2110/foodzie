import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/resources/datatypes/food_item';
import { CartService } from 'src/app/services/cart.service';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  FoodDetails !: Food;
  constructor(activatedRoute:ActivatedRoute, private fooditem:FoodServiceService,
    private cartService: CartService, private router:Router) {
    activatedRoute.params.subscribe((params) =>{
      if(params.id) this.FoodDetails = fooditem.getFoodDatabyId(params.id) 
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.FoodDetails);
    this.router.navigateByUrl('/cart-page');
  }


}
