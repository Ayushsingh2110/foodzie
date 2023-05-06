import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/resources/datatypes/food_item';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  FoodDetails !: Food;
  constructor(activatedRoute:ActivatedRoute, private fooditem:FoodServiceService) {
    activatedRoute.params.subscribe((params) =>{
      if(params.id) this.FoodDetails = fooditem.getFoodDatabyId(params.id) 
    })
   }

  ngOnInit(): void {
  }

}
