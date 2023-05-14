import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/resources/datatypes/food_item';
import { tag } from 'src/app/resources/datatypes/tag';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food:Food[] = []
  constructor(private fooditem:FoodServiceService, 
    activatedRoute:ActivatedRoute) {
      let FoodObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchitem){
        FoodObservable = this.fooditem.getsearchitem(params.searchitem);
      }else if(params.tag){
        FoodObservable = this.fooditem.getFoodbyTag(params.tag);
      }else{
        FoodObservable = this.fooditem.getAll();
      }
      FoodObservable.subscribe(result => this.food = result);
      
    })
   
   }

  ngOnInit(): void {

  }

}
