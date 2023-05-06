import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/resources/datatypes/food_item';
import { tag } from 'src/app/resources/datatypes/tag';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tag: tag[] = []
  food:Food[] = []
  constructor(private fooditem:FoodServiceService, 
    activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchitem){
        this.food = fooditem.getsearchitem(params.searchitem);
      }else if(params.tag){
        this.food = fooditem.getFoodbyTag(params.tag);
      }else{
        this.food = fooditem.getAll();
      }
    })
   
   }

  ngOnInit(): void {
    this.tag = this.fooditem.getAlltags();
  }

}
