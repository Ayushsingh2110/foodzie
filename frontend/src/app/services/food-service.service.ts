import { Injectable } from '@angular/core';
import { Food } from '../resources/datatypes/food_item';
import { sample_data, sample_tags} from 'src/data';
import { tag } from '../resources/datatypes/tag';
import { HttpClient } from '@angular/common/http';
import { food, food_by_id, food_by_tag, food_search, food_tag } from 'src/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(food);
  }

  getsearchitem(searchitem:string){
    return this.http.get<Food[]>(food_search + searchitem);
  }

  getAlltags():Observable<tag[]>{
    return this.http.get<tag[]>(food_tag);
  }

  getFoodbyTag(tag:string):Observable<Food[]>{
    return this.http.get<Food[]>(food_by_tag + tag);
  }

  getFoodDatabyId(id:string): Observable<Food>{
    return this.http.get<Food>(food_by_id + id);
  }
}
