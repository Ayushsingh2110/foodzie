import { Injectable } from '@angular/core';
import { Food } from '../resources/datatypes/food_item';
import { sample_data, sample_tags} from 'src/data';
import { tag } from '../resources/datatypes/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }

  getAll(): Food[]{
    return sample_data;
  }

  getsearchitem(searchitem:string){
    return this.getAll()
    .filter(food => food.name.toLowerCase()
    .includes(searchitem.toLowerCase()))
  }

  getAlltags():tag[]{
    return sample_tags;
  }

  getFoodbyTag(tag:string):Food[]{
    return this.getAll().filter((food) => food.tags?.includes(tag))
  }

  getFoodDatabyId(id:string): Food{
    return this.getAll().find((food) => food.id == id) ?? new Food();
  }
}
