import { Component, OnInit } from '@angular/core';
import { tag } from 'src/app/resources/datatypes/tag';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tag?:tag[] = []
  constructor(private fooditem:FoodServiceService) { }

  ngOnInit(): void {
    this.tag = this.fooditem.getAlltags();
  }

}
